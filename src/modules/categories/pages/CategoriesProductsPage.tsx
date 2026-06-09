import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductsByCategory } from "../../../shared/api/productoCategoria.api";
import { getProductById } from "../../../shared/api/producto.api";

import type { ProductoRead } from "../../products/types/Producto";

import { ProductCard } from "../../products/components/ProductCard";

export const CategoriesProductsPage = () => {
  const { id } = useParams();

  const [products, setProducts] = useState<ProductoRead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);

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
      <h1 className="text-2xl font-bold mb-8">
        Productos
      </h1>

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