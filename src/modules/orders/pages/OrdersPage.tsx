import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { OrderList } from "../components/OrderList";
import { OrderModal } from "../components/OrderModal";

import { ordersApi } from "../../../shared/api/orders.api";

import type { Order } from "../../orders/types/Order";

import { useAuthStore } from "../../auth/store/auth.store";
import { useOrdersWebSocket } from "../hooks/useOrdersWebSocket";

export const OrdersPage = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  useEffect(() => {
    if (!isAuthenticated || !user) navigate("/");
  }, [isAuthenticated, user, navigate]);

  const load = useCallback(async () => {
    if (!isAuthenticated || !user) return;
    try {
      setLoading(true);
      const list = await ordersApi.getOrders(0, 20);
      setOrders(list);
    } catch (err) {
      console.error("Error cargando pedidos:", err);
    } finally {
      setLoading(false);
    }
  }, [isAuthenticated, user]);

  useEffect(() => { void load(); }, [load]);

  // Al abrir un pedido, busca el detalle completo (con imágenes)
  const handleSelectOrder = async (order: Order) => {
    setLoadingDetail(true);
    try {
      const full = await ordersApi.getOrderById(order.id);
      setSelectedOrder(full);
    } catch {
      setSelectedOrder(order);
    } finally {
      setLoadingDetail(false);
    }
  };

  const activeOrderIds = orders
    .filter((o) => !["ENTREGADO", "CANCELADO"].includes(o.estado_codigo))
    .map((o) => o.id);
  useOrdersWebSocket(activeOrderIds, () => void load());

  if (!isAuthenticated || !user) return null;

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-6">Mis pedidos</h1>
        <p>Cargando pedidos...</p>
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div className="w-full max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-6">Mis pedidos</h1>
        <p>No tenés pedidos todavía.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Mis pedidos</h1>
      <p className="text-sm text-gray-400 mb-8">Seguí el estado de tus pedidos en tiempo real</p>

      <OrderList
        orders={orders}
        onSelectOrder={(order) => void handleSelectOrder(order)}
      />

      {loadingDetail && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-surface rounded-xl px-6 py-4 text-sm font-medium shadow-warm">
            Cargando detalle…
          </div>
        </div>
      )}

      {selectedOrder && !loadingDetail && (
        <OrderModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
};