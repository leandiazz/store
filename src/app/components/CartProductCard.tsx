import { NewCartItem, useCart } from "@/hooks/useCart";
import { TrashLogo } from "@/lib/Logos";
import { cn, formatPrice, promptFont } from "@/lib/utils";
import Link from "next/link";

export default function CartProductCard({ cartItem }: { cartItem: NewCartItem }) {
  const { color, description, discount, id, images, key, name, price, quantity, type } = cartItem;
  const { removeProduct } = useCart();
  const cartItemPrice = (price - (price / 100) * discount) * Number(quantity);
  const handleDelete = () => {
    removeProduct(key);
  };
  return (
    <article className="flex h-full flex-row">
      <Link href={`/productos/${id}`}>
        <div className="min-w-24 max-w-24">
          <img src={images} className="h-auto w-full overflow-clip" alt={name}></img>
        </div>
      </Link>
      <div className="flex w-full flex-col justify-between pl-3">
        <Link href={`/productos/${id}`}>
          <div className="flex flex-col items-start">
            <h3>{name}</h3>
            <p className={cn(promptFont.className, "text-sm")}>{formatPrice(cartItemPrice)}</p>
          </div>
        </Link>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-sm">
              color: <strong>{color}</strong>
            </p>
            <p className="text-sm">
              cantidad: <strong>{quantity}</strong>
            </p>
          </div>
          <button onClick={handleDelete}>
            <TrashLogo />
          </button>
        </div>
      </div>
    </article>
  );
}
