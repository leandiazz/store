import { useState } from "react";
import dynamic from "next/dynamic";
import { CardFavLogo } from "@/lib/Logos";

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
      <CardFavLogo
        className={`absolute right-2 top-0 fill-none text-primary opacity-50 active:animate-ping ${fav ? "fill-primary active:fill-none" : "fill-none active:fill-red-600"}`}
      />
    </button>
  );
}

export const DynamicFavoriteButton = dynamic(async () => FavoriteButton, {
  ssr: false,
});
