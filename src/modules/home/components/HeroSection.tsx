type Props = {
  onScrollProducts: () => void;
  onGoToCategories: () => void;
  productCount?: number;
};

export const HeroSection = ({ onScrollProducts, onGoToCategories, productCount }: Props) => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-surface overflow-hidden">

      <div className="absolute inset-0 bg-linear-to-br from-primary/15 via-surface to-secondary-container/10" />

      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary-container/20 blur-2xl -translate-x-1/4 translate-y-1/4" />

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-16">

        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              restaurant
            </span>
            FoodStore — Tu tienda de confianza
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-on-surface leading-tight font-store">
            Todo lo que<br />
            <span className="text-primary">más te gusta</span>,<br />
            a la vuelta de la esquina
          </h1>

          <p className="text-on-surface-variant text-lg leading-relaxed">
            Descubrí platos increíbles, armá tu pedido y disfrutalo en minutos. Frescos, rápidos y siempre deliciosos.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onScrollProducts}
              className="flex items-center gap-2 bg-primary text-on-primary px-7 py-3.5 rounded-xl shadow-warm hover:opacity-90 transition-all hover:scale-105 font-semibold cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                shopping_bag
              </span>
              Ver productos
            </button>
            <button
              onClick={onGoToCategories}
              className="flex items-center gap-2 border-2 border-outline px-7 py-3.5 rounded-xl hover:bg-surface-container transition-all hover:scale-105 font-semibold cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">grid_view</span>
              Explorar categorías
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-2">
            {productCount !== undefined && (
              <div>
                <p className="text-2xl font-bold text-primary">{productCount}+</p>
                <p className="text-xs text-on-surface-variant">Productos</p>
              </div>
            )}
            <div>
              <p className="text-2xl font-bold text-primary">10k+</p>
              <p className="text-xs text-on-surface-variant">Pedidos entregados</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">4.9★</p>
              <p className="text-xs text-on-surface-variant">Valoración</p>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative flex justify-center">
          <div className="relative">
            {/* Círculo decorativo detrás */}
            <div className="absolute inset-0 rounded-3xl bg-primary/10 scale-110 rotate-3" />

            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Comida hero"
              className="relative w-full max-w-md rounded-3xl shadow-warm object-cover aspect-square hover:scale-105 transition-transform duration-700"
            />

            {/* Badge flotante superior */}
            <div className="absolute -top-4 -left-4 bg-surface shadow-warm rounded-2xl px-4 py-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                bolt
              </span>
              <p className="text-sm font-semibold">Entrega rápida</p>
            </div>

            {/* Badge flotante inferior */}
            <div className="absolute -bottom-4 -right-4 bg-primary shadow-warm rounded-2xl px-4 py-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-on-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                storefront
              </span>
              <p className="text-sm font-semibold text-on-primary">Siempre disponible</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
