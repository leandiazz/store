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
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-shopping-cart cursor-pointer"
          aria-label="carrito de compras"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
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
