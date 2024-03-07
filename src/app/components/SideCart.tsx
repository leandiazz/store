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
import { useCart, useCartData } from "@/hooks/useCart";
import Link from "next/link";
import CartProductCard from "../carrito/CartProductCard";

export default function SideCart() {
  const { totalPrice, totalProducts } = useCartData();
  const { items } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
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
                    <strong>{totalPrice}</strong>
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
