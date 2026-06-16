import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryCard } from "../components/CategoryCard";
import { useCategories } from "../hooks/useCategories";
import type { CategoriaRead } from "../types/Categories";

export const CategoriesPage = () => {
  const { categories, loading, error } = useCategories();
  const navigate = useNavigate();

  const [parentStack, setParentStack] = useState<CategoriaRead[]>([]);

  const childrenOf = (parentId: number | null) =>
    categories.filter((c) => c.parent_id === parentId);

  const currentParent = parentStack[parentStack.length - 1] ?? null;
  const currentId = currentParent?.id ?? null;
  const visible = childrenOf(currentId);

  const handleClick = (cat: CategoriaRead) => {
    const hasChildren = childrenOf(cat.id).length > 0;
    if (hasChildren) {
      setParentStack((prev) => [...prev, cat]);
    } else {
      navigate(`/categorias/${cat.id}`);
    }
  };

  const goBack = () => setParentStack((prev) => prev.slice(0, -1));

  if (loading) {
    return (
      <div className="w-full flex justify-center py-20">
        <p className="text-on-surface-variant">Cargando categorías...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex justify-center py-20">
        <p className="text-error">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10">

      {/* Breadcrumb + título */}
      <div className="flex items-center gap-3 mb-6">
        {parentStack.length > 0 && (
          <button
            onClick={goBack}
            className="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
        )}

        <div className="flex items-center gap-2 text-sm text-on-surface-variant">
          <span
            className="cursor-pointer hover:text-primary transition-colors"
            onClick={() => setParentStack([])}
          >
            Categorías
          </span>
          {parentStack.map((p, i) => (
            <span key={p.id} className="flex items-center gap-2">
              <span>/</span>
              <span
                className={`cursor-pointer hover:text-primary transition-colors ${
                  i === parentStack.length - 1 ? "text-on-surface font-semibold" : ""
                }`}
                onClick={() => setParentStack((prev) => prev.slice(0, i + 1))}
              >
                {p.nombre}
              </span>
            </span>
          ))}
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-6">
        {currentParent ? currentParent.nombre : "Categorías"}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">

        {/* Card "Ver todos los productos" del padre cuando estamos en drill-down */}
        {currentParent && (
          <div
            onClick={() => navigate(`/categorias/${currentParent.id}`)}
            className="
              relative overflow-hidden rounded-3xl h-full shadow-warm
              cursor-pointer group
              bg-primary flex flex-col items-center justify-center gap-3
              hover:opacity-90 transition-opacity
            "
          >
            <span className="material-symbols-outlined text-on-primary text-[40px]">
              grid_view
            </span>
            <p className="text-on-primary font-bold text-center px-4">
              Ver todos los productos de {currentParent.nombre}
            </p>
          </div>
        )}

        {visible.map((cat, index) => (
          <div
            key={cat.id}
            className={!currentParent && index === 0 && visible.length > 2 ? "row-span-2" : ""}
          >
            <CategoryCard
              category={cat}
              onClick={() => handleClick(cat)}
            />
          </div>
        ))}

        {visible.length === 0 && (
          <p className="col-span-4 text-on-surface-variant text-center py-10">
            No hay categorías disponibles
          </p>
        )}
      </div>

    </div>
  );
};
