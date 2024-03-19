"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const images = [{ src: "/1.jpg" }, { src: "/2.jpg" }, { src: "/3.jpg" }];

export default function HomePictures() {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
      className="m-0 h-full p-0"
    >
      <CarouselContent className="ml-0">
        {images.map((img) => (
          <CarouselItem key={img.src} className="pl-0">
            <Image
              src={img.src}
              alt="gallery-img"
              loading="eager"
              width={1440}
              height={1800}
              className="aspect-4/5 h-svh w-full object-cover object-center"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
