const FEATURES = [
  {
    icon: "bolt",
    title: "Entrega rápida",
    description: "Tu pedido llega en minutos, siempre fresco y a tiempo.",
    bg: "bg-amber-50",
    color: "text-amber-600",
  },
  {
    icon: "verified",
    title: "Calidad garantizada",
    description: "Ingredientes frescos seleccionados con los más altos estándares.",
    bg: "bg-primary/8",
    color: "text-primary",
  },
  {
    icon: "lock",
    title: "Pago seguro",
    description: "Múltiples métodos de pago con protección total en cada transacción.",
    bg: "bg-green-50",
    color: "text-green-700",
  },
  {
    icon: "support_agent",
    title: "Soporte 24/7",
    description: "Estamos disponibles para ayudarte en cualquier momento.",
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
];

export const WhyChooseUsSection = () => (
  <section className="py-20 px-6 bg-surface-container-low">
    <div className="max-w-6xl mx-auto">

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Nuestras ventajas
          </span>
          <h2 className="text-3xl font-bold text-on-surface mb-4 font-store">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-on-surface-variant mb-10 leading-relaxed">
            Nos enfocamos en darte una experiencia rápida, simple y deliciosa,
            desde que pedís hasta que lo disfrutás.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-surface rounded-2xl p-5 shadow-warm flex gap-4 items-start">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${f.bg}`}>
                  <span
                    className={`material-symbols-outlined text-[22px] ${f.color}`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {f.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-on-surface mb-1">{f.title}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/5 rounded-3xl rotate-3 scale-95" />
          <div className="relative rounded-3xl overflow-hidden shadow-warm aspect-4/5">
            <img
              src="https://images.unsplash.com/photo-1526367790999-0150786686a2"
              alt="Comida delivery"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-surface rounded-2xl shadow-warm px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                thumb_up
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-on-surface">+10.000 pedidos</p>
              <p className="text-xs text-on-surface-variant">entregados con éxito</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);
