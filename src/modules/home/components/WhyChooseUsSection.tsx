export const WhyChooseUsSection = () => {
  return (
    <section className="py-20 px-6 bg-surface-container-low">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2 className="text-3xl font-bold mb-4">
            ¿Por qué elegirnos?
          </h2>

          <p className="text-on-surface-variant mb-8">
            Nos enfocamos en darte una experiencia rápida, simple y deliciosa.
            Desde que pedís hasta que llega a tu mesa.
          </p>

          <div className="space-y-4">

            <div className="bg-surface-container rounded-xl p-4 shadow-warm flex gap-3">
              <span className="text-xl">⚡</span>
              <div>
                <h3 className="font-semibold">Entrega rápida</h3>
                <p className="text-sm text-on-surface-variant">
                  Tu pedido llega en minutos, siempre fresco.
                </p>
              </div>
            </div>

            <div className="bg-surface-container rounded-xl p-4 shadow-warm flex gap-3">
              <span className="text-xl">🍽️</span>
              <div>
                <h3 className="font-semibold">Calidad garantizada</h3>
                <p className="text-sm text-on-surface-variant">
                  Ingredientes frescos y restaurantes verificados.
                </p>
              </div>
            </div>

            <div className="bg-surface-container rounded-xl p-4 shadow-warm flex gap-3">
              <span className="text-xl">💳</span>
              <div>
                <h3 className="font-semibold">Pago seguro</h3>
                <p className="text-sm text-on-surface-variant">
                  Múltiples métodos de pago protegidos.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          <div className="rounded-3xl overflow-hidden shadow-warm h-[420px]">

            <img
              src="https://images.unsplash.com/photo-1526367790999-0150786686a2"
              alt="Comida delivery"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />

          </div>

          {/* badge flotante */}
          <div className="absolute -bottom-6 -left-6 bg-surface-container rounded-2xl shadow-warm p-4">
            <p className="text-sm font-semibold">
              ⭐ +10.000 pedidos entregados
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};