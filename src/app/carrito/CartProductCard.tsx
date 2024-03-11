import { NewCartItem, useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function CartProductCard({ cartItem }: { cartItem: NewCartItem }) {
  const {
    color = cartItem.color.toLowerCase(),
    description,
    discount,
    id,
    imagesArray,
    key,
    name,
    price,
    quantity,
    type,
    colorArray,
    priceDiscounted,
  } = cartItem;
  const { removeProduct } = useCart();
  const cartItemPrice = priceDiscounted * quantity;
  const handleDelete = () => {
    removeProduct(key);
  };
  return (
    <article className="mb-5 flex h-full flex-row">
      <Link href={`/productos/${id}`}>
        <div className="min-w-24 max-w-24">
          <Image
            src={imagesArray[0]}
            width={1400}
            height={1800}
            className="h-auto w-full overflow-clip"
            alt={name}
          />
        </div>
      </Link>
      <div className="flex w-full flex-col justify-between pl-3">
        <Link href={`/productos/${id}`}>
          <p className="text-sm">
            <span className="block text-base">{name}</span>
            {formatPrice(cartItemPrice)}
            <span className="ml-2 border px-[1px] text-[10px]">{discount}% OFF</span>
          </p>
        </Link>
        <div className="flex justify-between">
          <p className="flex flex-col text-sm">
            <span>Color: {color}</span>
            <span>Cantidad: {quantity}</span>
          </p>
          <button onClick={handleDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-trash"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7l16 0" />
              <path d="M10 11l0 6" />
              <path d="M14 11l0 6" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
