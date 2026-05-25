import { useEffect, useState } from "react";
import { CategoryCard } from "../../categories/components/CategoryCard";
import { getRootCategories } from "../../../shared/api/categoria.api";
import type { CategoriaRead } from "../../categories/types/Categories";

export const CategoriesSection = () => {
  const [categories, setCategories] = useState<CategoriaRead[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getRootCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error cargando categorías:", error);
      }
    };

    load();
  }, []);

  return (
    <section className="py-16 px-6 bg-surface-container-low">
      <h2 className="text-2xl font-bold mb-6">
        Categorías destacadas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </section>
  );
};