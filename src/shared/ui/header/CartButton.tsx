import { Link } from "react-router-dom";
import { useAuthStore } from "../../../modules/auth/store/auth.store";
import { useAuthModalStore } from "../../../modules/auth/store/auth.modal.store";
import { useCartStore } from "../../../modules/cart/store/cart.store";

export const CartButton = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const openLogin = useAuthModalStore(
  (state) => state.openLogin
);
  const items = useCartStore((state) => state.items);

  const totalItems = items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isAuthenticated) {
      e.preventDefault();
      openLogin("Debes iniciar sesión para ver tu carrito");
    }
  };

  return (
    <Link to="/carrito" onClick={handleClick}>
      <div
        className="
          relative
          flex items-center justify-center
          w-11 h-11
          rounded-xl
          bg-primary
          text-on-primary
          shadow-warm
          hover:opacity-90
          cursor-pointer
          transition-all
        "
      >
        <span className="material-symbols-outlined">
          shopping_cart
        </span>

        {totalItems > 0 && (
          <span
            className="
              absolute -top-1 -right-1
              w-5 h-5
              rounded-full
              bg-error
              text-[10px]
              font-bold
              text-white
              flex items-center justify-center
            "
          >
            {totalItems}
          </span>
        )}
      </div>
    </Link>
  );
};