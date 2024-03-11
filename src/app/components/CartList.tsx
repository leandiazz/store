import { ScrollArea } from "@/components/ui/scroll-area";
import { useCartData, useCart } from "@/hooks/useCart";
import { Separator } from "@/components/ui/separator";
import CartProductCard from "../carrito/CartProductCard";

export default function CartList() {
  const { totalPrice, totalProducts } = useCartData();
  const { items } = useCart();

  return (
    <section>
      <ScrollArea className="mr-4 h-[450px] pr-2 lg:h-[450px]">
        <div className="flex h-full flex-col justify-between ">
          <ul className="mt-5 list-none">
            {items.map((cartItem) => (
              <CartProductCard cartItem={cartItem} key={cartItem.key} />
            ))}
          </ul>
        </div>
      </ScrollArea>
      <Separator className="my-2" />
      <p className="flex justify-between">
        <span className="flex-1 pr-2">
          Subtotal: <strong>{totalPrice}</strong>
        </span>
        <span>{`${totalProducts} ${totalProducts > 1 ? "productos" : "producto"}`}</span>
      </p>
      <h3 className="px-3 text-center text-sm">
        Los gastos de envío e impuestos serán calculados al finalizar la compra.
      </h3>
    </section>
  );
}
