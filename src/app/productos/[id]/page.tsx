import api from "@/api";
import { Params, formatPrice } from "@/lib/utils";
import { SelectForm } from "./SelectForm";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const dynamicParams = false;
export async function generateMetadata({ params: { id } }: Params) {
  const producto = await api.fetch(Number(id));
  return {
    title: `${producto.name} - Cruel Summer`,
    description: producto.description,
  };
}
export async function generateStaticParams() {
  const products = await api.list();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}
export default async function page({ params: { id } }: Params) {
  const producto = await api.fetch(Number(id));
  return (
    <article className="flex flex-col items-center">
      <div
        key={producto.id}
        className="flex w-[90%] flex-col px-10 pt-10 md:flex-row md:pl-20 md:pt-20"
      >
        <header className="md:pr-[10%]">
          <Carousel opts={{ loop: false }} className="md:max-w-[460px]">
            <CarouselContent className="ml-0 md:max-w-[460px]">
              {producto.imagesArray.map((item, index) => (
                <CarouselItem className="pl-0" key={index}>
                  <Image
                    src={item}
                    alt="imagen del producto"
                    width={1440}
                    height={1800}
                    className="h-full w-full object-cover object-center"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </header>
        <aside className="flex w-full flex-col items-start pt-10 md:w-[30%] md:pt-20">
          <h1 className="w-max text-4xl">{producto.name}</h1>
          <h2 className="mt-3 w-full font-sans antialiased">
            <strong className="mr-2  text-xl">{`${formatPrice(producto.priceDiscounted)}`}</strong>
            <s className="mx-1 text-sm text-gray-500">{`${formatPrice(producto.price)}`}</s>
            <span className="ml-1 rounded-sm border-2 px-[2px] text-xs">
              {producto.discount}% OFF
            </span>
          </h2>
          <SelectForm {...producto} />
        </aside>
      </div>
    </article>
  );
}
