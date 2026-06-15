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

  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedOrder, setSelectedOrder] =
    useState<Order | null>(null);

  // PROTECCIÓN
  useEffect(() => {
    if (!isAuthenticated || !user) {
      navigate("/");
    }
  }, [isAuthenticated, user, navigate]);

  // CARGA PEDIDOS
  const load = useCallback(async () => {
    if (!isAuthenticated || !user) return;
    try {
      setLoading(true);
      const basicOrders = await ordersApi.getOrders(0, 20);
      const fullOrders = await Promise.all(
        basicOrders.map((order) => ordersApi.getOrderById(order.id))
      );
      setOrders(fullOrders);
    } catch (err) {
      console.error("Error cargando pedidos:", err);
    } finally {
      setLoading(false);
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    void load();
  }, [load]);

  // WebSocket: escucha todos los pedidos activos en tiempo real
  const activeOrderIds = orders
    .filter((o) => !["ENTREGADO", "CANCELADO"].includes(o.estado_codigo))
    .map((o) => o.id);
  useOrdersWebSocket(activeOrderIds, () => void load());

  // EVITA RENDER DURANTE REDIRECT
  if (!isAuthenticated || !user) {
    return null;
  }

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-6">
          Mis pedidos
        </h1>

        <p>Cargando pedidos...</p>
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div className="w-full max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-6">
          Mis pedidos
        </h1>

        <p>No tenés pedidos todavía.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10">

      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-6">
        Mis pedidos
      </h1>

      {/* LISTA */}
      <OrderList
        orders={orders}
        onSelectOrder={(order) => setSelectedOrder(order)}
      />

      {/* MODAL */}
      {selectedOrder && (
        <OrderModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}

    </div>
  );
};