import Link from "next/link";
import { HomePictures } from "./components/HomePictures";
import ProductTypesSlider from "./components/ProductTypesSlider";

export default async function Home() {
  return (
    <>
      <HomePictures />
      <ProductTypesSlider />
    </>
  );
}
