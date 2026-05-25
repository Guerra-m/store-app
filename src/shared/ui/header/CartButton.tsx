import { Link } from "react-router-dom";

export const CartButton = () => {

  return (

    <Link to="/carrito">

      <button
        className="
          relative

          flex
          items-center
          justify-center

          w-11
          h-11

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

        {/* BADGE */}
        <span
          className="
            absolute
            -top-1
            -right-1

            flex
            items-center
            justify-center

            w-5
            h-5

            rounded-full

            bg-error

            text-[10px]
            font-bold
            text-white
          "
        >
          2
        </span>

      </button>

    </Link>

  );
};