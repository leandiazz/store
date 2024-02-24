import { Product } from "@/types";
import dynamic from "next/dynamic";

export default function FavoriteButton({ producto }: { producto: Product }) {
  const isFavourite = window.localStorage
    .getItem("favorites")
    ?.includes(producto.id.toString());

  return (
    <button
      type="button"
      className={`absolute right-2 top-0 fill-none text-red-500 ${isFavourite ? "opacity-100 hover:fill-none" : "opacity-20 hover:fill-red-500"}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-heart"
        width={25}
        height={25}
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </svg>
    </button>
  );
}

export const DynamicFavoriteButton = dynamic(async () => FavoriteButton, {
  ssr: false,
});
//♥
