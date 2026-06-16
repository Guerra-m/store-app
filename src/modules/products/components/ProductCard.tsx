import { useAuthStore } from "../../auth/store/auth.store";
import { useCartStore } from "../../cart/store/cart.store";
import { useAuthModalStore } from "../../auth/store/auth.modal.store";
import { useToastStore } from "../../../shared/store/toast.store";
import type { ProductoRead } from "../types/Producto";

type Props = {
  product: ProductoRead;
};

export const ProductCard = ({ product }: Props) => {
  const user = useAuthStore((state) => state.user);
  const addItem = useCartStore((state) => state.addItem);
  const openLogin = useAuthModalStore((state) => state.openLogin);
  const addToast = useToastStore((s) => s.addToast);

  const handleAddToCart = () => {
    if (!user) {
      openLogin("Debes iniciar sesión para agregar productos");
      return;
    }
    addItem(product);
    addToast(`${product.nombre} agregado al carrito`, "success");
  };

  const image =
    Array.isArray(product.imagenes_url) && product.imagenes_url.length > 0
      ? product.imagenes_url[0]
      : "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400";

  return (
    <article className="bg-surface-container rounded-2xl overflow-hidden shadow-warm hover:shadow-lg transition flex flex-col group w-full">
      <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden">
        <img
          src={image}
          alt={product.nombre}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

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