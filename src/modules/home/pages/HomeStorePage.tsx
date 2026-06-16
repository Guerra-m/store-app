import { useNavigate } from "react-router-dom";

import { CategoriesSection } from "../components/CategoriesSection";
import { HeroSection } from "../components/HeroSection";
import { ProductsSection } from "../components/ProductsSection";
import { WhyChooseUsSection } from "../components/WhyChooseUsSection";

import { useProducts } from "../../../shared/api/useProducts";
import { useCategories } from "../../categories/hooks/useCategories";

export const HomeStorePage = () => {
  const navigate = useNavigate();

  // PRODUCTOS
  const {
    data: products = [],
    isLoading: productsLoading,
    error: productsError,
  } = useProducts({
    limit: 10,
    offset: 0,
  });

  // CATEGORÍAS
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories();

  const scrollToProducts = () => {
    const el = document.getElementById("products");

    el?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // LOADING GLOBAL
  if (productsLoading || categoriesLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">
          Cargando tienda...
        </p>
      </div>
    );
  }

  // ERROR GLOBAL
  if (productsError || categoriesError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">
          Error cargando datos
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">

      <HeroSection
        onScrollProducts={scrollToProducts}
        onGoToCategories={() =>
          navigate("/categorias")
        }
      />

      <div className="w-full max-w-6xl mx-auto px-6">

        {/* PRODUCTOS */}
        <div id="products">
          <ProductsSection products={products} />
        </div>

        {/* CATEGORÍAS — solo raíces para no mostrar subcategorías huérfanas */}
        <CategoriesSection categories={categories.filter((c) => c.parent_id === null)} />

        {/* INFO */}
        <WhyChooseUsSection />

      </div>

    </div>
  );
};