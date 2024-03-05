"use client";

import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import CartProductCard from "./CartProductCard";
import { Separator } from "@/components/ui/separator";

export default function CHECKOUT() {
  const { items } = useCart();

  const totalPrice = items.reduce((total, product) => {
    const productTotal =
      Number(product.quantity) * (product.price - (product.price * product.discount) / 100);
    return total + productTotal;
  }, 0);

  const totalProducts = items.reduce((total, product) => total + Number(product.quantity), 0);

  return (
    <div className="flex h-full w-full flex-col">
      <h1 className="mt-2 w-full text-start text-2xl lg:mt-0">Tu orden</h1>
      {items.length > 0 ? (
        <div>
          <ScrollArea className="mr-4 h-[350px] pr-2 lg:h-[450px]">
            <div className="flex h-full flex-col justify-between ">
              <ul className="mt-5 list-none">
                {items.map((cartItem) => (
                  <li key={cartItem.key} className="mb-5 list-none">
                    <CartProductCard cartItem={cartItem} />
                  </li>
                ))}
              </ul>
            </div>
          </ScrollArea>
          <div className="">
            <Separator className="my-2" />
            <div className="flex justify-between px-3">
              <div className="flex">
                <span className="flex-1 pr-2">Subtotal:</span>
                <strong>{formatPrice(totalPrice)}</strong>
              </div>
              <div>{`${totalProducts} ${totalProducts > 1 ? "productos" : "producto"}`}</div>
            </div>
          </div>
          <p className="text-center text-sm">
            Los gastos de envío e impuestos serán calculados al finalizar la compra.
          </p>
        </div>
      ) : (
        <div className="flex h-full w-full min-w-fit flex-col items-center justify-center">
          <h2 className="whitespace-nowrap">¡Aún no hay productos en tu pedido!</h2>
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
