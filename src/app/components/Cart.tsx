"use client";

import Link from "next/link";
import CartProductCard from "./CartProductCard";
import { useCart } from "@/hooks/useCart";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/utils";
import { CartLogo } from "@/lib/Logos";
import {
  SheetTrigger,
  SheetTitle,
  SheetHeader,
  SheetFooter,
  SheetDescription,
  SheetContent,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function Cart() {
  const { items, removeProduct } = useCart();

  const totalPrice = items.reduce(function (valorAnterior, items) {
    return valorAnterior + items.product.price;
  }, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="carrito de compras"
          className="h-10 max-w-max rounded-md p-2 pb-1 pl-4 pr-4
        pt-1 hover:bg-accent focus-visible:outline-none"
        >
          <CartLogo />
        </button>
      </SheetTrigger>
      <SheetContent className="flex w-fit flex-col">
        <SheetHeader>
          <SheetTitle className="text-start">mi pedido</SheetTitle>
        </SheetHeader>
        {items.length > 0 ? (
          <div className="min-h-full">
            <div className="pt-5">
              <SheetDescription className="flex justify-between">
                <div className="flex">
                  <span className="flex-1 pr-2">Subtotal:</span>
                  <strong>{formatPrice(totalPrice)}</strong>
                </div>
                <div>{`${items.length} ${items.length > 1 ? "productos" : "producto"}`}</div>
              </SheetDescription>
              <Separator className="mt-3" />
            </div>
            <ScrollArea className="h-[70%] bg-red-50  pr-5">
              <div className="flex h-full flex-col justify-between ">
                <ul className="mt-5 list-none ">
                  {items.map((cartItem) => (
                    <li key={cartItem.key} className="mb-5 list-none ">
                      <CartProductCard cartItem={cartItem} />
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollArea>
            <div className="mt-5">
              <div>
                <span className="mb-3 text-sm">
                  Introducí tu CP y calculá el costo de envio.
                </span>
                <div className="flex">
                  <Input type="number" className="mr-5 h-9 w-44" />
                  <Button size={"sm"} variant={"outline"}>
                    calcular
                  </Button>
                </div>
              </div>
              <SheetFooter className="mt-5 flex flex-col items-center">
                <SheetClose asChild>
                  <Button asChild>
                    <Link
                      href="/carrito"
                      className=""
                      aria-label="continuar con la compra"
                    >
                      Iniciar Compra
                    </Link>
                  </Button>
                </SheetClose>
              </SheetFooter>
            </div>
          </div>
        ) : (
          <div className="grid h-full place-items-center">
            <h2>¡Aún no hay productos en tu pedido!</h2>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
