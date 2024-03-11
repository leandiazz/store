"use client";

import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import CartList from "../components/CartList";

export default function CHECKOUT() {
  const { items } = useCart();
  return (
    <section className="flex h-full w-full min-w-fit flex-col lg:w-[50%]">
      <h2 className="mt-2 w-full text-start text-2xl lg:mt-0">Tu orden</h2>
      {items.length > 0 ? (
        <CartList />
      ) : (
        <p className="mt-5">
          Tu carrito esta vacio, explorar{" "}
          <Link
            href="/productos"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            productos
          </Link>
        </p>
      )}
    </section>
  );
}
