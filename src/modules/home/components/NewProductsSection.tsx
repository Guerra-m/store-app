import { useNavigate } from "react-router-dom";
import { ProductCard } from "../../products/components/ProductCard";
import type { ProductoRead } from "../../products/types/Producto";

type Props = {
  products: ProductoRead[];
};

export const NewProductsSection = ({ products }: Props) => {
  const navigate = useNavigate();

  if (products.length === 0) return null;

  return (
    <section className="py-16 px-6 bg-surface-container-low">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Recién agregados
            </span>
            <h2 className="text-3xl font-bold text-on-surface font-store">Novedades</h2>
          </div>
          <button
            onClick={() => navigate("/categorias")}
            className="flex items-center gap-1 text-primary font-semibold text-sm hover:opacity-75 transition-opacity"
          >
            Ver todos
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};
