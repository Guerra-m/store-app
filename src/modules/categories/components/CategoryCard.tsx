import type { Category } from "../types/Category";

type Props = {
  category: Category;
};

export const CategoryCard = ({ category }: Props) => {

  return (

    <article
      className="
        group

        flex
        flex-col
        justify-between

        rounded-2xl

        border
        border-outline-variant

        bg-surface-container-low

        p-6

        shadow-warm

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-lg
      "
    >

      {/* CONTENT */}
      <div className="space-y-3">

        <h2
          className="
            text-2xl
            font-bold

            text-on-surface
            font-store
          "
        >
          {category.nombre}
        </h2>

        <p
          className="
            text-sm
            leading-6

            text-on-surface-variant
            font-admin
          "
        >
          {category.descripcion}
        </p>

      </div>

      {/* ACTION */}
      <button
        className="
          mt-8

          flex
          items-center
          gap-2

          text-primary
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

    </article>
  );
};