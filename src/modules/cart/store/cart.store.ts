import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { ProductoRead } from "../../products/types/Producto";

type CartItem = {
  product: ProductoRead;
  quantity: number;
};

type CartStore = {
  items: CartItem[];

  addItem: (product: ProductoRead) => void;
  removeItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  clearCart: () => void;

  getTotal: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        const items = get().items;

        const exists = items.find(
          (i) => i.product.id === product.id
        );

        if (exists) {
          set({
            items: items.map((i) =>
              i.product.id === product.id
                ? {
                    ...i,
                    quantity: i.quantity + 1,
                  }
                : i
            ),
          });
        } else {
          set({
            items: [
              ...items,
              {
                product,
                quantity: 1,
              },
            ],
          });
        }
      },

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter(
            (i) => i.product.id !== id
          ),
        })),

      decreaseItem: (id) =>
        set((state) => ({
          items: state.items
            .map((i) =>
              i.product.id === id
                ? {
                    ...i,
                    quantity: i.quantity - 1,
                  }
                : i
            )
            .filter((i) => i.quantity > 0),
        })),

      clearCart: () =>
        set({
          items: [],
        }),

      getTotal: () => {
        return get().items.reduce(
          (acc, item) =>
            acc +
            item.product.precio_base *
              item.quantity,
          0
        );
      },
    }),
    {
      name: "store-cart-storage",
    }
  )
);