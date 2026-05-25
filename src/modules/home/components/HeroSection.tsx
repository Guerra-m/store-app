import heroImage from "../../../assets/hero.png";

export const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] md:h-[85vh] bg-surface">

      <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-transparent" />

      <div className="relative z-10 max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-on-surface leading-tight">
            Pedí tu comida favorita <br />
            <span className="text-primary">rápido y fácil</span>
          </h1>a
          <p className="text-on-surface-variant text-lg">
            Descubrí platos increíbles, armá tu pedido y disfrutalo en minutos.
          </p>

          <div className="flex gap-4">
            <button className="bg-primary text-on-primary px-6 py-3 rounded-lg shadow-warm hover:opacity-90 transition">
              Ver productos
            </button>

            <button className="border border-outline px-6 py-3 rounded-lg hover:bg-surface-container transition">
              Explorar categorías
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={heroImage}
            className="w-full max-w-65 sm:max-w-sm md:max-w-md drop-shadow-xl mx-auto"
          />
        </div>

      </div>
    </section>
  );
};