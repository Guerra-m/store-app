import type { Order } from "../types/Order";

type Props = {
  order: Order;
  onClose: () => void;
};

export const OrderModal = ({ order, onClose }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-surface w-full max-w-2xl rounded-2xl p-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            Pedido #{order.id}
          </h2>

          <button onClick={onClose}>✕</button>
        </div>

        {/* INFO */}
        <p className="text-sm mb-4">
          Estado: <b>{order.estado_codigo}</b>
        </p>

        {/* ITEMS */}
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {order.detalles?.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3"
            >
              <img
                src={
                  item.imagen?.trim()
                    ? item.imagen
                    : "https://via.placeholder.com/80"
                }
                className="w-14 h-14 rounded-lg object-cover"
              />

              <div>
                <p className="font-semibold">
                  {item.nombre}
                </p>

                <p className="text-sm text-gray-500">
                  x{item.cantidad}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* TOTAL */}
        <div className="mt-4 flex justify-between font-bold">
          <span>Total</span>
          <span>${order.total}</span>
        </div>

      </div>
    </div>
  );
};