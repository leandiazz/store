"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { DynamicFavoriteButton } from "./FavoriteButton";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({ producto }: { producto: Product }) {
  const discountPrice = producto.price - (producto.price / 100) * producto.discount;
  return (
    <li key={producto.id} className="m-5 box-border flex shrink-0 grow-0 basis-full p-5">
      <div className="flex flex-col">
        <picture>
          <Link href={`/productos/${producto.id.toString()}`}>
            <Image
              src={producto.imagesArray[0]}
              width={1440}
              height={1800}
              alt={producto.name}
              className="m-auto h-auto w-full"
            />
          </Link>
        </picture>
        <div className="relative mt-2 text-center">
          <Link href={`/productos/${producto.id.toString()}`}>
            <p className="text-lg"> {producto.name}</p>
          </Link>

          <p className="font-sans antialiased">
            <strong className="text-lg ">{`${formatPrice(discountPrice)} `}</strong>
            <s>{`${formatPrice(producto.price)}`}</s>
          </p>
          <DynamicFavoriteButton id={producto.id} />
        </div>
      </div>
    </li>
  );
}
