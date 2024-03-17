import { ScrollArea2 } from "@/components/ui/scroll-area";
import { useCartData, useCart } from "@/hooks/useCart";
import { Separator } from "@/components/ui/separator";
import CartProductCard from "../carrito/CartProductCard";

export default function CartList() {
  const { totalPrice, totalProducts } = useCartData();
  const { items } = useCart();

  return (
    <section className="h-full">
      <ScrollArea2 className="mr-4 w-full pr-4">
        <div className="flex h-full flex-col justify-between">
          <ul className="mt-5 list-none">
            {items.map((cartItem) => (
              <CartProductCard cartItem={cartItem} key={cartItem.key} />
            ))}
          </ul>
        </div>
      </ScrollArea2>

      <Separator className="my-3" />
      <footer>
        <p className="flex justify-between px-4">
          <span>
            Subtotal: <strong>{totalPrice}</strong>
          </span>
          <span>{`${totalProducts} ${totalProducts > 1 ? "productos" : "producto"}`}</span>
        </p>
        <h3 className="text-pretty px-3 text-center text-sm">
          Los gastos de envío e impuestos serán calculados al finalizar la compra.
        </h3>
      </footer>
    </section>
  );
}
