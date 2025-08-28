
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ArrowRight, Youtube, Search, Handshake, Scale, FileText, Landmark, Megaphone, GaugeCircle, Gavel, ShieldCheck, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { HomeCarousel } from '@/components/home-carousel';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { StatCard } from '@/components/ui/stat-card';

const mainNews = {
    title: "KPPU Terus Melakukan Pengawasan atas Komoditas Beras",
    source: "JawaPos.com",
    href: "#",
    imgSrc: "/images/news/01.jpeg",
    imgHint: "kppu commission hearing meeting"
};

const otherMainNews = [
    { title: "Pertama dalam Sejarah: 97 Pelaku Usaha Menjadi Terlapor dalam Sidang Dugaan Kartel Pinjol", source: "Hukumonline.com", href: "#" },
    { title: "Sidang Perkara terkait Dugaan Hambatan Usaha PT Laboratorium Medio Pratama Masuk ke Tahap Pemeriksaan Lanjutan", source: "Kontan.co.id", href: "#" }
];

const activityNews = {
    title: "KPPU Hadiri Tasyakuran Ulang Tahun INDEF",
    source: "Infopublik.id",
    href: "#",
    imgSrc: "/images/news/02.jpeg",
    imgHint: "government meeting conference"
};

const otherActivityNews = [
    { title: "KPPU Terima Kunjungan PETRONAS Bahas Implementasi Program Kemitraan", source: "Republika.co.id", href: "#" },
    { title: "Program Kepatuhan Persaingan Usaha PT PU Indonesia Disetujui KPPU", source: "Sindonews.com", href: "#" }
];

const regionalNews = {
    title: "Perkuat Sinergi, Kantor Wilayah VI KPPU Makassar Temui Gubernur Sulawesi Barat",
    source: "Antaranews.com",
    href: "#",
    imgSrc: "/images/news/03.jpg",
    imgHint: "bps statistics office meeting"
};

const otherRegionalNews = [
    { title: "LIRA Sumut Dukung KPPU Kanwil I Bongkar Dugaan Persekongkolan Tender Rp66 Miliar di Kejari Sumut", source: "Analisadaily.com", href: "#" },
    { title: "Kunjungi Gapoktan di Kabupaten Bandung Barat, Kepala Kanwil III dan Petani Bahas Pemasaran Beras", source: "Tribunnews.com", href: "#" }
];

const highlightNews = {
    title: "KPPU Kanwil IV Jajaki Kerja Sama Strategis dengan Universitas Muhammadiyah Sidoarjo",
    subtitle: "Sinergi untuk penguatan literasi persaingan usaha dan pengembangan riset di Jawa Timur",
    source: "KPPU Kanwil IV",
    date: "20 Januari 2024",
    href: "#",
    imgSrc: "/images/news/03.jpeg",
    imgHint: "kppu collaboration meeting university partnership"
};

const commissioners = [
  { name: 'M. Fanshurullah Asa', image: '/images/people/mfa.png', hint: 'portrait commissioner formal suit' },
  { name: 'Aru Armando', image: '/images/people/aa.png', hint: 'portrait commissioner formal suit' },
  { name: 'Moh. Noor Rifiq', image: '/images/people/mnr.png', hint: 'portrait commissioner formal suit' },
  { name: 'Gopprera Panggabean', image: '/images/people/gp.png', hint: 'portrait commissioner formal suit' },
  { name: 'Hilman Pujana', image: '/images/people/hp.png', hint: 'portrait commissioner formal suit' },
  { name: 'Mohammad Reza', image: '/images/people/mr.png', hint: 'portrait commissioner formal suit' },
  { name: 'Rhido Jusmadi', image: '/images/people/rj.png', hint: 'portrait commissioner formal suit' },
  { name: 'Eugenia Mardanugraha', image: '/images/people/em.png', hint: 'portrait commissioner formal suit' },
  { name: 'Budi Jaya Santoso', image: '/images/people/bjs.png', hint: 'portrait commissioner formal suit' },
];


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <img src="/images/bg/map-bw.png" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
            </div>
            <div className="container mx-auto relative z-10 text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold font-poppins leading-tight"
                >
                    Mewujudkan Persaingan Usaha yang Sehat
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80"
                >
                  KPPU hadir untuk mengawasi dan memastikan persaingan usaha yang sehat di Indonesia. Jelajahi putusan, peraturan, dan informasi terkini dari Komisi Pengawas Persaingan Usaha.
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-10 max-w-2xl mx-auto"
                >
                    <div className="relative group">
                        <div className="relative bg-white/95 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden" style={{ marginBottom: '88px' }}>
                            <div className="flex items-center">
                                <div className="pl-6 pr-4 py-5 flex-shrink-0">
                                    <Search className="w-6 h-6 text-gray-400 group-hover:text-[#421BBC] transition-colors duration-300" />
                                </div>
                                <Input
                                    type="search"
                                    placeholder="Cari putusan, regulasi, berita, atau informasi lainnya..."
                                    className="flex-1 h-16 border-0 bg-transparent text-gray-700 placeholder:text-gray-400 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none pr-6 shadow-none"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#421BBC]/0 via-[#421BBC]/50 to-[#421BBC]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
        
        {/* Carousel Section */}
        <section className="py-12 md:py-16 -mt-24 md:-mt-40 relative z-10">
          <div className="container mx-auto">
            <HomeCarousel />
          </div>
        </section>
        
        {/* Main Services Section */}
        <section className="py-4 lg:py-4 bg-[#421BBC]">
           <div className="container mx-auto">
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
               {/* Regulasi */}
               <Link href="/regulasi" className="group text-center">
                 <div className="p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                   <div className="p-4 bg-white/10 rounded-full mb-4 mx-auto w-fit">
                     <FileText className="h-8 w-8 text-white" />
                   </div>
                   <h3 className="text-sm font-bold text-white">REGULASI</h3>
                 </div>
               </Link>

               {/* Putusan */}
               <Link href="/putusan" className="group text-center">
                 <div className="p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                   <div className="p-4 bg-white/10 rounded-full mb-4 mx-auto w-fit">
                     <Gavel className="h-8 w-8 text-white" />
            </div>
                   <h3 className="text-sm font-bold text-white">PUTUSAN</h3>
              </div>
               </Link>

               {/* Jadwal Sidang */}
               <Link href="/jadwal-sidang" className="group text-center">
                 <div className="p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                   <div className="p-4 bg-white/10 rounded-full mb-4 mx-auto w-fit">
                     <Scale className="h-8 w-8 text-white" />
                </div>
                   <h3 className="text-sm font-bold text-white">JADWAL SIDANG</h3>
              </div>
               </Link>

               {/* Siaran Pers */}
               <Link href="/siaran-pers" className="group text-center">
                 <div className="p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                   <div className="p-4 bg-white/10 rounded-full mb-4 mx-auto w-fit">
                     <Megaphone className="h-8 w-8 text-white" />
                </div>
                   <h3 className="text-sm font-bold text-white">SIARAN PERS</h3>
                </div>
               </Link>

               {/* Tanya Jawab */}
               <Link href="/tanya-jawab" className="group text-center">
                 <div className="p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                   <div className="p-4 bg-white/10 rounded-full mb-4 mx-auto w-fit">
                     <Search className="h-8 w-8 text-white" />
                 </div>
                   <h3 className="text-sm font-bold text-white">TANYA JAWAB</h3>
                 </div>
               </Link>

               {/* PPID */}
               <Link href="/ppid" className="group text-center">
                 <div className="p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                   <div className="p-4 bg-white/10 rounded-full mb-4 mx-auto w-fit">
                     <FileText className="h-8 w-8 text-white" />
                 </div>
                   <h3 className="text-sm font-bold text-white">PPID</h3>
                 </div>
               </Link>
            </div>
          </div>
        </section>

        {/* Spotlight Section */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Info Terkini</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Berita terbaru, kegiatan, dan informasi dari seluruh wilayah kerja KPPU.</p>
            </div>
            
            {/* Highlight News - Full Width */}
            <div className="mb-12">
              <Card className="overflow-hidden bg-background shadow-xl rounded-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative aspect-[16/9] lg:aspect-[4/3]">
                    <Image 
                      src={highlightNews.imgSrc} 
                      alt={highlightNews.title} 
                      fill 
                      className="object-cover" 
                      data-ai-hint={highlightNews.imgHint} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">BREAKING</span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <div className="mb-3">
                      <span className="text-xs text-muted-foreground">{highlightNews.source} • {highlightNews.date}</span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold font-poppins text-primary-dark dark:text-white mb-3 leading-tight">
                      {highlightNews.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {highlightNews.subtitle}
                    </p>
                    <div className="flex gap-3">
                      <Button asChild size="default" className="bg-[#421BBC] text-white hover:bg-[#421BBC]/90">
                        <Link href={highlightNews.href}>Baca Selengkapnya</Link>
                      </Button>
                      <Button variant="outline" size="default">
                        Bagikan
                      </Button>
                    </div>
                        </div>
                    </div>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Main News Card */}
                <Card className="overflow-hidden bg-background shadow-lg rounded-2xl flex flex-col">
                    <div className="relative aspect-video">
                        <Image src={mainNews.imgSrc} alt={mainNews.title} fill className="object-cover" data-ai-hint={mainNews.imgHint} />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-xl lg:text-2xl font-bold font-poppins text-primary-dark dark:text-white">{mainNews.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2 mb-6">{mainNews.source}</p>
                        <div className="space-y-5 pt-5 border-t border-border/50">
                          {otherMainNews.map((news, index) => (
                            <div key={index}>
                              <h4 className="font-semibold leading-snug text-primary-dark dark:text-white hover:text-primary transition-colors text-sm"><Link href={news.href}>{news.title}</Link></h4>
                              <p className="text-xs text-muted-foreground mt-1">{news.source}</p>
                            </div>
                          ))}
                        </div>
                        <Button variant="outline" className="mt-8 self-start">Selengkapnya</Button>
                    </div>
                </Card>

                {/* Activity News */}
                <Card className="overflow-hidden bg-background shadow-lg rounded-2xl flex flex-col">
                    <div className="relative aspect-video">
                       <Image src={activityNews.imgSrc} alt={activityNews.title} fill className="object-cover" data-ai-hint={activityNews.imgHint} />
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
                <Card className="overflow-hidden bg-background shadow-lg rounded-2xl flex flex-col">
                    <div className="relative aspect-video">
                        <Image src={regionalNews.imgSrc} alt={regionalNews.title} fill className="object-cover" data-ai-hint={regionalNews.imgHint} />
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

                {/* About KPPU Section */}
        <section className="py-24 lg:py-32 bg-blue-100 dark:bg-[#B8860B]">
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Tentang KPPU</h2>
              <p className="mt-4 text-lg text-primary-dark/80 dark:text-white/90 max-w-2xl mx-auto">Lembaga independen yang mengawasi persaingan usaha di Indonesia.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
              <div>
                   <h3 className="text-3xl font-bold font-poppins text-primary-dark dark:text-white mb-4">Pengawas Persaingan Usaha</h3>
                   <p className="text-primary-dark/80 dark:text-white/90 leading-relaxed mb-6">
                      Komisi Pengawas Persaingan Usaha (KPPU) adalah lembaga independen yang dibentuk untuk mengawasi pelaksanaan Undang-Undang No. 5 Tahun 1999 tentang Larangan Praktek Monopoli dan Persaingan Usaha Tidak Sehat. Kami bekerja untuk memastikan setiap pelaku usaha di Indonesia bersaing secara adil dan sehat, demi terwujudnya ekonomi yang efisien dan kesejahteraan masyarakat.
                    </p>
                   <Button asChild variant="link" className="p-0 h-auto self-start text-primary-dark dark:text-white font-bold">
                      <Link href="/profil/visi-misi">Selengkapnya <ArrowRight className="w-4 h-4 ml-2"/></Link>
                    </Button>
              </div>
              <div className="overflow-hidden shadow-lg rounded-2xl">
                <div className="relative h-80 min-h-[250px]">
                  <Image 
                    src="/images/bg/kppu-building.jpeg" 
                    alt="Gedung KPPU" 
                    fill 
                    className="object-cover" 
                    data-ai-hint="modern office building kppu indonesia" 
                  />
                </div>
              </div>
            </div>
            
            {/* Three Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 bg-white/80 dark:bg-white/20 shadow-lg rounded-2xl flex items-start gap-6">
                <div className="bg-primary/20 text-primary p-3 rounded-lg">
                    <Gavel className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-poppins text-primary-dark dark:text-white mb-2">Penegakan Hukum</h4>
                  <p className="text-primary-dark/80 dark:text-white/90 text-sm">Menindak pelanggaran hukum persaingan usaha melalui pemeriksaan dan putusan.</p>
                </div>
              </Card>
              <Card className="p-8 bg-white/80 dark:bg-white/20 shadow-lg rounded-2xl flex items-start gap-6">
                 <div className="bg-primary/20 text-primary p-3 rounded-lg">
                    <ShieldCheck className="w-8 h-8" />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold font-poppins text-primary-dark dark:text-white mb-2">Advokasi Kebijakan</h4>
                    <p className="text-primary-dark/80 dark:text-white/90 text-sm">Memberikan saran kepada pemerintah untuk menciptakan kebijakan yang pro-persaingan.</p>
                 </div>
              </Card>
              <Card className="p-8 bg-white/80 dark:bg-white/20 shadow-lg rounded-2xl flex items-start gap-6">
                 <div className="bg-primary/20 text-primary p-3 rounded-lg">
                    <Briefcase className="w-8 h-8" />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold font-poppins text-primary-dark dark:text-white mb-2">Pengawasan Kemitraan</h4>
                    <p className="text-primary-dark/80 dark:text-white/90 text-sm">Mengawasi pelaksanaan kemitraan UMKM agar terjalin secara sehat dan adil.</p>
                    </div>
                </Card>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="relative py-24 lg:py-32 bg-gradient-to-b from-card to-background overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/images/bg/kppu-building.jpeg" 
              alt="Gedung KPPU - Kantor Pusat" 
              className="w-full h-full object-cover opacity-[0.0125]" 
              data-ai-hint="modern office building kppu indonesia"
            />
          </div>
          {/* Overlay Pattern */}
          <div 
            className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='hsl(var(--border) / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
          />
          {/* Content */}
          <div className="relative z-10">
            <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Indonesia dalam Angka</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Sekilas data dan statistik kunci terkait pengawasan persaingan usaha di Indonesia.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StatCard
                icon={<GaugeCircle className="w-8 h-8 text-primary-foreground" />}
                value="4.92"
                label="Skor IPU Nasional 2023"
                description="Tingkat persaingan usaha yang 'Tinggi'."
              />
              <StatCard
                icon={<FileText className="w-8 h-8 text-primary-foreground" />}
                value="78"
                label="Putusan Perkara"
                description="Jumlah putusan yang dikeluarkan pada tahun 2023."
              />
              <StatCard
                icon={<Landmark className="w-8 h-8 text-primary-foreground" />}
                value="Rp 120 M"
                label="Total Denda"
                description="Akumulasi denda yang dikenakan sepanjang tahun 2023."
              />
              <StatCard
                icon={<Megaphone className="w-8 h-8 text-primary-foreground" />}
                value="152"
                label="Notifikasi Merger & Akuisisi"
                description="Jumlah notifikasi yang diterima dan dinilai pada 2023."
              />
              </div>
            </div>
          </div>
        </section>

        {/* Commissioners Section */}
        <section className="py-24 lg:py-32 bg-[#421BBC] text-white">
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold font-poppins">Jajaran Komisioner KPPU</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:pr-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Salam Kenal!</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
                  <p>KPPU adalah lembaga independen yang bertugas mengawasi pelaksanaan UU No.5/1999 dan UU No.20/2008, terdiri dari Anggota KPPU yang diangkat oleh Presiden Republik Indonesia atas persetujuan Dewan Perwakilan Rakyat.</p>
                  <p>Anggota KPPU terpilih periode kelima melalui Keputusan Presiden Nomor 8/P Tahun 2024 memiliki masa kerja tahun 2024-2029. Kami berkomitmen untuk mensejahterakan rakyat melalui penegakan hukum persaingan usaha dan pengawasan kemitraan UMKM yang sehat di Indonesia.</p>
                </div>
                
                {/* Performance Charts */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* PN 2018-2023 */}
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-3">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-gray-600" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${69 * 2.51} ${100 * 2.51}`} className="transition-all duration-1000 ease-out" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-lg font-bold text-white">69%</div>
                      </div>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">PN 2018-2023</h4>
                    <p className="text-xs text-gray-400">Persentase Putusan Pelanggaran</p>
                  </div>

                  {/* MA 2018-2023 */}
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-3">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-gray-600" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${94 * 2.51} ${100 * 2.51}`} className="transition-all duration-1000 ease-out" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-lg font-bold text-white">94%</div>
                      </div>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">MA 2018-2023</h4>
                    <p className="text-xs text-gray-400">Persentase Putusan Mahkamah Agung</p>
                  </div>

                  {/* Denda 2018-2023 */}
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-3">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-gray-600" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${72 * 2.51} ${100 * 2.51}`} className="transition-all duration-1000 ease-out" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-lg font-bold text-white">72%</div>
                      </div>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">Denda 2018-2023</h4>
                    <p className="text-xs text-gray-400">Persentase Realisasi Denda</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 md:gap-5">
                {commissioners.map((commissioner) => (
                  <div key={commissioner.name} className="group">
                    <div className="relative overflow-hidden rounded-xl aspect-square">
                      <Image
                        src={commissioner.image}
                        alt={commissioner.name}
                        fill
                        className="object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
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
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Media & Publikasi</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Akses berbagai materi publikasi dan media dari KPPU.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Video Section - 60% (3 columns out of 5) */}
              <div className="lg:col-span-3">
                <Card className="p-4 shadow-lg rounded-2xl overflow-hidden h-full">
                  <div className="relative aspect-video w-full">
                    <iframe 
                      src="https://www.youtube.com/embed/RBcyHEk3wns?si=25s0sOSsm4CXKgIg&controls=0" 
                      title="Video Company Profile KPPU" 
                      className="w-full h-full rounded-xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    />
                  </div>
                </Card>
              </div>
              
              {/* Media & Publications Grid - 40% (2 columns out of 5) */}
              <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                <Card className="shadow-lg rounded-2xl overflow-hidden">
                   <Image src="/images/media/01.png" width={400} height={300} alt="JDIH KPPU - Kumpulan Produk Hukum" className="rounded-xl w-full" data-ai-hint="legal documents database mobile app"/>
                </Card>
                <Card className="shadow-lg rounded-2xl overflow-hidden">
                   <Image src="/images/media/02.jpg" width={400} height={300} alt="Publikasi Buku KPPU" className="rounded-xl w-full" data-ai-hint="books publication stack competition law"/>
                </Card>
                <Card className="shadow-lg rounded-2xl overflow-hidden">
                   <Image src="/images/media/03.jpg" width={400} height={300} alt="Majalah Kompetisi" className="rounded-xl w-full" data-ai-hint="magazine covers competition business"/>
                </Card>
                <Card className="shadow-lg rounded-2xl overflow-hidden">
                   <Image src="/images/media/04.jpg" width={400} height={300} alt="Perpustakaan Persaingan Usaha (PERPUS)" className="rounded-xl w-full" data-ai-hint="digital library books collection"/>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Region Grid Section */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto">
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
              <div className="relative h-80 md:h-80 bg-gray-200 dark:bg-gray-800/50 rounded-2xl">
                <Image src="/images/bg/map.png" alt="Peta Kantor Wilayah KPPU" fill className="object-cover rounded-2xl opacity-90" data-ai-hint="indonesia map" />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

