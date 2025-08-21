
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
        imgSrc: "/images/sliders/01.png",
        imgHint: "PPID information service flow",
        alt: "Alur Permohonan Informasi Publik di KPPU"
    },
    {
        imgSrc: "/images/sliders/02.png",
        imgHint: "library digital books collection",
        alt: "Perpustakaan Persaingan Usaha (PERPUS) KPPU"
    },
    {
        imgSrc: "/images/sliders/03.png",
        imgHint: "legal document database mobile",
        alt: "Kumpulan Produk Hukum Persaingan Usaha - JDIH KPPU"
    },
    {
        imgSrc: "/images/sliders/04.png",
        imgHint: "podcast competition business discussion",
        alt: "Podcast Juanda 36 - Persaingan Usaha On Point"
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
              {/* Menggunakan HTML img standar sebagai alternatif */}
              <img
                src={item.imgSrc}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover"
                data-ai-hint={item.imgHint}
                loading={index === 0 ? "eager" : "lazy"}
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
