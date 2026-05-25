import { CategoriesSection } from "../components/CategoriesSection";
import { HeroSection } from "../components/HeroSection";
import { ProductsSection } from "../components/ProductsSection";
import { WhyChooseUsSection } from "../components/WhyChooseUsSection";
const mockCategories = [
  {
    id: 1,
    nombre: "Pizzas",
    descripcion: "Las mejores pizzas artesanales",
    imagen:
      "https://images.unsplash.com/photo-1601924582970-9238bcb495d9",
  },
  {
    id: 2,
    nombre: "Hamburguesas",
    descripcion: "Jugosas y con mucho sabor",
    imagen:
      "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    id: 3,
    nombre: "Bebidas",
    descripcion: "Refrescantes y frías",
    imagen:
      "https://images.unsplash.com/photo-1528825871115-3581a5387919",
  },
  {
    id: 4,
    nombre: "Postres",
    descripcion: "Dulces para cerrar el día",
    imagen:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b",
  },
];

const mockProducts = [
  {
    id: 1,
    nombre: "Pizza Napolitana",
    descripcion: "Salsa de tomate, mozzarella y albahaca",
    precio: 8500,
    imagen:
      "https://images.unsplash.com/photo-1601924582970-9238bcb495d9",
  },
  {
    id: 2,
    nombre: "Hamburguesa Doble",
    descripcion: "Carne, cheddar, panceta y salsa BBQ",
    precio: 9200,
    imagen:
      "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    id: 3,
    nombre: "Tacos Mexicanos",
    descripcion: "Tortilla, carne, palta y salsa picante",
    precio: 7800,
    imagen:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85",
  },
  {
    id: 4,
    nombre: "Sushi Mix",
    descripcion: "Rolls variados con salsa de soja",
    precio: 11000,
    imagen:
      "https://images.unsplash.com/photo-1553621042-f6e147245754",
  },
  {
    id: 5,
    nombre: "Ensalada Caesar",
    descripcion: "Lechuga, pollo, croutons y queso",
    precio: 6200,
    imagen:
      "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0",
  },
  {
    id: 6,
    nombre: "Pasta Alfredo",
    descripcion: "Pasta cremosa con pollo y parmesano",
    precio: 8800,
    imagen:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e",
  },
  {
    id: 7,
    nombre: "Hot Dog Especial",
    descripcion: "Salchicha, cheddar y cebolla crispy",
    precio: 5400,
    imagen:
      "https://images.unsplash.com/photo-1619740455993-9e612b1af08a",
  },
  {
    id: 8,
    nombre: "Brownie con Helado",
    descripcion: "Brownie caliente con helado de vainilla",
    precio: 4500,
    imagen:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
  },
  {
    id: 9,
    nombre: "Coca Cola + Combo",
    descripcion: "Bebida fría con snack incluido",
    precio: 3000,
    imagen:
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e",
  },
  {
    id: 10,
    nombre: "Empanadas Argentinas",
    descripcion: "Carne, pollo o jamón y queso",
    precio: 6800,
    imagen:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950",
  },
];
export const HomeStorePage = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* HERO FULL WIDTH */}
      <HeroSection />

      {/* CONTENT CENTERED */}
      <div className="w-full max-w-6xl mx-auto px-6">

        <ProductsSection products={mockProducts} />

        <CategoriesSection categories={mockCategories} />

        <WhyChooseUsSection />

      </div>

    </div>
  );
};