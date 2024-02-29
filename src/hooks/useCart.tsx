import { SelectedProductData } from "@/app/components/SelectForm";
import { Product } from "@/lib/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type CartItem = {
  product: Product;
  data: SelectedProductData;
  key: number;
};

type CartState = {
  items: CartItem[];
  addProduct: (product: Product, data: SelectedProductData) => void;
  removeProduct: (key: number) => void;
  removeAllProducts: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addProduct: (product, data) =>
        set((state) => {
          return {
            items: [
              ...state.items,
              { product, data, key: state.items.length + 1 },
            ],
          };
        }),
      removeProduct: (productKey) =>
        set((state) => {
          return {
            items: state.items.filter((item) => item.key !== productKey),
          };
        }),
      removeAllProducts: () => set({ items: [] }),
    }),
    { name: "CartStorage", storage: createJSONStorage(() => localStorage) },
  ),
);
