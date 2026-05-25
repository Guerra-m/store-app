
export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-surface overflow-hidden">

      {/* BACKGROUND FULL WIDTH */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* TEXT */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-on-surface leading-tight">
            Pedí tu comida favorita <br />
            <span className="text-primary">rápido y fácil</span>
          </h1>

          <p className="text-on-surface-variant text-lg">
            Descubrí platos increíbles, armá tu pedido y disfrutalo en minutos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-primary text-on-primary px-6 py-3 rounded-lg shadow-warm hover:opacity-90 transition">
              Ver productos
            </button>

            <button className="border border-outline px-6 py-3 rounded-lg hover:bg-surface-container transition">
              Explorar categorías
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src="/hero.png"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};