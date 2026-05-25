import { CategoryCard } from "../components/CategoryCard";

const categories = [
  {
    id: 1,
    nombre: "Panadería",
    descripcion: "Pan recién horneado todos los días",
    imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    featured: true,
  },
  {
    id: 2,
    nombre: "Frutas y Verduras",
    descripcion: "Productos frescos seleccionados del día",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e",
  },
  {
    id: 3,
    nombre: "Lácteos y Huevos",
    descripcion: "Lácteos frescos y huevos de calidad",
    imagen: "https://images.unsplash.com/photo-1628088062854-d1870b4553da",
  },
  {
    id: 4,
    nombre: "Carnes y Aves",
    descripcion: "Cortes premium y selección de aves",
    imagen: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f",
  },
  {
    id: 5,
    nombre: "Despensa",
    descripcion: "Productos básicos y envasados",
    imagen: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
  },
  {
    id: 6,
    nombre: "Bebidas",
    descripcion: "Gaseosas, jugos y bebidas variadas",
    imagen: "https://images.unsplash.com/photo-1528823872057-9c018a7a7553",
  },
];

export const CategoriesPage = () => {

  return (

    <section
      className="
        space-y-12
        px-10
        py-12
        
      "
    >

      {/* HEADER */}
      <div className="max-w-3xl mx-auto space-y-4 text-center ">

        <h1
          className="
            text-5xl
            font-bold

            text-primary
            font-store
          "
        >
          Explora nuestras categorías
        </h1>

        <p
          className="
            text-lg
            leading-8

            text-on-surface-variant
            font-admin
          "
        >
          Descubre la frescura y calidad en cada rincón
          de nuestra tienda. Desde pan recién horneado
          hasta carnes premium, seleccionamos lo mejor
          para tu mesa todos los días.
        </p>

      </div>

      {/* GRID */}
      <div
  className="
    max-w-7xl
    mx-auto

    grid
    gap-6

    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3

    auto-rows-[200px]
  "
>
{categories.map((category) => (
  <div
    key={category.id}
    className={category.featured ? "sm:row-span-2" : ""}
  >
    <CategoryCard category={category} />
  </div>
))}


      </div>

    </section>
  );
};