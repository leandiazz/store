"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const images = [
  { src: "/1.jpeg", alt: "1.jpeg" },
  { src: "/2.jpeg", alt: "/2.jpeg" },
  { src: "/3.jpg", alt: "/3.jpg" },
  { src: "/4.jpg", alt: "/4.jpg" }
];

export function HomePictures() {
  const plugin = React.useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));

  return (
    <div className="flex justify-center items-center w-full h-[95vh] p-0 m-0">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map(image => (
            <CarouselItem key={image.src}>
              <img src={image.src} alt={image.alt} className="w-full h-[907px] object-cover" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
