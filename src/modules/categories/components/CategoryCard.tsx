import type { CategoriaRead } from "../types/Categories";

type Props = {
  category: CategoriaRead;
};

const FALLBACK_IMAGE =
  "";

export const CategoryCard = ({ category }: Props) => {
  const image = category.imagen_url || FALLBACK_IMAGE;

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
      <img
        src={image}
        alt={category.nombre}
        className="
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-500
          group-hover:scale-110
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

      <div className="relative z-10 flex flex-col justify-end h-full p-6">
        <h2 className="text-2xl font-bold text-white">
          {category.nombre}
        </h2>

        <p className="mt-2 text-sm leading-6 text-white/90">
          {category.descripcion}
        </p>

        <button className="mt-8 flex items-center gap-2 text-white font-semibold transition-all group-hover:translate-x-1 cursor-pointer">
          Ver todo
          <span className="material-symbols-outlined text-[18px]">
            arrow_forward
          </span>
        </button>
      </div>
    </article>
  );
};