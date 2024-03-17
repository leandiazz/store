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
          <p className=" text-start">
            <span className="block">{name}</span>
            <span className="h-6 text-sm">{formatPrice(cartItemPrice)}</span>
            <span className="ml-2 border px-[1px] align-middle text-[10px]">{discount}% OFF</span>
          </p>
        </Link>
        <div className="flex justify-between">
          <p className="flex flex-col text-start text-sm">
            <span>Color: {color}</span>
            <span>Cantidad: {quantity}</span>
          </p>
          <button onClick={handleDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="M292.309-140.001q-29.923 0-51.115-21.193-21.193-21.192-21.193-51.115V-720h-40v-59.999H360v-35.384h240v35.384h179.999V-720h-40v507.691q0 30.308-21 51.308t-51.308 21H292.309ZM680-720H280v507.691q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462h375.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V-720ZM376.155-280h59.999v-360h-59.999v360Zm147.691 0h59.999v-360h-59.999v360ZM280-720v520-520Z" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
