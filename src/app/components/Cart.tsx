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
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

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
      <SheetContent>
        <SheetHeader>
          <SheetTitle>mi pedido</SheetTitle>
        </SheetHeader>
        {items.length > 0 ? (
          <>
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
            <ScrollArea className="h-[500px] lg:h-[650px]">
              <div className="flex h-full w-full flex-col justify-between">
                <ul className="mt-5 list-none">
                  {items.map((cartItem) => (
                    <li key={cartItem.key} className="mb-5 list-none">
                      <CartProductCard cartItem={cartItem} />
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollArea>
            <div className="mt-5">
              <div className="flex flex-col">
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
                <Button asChild>
                  <Link
                    href="/carrito"
                    className=""
                    aria-label="continuar con la compra"
                  >
                    Iniciar Compra
                  </Link>
                </Button>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div className="relative mb-4 h-60 text-muted-foreground">
              ¡Aún no hay productos en tu pedido!
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
