import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();

  return (

    <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>

      <div
        className="
          flex
          items-center
          justify-center

          w-11
          h-11

          rounded-xl

          bg-primary

          shadow-warm
        "
      >

        <span
          className="
            material-symbols-outlined

            text-on-primary
            text-[24px]
          "
        >
          restaurant
        </span>

      </div>

      <h1
        className="
          text-2xl
          font-bold

          text-primary
          font-store
        "
      >
        FoodStore
      </h1>

    </div>
  );
};