"use client";

import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const targets = [
  {
    id: 1,
    title: "tops",
    src: "/tops.jpeg"
  },
  {
    id: 2,
    title: "faldas",
    src: "/tops.jpeg"
  },
  {
    id: 3,
    title: "pantalones",
    src: "/tops.jpeg"
  },
  {
    id: 4,
    title: "remerones",
    src: "/remerones.jpeg"
  },
  {
    id: 5,
    title: "vestidos",
    src: "/vestidos.jpeg"
  }
];

const ProductTypesSlider = () => {
  return (
    <div className="text-base leading-normal box-border relative pt-6 pb-6">
      <h2 className="text-center text-2xl lg:text-3xl pb-2">
        <span>Nuestros productos</span>
      </h2>
      <div className="flex items-center justify-center">
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
          className="max-w-[260px] lg:max-w-screen-xl "
        >
          <CarouselContent>
            {targets.map(target => (
              <CarouselItem key={target.id} className="lg:basis-1/3">
                <figure className="box-border relative">
                  <Link href={``}>
                    <div className="w-full h-[280px] overflow-hidden">
                      <img
                        alt={target.title}
                        className="object-cover w-full h-full"
                        src={target.src}
                      />
                    </div>
                    <figcaption className="text-white absolute bottom-3 left-3 right-3 text-3xl leading-1 overflow-ellipsis">
                      {target.title}
                    </figcaption>
                  </Link>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
export default ProductTypesSlider;
