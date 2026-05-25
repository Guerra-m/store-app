export const WhyChooseUsSection = () => {
  return (
    <section className="py-20 px-6 bg-surface-container-low">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            ¿Por qué elegirnos?
          </h2>

          <p className="text-on-surface-variant mb-8">
            Experiencia rápida, simple y deliciosa.
          </p>

          <div className="space-y-4">

            <div className="bg-surface-container rounded-xl p-4 shadow-warm">
              ⚡ Entrega rápida
            </div>

            <div className="bg-surface-container rounded-xl p-4 shadow-warm">
              🍽️ Calidad garantizada
            </div>

            <div className="bg-surface-container rounded-xl p-4 shadow-warm">
              💳 Pago seguro
            </div>

          </div>
        </div>

        <div className="rounded-3xl bg-surface-container h-[400px] flex items-center justify-center shadow-warm">
          Video / Imagen
        </div>

      </div>
    </section>
  );
};