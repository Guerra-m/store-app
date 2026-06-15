import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductsByCategory } from "../../../shared/api/productoCategoria.api";
import { getProductById } from "../../../shared/api/producto.api";

import type { ProductoRead } from "../../products/types/Producto";

import { ProductCard } from "../../products/components/ProductCard";
import type { CategoriaRead } from "../types/Categories";
import { getCategoryById } from "../../../shared/api/categoria.api";

export const CategoriesProductsPage = () => {
  const { id } = useParams();

  const [products, setProducts] = useState<ProductoRead[]>([]);
  const [category, setCategory] = useState<CategoriaRead | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const categoryData = await getCategoryById(Number(id));
        setCategory(categoryData);

        const relations = await getProductsByCategory(Number(id));

        const productsData = await Promise.all(
          relations.map((relation) =>
            getProductById(relation.producto_id)
          )
        );

        setProducts(productsData);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadProducts();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        Cargando productos...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center py-20">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-3">
        {category?.nombre ?? "Productos"}
      </h1>
      {category?.descripcion && (
        <p className="mt-2 text-on-surface-variant  pb-5">
          {category.descripcion}
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};