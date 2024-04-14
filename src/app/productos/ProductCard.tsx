"use client";

import Link from "next/link";
import Image from "next/image";
import { DynamicFavoriteButton } from "./FavoriteButton";
import { Product, formatPrice } from "@/lib/utils";

export default function ProductCard(producto: Product) {
  return (
    <article
      key={producto.id}
      className="m-5 mt-0 box-border flex shrink-0 grow-0 basis-full flex-col p-5 pt-0"
    >
      <header>
        <Link href={`/productos/${producto.id}`}>
          <Image
            src={producto.imagesArray[0]}
            width={1440}
            height={1800}
            alt={producto.name}
            className="m-auto h-auto w-full object-cover"
          />
        </Link>
      </header>
      <footer className="relative mt-2 h-20 text-center">
        <h1 className="text-xl product-title">
          <Link href={`/productos/${producto.id}`}>{producto.name}</Link>
        </h1>

        <p className="font-sans antialiased">
          <strong className="text-lg">{`${formatPrice(producto.priceDiscounted)} `}</strong>
          {producto.discount ? <s className="text-sm">{`${formatPrice(producto.price)}`}</s> : null}
        </p>
        <DynamicFavoriteButton id={producto.id} />
      </footer>
    </article>
  );
}
