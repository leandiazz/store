import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const images = [
  { src: "/1.jpeg", alt: "1.jpeg" },
  { src: "/2.jpeg", alt: "/2.jpeg" },
  { src: "/3.jpg", alt: "/3.jpg" },
  { src: "/4.jpg", alt: "/4.jpg" }
];

export function HomePictures() {
  return (
    <Carousel>
      <CarouselContent>
        {images.map(image => (
          <CarouselItem key={image.src} className="overflow-hidden min-w-full h-screen">
            <img src={image.src} alt={image.alt} className="bg-cover" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
