import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface NewCartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  type: string;
  color: string;
  imagesArray: string[];
  colorArray: string[];
  quantity: number;
  key: string;
  priceDiscounted: number;
}

type CartState = {
  items: NewCartItem[];
  addProduct: (data: NewCartItem) => void;
  removeProduct: (key: string) => void;
  removeAllProducts: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addProduct: (data) =>
        set((state) => {
          return {
            items: [...state.items, { ...data }],
          };
        }),
      removeProduct: (key) =>
        set((state) => {
          return {
            items: state.items.filter((item) => item.key !== key),
          };
        }),
      removeAllProducts: () => set({ items: [] }),
    }),
    { name: "CartStorage", storage: createJSONStorage(() => localStorage) },
  ),
);
