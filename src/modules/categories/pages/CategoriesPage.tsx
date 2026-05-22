import { CategoryCard } from "../components/CategoryCard";

const categories = [
  {
    id: 1,
    nombre: "Panadería",
    descripcion: "Pan recién horneado todos los días",
  },
  {
    id: 2,
    nombre: "Carnes",
    descripcion: "Cortes premium seleccionados",
  },
  {
    id: 3,
    nombre: "Verduras",
    descripcion: "Productos frescos del día",
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
          grid
          gap-6

          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          
        "
      >

        {categories.map((category) => (

          <CategoryCard
            key={category.id}
            category={category}
          />

        ))}

      </div>

    </section>
  );
};