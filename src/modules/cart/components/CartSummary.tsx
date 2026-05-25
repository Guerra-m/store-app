type Props = {
    subtotal: number;
};

export const CartSummary = ({ subtotal }: Props) => {

    return (

        <section
            className="
        rounded-2xl

        border
        border-outline-variant

        bg-surface-container-low

        p-6
        
        shadow-warm
        min-h-150
        h-fit
      "
        >

            <h2 className="text-xl font-bold mb-4">
                Resumen del pedido
            </h2>
            <div className="border-t border-outline-variant my-3" />
            {/* PRICES */}
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

            {/* BUTTON */}
            <button
                className="
          mt-6

          w-full

          bg-primary
          text-on-primary

          py-3

          rounded-xl

          font-semibold

          shadow-warm

          hover:opacity-90
        "
            >
                Finalizar pedido
            </button>

            {/* GREEN INFO BLOCK */}
            <div
                className="
          mt-5

          rounded-xl

          bg-tertiary/10

          border
          border-tertiary/30

          p-3
        "
            >

                <p className="text-xs text-tertiary font-medium">
                    Compra protegida por nuestra garantía de frescura. Si no estás satisfecho, te devolvemos tu dinero.
                </p>

            </div>

        </section>

    );
};