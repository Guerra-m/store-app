type Props = {
  category: {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
  };
};

export const CategoryCard = ({ category }: Props) => {

  return (

    <article
  className="
    relative
    overflow-hidden

    rounded-3xl

    h-full

    shadow-warm

    group
    cursor-pointer
  "
>

      {/* BACKGROUND IMAGE */}
      <img
        src={category.imagen}
        alt={category.nombre}
        className="
          absolute
          inset-0

          w-full
          h-full

          object-cover

          transition-transform
          duration-500

          group-hover:scale-110
        "
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-t
          from-black/75
          via-black/30
          to-transparent
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10

          flex
          flex-col
          justify-end

          h-full

          p-6
        "
      >

        <h2
          className="
            text-2xl
            font-bold

            text-white
            font-store
          "
        >
          {category.nombre}
        </h2>

        <p
          className="
            mt-2

            text-sm
            leading-6

            text-white/90
            font-admin
          "
        >
          {category.descripcion}
        </p>
{/* ACTION */}
      <button
        className="
          mt-8

          flex
          items-center
          gap-2

          text-white
          font-admin
          font-semibold

          transition-all

          group-hover:translate-x-1
        "
      >
        Ver todo

        <span className="material-symbols-outlined text-[18px]">
          arrow_forward
        </span>
      </button>
      </div>
      

    </article>
  );
};