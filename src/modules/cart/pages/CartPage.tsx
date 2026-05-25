import { CartItem } from "../components/CartItem";
import { CartSummary } from "../components/CartSummary";

const cartItems = [
  {
    id: 1,
    name: "Tomates orgánicos de rama",
    description: "500g | Origen: Huerto Local",
    quantity: 2,
    price: 3.99,
    image:
      "https://imgs.search.brave.com/Eh75c6i8_jHQHPVSUD3Uv_dkQq3dpkCnV88PqrqFgLY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cGhvdG9zLWdyYXR1/aXRlL3Z1ZS1sYXRl/cmFsZS10b21hdGVz/LWphdW5lcy1yb3Vn/ZXNfMTQxNzkzLTEy/MDMzLmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA",
  },
  {
    id: 2,
    name: "Manzanas verdes",
    description: "1kg | Importadas",
    quantity: 1,
    price: 4.5,
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
  },
  {
    id: 3,
    name: "Leche entera",
    description: "1L | Marca local",
    quantity: 3,
    price: 2.2,
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b",
  },
];

export const CartPage = () => {

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (

    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-primary font-store mb-8">
        Tu carrito
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ITEMS */}
        <section className="lg:col-span-2 space-y-4">

          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              description={item.description}
              quantity={item.quantity}
              price={item.price}
              image={item.image}
              onIncrease={() => {}}
              onDecrease={() => {}}
              onDelete={() => {}}
            />
          ))}

        </section>

        {/* SUMMARY COMPONENT */}
        <CartSummary subtotal={subtotal} />

      </div>

    </div>

  );
};