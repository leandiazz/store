"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const targets = [
  {
    id: 1,
    title: "Tops",
    src: "/tops.jpg",
  },
  {
    id: 2,
    title: "Faldas",
    src: "/faldas.jpg",
  },
  {
    id: 3,
    title: "Pantalones",
    src: "/pantalones.jpg",
  },
  {
    id: 4,
    title: "Remerones",
    src: "/remerones.jpg",
  },
  {
    id: 5,
    title: "Vestidos",
    src: "/vestidos.jpg",
  },
];

const ProductTypesSlider = () => {
  return (
    <div className="relative box-border pb-6 pt-6 text-base leading-normal">
      <h2 className="pb-2 text-center text-2xl lg:text-3xl">
        <span>Nuestros productos</span>
      </h2>
      <div className="flex items-center justify-center">
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
          className="max-w-[260px] lg:max-w-screen-md"
        >
          <CarouselContent>
            {targets.map((target) => (
              <CarouselItem key={target.id} className="lg:basis-1/3">
                <figure className="relative box-border">
                  <Link href={``}>
                    <div className="h-[280px] w-full overflow-hidden rounded-md">
                      <img
                        alt={target.title}
                        className="h-full w-full object-cover"
                        src={target.src}
                      />
                    </div>
                    <figcaption className="leading-1 absolute bottom-3 left-3 right-3 overflow-ellipsis text-3xl text-white">
                      {target.title}
                    </figcaption>
                  </Link>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
export default ProductTypesSlider;
