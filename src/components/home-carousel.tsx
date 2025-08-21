
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
        imgSrc: "https://kppu.go.id/wp-content/uploads/slider6/slider-banner-juanda-36-6-sep-2024.png",
        imgHint: "modern office building",
        alt: "Gedung KPPU Juanda 36"
    },
    {
        imgSrc: "https://kppu.go.id/wp-content/uploads/slider6/slider-banner-jdih-7-jun-2023.png",
        imgHint: "legal document website",
        alt: "JDIH KPPU"
    },
    {
        imgSrc: "https://kppu.go.id/wp-content/uploads/slider6/sliderwebsitekppu_web-banner-perpustakaan_14092021.png",
        imgHint: "online library books",
        alt: "Perpustakaan KPPU"
    },
    {
        imgSrc: "https://kppu.go.id/wp-content/uploads/slider6/sliderwebsitekppu_web-banner-rev-webbanner-ppid_18082020.png",
        imgHint: "public information service",
        alt: "PPID KPPU"
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
