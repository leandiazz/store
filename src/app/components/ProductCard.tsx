"use client";

import { cn, formatPrice } from "@/lib/utils";
import { Product } from "@/types";
import Link from "next/link";
import { DynamicFavoriteButton } from "./FavoriteButton";
import Image from "next/image";
import { Prompt } from "next/font/google";

const prompt = Prompt({ subsets: ["latin"], weight: ["400"] });

export default function ProductCard({ producto }: { producto: Product }) {
  const discountPrice =
    producto.price - (producto.price / 100) * producto.discount;
  return (
    <li
      key={producto.id}
      className="m-5 box-border flex shrink-0 grow-0 basis-full p-5"
    >
      <div className="flex flex-col">
        <picture>
          <Link href={`/productos/${producto.id.toString()}`}>
            <Image
              src={producto.images}
              width={1440}
              height={1800}
              alt={producto.name}
              className="m-auto h-auto w-full"
            />
          </Link>
        </picture>
        <div className="relative mt-2 text-center">
          <p className="text-lg">
            <Link href={`/productos/${producto.id.toString()}`}>
              {producto.name}
            </Link>
          </p>
          <p className={cn(prompt.className, "font-sans antialiased")}>
            <strong className="text-lg ">{`${formatPrice(discountPrice)} `}</strong>
            <span className="line-through">{`${formatPrice(producto.price)}`}</span>
          </p>
          <DynamicFavoriteButton producto={producto} />
        </div>
      </div>
    </li>
  );
}
