import { type ClassValue, clsx } from "clsx";
import { Prompt, Playfair_Display } from "next/font/google";
import { twMerge } from "tailwind-merge";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  type: string;
  imagesArray: string[];
  colorArray: string[];
  priceDiscounted: number;
}
interface Params {
  params: {
    id: string;
  };
}

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-logo",
});

const promptFont = Prompt({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-primary",
});

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

function formatPrice(
  price: number | string,
  options: {
    currency?: "ARS";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {},
) {
  const { currency = "ARS", notation = "standard" } = options;
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;
  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 0,
  }).format(numericPrice);
  return formattedPrice.replace(/\s/g, "");
}

export { cn, playfair_display, promptFont, formatPrice };
export type { Product, Params };
