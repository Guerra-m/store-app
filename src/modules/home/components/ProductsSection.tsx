import { useEffect, useState } from "react";

import { ProductCard } from "../../products/components/ProductCard";

import type { ProductoRead } from "../../products/types/Producto";

type Props = {
  products: ProductoRead[];
};

export const ProductsSection = ({
  products,
}: Props) => {

  const getVisibleItems = () => {
    if (typeof window === "undefined") return 1;

    if (window.innerWidth < 640) return 1;

    if (window.innerWidth < 1024) return 2;

    return 3;
  };

  const [visibleItems, setVisibleItems] =
    useState(getVisibleItems());

  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(
    products.length - visibleItems,
    0
  );

  const next = () =>
    setIndex((p) =>
      p >= maxIndex ? 0 : p + 1
    );

  const prev = () =>
    setIndex((p) =>
      p <= 0 ? maxIndex : p - 1
    );

  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getVisibleItems());
      setIndex(0);
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  useEffect(() => {
    const interval = setInterval(
      next,
      4000
    );

    return () => clearInterval(interval);
  }, [visibleItems, products.length]);

  return (
    <section className="py-16 px-6 max-w-300 mx-auto">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">
          Productos destacados
        </h2>

        <div className="flex gap-2">

          <button
            onClick={prev}
            className="w-10 h-10 rounded-lg bg-surface-container hover:bg-surface-container-high"
          >
            ←
          </button>

          <button
            onClick={next}
            className="w-10 h-10 rounded-lg bg-surface-container hover:bg-surface-container-high"
          >
            →
          </button>

        </div>

      </div>

      {/* VIEWPORT */}
      <div className="overflow-hidden w-full">

        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${
              index * (100 / visibleItems)
            }%)`,
          }}
        >

          {products.map((product) => (

            <div
              key={product.id}
              className="px-3 shrink-0"
              style={{
                width: `${100 / visibleItems}%`,
              }}
            >
              <ProductCard product={product} />
            </div>

          ))}

        </div>

      </div>

    </section>
  );
};