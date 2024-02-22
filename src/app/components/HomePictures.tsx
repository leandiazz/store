"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const images = [
  { src: "/first.jpg", alt: "first-pic", width: 1440, heigth: 1800 },
  { src: "/second.jpg", alt: "second-pic", width: 1349, heigth: 1687 },
  { src: "/third.jpg", alt: "third-pic", width: 1440, heigth: 1800 },
  { src: "/fourth.jpg", alt: "fourth-pic", width: 1440, heigth: 1800 }
];

export function HomePictures() {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
      className="p-0 m-0 h-full"
    >
      <CarouselContent className="ml-0">
        {images.map(image => (
          <CarouselItem key={image.src} className="pl-0">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.heigth}
              className="w-full h-svh object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
