import { useState } from "react";
import { useCartStore } from "../../../modules/cart/store/cart.store";
import { useAuthStore } from "../../../modules/auth/store/auth.store";
import { useAuthModalStore } from "../../../modules/auth/store/auth.modal.store";
import { ordersApi } from "../../../shared/api/orders.api";
import { pagoApi } from "../../../shared/api/pago.api";

type FormaPago = "EFECTIVO" | "MERCADOPAGO";

type Props = {
  subtotal: number;
};

export const CartSummary = ({ subtotal }: Props) => {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  const user = useAuthStore((state) => state.user);
  const openModal = useAuthModalStore((state) => state.openModal);

  const [loading, setLoading] = useState(false);
  const [formaPago, setFormaPago] = useState<FormaPago>("EFECTIVO");

  const handleCheckout = async () => {
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
        forma_pago_codigo: formaPago,
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

      const pedido = await ordersApi.createOrder(payload);

      if (formaPago === "MERCADOPAGO") {
        // Crear registro de pago en BD
        await pagoApi.crearPago(pedido.id, subtotal + 50);
        // Generar preferencia MP y redirigir al checkout
        const { init_point } = await pagoApi.crearPreferencia(pedido.id);
        clearCart();
        window.open(init_point, '_blank');
      } else {
        clearCart();
        alert("Pedido creado con éxito");
      }
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
        <p>Gastos de envío: $50.00</p>

        <div className="border-t border-outline-variant my-3" />

        <div className="mt-2">
          <p className="text-xs text-on-surface-variant">Total a pagar</p>
          <p className="text-4xl font-bold text-primary">
            ${(subtotal + 50).toFixed(2)}
          </p>
        </div>
      </div>

      {/* FORMA DE PAGO */}
      <div className="mt-5 space-y-2">
        <p className="text-sm font-semibold text-on-surface">Forma de pago</p>

        <label className={`
          flex items-center gap-3 rounded-xl border p-3 cursor-pointer transition-colors
          ${formaPago === "EFECTIVO"
            ? "border-primary bg-primary/5"
            : "border-outline-variant hover:bg-surface-container"}
        `}>
          <input
            type="radio"
            name="formaPago"
            value="EFECTIVO"
            checked={formaPago === "EFECTIVO"}
            onChange={() => setFormaPago("EFECTIVO")}
            className="accent-primary"
          />
          <span className="text-sm font-medium">Efectivo</span>
        </label>

        <label className={`
          flex items-center gap-3 rounded-xl border p-3 cursor-pointer transition-colors
          ${formaPago === "MERCADOPAGO"
            ? "border-primary bg-primary/5"
            : "border-outline-variant hover:bg-surface-container"}
        `}>
          <input
            type="radio"
            name="formaPago"
            value="MERCADOPAGO"
            checked={formaPago === "MERCADOPAGO"}
            onChange={() => setFormaPago("MERCADOPAGO")}
            className="accent-primary"
          />
          <div>
            <span className="text-sm font-medium">MercadoPago</span>
            <p className="text-xs text-on-surface-variant">
              Serás redirigido al checkout de MP
            </p>
          </div>
        </label>

        <label className="flex items-center gap-3 rounded-xl border border-outline-variant p-3 opacity-50 cursor-not-allowed">
          <input
            type="radio"
            name="formaPago"
            value="TRANSFERENCIA"
            disabled
            className="accent-primary"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Transferencia bancaria</span>
              <span className="text-[10px] font-semibold bg-outline-variant text-on-surface-variant px-2 py-0.5 rounded-full">
                Próximamente
              </span>
            </div>
            <p className="text-xs text-on-surface-variant">
              CBU / CVU — transferí desde tu banco
            </p>
          </div>
        </label>
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
        {loading
          ? "Procesando..."
          : formaPago === "MERCADOPAGO"
            ? "Pagar con MercadoPago"
            : "Finalizar pedido"}
      </button>

      <div className="mt-5 rounded-xl bg-tertiary/10 border border-tertiary/30 p-3">
        <p className="text-xs text-tertiary font-medium">
          Compra protegida por nuestra garantía de frescura. Si no estás satisfecho, te devolvemos tu dinero.
        </p>
      </div>
    </section>
  );
};
