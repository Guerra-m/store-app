import { CategoryCard } from "../../categories/components/CategoryCard";

type Props = {
  categories: any[];
};

export const CategoriesSection = ({ categories }: Props) => {
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