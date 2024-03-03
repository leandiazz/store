"use client";

import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { cn, formatPrice, promptFont } from "@/lib/utils";
import { TrashLogo } from "@/lib/Logos";

export default function CHECKOUT() {
  const { items, removeProduct } = useCart();

  return (
    <div className="flex h-full w-full flex-col">
      <h1 className="w-full text-center text-xl">Tu orden</h1>
      {items.length > 0 ? (
        <ul className="list-none lg:mx-8">
          {items.map((cartItem) => {
            const key = cartItem.key;
            return (
              <li key={cartItem.key} className="mb-5 list-none ">
                <article className="flex h-full flex-row">
                  <Link href={`/productos/${cartItem.id}`}>
                    <div className="min-w-24 max-w-24">
                      <img
                        src={cartItem.images}
                        className="h-auto w-full overflow-clip"
                        alt={cartItem.name}
                      ></img>
                    </div>
                  </Link>
                  {/* DATOS */}
                  <div className="flex w-full flex-col justify-between pl-3">
                    <Link href={`/productos/${cartItem.id}`}>
                      <div>
                        <h3>{cartItem.name}</h3>
                        <p className={cn(promptFont.className, "text-sm")}>
                          {formatPrice(cartItem.price)}
                        </p>
                      </div>
                    </Link>
                    <div className="flex justify-between">
                      <div className="flex flex-col">
                        <p className="text-sm">
                          color: <strong>{cartItem.color}</strong>
                        </p>
                        <p className="text-sm">
                          cantidad: <strong>{cartItem.quantity}</strong>
                        </p>
                      </div>
                      <button onClick={() => removeProduct(key)}>
                        <TrashLogo />
                      </button>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="flex h-full w-full min-w-fit flex-col items-center justify-center">
          <h2 className="whitespace-nowrap">
            ¡Aún no hay productos en tu pedido!
          </h2>
          <Link
            href="/productos"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Nuestros productos
          </Link>
        </div>
      )}
    </div>
  );
}
