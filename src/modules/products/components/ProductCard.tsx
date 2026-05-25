import type { ProductoRead } from "../types/Producto";

type Props = {
  product: ProductoRead;
};

export const ProductCard = ({ product }: Props) => {
  const handleAddToCart = () => {
    console.log("Agregar producto:", product.id);
  };

  const image =
    product.imagenes_url && product.imagenes_url.trim() !== ""
      ? product.imagenes_url
      : "https://via.placeholder.com/300";

  return (
    <article className="bg-surface-container rounded-2xl overflow-hidden shadow-warm hover:shadow-lg transition flex flex-col group w-75">

      {/* IMAGE */}
      <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden">
        <img
          src={image}
          alt={product.nombre}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <h3 className="text-sm sm:text-base md:text-lg font-bold text-on-surface">
          {product.nombre}
        </h3>

        <p className="text-xs sm:text-sm text-on-surface-variant mt-1 flex-1 line-clamp-2">
          {product.descripcion}
        </p>

        <div className="flex items-center justify-between mt-3 sm:mt-4">
          <span className="text-primary font-bold text-base sm:text-lg">
            ${product.precio_base}
          </span>

          <button
            onClick={handleAddToCart}
            className="bg-primary text-on-primary px-3 py-1.5 rounded-lg text-xs sm:text-sm hover:opacity-90 transition cursor-pointer"
          >
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
};