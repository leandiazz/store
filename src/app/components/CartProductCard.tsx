import { CartItem, useCart } from "@/hooks/useCart";
import { TrashLogo } from "@/lib/Logos";
import { cn, formatPrice, promptFont } from "@/lib/utils";
import Link from "next/link";

export default function CartProductCard({ cartItem }: { cartItem: CartItem }) {
  const { product, data, key } = cartItem;
  const { removeProduct } = useCart();
  const handleDelete = () => {
    removeProduct(key);
  };
  return (
    <article className="flex h-full w-full min-w-[250px] flex-row">
      {/* FOTO */}
      <Link href={`/productos/${product.id}`}>
        <div className="min-w-24 max-w-24">
          <img
            src={product.images}
            className="h-auto w-full overflow-clip"
            alt={product.name}
          ></img>
        </div>
      </Link>
      {/* DATOS */}
      <div className="flex w-full flex-col justify-between pl-3">
        <Link href={`/productos/${product.id}`}>
          <div>
            <h3>{product.name}</h3>
            <p className={cn(promptFont.className, "text-sm")}>
              {formatPrice(product.price)}
            </p>
          </div>
        </Link>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-sm">
              color: <strong>{data.color}</strong>
            </p>
            <p className="text-sm">
              cantidad: <strong>1</strong>
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
