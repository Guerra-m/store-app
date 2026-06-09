type Props = {
  onScrollProducts: () => void;
  onGoToCategories: () => void;
};

export const HeroSection = ({
  onScrollProducts,
  onGoToCategories,
}: Props) => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-surface overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-transparent" />

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT */}
        <div className="space-y-6">

          <h1 className="text-4xl md:text-5xl font-bold text-on-surface leading-tight">
            Pedí tu comida favorita <br />
            <span className="text-primary">rápido y fácil</span>
          </h1>

          <p className="text-on-surface-variant text-lg">
            Descubrí platos increíbles, armá tu pedido y disfrutalo en minutos.
          </p>

          <div className="flex gap-4">

            {/* PRODUCTS → SCROLL */}
            <button
              onClick={onScrollProducts}
              className="bg-primary text-on-primary px-6 py-3 rounded-lg shadow-warm hover:opacity-90 transition cursor-pointer"
            >
              Ver productos
            </button>

            {/* CATEGORIES → ROUTE */}
            <button
              onClick={onGoToCategories}
              className="border border-outline px-6 py-3 rounded-lg hover:bg-surface-container transition cursor-pointer"
            >
              Explorar categorías
            </button>

          </div>

        </div>

        {/* IMAGE */}
        <div className="relative flex justify-center">

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Comida hero"
              className="w-full max-w-md rounded-3xl shadow-warm object-cover hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute -bottom-5 -right-5 bg-surface-container shadow-warm rounded-2xl px-4 py-3">
              <p className="text-sm font-semibold">
                🍔 +100 platos disponibles
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};