import { useEffect, useState } from "react";
import { CartItem } from "../components/CartItem";
import { CartSummary } from "../components/CartSummary";
import { ordersApi } from "../../../shared/api/orders.api";
import type { Order, OrderStatus } from "../../orders/types/Order";

export const CartPage = () => {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const orders = await ordersApi.getOrders(0, 20);

        const active = orders.find(
          (o) => o.estado_codigo === "PENDIENTE" as OrderStatus
        );

        if (!active) return;

        const fullOrder = await ordersApi.getOrderById(active.id);

        setOrder(fullOrder);
      } catch (err) {
        console.error(err);
      }
    };

    load();
  }, []);

  if (!order) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-primary mb-8">
          Tu carrito
        </h1>

        <p className="text-on-surface-variant">
          No tenés productos en el carrito.
        </p>
      </div>
    );
  }

  const items = order.detalles ?? [];

  const subtotal = items.reduce(
    (acc: number, item: any) =>
      acc + (item.precio_unitario ?? 0) * (item.cantidad ?? 0),
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold text-primary mb-8">
        Tu carrito
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ITEMS */}
        <section className="lg:col-span-2 space-y-4">

          {items.map((item: any, index: number) => (
            <CartItem
              key={item.id ?? `${item.producto?.nombre}-${index}`}

              name={item.producto?.nombre ?? "Producto"}
              description={item.producto?.descripcion ?? ""}
              quantity={item.cantidad ?? 0}
              price={item.precio_unitario ?? 0}
              image={
                item.producto?.imagenes_url ||
                "https://images.unsplash.com/photo-1542838132-92c53300491e"
              }

              onIncrease={() => {}}
              onDecrease={() => {}}
              onDelete={() => {}}
            />
          ))}

        </section>

        {/* SUMMARY */}
        <CartSummary subtotal={subtotal} />

      </div>
    </div>
  );
};