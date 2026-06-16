import type { Order } from "../types/Order";

type Props = {
  order: Order;
};

const STEPS = [
  { code: "PENDIENTE",  icon: "receipt_long", label: "Recibido"   },
  { code: "CONFIRMADO", icon: "inventory_2",   label: "Confirmado" },
  { code: "EN_PREP",    icon: "restaurant",    label: "Preparando" },
  { code: "ENTREGADO",  icon: "home",          label: "Entregado"  },
] as const;

const STEP_INDEX: Record<string, number> = {
  PENDIENTE:  0,
  CONFIRMADO: 1,
  EN_PREP:    2,
  ENTREGADO:  3,
};

const FALLBACK_IMG = "https://images.unsplash.com/photo-1542838132-92c53300491e";

export const OrderCard = ({ order }: Props) => {
  const isCancelled = (order.estado_codigo as string).toUpperCase() === "CANCELADO";
  const currentStep = isCancelled ? -1 : (STEP_INDEX[(order.estado_codigo as string).toUpperCase()] ?? 0);

  return (
    <article className="bg-surface-container-low rounded-2xl shadow-warm border border-outline-variant p-5 flex flex-col gap-4 hover:shadow-md transition-shadow">

      {/* HEADER */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-bold text-on-surface text-base font-store">
            Pedido #{order.id}
          </h3>
          <p className="text-xs text-on-surface-variant mt-0.5">
            {new Date(order.created_at).toLocaleDateString("es-AR", {
              day: "2-digit", month: "short", year: "numeric",
              hour: "2-digit", minute: "2-digit",
            })}
          </p>
        </div>

        {isCancelled ? (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-error/10 text-error shrink-0">
            Cancelado
          </span>
        ) : (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary shrink-0">
            {STEPS[currentStep]?.label ?? order.estado_codigo}
          </span>
        )}
      </div>

      {/* STEPPER */}
      {!isCancelled ? (
        <div className="flex items-center justify-between px-1">
          {STEPS.map((step, i) => {
            const done = i <= currentStep;
            const active = i === currentStep;
            const isLast = i === STEPS.length - 1;

            return (
              <div key={step.code} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={`
                      w-11 h-11 rounded-full flex items-center justify-center transition-all
                      ${done
                        ? "bg-primary shadow-warm"
                        : "bg-surface-container border-2 border-outline-variant"
                      }
                      ${active ? "ring-4 ring-primary/15" : ""}
                    `}
                  >
                    <span
                      className={`material-symbols-outlined text-[20px] ${done ? "text-on-primary" : "text-on-surface-variant"}`}
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {step.icon}
                    </span>
                  </div>
                  <span className={`text-[10px] font-medium ${done ? "text-primary" : "text-on-surface-variant"}`}>
                    {step.label}
                  </span>
                </div>

                {/* Connector */}
                {!isLast && (
                  <div className="flex-1 mx-1 mb-4">
                    {i < currentStep ? (
                      <div className="h-0.5 bg-primary/50 rounded-full" />
                    ) : (
                      <div className="h-0.5 flex gap-0.5">
                        {Array.from({ length: 6 }).map((_, j) => (
                          <div key={j} className="flex-1 h-full bg-outline-variant rounded-full" />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex items-center gap-3 bg-error/10 rounded-xl px-4 py-3">
          <span className="material-symbols-outlined text-error text-[22px]">cancel</span>
          <p className="text-sm text-error font-medium">Este pedido fue cancelado</p>
        </div>
      )}

      {/* PRODUCTOS */}
      {order.detalles && order.detalles.length > 0 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {order.detalles.map((item) => (
            <div key={item.id} className="shrink-0 flex flex-col items-center gap-1">
              <img
                src={item.imagen?.trim() ? item.imagen : FALLBACK_IMG}
                alt={item.nombre}
                className="w-14 h-14 rounded-xl object-cover border border-outline-variant"
              />
              <span className="text-[10px] text-on-surface-variant max-w-14 truncate text-center">
                x{item.cantidad} {item.nombre}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* FOOTER */}
      <div className="flex items-center justify-between pt-2 border-t border-outline-variant">
        <div>
          <p className="text-xs text-on-surface-variant">Total</p>
          <p className="text-lg font-bold text-on-surface">${order.total}</p>
        </div>
        <button className="flex items-center gap-1 px-4 py-2 rounded-xl bg-primary text-on-primary text-sm font-semibold hover:opacity-90 transition-opacity">
          Ver detalle
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        </button>
      </div>

    </article>
  );
};
