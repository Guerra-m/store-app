import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { searchProducts } from "../../../shared/api/producto.api";
import { ProductCard } from "../../products/components/ProductCard";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["search", query],
    queryFn: () => searchProducts({ texto: query }),
    enabled: query.trim().length > 0,
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-1">
        Resultados para "{query}"
      </h1>

      {isLoading && (
        <p className="text-on-surface-variant mt-6">Buscando...</p>
      )}

      {!isLoading && query.trim() && products.length === 0 && (
        <p className="text-on-surface-variant mt-6">
          No se encontraron productos para "{query}".
        </p>
      )}

      {!isLoading && products.length > 0 && (
        <p className="text-sm text-on-surface-variant mb-6">
          {products.length} producto{products.length !== 1 ? "s" : ""} encontrado{products.length !== 1 ? "s" : ""}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
