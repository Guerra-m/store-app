import type { Order } from "../types/Order";
import { OrderCard } from "./OrderCard";

type Props = {
  orders: Order[];
  onSelectOrder: (order: Order) => void;
};

export const OrderList = ({ orders, onSelectOrder }: Props) => {
  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div
          key={order.id}
          onClick={() => onSelectOrder(order)}
          className="cursor-pointer"
        >
          <OrderCard order={order} />
        </div>
      ))}
    </div>
  );
};