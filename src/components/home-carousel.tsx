
"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Scale, Gavel, Newspaper, ArrowRight } from "lucide-react"

const carouselItems = [
    {
        title: "Database Regulasi",
        description: "Akses semua peraturan, undang-undang, dan pedoman.",
        href: "/regulasi",
        icon: <Scale className="h-8 w-8" />,
        imgSrc: "https://placehold.co/600x400.png",
        imgHint: "library law books"
    },
    {
        title: "Putusan Perkara",
        description: "Temukan semua putusan perkara persaingan usaha.",
        href: "/penindakan/perkara-persaingan",
        icon: <Gavel className="h-8 w-8" />,
        imgSrc: "https://placehold.co/600x400.png",
        imgHint: "courtroom gavel"
    },
    {
        title: "Jadwal Sidang",
        description: "Lihat jadwal sidang pemeriksaan perkara yang terbuka untuk umum.",
        href: "/jadwal-sidang",
        icon: <Newspaper className="h-8 w-8" />,
        imgSrc: "https://placehold.co/600x400.png",
        imgHint: "calendar schedule"
    },
    {
        title: "Publikasi Terbaru",
        description: "Ikuti siaran pers, berita, dan aktivitas terkini dari KPPU.",
        href: "/publikasi/siaran-pers",
        icon: <Newspaper className="h-8 w-8" />,
        imgSrc: "https://placehold.co/600x400.png",
        imgHint: "news press"
    },
]

export function HomeCarousel() {
  return (
    <Carousel 
        opts={{
            align: "start",
            loop: true,
        }}
        plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
        ]}
        className="w-full container relative"
    >
      <CarouselContent className="-ml-4">
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
            <div className="p-1">
              <Card className="overflow-hidden rounded-2xl group transform-style-3d">
                <CardContent className="relative flex aspect-[16/10] items-end justify-start p-6">
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
                    data-ai-hint={item.imgHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
                  <div className="relative z-20 text-white">
                    <div className="mb-4 text-white/90">
                        {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold font-poppins">{item.title}</h3>
                    <p className="text-white/80 text-sm mt-1 mb-4">{item.description}</p>
                    <Link href={item.href} className="text-sm font-bold text-gold hover:underline flex items-center gap-2">
                        Jelajahi <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2" />
      </div>
    </Carousel>
  )
}

    