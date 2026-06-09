import { CategoryCard } from "../components/CategoryCard";
import { useCategories } from "../hooks/useCategories";

export const CategoriesPage = () => {
  const { categories, loading, error } = useCategories();

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
      <h1 className="text-2xl font-bold mb-6">
        Categorías
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
        {categories.map((cat, index) => (
          <div
            key={cat.id}
            className={index === 0 ? "row-span-2" : ""}
          >
            <CategoryCard category={cat} />
          </div>
        ))}
      </div>
    </div>
  );
};