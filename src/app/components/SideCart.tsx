"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
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
import Link from "next/link";
import CartList from "./CartList";

export default function SideCart() {
  const { items } = useCart();

  return (
    <Sheet>
      <SheetTrigger className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none  disabled:opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path d="M252.309-100.001q-30.308 0-51.308-21t-21-51.308v-455.382q0-30.308 21-51.308t51.308-21h77.692v-10q0-62.154 43.923-106.077Q417.846-859.999 480-859.999q62.154 0 106.076 43.923 43.923 43.923 43.923 106.077v10h77.692q30.308 0 51.308 21t21 51.308v455.382q0 30.308-21 51.308t-51.308 21H252.309Zm0-59.999h455.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-455.382q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846h-77.692v90.001q0 12.769-8.615 21.384T600-520q-12.769 0-21.384-8.615t-8.615-21.384V-640H389.999v90.001q0 12.769-8.615 21.384T360-520q-12.769 0-21.384-8.615t-8.615-21.384V-640h-77.692q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v455.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846Zm137.69-539.999h180.002v-10q0-37.616-26.193-63.808Q517.616-800 480-800t-63.808 26.193q-26.193 26.192-26.193 63.808v10ZM240-160V-640-160Z" />
        </svg>
      </SheetTrigger>
      <SheetContent className="flex w-[85%] flex-col">
        <ScrollArea className="h-full">
          <SheetTitle className="text-start">
            <span className="text-xl font-normal text-primary">Carrito</span>
          </SheetTitle>

          {items.length > 0 ? (
            <SheetHeader>
              <CartList />
              <SheetFooter className="flex flex-col items-center">
                <SheetClose asChild>
                  <Button asChild>
                    <Link href="/carrito" className="w-full" aria-label="CHECKOUT">
                      Finalizar Compra
                    </Link>
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetHeader>
          ) : (
            <p className="mt-5 block">
              <span>Carrito vacío, explorar </span>
              <SheetClose asChild>
                <Button asChild variant={"link"} className="p-0 text-base">
                  <Link href="/productos">productos</Link>
                </Button>
              </SheetClose>
            </p>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
