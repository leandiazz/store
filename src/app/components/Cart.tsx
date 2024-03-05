"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/hooks/useCart";
import { CartLogo } from "@/lib/Logos";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import CartProductCard from "./CartProductCard";

export default function Cart() {
  const { items } = useCart();

  const totalPrice = items.reduce((total, product) => {
    const productTotal =
      Number(product.quantity) * (product.price - (product.price * product.discount) / 100);
    return total + productTotal;
  }, 0);

  const totalProducts = items.reduce((total, product) => total + Number(product.quantity), 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <CartLogo aria-label="carrito de compras" className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="flex w-[85%] flex-col">
        <ScrollArea className="h-full">
          <SheetTitle className="text-start">
            <span className="text-xl font-normal text-pink-300">Carrito</span>
          </SheetTitle>

          {items.length > 0 ? (
            <SheetHeader>
              <ScrollArea className="mr-4 h-[500px] pr-2 lg:h-[600px]">
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
                <div className=" flex justify-between px-3">
                  <div className="flex">
                    <span className="flex-1 pr-2">Subtotal:</span>
                    <strong>{formatPrice(totalPrice)}</strong>
                  </div>
                  <div>{`${totalProducts} ${totalProducts > 1 ? "productos" : "producto"}`}</div>
                </div>
              </div>
              <p className="px-3 text-center text-sm">
                Los gastos de envío e impuestos serán calculados al finalizar la compra.
              </p>
              <SheetFooter className="flex flex-col items-center">
                <SheetClose asChild>
                  <Button asChild>
                    <Link href="/carrito" className="w-full" aria-label="CHECKOUT">
                      CHECKOUT
                    </Link>
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetHeader>
          ) : (
            <div className="mt-5">
              <p>
                Tu carrito esta vacio, explorar{" "}
                <SheetClose asChild>
                  <Button asChild variant={"link"} className="p-0 text-base">
                    <Link href="/productos">productos</Link>
                  </Button>
                </SheetClose>
              </p>
            </div>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
