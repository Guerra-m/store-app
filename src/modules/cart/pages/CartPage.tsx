import { useCartStore } from "../../../modules/cart/store/cart.store";
import { CartItem } from "../components/CartItem";
import { CartSummary } from "../components/CartSummary";
import { useUnidades } from "../../../shared/hooks/useUnidades";

export const CartPage = () => {
  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const decreaseItem = useCartStore((state) => state.decreaseItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const { data: unidades = [] } = useUnidades();

  const getSimboloUnidad = (id?: number | null) =>
    id ? (unidades.find((u) => u.id === id)?.simbolo ?? null) : null;

  if (!items.length) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-primary mb-8">
          Tu carrito
        </h1>

        <p className="text-on-surface-variant">
          No tenés productos en el carrito.
        </p>
      </div>
    );
  }

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.precio_base * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-primary mb-8">
        Tu carrito
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ITEMS */}
        <section className="lg:col-span-2 space-y-4">

          {items.map((item, index) => (
            <CartItem
              key={item.product.id ?? index}
              name={item.product.nombre}
              description={item.product.descripcion ?? ""}
              quantity={item.quantity}
              price={item.product.precio_base}
              image={
                item.product.imagenes_url?.[0] ||
                "https://images.unsplash.com/photo-1542838132-92c53300491e"
              }
              unidadSimbolo={getSimboloUnidad(item.product.unidad_venta_id)}
              onIncrease={() => addItem(item.product)}
              onDecrease={() => decreaseItem(item.product.id)}
              onDelete={() => removeItem(item.product.id)}
            />
          ))}

        </section>

        {/* SUMMARY */}
        <CartSummary subtotal={subtotal} />

      </div>
    </div>
  );
};