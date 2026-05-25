import { Link } from "react-router-dom";
import { useAuthStore } from "../../../modules/auth/store/auth.store";
import { useAuthModalStore } from "../../../modules/auth/store/auth.modal.store";

export const CartButton = () => {
  const { isAuthenticated } = useAuthStore();
  const { openModal } = useAuthModalStore();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isAuthenticated) {
      e.preventDefault(); // evita navegar a /carrito
      openModal();        // abre modal de login
      return;
    }
  };

  return (
    <Link to="/carrito" onClick={handleClick}>
      <button
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
          2
        </span>
      </button>
    </Link>
  );
};