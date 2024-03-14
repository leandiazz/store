"use client";

import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import CartList from "../components/CartList";

export default function CHECKOUT() {
  const { items } = useCart();
  return (
    <section className="flex h-full w-full flex-col items-center lg:mr-4 lg:w-[40%]">
      <article className="w-full max-w-[550px]">
        <h2 className="mt-2 w-full text-center text-2xl text-primary underline underline-offset-4 lg:mt-0">
          Tu orden
        </h2>
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
      </article>
    </section>
  );
}
