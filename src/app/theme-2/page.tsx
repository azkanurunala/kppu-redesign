'use client';

import Image from 'next/image';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ArrowRight, Search, FileText, Gavel, Scale, Megaphone, Youtube, Handshake, Landmark, GaugeCircle, ShieldCheck, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Input } from '../../components/ui/input';
import { HomeCarousel } from '../../components/home-carousel';
import { StatCard } from '../../components/ui/stat-card';

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

export default function Theme2HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <main className="flex-1">
        {/* Hero Section - Split Layout */}
        <section className="bg-[#00AA88] text-white pb-60 pt-40 relative overflow-hidden">
            <div className="absolute inset-0">
                <img src="/images/bg/map-bw-tq.png" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
            </div>
            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold font-onest leading-tight mb-6">
                            Mewujudkan Persaingan Usaha yang Sehat
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 font-onest leading-relaxed">
                          KPPU hadir untuk mengawasi dan memastikan persaingan usaha yang sehat di Indonesia. Jelajahi putusan, peraturan, dan informasi terkini dari Komisi Pengawas Persaingan Usaha.
                        </p>
                    </motion.div>
                    
                    {/* Right Side - Search Bar */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative group w-full max-w-md">
                            <div className="relative bg-white/95 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden" style={{ marginBottom: '88px' }}>
                                <div className="flex items-center">
                                    <div className="pl-6 pr-4 py-5 flex-shrink-0">
                                        <Search className="w-6 h-6 text-gray-400 group-hover:text-[#00AA88] transition-colors duration-300" />
                                    </div>
                                    <Input
                                        type="search"
                                        placeholder="Cari putusan, regulasi, berita, atau informasi lainnya..."
                                        className="flex-1 h-16 border-0 bg-transparent text-gray-700 placeholder:text-gray-400 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none pr-6 shadow-none font-onest"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00AA88]/0 via-[#00AA88]/50 to-[#00AA88]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
        
        {/* Carousel Section */}
        <section className="py-12 md:py-16 -mt-24 md:-mt-40 relative z-10">
          <div className="container mx-auto">
            <HomeCarousel />
          </div>
        </section>
        
        {/* Main Services Section - Grid 2 Columns */}
        <section className="py-8 lg:py-12 bg-cyan-50 dark:bg-[#006666]">
           <div className="container mx-auto">
             <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Regulasi */}
               <Link href="/theme-2/regulasi" className="group block">
                 <div className="flex items-center p-6 rounded-xl hover:bg-[#00AA88]/10 transition-all duration-300">
                   <div className="p-4 bg-[#00AA88]/10 rounded-full mr-6 flex-shrink-0">
                     <FileText className="h-8 w-8 text-white" />
                   </div>
                   <div className="flex-1">
                     <h3 className="text-lg font-bold text-white font-onest">REGULASI</h3>
                     <p className="text-sm text-white/70 mt-1">Peraturan dan regulasi terkait persaingan usaha</p>
                   </div>
                   <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
                 </div>
               </Link>

               {/* Putusan */}
               <Link href="/theme-2/putusan" className="group block">
                 <div className="flex items-center p-6 rounded-xl hover:bg-[#00AA88]/10 transition-all duration-300">
                   <div className="p-4 bg-[#00AA88]/10 rounded-full mr-6 flex-shrink-0">
                     <Gavel className="h-8 w-8 text-white" />
                   </div>
                   <div className="flex-1">
                     <h3 className="text-lg font-bold text-white font-onest">PUTUSAN</h3>
                     <p className="text-sm text-white/70 mt-1">Lihat putusan-putusan KPPU terkini</p>
                   </div>
                   <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
                 </div>
               </Link>

               {/* Jadwal Sidang */}
               <Link href="/theme-2/jadwal-sidang" className="group block">
                 <div className="flex items-center p-6 rounded-xl hover:bg-[#00AA88]/10 transition-all duration-300">
                   <div className="p-4 bg-[#00AA88]/10 rounded-full mr-6 flex-shrink-0">
                     <Scale className="h-8 w-8 text-white" />
                   </div>
                   <div className="flex-1">
                     <h3 className="text-lg font-bold text-white font-onest">JADWAL SIDANG</h3>
                     <p className="text-sm text-white/70 mt-1">Jadwal sidang KPPU yang akan datang</p>
                   </div>
                   <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
                 </div>
               </Link>

               {/* Siaran Pers */}
               <Link href="/theme-2/siaran-pers" className="group block">
                 <div className="flex items-center p-6 rounded-xl hover:bg-[#00AA88]/10 transition-all duration-300">
                   <div className="p-4 bg-[#00AA88]/10 rounded-full mr-6 flex-shrink-0">
                     <Megaphone className="h-8 w-8 text-white" />
                   </div>
                   <div className="flex-1">
                     <h3 className="text-lg font-bold text-white font-onest">SIARAN PERS</h3>
                     <p className="text-sm text-white/70 mt-1">Berita dan pengumuman resmi KPPU</p>
                   </div>
                   <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
                 </div>
               </Link>

               {/* Tanya Jawab */}
               <Link href="/theme-2/tanya-jawab" className="group block">
                 <div className="flex items-center p-6 rounded-xl hover:bg-[#00AA88]/10 transition-all duration-300">
                   <div className="p-4 bg-[#00AA88]/10 rounded-full mr-6 flex-shrink-0">
                     <Search className="h-8 w-8 text-white" />
                   </div>
                   <div className="flex-1">
                     <h3 className="text-lg font-bold text-white font-onest">TANYA JAWAB</h3>
                     <p className="text-sm text-white/70 mt-1">FAQ dan informasi umum KPPU</p>
                   </div>
                   <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
                 </div>
               </Link>

               {/* PPID */}
               <Link href="/theme-2/ppid" className="group block">
                 <div className="flex items-center p-6 rounded-xl hover:bg-[#00AA88]/10 transition-all duration-300">
                   <div className="p-4 bg-[#00AA88]/10 rounded-full mr-6 flex-shrink-0">
                     <FileText className="h-8 w-8 text-white" />
                   </div>
                   <div className="flex-1">
                     <h3 className="text-lg font-bold text-white font-onest">PPID</h3>
                     <p className="text-sm text-white/70 mt-1">Layanan informasi publik KPPU</p>
                   </div>
                   <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
                 </div>
               </Link>
            </div>
          </div>
        </section>

        {/* Spotlight Section */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-onest">Info Terkini</h2>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto font-onest">Berita terbaru, kegiatan, dan informasi dari seluruh wilayah kerja KPPU.</p>
            </div>
            
            {/* News Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Featured News */}
                <Card className="overflow-hidden bg-background shadow-xl rounded-2xl h-full">
                  <div className="relative aspect-[4/3]">
                    <Image 
                      src={highlightNews.imgSrc} 
                      alt={highlightNews.title} 
                      fill 
                      className="object-cover" 
                      data-ai-hint={highlightNews.imgHint} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">FEATURED</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="mb-2">
                        <span className="text-xs text-white/80">{highlightNews.source} • {highlightNews.date}</span>
                      </div>
                      <h3 className="text-xl font-bold font-onest text-white mb-2 leading-tight">
                        {highlightNews.title}
                      </h3>
                      <p className="text-sm text-white/80 mb-3 leading-relaxed line-clamp-2">
                        {highlightNews.subtitle}
                      </p>
                      <Button asChild size="sm" className="bg-[#00AA88] text-white hover:bg-[#00AA88]/90">
                        <Link href={highlightNews.href}>Baca Selengkapnya</Link>
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Main News */}
                <Card className="overflow-hidden bg-background shadow-lg rounded-2xl h-full">
                    <div className="relative aspect-[4/3]">
                        <Image src={mainNews.imgSrc} alt={mainNews.title} fill className="object-cover" data-ai-hint={mainNews.imgHint} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <div className="mb-2">
                                <span className="text-xs text-white/80">{mainNews.source}</span>
                            </div>
                            <h3 className="text-lg font-bold font-onest text-white mb-3 leading-tight line-clamp-2">
                                {mainNews.title}
                            </h3>
                            <Button asChild size="sm" className="bg-[#00AA88] text-white hover:bg-[#00AA88]/90">
                                <Link href={mainNews.href}>Baca Selengkapnya</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="space-y-3">
                          {otherMainNews.map((news, index) => (
                            <div key={index} className="group">
                              <h4 className="font-semibold leading-snug text-white group-hover:text-[#00AA88] transition-colors text-sm line-clamp-2">
                                <Link href={news.href}>{news.title}</Link>
                              </h4>
                              <p className="text-xs text-white/60 mt-1">{news.source}</p>
                            </div>
                          ))}
                        </div>
                    </div>
                </Card>

                {/* Activity News */}
                <Card className="overflow-hidden bg-background shadow-lg rounded-2xl h-full">
                    <div className="relative aspect-[4/3]">
                       <Image src={activityNews.imgSrc} alt={activityNews.title} fill className="object-cover" data-ai-hint={activityNews.imgHint} />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                       <div className="absolute bottom-0 left-0 right-0 p-6">
                           <div className="mb-2">
                               <span className="text-xs text-white/80">{activityNews.source}</span>
                           </div>
                           <h3 className="text-lg font-bold font-onest text-white mb-3 leading-tight line-clamp-2">
                               {activityNews.title}
                           </h3>
                           <Button asChild size="sm" className="bg-[#00AA88] text-white hover:bg-[#00AA88]/90">
                               <Link href={activityNews.href}>Baca Selengkapnya</Link>
                           </Button>
                       </div>
                    </div>
                    <div className="p-4">
                        <div className="space-y-3">
                          {otherActivityNews.map((news, index) => (
                           <div key={index} className="group">
                             <h4 className="font-semibold leading-snug text-white group-hover:text-[#00AA88] transition-colors text-sm line-clamp-2">
                               <Link href={news.href}>{news.title}</Link>
                             </h4>
                             <p className="text-xs text-white/60 mt-1">{news.source}</p>
                           </div>
                         ))}
                        </div>
                    </div>
                </Card>

                {/* Regional News */}
                <Card className="overflow-hidden bg-background shadow-lg rounded-2xl h-full">
                    <div className="relative aspect-[4/3]">
                        <Image src={regionalNews.imgSrc} alt={regionalNews.title} fill className="object-cover" data-ai-hint={regionalNews.imgHint} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <div className="mb-2">
                                <span className="text-xs text-white/80">{regionalNews.source}</span>
                            </div>
                            <h3 className="text-lg font-bold font-onest text-white mb-3 leading-tight line-clamp-2">
                                {regionalNews.title}
                            </h3>
                            <Button asChild size="sm" className="bg-[#00AA88] text-white hover:bg-[#00AA88]/90">
                                <Link href={regionalNews.href}>Baca Selengkapnya</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="space-y-3">
                          {otherRegionalNews.map((news, index) => (
                           <div key={index} className="group">
                             <h4 className="font-semibold leading-snug text-white group-hover:text-[#00AA88] transition-colors text-sm line-clamp-2">
                               <Link href={news.href}>{news.title}</Link>
                             </h4>
                             <p className="text-xs text-white/60 mt-1">{news.source}</p>
                           </div>
                         ))}
                        </div>
                    </div>
                </Card>

                {/* Additional News Cards - Placeholder for more content */}
                <Card className="overflow-hidden bg-background shadow-lg rounded-2xl h-full">
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-[#00AA88]/20 to-[#00AA88]/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <FileText className="w-12 h-12 text-[#00AA88] mx-auto mb-4" />
                                <h3 className="text-lg font-bold font-onest text-white mb-2">Berita Lainnya</h3>
                                <p className="text-sm text-white/80">Temukan berita dan informasi terkini lainnya</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <Button variant="outline" className="w-full text-white border-white/20 hover:bg-white/10">
                            Lihat Semua Berita
                        </Button>
                    </div>
                </Card>

                <Card className="overflow-hidden bg-background shadow-lg rounded-2xl h-full">
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-[#00AA88]/20 to-[#00AA88]/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <Megaphone className="w-12 h-12 text-[#00AA88] mx-auto mb-4" />
                                <h3 className="text-lg font-bold font-onest text-white mb-2">Siaran Pers</h3>
                                <p className="text-sm text-white/80">Pengumuman resmi dan siaran pers KPPU</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <Button variant="outline" className="w-full text-white border-white/20 hover:bg-white/10">
                            Lihat Siaran Pers
                        </Button>
                    </div>
                </Card>
            </div>
          </div>
        </section>

        {/* About KPPU Section - Stacked Layout */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-onest">Tentang KPPU</h2>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto font-onest">Lembaga independen yang mengawasi persaingan usaha di Indonesia.</p>
            </div>
            
            {/* Image Section */}
            <div className="mb-16">
              <div className="overflow-hidden shadow-lg rounded-2xl max-w-4xl mx-auto">
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
            
            {/* Text Content Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h3 className="text-3xl font-bold font-onest text-white mb-6">Pengawas Persaingan Usaha</h3>
              <p className="text-white/80 leading-relaxed mb-8 font-onest text-lg">
                 Komisi Pengawas Persaingan Usaha (KPPU) adalah lembaga independen yang dibentuk untuk mengawasi pelaksanaan Undang-Undang No. 5 Tahun 1999 tentang Larangan Praktek Monopoli dan Persaingan Usaha Tidak Sehat. Kami bekerja untuk memastikan setiap pelaku usaha di Indonesia bersaing secara adil dan sehat, demi terwujudnya ekonomi yang efisien dan kesejahteraan masyarakat.
              </p>
              <Button asChild variant="link" className="p-0 h-auto text-white font-bold font-onest text-lg">
                 <Link href="/theme-2/profil/visi-misi">Selengkapnya <ArrowRight className="w-4 h-4 ml-2"/></Link>
               </Button>
            </div>
            
            {/* Three Cards Row - Horizontal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-8 bg-white/10 shadow-lg rounded-2xl text-center">
                <div className="bg-[#00AA88]/20 text-[#00AA88] p-4 rounded-full mb-6 mx-auto w-fit">
                    <Gavel className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold font-onest text-white mb-4">Penegakan Hukum</h4>
                <p className="text-white/80 text-sm leading-relaxed">Menindak pelanggaran hukum persaingan usaha melalui pemeriksaan dan putusan yang adil dan transparan.</p>
              </Card>
              <Card className="p-8 bg-white/10 shadow-lg rounded-2xl text-center">
                 <div className="bg-[#00AA88]/20 text-[#00AA88] p-4 rounded-full mb-6 mx-auto w-fit">
                    <ShieldCheck className="w-10 h-10" />
                 </div>
                 <h4 className="text-xl font-bold font-onest text-white mb-4">Advokasi Kebijakan</h4>
                 <p className="text-white/80 text-sm leading-relaxed">Memberikan saran kepada pemerintah untuk menciptakan kebijakan yang pro-persaingan dan mendukung UMKM.</p>
              </Card>
              <Card className="p-8 bg-white/10 shadow-lg rounded-2xl text-center">
                 <div className="bg-[#00AA88]/20 text-[#00AA88] p-4 rounded-full mb-6 mx-auto w-fit">
                    <Briefcase className="w-10 h-10" />
                 </div>
                 <h4 className="text-xl font-bold font-onest text-white mb-4">Pengawasan Kemitraan</h4>
                 <p className="text-white/80 text-sm leading-relaxed">Mengawasi pelaksanaan kemitraan UMKM agar terjalin secara sehat dan adil untuk semua pihak.</p>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white font-onest">Indonesia dalam Angka</h2>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto font-onest">Sekilas data dan statistik kunci terkait pengawasan persaingan usaha di Indonesia.</p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Skor IPU Nasional */}
              <div className="bg-white/10 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#00AA88]/20 text-[#00AA88] p-3 rounded-lg">
                      <GaugeCircle className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-onest">Skor IPU Nasional 2023</h3>
                      <p className="text-white/60 text-sm">Tingkat persaingan usaha yang 'Tinggi'</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white font-onest">4.92</div>
                  </div>
                </div>
                <div className="w-full bg-white/20 rounded-full h-4">
                  <div className="bg-[#00AA88] h-4 rounded-full" style={{ width: '49.2%' }}></div>
                </div>
              </div>

              {/* Putusan Perkara */}
              <div className="bg-white/10 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#00AA88]/20 text-[#00AA88] p-3 rounded-lg">
                      <FileText className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-onest">Putusan Perkara</h3>
                      <p className="text-white/60 text-sm">Jumlah putusan yang dikeluarkan pada tahun 2023</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white font-onest">78</div>
                  </div>
                </div>
                <div className="w-full bg-white/20 rounded-full h-4">
                  <div className="bg-[#00AA88] h-4 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>

              {/* Total Denda */}
              <div className="bg-white/10 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#00AA88]/20 text-[#00AA88] p-3 rounded-lg">
                      <Landmark className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-onest">Total Denda</h3>
                      <p className="text-white/60 text-sm">Akumulasi denda yang dikenakan sepanjang tahun 2023</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white font-onest">Rp 120 M</div>
                  </div>
                </div>
                <div className="w-full bg-white/20 rounded-full h-4">
                  <div className="bg-[#00AA88] h-4 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              {/* Notifikasi Merger & Akuisisi */}
              <div className="bg-white/10 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#00AA88]/20 text-[#00AA88] p-3 rounded-lg">
                      <Megaphone className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-onest">Notifikasi Merger & Akuisisi</h3>
                      <p className="text-white/60 text-sm">Jumlah notifikasi yang diterima dan dinilai pada 2023</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white font-onest">152</div>
                  </div>
                </div>
                <div className="w-full bg-white/20 rounded-full h-4">
                  <div className="bg-[#00AA88] h-4 rounded-full" style={{ width: '76%' }}></div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Commissioners Section */}
        <section className="py-24 lg:py-32 bg-[#00AA88] text-white">
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold font-onest">Jajaran Komisioner KPPU</h2>
            </div>
            <div className="max-w-6xl mx-auto">
              {/* Header Text */}
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 font-onest">Salam Kenal!</h3>
                <div className="space-y-4 text-white/80 leading-relaxed max-w-4xl mx-auto font-onest">
                  <p>KPPU adalah lembaga independen yang bertugas mengawasi pelaksanaan UU No.5/1999 dan UU No.20/2008, terdiri dari Anggota KPPU yang diangkat oleh Presiden Republik Indonesia atas persetujuan Dewan Perwakilan Rakyat.</p>
                  <p>Anggota KPPU terpilih periode kelima melalui Keputusan Presiden Nomor 8/P Tahun 2024 memiliki masa kerja tahun 2024-2029. Kami berkomitmen untuk mensejahterakan rakyat melalui penegakan hukum persaingan usaha dan pengawasan kemitraan UMKM yang sehat di Indonesia.</p>
                </div>
              </div>
              
              {/* Performance Charts */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* PN 2018-2023 */}
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-3">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-white/20" />
                      <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${69 * 2.51} ${100 * 2.51}`} className="transition-all duration-1000 ease-out" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-lg font-bold text-white">69%</div>
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">PN 2018-2023</h4>
                  <p className="text-xs text-white/60">Persentase Putusan Pelanggaran</p>
                </div>

                {/* MA 2018-2023 */}
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-3">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-white/20" />
                      <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${94 * 2.51} ${100 * 2.51}`} className="transition-all duration-1000 ease-out" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-lg font-bold text-white">94%</div>
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">MA 2018-2023</h4>
                  <p className="text-xs text-white/60">Persentase Putusan Mahkamah Agung</p>
                </div>

                {/* Denda 2018-2023 */}
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-3">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-white/20" />
                      <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${72 * 2.51} ${100 * 2.51}`} className="transition-all duration-1000 ease-out" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-lg font-bold text-white">72%</div>
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Denda 2018-2023</h4>
                  <p className="text-xs text-white/60">Persentase Realisasi Denda</p>
                </div>
              </div>
              
              {/* Commissioners Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {commissioners.map((commissioner, index) => (
                  <div key={commissioner.name} className="flex items-center gap-6 bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="relative overflow-hidden rounded-xl w-20 h-20 flex-shrink-0">
                      <Image
                        src={commissioner.image}
                        alt={commissioner.name}
                        fill
                        className="object-cover shadow-lg"
                        data-ai-hint={commissioner.hint}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-white font-onest mb-2">{commissioner.name}</h4>
                      <p className="text-white/60 text-sm">Komisioner KPPU Periode 2024-2029</p>
                    </div>
                    <div className="text-white/40 text-sm font-onest">
                      #{String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Media & Publikasi Section - Full Width Video + List */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-onest">Media & Publikasi</h2>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto font-onest">Akses berbagai materi publikasi dan media dari KPPU.</p>
            </div>
            
            {/* Video Section - Full Width */}
            <div className="mb-16">
              <Card className="p-4 shadow-lg rounded-2xl overflow-hidden max-w-4xl mx-auto">
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
            
            {/* Media & Publications Grid */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { 
                    title: "JDIH KPPU - Kumpulan Produk Hukum", 
                    description: "Database lengkap produk hukum KPPU yang dapat diakses secara digital",
                    image: "/images/media/01.png",
                    hint: "legal documents database mobile app"
                  },
                  { 
                    title: "Publikasi Buku KPPU", 
                    description: "Koleksi buku dan publikasi terkait persaingan usaha dan hukum kompetisi",
                    image: "/images/media/02.jpg",
                    hint: "books publication stack competition law"
                  },
                  { 
                    title: "Majalah Kompetisi", 
                    description: "Majalah berkala yang membahas isu-isu terkini persaingan usaha",
                    image: "/images/media/03.jpg",
                    hint: "magazine covers competition business"
                  },
                  { 
                    title: "Perpustakaan Persaingan Usaha (PERPUS)", 
                    description: "Perpustakaan digital dengan koleksi literatur persaingan usaha terlengkap",
                    image: "/images/media/04.jpg",
                    hint: "digital library books collection"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-6 bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="relative overflow-hidden rounded-xl w-24 h-24 flex-shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-cover" 
                        data-ai-hint={item.hint}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-white font-onest mb-2">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-white/40" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Region Grid Section - Stacked Layout */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#00AA88] dark:text-white font-onest">Kantor Wilayah</h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-onest">
                KPPU hadir di 7 (tujuh) wilayah kerja yang tersebar di seluruh Indonesia untuk mendekatkan layanan dan pengawasan persaingan usaha kepada masyarakat dan pelaku usaha di daerah.
              </p>
            </div>
            
            {/* Map Section */}
            <div className="mb-16">
              <div className="relative h-80 md:h-96 bg-gray-200 dark:bg-gray-800/50 rounded-2xl max-w-4xl mx-auto">
                <Image src="/images/bg/map.png" alt="Peta Kantor Wilayah KPPU" fill className="object-cover rounded-2xl opacity-90" data-ai-hint="indonesia map" />
              </div>
            </div>
            
            {/* Kanwil List */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                  { name: "Kanwil I", location: "Medan", region: "Sumatera Utara, Aceh, Sumatera Barat" },
                  { name: "Kanwil II", location: "Palembang", region: "Sumatera Selatan, Jambi, Bengkulu, Lampung" },
                  { name: "Kanwil III", location: "Bandung", region: "Jawa Barat, Banten, DKI Jakarta" },
                  { name: "Kanwil IV", location: "Surabaya", region: "Jawa Timur, Jawa Tengah, DI Yogyakarta" },
                  { name: "Kanwil V", location: "Makassar", region: "Sulawesi Selatan, Sulawesi Tenggara, Sulawesi Tengah" },
                  { name: "Kanwil VI", location: "Manado", region: "Sulawesi Utara, Gorontalo, Maluku Utara" },
                  { name: "Kanwil VII", location: "Denpasar", region: "Bali, Nusa Tenggara Barat, Nusa Tenggara Timur" }
                ].map((kanwil) => (
                  <div key={kanwil.name} className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                    <h3 className="font-bold text-white font-onest mb-2">{kanwil.name}</h3>
                    <p className="text-white/80 text-sm mb-1">{kanwil.location}</p>
                    <p className="text-white/60 text-xs">{kanwil.region}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Button size="lg" variant="default" asChild className="font-onest">
                  <Link href="/theme-2/kanwil">Lihat Semua Kantor Wilayah <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

