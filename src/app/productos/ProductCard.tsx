"use client";

import Link from "next/link";
import Image from "next/image";
import { DynamicFavoriteButton } from "./FavoriteButton";
import { Product, formatPrice } from "@/lib/utils";

export default function ProductCard(producto: Product) {
  return (
    <li key={producto.id} className="m-5 mt-0 box-border flex shrink-0 grow-0 basis-full p-5 pt-0">
      <div className="flex flex-col">
        <picture>
          <Link href={`/productos/${producto.id}`}>
            <Image
              src={producto.imagesArray[0]}
              width={1440}
              height={1800}
              alt={producto.name}
              className="m-auto h-auto w-full"
            />
          </Link>
        </picture>
        <div className="relative mt-2 h-20 text-center">
          <Link href={`/productos/${producto.id}`}>
            <p className="text-lg"> {producto.name}</p>
          </Link>

          <p className="font-sans antialiased">
            <strong className=" text-lg ">{`${formatPrice(producto.priceDiscounted)} `}</strong>
            <s>{`${formatPrice(producto.price)}`}</s>
          </p>
          <DynamicFavoriteButton id={producto.id} />
        </div>
      </div>
    </li>
  );
}
