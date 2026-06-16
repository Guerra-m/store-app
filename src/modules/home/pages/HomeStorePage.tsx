import { useNavigate } from "react-router-dom";

import { HeroSection } from "../components/HeroSection";
import { ProductsSection } from "../components/ProductsSection";
import { NewProductsSection } from "../components/NewProductsSection";
import { CategoriesSection } from "../components/CategoriesSection";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { CtaBannerSection } from "../components/CtaBannerSection";
import { WhyChooseUsSection } from "../components/WhyChooseUsSection";

import { useProducts } from "../../../shared/api/useProducts";
import { useCategories } from "../../categories/hooks/useCategories";
import { useAuthStore } from "../../auth/store/auth.store";
import { useAuthModalStore } from "../../auth/store/auth.modal.store";

export const HomeStorePage = () => {
  const navigate = useNavigate();
  const user = useAuthStore((s) => s.user);
  const openRegister = useAuthModalStore((s) => s.openRegister);

  const {
    data: products = [],
    isLoading: productsLoading,
    error: productsError,
  } = useProducts({ limit: 10, offset: 0 });

  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories();

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  if (productsLoading || categoriesLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-on-surface-variant">Cargando tienda...</p>
      </div>
    );
  }

  if (productsError || categoriesError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-error">Error cargando datos</p>
      </div>
    );
  }

  const rootCategories = categories.filter((c) => c.parent_id === null);

  // Últimos 4 productos (por id descendente, asumiendo que mayor id = más reciente)
  const newest = [...products].sort((a, b) => b.id - a.id).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">

      {/* 1. HERO */}
      <HeroSection
        onScrollProducts={scrollToProducts}
        onGoToCategories={() => navigate("/categorias")}
        productCount={products.length}
      />

      {/* 2. CÓMO FUNCIONA */}
      <HowItWorksSection />

      {/* 3. PRODUCTOS DESTACADOS (carrusel) */}
      <div id="products">
        <ProductsSection products={products} />
      </div>

      {/* 4. NOVEDADES (grilla fija) */}
      <NewProductsSection products={newest} />

      {/* 5. BANNER CTA — solo si no está logueado */}
      {!user && (
        <CtaBannerSection onRegister={() => openRegister()} />
      )}

      {/* 6. CATEGORÍAS DESTACADAS */}
      <CategoriesSection categories={rootCategories} />

      {/* 7. POR QUÉ ELEGIRNOS */}
      <WhyChooseUsSection />

    </div>
  );
};
