"use client";

import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

export function Cart() {
  const itemCount = 0;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="h-10 max-w-max rounded-md p-2 pb-1 pl-4 pr-4 pt-1 hover:bg-accent focus-visible:outline-none">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-shopping-cart"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M6 5l14 1l-1 7h-13" />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>mi pedido</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <div className="pt-5">
            <SheetDescription className="flex justify-between">
              <div className="flex">
                <span className="flex-1 pr-2">Subtotal:</span>
                <span className="font-bold">{formatPrice(1)}</span>
              </div>
              <div>1 producto</div>
            </SheetDescription>
            <div className="flex w-full flex-col pr-6">
              {/* TODO CART LOGIC */}
            </div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">shipping</span>
                  <span>free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction fee</span>
                  <span>{formatPrice(1)}</span>
                </div>
              </div>
            </div>
            <SheetFooter className="pt-5">
              <SheetTrigger asChild>
                <Link href="/#" className="w-full text-center">
                  Continuar
                </Link>
              </SheetTrigger>
            </SheetFooter>
          </div>
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
