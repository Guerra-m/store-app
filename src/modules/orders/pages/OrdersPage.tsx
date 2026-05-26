import { useEffect, useState } from "react";
import { OrderList } from "../components/OrderList";
import { OrderModal } from "../components/OrderModal";
import { ordersApi } from "../../../shared/api/orders.api";
import type { Order } from "../../orders/types/Order";

export const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        const basicOrders = await ordersApi.getOrders(0, 20);

        const fullOrders = await Promise.all(
          basicOrders.map(async (order) => {
            return await ordersApi.getOrderById(order.id);
          })
        );

        setOrders(fullOrders);
      } catch (err) {
        console.error("Error cargando pedidos:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

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