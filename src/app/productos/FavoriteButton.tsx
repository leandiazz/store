import { useState } from "react";
import dynamic from "next/dynamic";

export default function FavoriteButton({ id }: { id: number }) {
  const favoritesList = JSON.parse(localStorage.getItem("favorites") || "[]");
  const [fav, setFav] = useState(favoritesList.includes(id));

  const handleClick = () => {
    if (!fav) {
      setFav(true);
      localStorage.setItem("favorites", JSON.stringify([...favoritesList, id]));
    } else {
      setFav(false);
      localStorage.setItem(
        "favorites",
        JSON.stringify(favoritesList.filter((idd: number) => idd !== id)),
      );
    }
  };

  return (
    <button type="button" onClick={handleClick} className="h-0 w-0 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`icon icon-tabler icon-tabler-heart absolute right-2 top-[30px] fill-none text-primary opacity-50 active:animate-ping ${fav ? "fill-primary active:fill-none" : "fill-none active:fill-red-600"}`}
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
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </svg>
    </button>
  );
}

export const DynamicFavoriteButton = dynamic(async () => FavoriteButton, {
  ssr: false,
});
