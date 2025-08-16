
"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const carouselItems = [
    {
        imgSrc: "https://placehold.co/1300x600.png",
        imgHint: "modern office building",
        alt: "Gedung KPPU"
    },
    {
        imgSrc: "https://placehold.co/1300x600.png",
        imgHint: "meeting discussion presentation",
        alt: "Rapat Komisi"
    },
    {
        imgSrc: "https://placehold.co/1300x600.png",
        imgHint: "courtroom judge gavel",
        alt: "Sidang Perkara"
    },
    {
        imgSrc: "https://placehold.co/1300x600.png",
        imgHint: "press conference media",
        alt: "Konferensi Pers"
    },
]

export function HomeCarousel() {
  return (
    <Carousel 
        opts={{
            loop: true,
        }}
        plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
        ]}
        className="w-full"
    >
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-[13/6] w-full overflow-hidden md:rounded-2xl">
              <Image
                src={item.imgSrc}
                alt={item.alt}
                fill
                className="object-cover"
                data-ai-hint={item.imgHint}
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-black/30 hover:bg-black/50 border-none text-white md:left-6 md:h-10 md:w-10" />
      <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-black/30 hover:bg-black/50 border-none text-white md:right-6 md:h-10 md:w-10" />
    </Carousel>
  )
}
