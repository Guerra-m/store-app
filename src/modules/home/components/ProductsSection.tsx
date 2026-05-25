import { useEffect, useState } from "react";
import { ProductCard } from "../../products/components/ProductCard";

type Props = {
  products: any[];
};

export const ProductsSection = ({ products }: Props) => {
  const getVisibleItems = () => {
    if (typeof window === "undefined") return 1;

    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 3; // desktop
  };

  const [visibleItems, setVisibleItems] = useState(getVisibleItems());
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(products.length - visibleItems, 0);

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getVisibleItems());
      setIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(interval);
  }, [visibleItems, products.length]);

  return (
    <section className="py-16 px-6 max-w-300">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">
          Productos destacados
        </h2>

        <div className="flex gap-2">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-lg bg-surface-container hover:bg-surface-container-high transition"
          >
            ←
          </button>

          <button
            onClick={next}
            className="w-10 h-10 rounded-lg bg-surface-container hover:bg-surface-container-high transition"
          >
            →
          </button>
        </div>
      </div>

      {/* VIEWPORT */}
      <div className="overflow-hidden w-full">
        
        {/* TRACK */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visibleItems)}%)`,
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