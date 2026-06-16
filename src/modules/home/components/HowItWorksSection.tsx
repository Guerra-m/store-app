import { Fragment } from "react";

const STEPS = [
  {
    icon: "search",
    title: "Explorá",
    description: "Navegá entre categorías y encontrá lo que más te gusta.",
    color: "bg-secondary-container/40 text-primary",
  },
  {
    icon: "add_shopping_cart",
    title: "Pedí",
    description: "Agregá productos al carrito y confirmá tu pedido en segundos.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: "home",
    title: "Disfrutá",
    description: "Seguí el estado de tu pedido en tiempo real hasta recibirlo.",
    color: "bg-secondary-container/40 text-primary",
  },
];

export const HowItWorksSection = () => (
  <section className="py-20 px-6 bg-surface">
    <div className="max-w-4xl mx-auto text-center mb-12">
      <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
        Simple y rápido
      </span>
      <h2 className="text-3xl font-bold text-on-surface font-store">¿Cómo funciona?</h2>
      <p className="text-on-surface-variant mt-3">Tres pasos y tu comida está en camino</p>
    </div>

    <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-start">
      {STEPS.map((step, i) => (
        <Fragment key={step.title}>
          {/* Card */}
          <div className="flex flex-col items-center text-center px-6 py-2 flex-1">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-warm ${step.color}`}>
              <span
                className="material-symbols-outlined text-[30px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {step.icon}
              </span>
            </div>
            <div className="w-7 h-7 rounded-full bg-primary text-on-primary text-xs font-bold flex items-center justify-center mb-3 shadow-warm">
              {i + 1}
            </div>
            <h3 className="font-bold text-on-surface text-lg mb-1">{step.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">{step.description}</p>
          </div>

          {/* Connector — between steps only, vertically centered at the icon */}
          {i < STEPS.length - 1 && (
            <div className="hidden md:flex items-center shrink-0 mt-8">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <div key={j} className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                ))}
              </div>
              <span className="material-symbols-outlined text-primary/50 text-[20px]">
                chevron_right
              </span>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  </section>
);
