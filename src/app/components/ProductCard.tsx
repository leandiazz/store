"use client";

import { formatPrice } from "@/lib/utils";
import { Product } from "@/types";
import Link from "next/link";
import { DynamicFavoriteButton } from "./FavoriteButton";

export default function ProductCard({ producto }: { producto: Product }) {
  const imagenes = producto.images.split("+");
  return (
    <li
      key={producto.id}
      className="m-5 box-border flex shrink-0 grow-0 basis-full p-5"
    >
      <div className="flex flex-col">
        <picture>
          <Link href={`/productos/${producto.id.toString()}`}>
            <img
              src={imagenes[0]}
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
          <strong>{formatPrice(producto.price)}</strong>
          <DynamicFavoriteButton producto={producto} />
        </div>
      </div>
    </li>
  );
}
