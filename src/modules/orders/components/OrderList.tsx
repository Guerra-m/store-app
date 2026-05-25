import type { Order } from "../types/Order";
import { OrderCard } from "./OrderCard";

type Props = {
  orders: Order[];
};

export const OrderList = ({ orders }: Props) => {
  if (!orders.length) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold text-on-surface">
          No tenés pedidos todavía
        </h2>

        <p className="text-sm text-on-surface-variant mt-2">
          Cuando hagas tu primer pedido lo vas a ver acá
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};