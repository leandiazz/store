"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const images = [
  { src: "/1.jpeg", alt: "1.jpeg", width: 1080, heigth: 1298 },
  { src: "/2.jpeg", alt: "/2.jpeg", width: 1080, heigth: 1315 },
  { src: "/3.jpg", alt: "/3.jpg", width: 1080, heigth: 1350 },
  { src: "/4.jpg", alt: "/4.jpg", width: 1079, heigth: 1344 }
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
