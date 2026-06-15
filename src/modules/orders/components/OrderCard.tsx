import type { Order } from "../types/Order";

type Props = {
  order: Order;
};

const statusMap: Record<string, { label: string; style: string }> = {
  PENDIENTE: {
    label: "Pendiente",
    style: "bg-yellow-100 text-yellow-700",
  },
  CONFIRMADO: {
    label: "Confirmado",
    style: "bg-blue-100 text-blue-700",
  },
  EN_PREP: {
    label: "En Preparación",
    style: "bg-orange-100 text-orange-700",
  },
  EN_CAMINO: {
    label: "En Camino",
    style: "bg-purple-100 text-purple-700",
  },
  ENTREGADO: {
    label: "Entregado",
    style: "bg-green-100 text-green-700",
  },
  CANCELADO: {
    label: "Cancelado",
    style: "bg-red-100 text-red-700",
  },
};

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1542838132-92c53300491e";

export const OrderCard = ({ order }: Props) => {
  const status = statusMap[order.estado_codigo] ?? {
    label: order.estado_codigo,
    style: "bg-gray-100 text-gray-700",
  };

  return (
    <article className="bg-surface-container rounded-2xl shadow-warm p-5 flex flex-col gap-5 hover:shadow-lg transition">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

        <div>
          <h3 className="font-bold text-on-surface">
            Pedido #{order.id}
          </h3>

          <p className="text-xs text-on-surface-variant">
            {new Date(order.created_at).toLocaleString()}
          </p>
        </div>

        <span className={`px-3 py-1 rounded-full text-xs font-semibold w-fit ${status.style}`}>
          {status.label}
        </span>
      </div>

      {/* ITEMS */}
      <div className="flex gap-3 overflow-x-auto pb-2">

        {order.detalles?.map((item) => {
          const img =
            item.imagen && item.imagen.trim() !== ""
              ? item.imagen
              : FALLBACK_IMG;

          return (
            <div
              key={item.id}
              className="min-w-[130px] bg-surface rounded-xl p-2 flex flex-col gap-2"
            >
              <img
                src={img}
                alt={item.nombre}
                className="w-full h-16 object-cover rounded-lg"
              />

              <p className="text-xs font-semibold text-on-surface">
                {item.nombre}
              </p>

              <p className="text-xs text-on-surface-variant">
                x{item.cantidad}
              </p>
            </div>
          );
        })}

      </div>

      {/* FOOTER */}
      <div className="flex items-center justify-between">

        <div className="flex flex-col">
          <span className="text-xs text-on-surface-variant">
            Total
          </span>

          <span className="text-lg font-bold text-primary">
            ${order.total}
          </span>
        </div>

        <button className="px-4 py-2 rounded-lg bg-primary text-on-primary text-sm hover:opacity-90 transition">
          Ver detalle
        </button>

      </div>
    </article>
  );
};