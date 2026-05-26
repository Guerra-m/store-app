import { useState } from "react";
import { useCartStore } from "../../../modules/cart/store/cart.store";
import { useAuthStore } from "../../../modules/auth/store/auth.store";
import { useAuthModalStore } from "../../../modules/auth/store/auth.modal.store";
import { ordersApi } from "../../../shared/api/orders.api";

type Props = {
    subtotal: number;
};

export const CartSummary = ({ subtotal }: Props) => {
    const items = useCartStore((state) => state.items);
    const clearCart = useCartStore((state) => state.clearCart);

    const user = useAuthStore((state) => state.user);
    const openModal = useAuthModalStore((state) => state.openModal);

    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        console.log("CLICK CHECKOUT");

        if (!user) {
            openModal("Debes iniciar sesión para finalizar el pedido");
            return;
        }

        if (items.length === 0) {
            alert("El carrito está vacío");
            return;
        }

        setLoading(true);

        try {
            const payload = {
                forma_pago_codigo: "EFECTIVO", 
                direccion_id: null,
                descuento: 0,
                costo_envio: 50,
                notas: "",

                items: items.map((item) => ({
                    producto_id: item.product.id,
                    cantidad: item.quantity,
                    precio_unitario: item.product.precio_base,
                })),
            };

            console.log("PAYLOAD:", payload);

            await ordersApi.createOrder(payload);

            clearCart();

            alert("Pedido creado con éxito");
        } catch (err) {
            console.error("ERROR CHECKOUT:", err);
            alert("Error al crear pedido");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="
      rounded-2xl border border-outline-variant
      bg-surface-container-low p-6 shadow-warm
      min-h-150 h-fit
    ">

            <h2 className="text-xl font-bold mb-4">
                Resumen del pedido
            </h2>

            <div className="border-t border-outline-variant my-3" />

            <div className="space-y-2 text-sm">
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
                <p>Gastos de envío: GRATIS</p>

                <div className="border-t border-outline-variant my-3" />

                <div className="mt-2">
                    <p className="text-xs text-on-surface-variant">
                        Total a pagar
                    </p>

                    <p className="text-4xl font-bold text-primary">
                        ${subtotal.toFixed(2)}
                    </p>
                </div>
            </div>

            {/* BOTÓN */}
            <button
                onClick={handleCheckout}
                disabled={loading || items.length === 0}
                className="
          mt-6 w-full bg-primary text-on-primary
          py-3 rounded-xl font-semibold shadow-warm
          hover:opacity-90 disabled:opacity-50
        "
            >
                {loading ? "Procesando..." : "Finalizar pedido"}
            </button>

            {/* INFO */}
            <div className="
        mt-5 rounded-xl bg-tertiary/10
        border border-tertiary/30 p-3
      ">
                <p className="text-xs text-tertiary font-medium">
                    Compra protegida por nuestra garantía de frescura. Si no estás satisfecho, te devolvemos tu dinero.
                </p>
            </div>

        </section>
    );
};