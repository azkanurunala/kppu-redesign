
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ArrowRight, Youtube, Search } from 'lucide-react';
import Link from 'next/link';
import { HomeCarousel } from '@/components/home-carousel';
import { KppuPieChart } from '@/components/kppu-pie-chart';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';

const mainNews = {
    title: "KPPU Terus Melakukan Pengawasan atas Komoditas Beras",
    source: "JawaPos.com",
    href: "#",
    imgSrc: "https://placehold.co/600x400.png",
    imgHint: "commodity rice monitoring"
};

const otherMainNews = [
    { title: "Pertama dalam Sejarah: 97 Pelaku Usaha Menjadi Terlapor dalam Sidang Dugaan Kartel Pinjol", source: "Hukumonline.com", href: "#" },
    { title: "Sidang Perkara terkait Dugaan Hambatan Usaha PT Laboratorium Medio Pratama Masuk ke Tahap Pemeriksaan Lanjutan", source: "Kontan.co.id", href: "#" }
];

const activityNews = {
    title: "KPPU Hadiri Tasyakuran Ulang Tahun INDEF",
    source: "Infopublik.id",
    href: "#",
    imgSrc: "https://placehold.co/600x400.png",
    imgHint: "conference presentation"
};

const otherActivityNews = [
    { title: "KPPU Terima Kunjungan PETRONAS Bahas Implementasi Program Kemitraan", source: "Republika.co.id", href: "#" },
    { title: "Program Kepatuhan Persaingan Usaha PT PU Indonesia Disetujui KPPU", source: "Sindonews.com", href: "#" }
];

const regionalNews = {
    title: "Perkuat Sinergi, Kantor Wilayah VI KPPU Makassar Temui Gubernur Sulawesi Barat",
    source: "Antaranews.com",
    href: "#",
    imgSrc: "https://placehold.co/600x400.png",
    imgHint: "government meeting handshake"
};

const otherRegionalNews = [
    { title: "LIRA Sumut Dukung KPPU Kanwil I Bongkar Dugaan Persekongkolan Tender Rp66 Miliar di Kejari Sumut", source: "Analisadaily.com", href: "#" },
    { title: "Kunjungi Gapoktan di Kabupaten Bandung Barat, Kepala Kanwil III dan Petani Bahas Pemasaran Beras", source: "Tribunnews.com", href: "#" }
];

const commissioners = [
  { name: 'M. Fanshurullah Asa', image: 'https://placehold.co/400x500.png', hint: 'portrait man suit' },
  { name: 'Aru Armando', image: 'https://placehold.co/400x500.png', hint: 'portrait man suit' },
  { name: 'Dr. Guntur S. Saragih', image: 'https://placehold.co/400x500.png', hint: 'portrait man suit' },
  { name: 'Gopprera Panggabean', image: 'https://placehold.co/400x500.png', hint: 'portrait man suit' },
  { name: 'Hilman Pujana', image: 'https://placehold.co/400x500.png', hint: 'portrait man suit' },
  { name: 'Mohammad Reza', image: 'https://placehold.co/400x500.png', hint: 'portrait man suit' },
  { name: 'Rhido Jusmadi', image: 'https://placehold.co/400x500.png', hint: 'portrait man suit' },
  { name: 'Ukay Karyadi', image: 'https://placehold.co/400x500.png', hint: 'portrait man suit' },
  { name: 'Yudi Hidayat', image: 'https://placehold.co/400x500.png', hint: 'portrait man suit' },
];


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary-dark text-white pt-24 pb-32 md:pt-32 md:pb-48 text-center overflow-hidden">
            <div className="absolute inset-0 bg-black/30">
                 <Image src="https://placehold.co/1920x1080.png" alt="Hero Background" layout="fill" objectFit="cover" className="opacity-30" data-ai-hint="modern city skyline" />
            </div>
            <div className="container mx-auto px-4 relative">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold font-poppins leading-tight"
                >
                    Mewujudkan Persaingan Usaha yang Sehat
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80"
                >
                  Jelajahi database putusan, peraturan terbaru, dan jadwal sidang untuk mendukung ekosistem bisnis yang adil dan transparan di Indonesia.
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-10 max-w-2xl mx-auto"
                >
                    <div className="relative">
                        <Input
                            type="search"
                            placeholder="Cari putusan, regulasi, atau berita..."
                            className="w-full h-16 rounded-full pl-8 pr-16 text-lg bg-background/20 text-white placeholder:text-gray-300 border-2 border-white/30 focus:bg-background/30 focus:ring-gold"
                        />
                        <Button size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-gold hover:bg-gold/90">
                            <Search className="w-6 h-6 text-primary-dark" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
        
        {/* Carousel Section */}
        <section className="py-12 md:py-16 -mt-24 md:-mt-40 relative z-10">
          <div className="container mx-auto px-0 md:px-4">
            <HomeCarousel />
          </div>
        </section>
        
        {/* Spotlight Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Info Terkini</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Berita terbaru, kegiatan, dan informasi dari seluruh wilayah kerja KPPU.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Main News Big Card */}
                <Card className="lg:col-span-2 overflow-hidden bg-card shadow-lg rounded-2xl flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <div className="relative aspect-video md:aspect-auto md:h-full">
                            <Image src={mainNews.imgSrc} alt={mainNews.title} layout="fill" objectFit="cover" data-ai-hint={mainNews.imgHint} />
                        </div>
                    </div>
                    <div className="md:w-1/2 p-8 md:p-10 flex flex-col">
                        <h3 className="text-2xl lg:text-3xl font-bold font-poppins text-primary-dark dark:text-white leading-tight">{mainNews.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2 mb-6">{mainNews.source}</p>
                        <div className="space-y-5 pt-5 border-t border-border/50">
                          {otherMainNews.map((news, index) => (
                            <div key={index}>
                              <h4 className="font-semibold leading-snug text-primary-dark dark:text-white hover:text-primary transition-colors"><Link href={news.href}>{news.title}</Link></h4>
                              <p className="text-xs text-muted-foreground mt-1">{news.source}</p>
                            </div>
                          ))}
                        </div>
                        <Button variant="outline" className="mt-8 self-start">Selengkapnya</Button>
                    </div>
                </Card>

                {/* Activity News */}
                <Card className="overflow-hidden bg-card shadow-lg rounded-2xl flex flex-col">
                    <div className="relative aspect-video">
                       <Image src={activityNews.imgSrc} alt={activityNews.title} layout="fill" objectFit="cover" data-ai-hint={activityNews.imgHint} />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-xl lg:text-2xl font-bold font-poppins text-primary-dark dark:text-white">{activityNews.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2 mb-6">{activityNews.source}</p>
                         <div className="space-y-5 pt-5 border-t border-border/50">
                           {otherActivityNews.map((news, index) => (
                            <div key={index}>
                              <h4 className="font-semibold leading-snug text-primary-dark dark:text-white hover:text-primary transition-colors text-sm"><Link href={news.href}>{news.title}</Link></h4>
                              <p className="text-xs text-muted-foreground mt-1">{news.source}</p>
                            </div>
                          ))}
                        </div>
                        <Button variant="outline" className="mt-8 self-start">Selengkapnya</Button>
                    </div>
                </Card>

                {/* Regional News */}
                <Card className="overflow-hidden bg-card shadow-lg rounded-2xl flex flex-col">
                    <div className="relative aspect-video">
                        <Image src={regionalNews.imgSrc} alt={regionalNews.title} layout="fill" objectFit="cover" data-ai-hint={regionalNews.imgHint} />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-xl lg:text-2xl font-bold font-poppins text-primary-dark dark:text-white">{regionalNews.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2 mb-6">{regionalNews.source}</p>
                         <div className="space-y-5 pt-5 border-t border-border/50">
                           {otherRegionalNews.map((news, index) => (
                            <div key={index}>
                              <h4 className="font-semibold leading-snug text-primary-dark dark:text-white hover:text-primary transition-colors text-sm"><Link href={news.href}>{news.title}</Link></h4>
                              <p className="text-xs text-muted-foreground mt-1">{news.source}</p>
                            </div>
                          ))}
                        </div>
                        <Button variant="outline" className="mt-8 self-start">Selengkapnya</Button>
                    </div>
                </Card>
            </div>
          </div>
        </section>

        {/* Commissioners Section */}
        <section className="py-24 lg:py-32 bg-primary-dark text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold font-poppins">Jajaran Komisioner KPPU</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:pr-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Salam Kenal!</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>KPPU adalah lembaga independen yang bertugas mengawasi pelaksanaan UU No.5/1999 dan UU No.20/2008, terdiri dari Anggota KPPU yang diangkat oleh Presiden Republik Indonesia atas persetujuan Dewan Perwakilan Rakyat.</p>
                  <p>Anggota KPPU terpilih periode kelima melalui Keputusan Presiden Nomor 8/P Tahun 2024 memiliki masa kerja tahun 2024-2029. Kami berkomitmen untuk mensejahterakan rakyat melalui penegakan hukum persaingan usaha dan pengawasan kemitraan UMKM yang sehat di Indonesia.</p>
                </div>
                <div className="mt-12">
                  <KppuPieChart />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 md:gap-5">
                {commissioners.map((commissioner) => (
                  <div key={commissioner.name} className="group">
                    <div className="relative overflow-hidden rounded-xl aspect-[4/5]">
                      <Image
                        src={commissioner.image}
                        alt={commissioner.name}
                        layout="fill"
                        objectFit="cover"
                        className="shadow-lg transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={commissioner.hint}
                      />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                       <div className="absolute bottom-0 left-0 p-3 md:p-4 text-white">
                         <h4 className="font-bold text-sm md:text-base leading-tight">{commissioner.name}</h4>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Media & Publikasi Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Media & Publikasi</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Akses berbagai materi publikasi dan media dari KPPU.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-4 shadow-lg rounded-2xl overflow-hidden group lg:col-span-2">
                <div className="relative aspect-video">
                  <Image src="https://placehold.co/1200x600.png" layout="fill" objectFit="cover" alt="Video Company Profile KPPU" className="rounded-xl" data-ai-hint="people discussing document"/>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer transition-opacity opacity-0 group-hover:opacity-100">
                    <Youtube className="w-16 h-16 md:w-20 md:h-20 text-red-600 group-hover:text-red-500 transition-transform group-hover:scale-110" />
                  </div>
                </div>
              </Card>
              <Card className="p-4 shadow-lg rounded-2xl overflow-hidden">
                 <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="JDIH KPPU" className="rounded-xl w-full" data-ai-hint="law database mobile"/>
              </Card>
              <Card className="p-4 shadow-lg rounded-2xl overflow-hidden">
                 <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Majalah Kompetisi" className="rounded-xl w-full" data-ai-hint="magazine covers display"/>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Region Grid Section */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="">
                <h2 className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Kantor Wilayah</h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-lg">
                  KPPU hadir di 7 (tujuh) wilayah kerja yang tersebar di seluruh Indonesia untuk mendekatkan layanan dan pengawasan persaingan usaha kepada masyarakat dan pelaku usaha di daerah.
                </p>
                <Button size="lg" variant="default" asChild className="mt-8">
                  <Link href="/kanwil">Lihat Semua Kantor Wilayah <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
              <div className="relative h-80 md:h-96 bg-gray-200 dark:bg-gray-800/50 rounded-2xl">
                <Image src="https://placehold.co/800x600.png" alt="Peta Kantor Wilayah KPPU" layout="fill" objectFit="cover" className="rounded-2xl opacity-20" data-ai-hint="indonesia map" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

    