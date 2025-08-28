'use client';

import Image from 'next/image';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ArrowRight, Search, FileText, Gavel, Scale, Megaphone, TrendingUp, Users, Award, BookOpen, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Input } from '../../components/ui/input';
import { Header } from '../../components/header';
import { Theme4Footer } from './components/theme4-footer';

export default function Theme4HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-gray-800 dark:text-white overflow-x-hidden">
      <Header />
      <main className="flex-1">
        {/* Hero Section - Theme 1 (Full width) */}
        <section className="bg-[#1e3a8a] text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <img src="/images/bg/theme-4.jpg" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
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
                    className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-white/80 font-poppins"
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
                                                                         <Search className="w-6 h-6 text-gray-400 group-hover:text-[#1e3a8a] transition-colors duration-300" />
                                </div>
                                <Input
                                    type="search"
                                    placeholder="Cari putusan, regulasi, berita, atau informasi lainnya..."
                                    className="flex-1 h-16 border-0 bg-transparent text-gray-700 placeholder:text-gray-400 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none pr-6 shadow-none font-poppins"
                                />
                            </div>
                                                         <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1e3a8a]/0 via-[#1e3a8a]/50 to-[#1e3a8a]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>



        {/* Main Services Section - Theme 1 (Grid 6 kolom) */}
         <section className="py-4 lg:py-4 bg-white dark:bg-gray-900">
           <div className="container mx-auto">
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
               {/* Regulasi */}
               <Link href="/theme-4/regulasi" className="group text-center">
                    <div className="p-6 rounded-xl hover:bg-[#dc2626]/10 transition-all duration-300">
                        <div className="p-4 bg-[#dc2626]/20 dark:bg-[#dc2626]/10 rounded-full mb-4 mx-auto w-fit">
                          <FileText className="h-8 w-8 text-[#dc2626] dark:text-white" />
                       </div>
                        <h3 className="text-sm font-bold text-gray-800 dark:text-white font-poppins">REGULASI</h3>
                   </div>
               </Link>

               {/* Putusan */}
               <Link href="/theme-4/putusan" className="group text-center">
                    <div className="p-6 rounded-xl hover:bg-[#dc2626]/10 transition-all duration-300">
                        <div className="p-4 bg-[#dc2626]/10 rounded-full mb-4 mx-auto w-fit">
                          <Gavel className="h-8 w-8 text-[#dc2626] dark:text-white" />
                       </div>
                        <h3 className="text-sm font-bold text-gray-800 dark:text-white font-poppins">PUTUSAN</h3>
                   </div>
               </Link>

               {/* Jadwal Sidang */}
               <Link href="/theme-4/jadwal-sidang" className="group text-center">
                    <div className="p-6 rounded-xl hover:bg-[#dc2626]/10 transition-all duration-300">
                        <div className="p-4 bg-[#dc2626]/10 rounded-full mb-4 mx-auto w-fit">
                          <Scale className="h-8 w-8 text-[#dc2626] dark:text-white" />
                       </div>
                        <h3 className="text-sm font-bold text-gray-800 dark:text-white font-poppins">JADWAL SIDANG</h3>
                   </div>
               </Link>

               {/* Siaran Pers */}
               <Link href="/theme-4/siaran-pers" className="group text-center">
                    <div className="p-6 rounded-xl hover:bg-[#dc2626]/10 transition-all duration-300">
                        <div className="p-4 bg-[#dc2626]/10 rounded-full mb-4 mx-auto w-fit">
                          <Megaphone className="h-8 w-8 text-[#dc2626] dark:text-white" />
                       </div>
                        <h3 className="text-sm font-bold text-gray-800 dark:text-white font-poppins">SIARAN PERS</h3>
                   </div>
               </Link>

               {/* Tanya Jawab */}
               <Link href="/theme-4/tanya-jawab" className="group text-center">
                    <div className="p-6 rounded-xl hover:bg-[#dc2626]/10 transition-all duration-300">
                        <div className="p-4 bg-[#dc2626]/10 rounded-full mb-4 mx-auto w-fit">
                          <Search className="h-8 w-8 text-[#dc2626] dark:text-white" />
                       </div>
                        <h3 className="text-sm font-bold text-gray-800 dark:text-white font-poppins">TANYA JAWAB</h3>
                   </div>
               </Link>

               {/* PPID */}
               <Link href="/theme-4/ppid" className="group text-center">
                    <div className="p-6 rounded-xl hover:bg-[#dc2626]/10 transition-all duration-300">
                        <div className="p-4 bg-[#dc2626]/10 rounded-full mb-4 mx-auto w-fit">
                          <FileText className="h-8 w-8 text-[#dc2626] dark:text-white" />
                       </div>
                        <h3 className="text-sm font-bold text-gray-800 dark:text-white font-poppins">PPID</h3>
                   </div>
               </Link>
             </div>
           </div>
         </section>



        {/* Berita Terkini Section */}
        <section className="py-8 lg:py-12 bg-[#dc2626]">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-4">Berita Terkini</h2>
              <p className="text-white/80 font-poppins">Informasi terbaru dari KPPU</p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "KPPU Terus Melakukan Pengawasan atas Komoditas Beras",
                    source: "JawaPos.com",
                    date: "20 Januari 2024",
                    image: "/images/news/01.jpeg",
                    hint: "kppu commission hearing meeting"
                  },
                  {
                    title: "Pertama dalam Sejarah: 97 Pelaku Usaha Menjadi Terlapor dalam Sidang Dugaan Kartel Pinjol",
                    source: "Hukumonline.com",
                    date: "18 Januari 2024",
                    image: "/images/news/02.jpeg",
                    hint: "government meeting conference"
                  },
                  {
                    title: "Sidang Perkara terkait Dugaan Hambatan Usaha PT Laboratorium Medio Pratama Masuk ke Tahap Pemeriksaan Lanjutan",
                    source: "Kontan.co.id",
                    date: "15 Januari 2024",
                    image: "/images/news/03.jpg",
                    hint: "bps statistics office meeting"
                  },
                  {
                    title: "KPPU Gelar Rapat Koordinasi dengan Pemerintah Daerah",
                    source: "Antaranews.com",
                    date: "12 Januari 2024",
                    image: "/images/news/01.jpeg",
                    hint: "government coordination meeting"
                  }
                ].map((news, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-6 bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-[#1e3a8a]"
                  >
                    <div className="relative overflow-hidden rounded-xl w-24 h-24 flex-shrink-0">
                      <Image 
                        src={news.image} 
                        alt={news.title} 
                        fill 
                        className="object-cover" 
                        data-ai-hint={news.hint}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-white font-poppins mb-2 hover:text-[#dc2626] transition-colors">
                        {news.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-white/70">
                        <span>{news.source}</span>
                        <span>•</span>
                        <span>{news.date}</span>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-white/70" />
                  </motion.div>
                 ))}
               </div>
             </div>
           </div>
         </section>

        {/* About KPPU Section - Theme 1 (2 kolom) */}
         <section className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
           <div className="container mx-auto">
             <div className="text-center mb-16 md:mb-20">
               <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white font-poppins">Tentang KPPU</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-white/80 max-w-2xl mx-auto font-poppins">Lembaga independen yang mengawasi persaingan usaha di Indonesia.</p>
             </div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
               <div>
                 <h3 className="text-3xl font-bold font-poppins text-gray-800 dark:text-white mb-4">Pengawas Persaingan Usaha</h3>
                     <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-6 font-poppins">
                        Komisi Pengawas Persaingan Usaha (KPPU) adalah lembaga independen yang dibentuk untuk mengawasi pelaksanaan Undang-Undang No. 5 Tahun 1999 tentang Larangan Praktek Monopoli dan Persaingan Usaha Tidak Sehat. Kami bekerja untuk memastikan setiap pelaku usaha di Indonesia bersaing secara adil dan sehat, demi terwujudnya ekonomi yang efisien dan kesejahteraan masyarakat.
                      </p>
                     <Button asChild variant="link" className="p-0 h-auto self-start text-[#dc2626] dark:text-white font-bold font-poppins">
                        <Link href="/theme-4/profil/visi-misi">Selengkapnya <ArrowRight className="w-4 h-4 ml-2"/></Link>
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
           </div>
         </section>

        {/* Statistics Section - Theme 2 (Bar charts) */}
         <section className="py-24 lg:py-32 bg-gradient-to-br from-red-900 to-blue-900 text-white">
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-poppins">Indonesia dalam Angka</h2>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto font-poppins">Sekilas data dan statistik kunci terkait pengawasan persaingan usaha di Indonesia.</p>
            </div>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { label: "Skor IPU Nasional 2023", value: "4.92", description: "Tingkat persaingan usaha yang 'Tinggi'", percentage: 49.2, icon: TrendingUp },
                { label: "Putusan Perkara", value: "78", description: "Jumlah putusan yang dikeluarkan pada tahun 2023", percentage: 78, icon: Gavel },
                { label: "Total Denda", value: "Rp 120 M", description: "Akumulasi denda yang dikenakan sepanjang tahun 2023", percentage: 85, icon: Award },
                { label: "Notifikasi Merger & Akuisisi", value: "152", description: "Jumlah notifikasi yang diterima dan dinilai pada 2023", percentage: 76, icon: BookOpen }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 rounded-xl">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white font-poppins">{stat.label}</h3>
                        <p className="text-white/60 text-sm">{stat.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white font-poppins">{stat.value}</div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div 
                                             className="bg-gradient-to-r from-red-400 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${stat.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commissioners Section - Theme 1 (Grid 3x3) */}
         <section className="py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white font-poppins">Jajaran Komisioner KPPU</h2>
               <p className="mt-4 text-lg text-gray-600 dark:text-white/80 max-w-2xl mx-auto font-poppins">Tim komisioner yang berdedikasi untuk mengawasi persaingan usaha di Indonesia.</p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { name: 'M. Fanshurullah Asa', image: '/images/people/mfa.png', hint: 'portrait commissioner formal suit' },
                  { name: 'Aru Armando', image: '/images/people/aa.png', hint: 'portrait commissioner formal suit' },
                  { name: 'Moh. Noor Rifiq', image: '/images/people/mnr.png', hint: 'portrait commissioner formal suit' },
                  { name: 'Gopprera Panggabean', image: '/images/people/gp.png', hint: 'portrait commissioner formal suit' },
                  { name: 'Hilman Pujana', image: '/images/people/hp.png', hint: 'portrait commissioner formal suit' },
                  { name: 'Mohammad Reza', image: '/images/people/mr.png', hint: 'portrait commissioner formal suit' },
                  { name: 'Rhido Jusmadi', image: '/images/people/rj.png', hint: 'portrait commissioner formal suit' },
                  { name: 'Eugenia Mardanugraha', image: '/images/people/em.png', hint: 'portrait commissioner formal suit' },
                  { name: 'Budi Jaya Santoso', image: '/images/people/bjs.png', hint: 'portrait commissioner formal suit' }
                ].map((commissioner, index) => (
                  <div key={commissioner.name} className="group">
                    <Card className="overflow-hidden shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="relative aspect-square">
                        <Image
                          src={commissioner.image}
                          alt={commissioner.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={commissioner.hint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                          <h4 className="font-bold text-lg font-poppins leading-tight">{commissioner.name}</h4>
                          <p className="text-white/80 text-sm mt-1">Komisioner KPPU</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Media & Publikasi Section - Theme 2 (Full width video) */}
         <section className="py-24 lg:py-32 bg-gray-100 dark:bg-gray-700">
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white font-poppins">Media & Publikasi</h2>
               <p className="mt-4 text-lg text-gray-600 dark:text-white/80 max-w-2xl mx-auto font-poppins">Akses berbagai materi publikasi dan media dari KPPU.</p>
            </div>
            
            {/* Full Width Video */}
            <div className="max-w-6xl mx-auto mb-12">
              <div className="relative aspect-video bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/RBcyHEk3wns"
                  title="Video Company Profile KPPU"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            {/* Media List */}
             <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "JDIH KPPU - Kumpulan Produk Hukum", image: "/images/media/01.png", hint: "legal documents database mobile app" },
                { title: "Publikasi Buku KPPU", image: "/images/media/02.jpg", hint: "books publication stack competition law" },
                { title: "Majalah Kompetisi", image: "/images/media/03.jpg", hint: "magazine covers competition business" },
                { title: "Perpustakaan Persaingan Usaha (PERPUS)", image: "/images/media/04.jpg", hint: "digital library books collection" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-6 bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
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
                                                              <h3 className="font-bold text-lg text-gray-800 dark:text-white font-poppins mb-2 hover:text-[#dc2626] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <ArrowRight className="h-5 w-5 text-white/70" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Region Grid Section - Theme 1 (2 kolom) */}
         <section className="py-24 lg:py-32 bg-[#dc2626]">
           <div className="container mx-auto">
             <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
               <div className="">
                 <h2 className="text-4xl md:text-5xl font-bold text-white font-poppins">Kantor Wilayah</h2>
                 <p className="mt-4 text-lg text-white/80 dark:text-white leading-relaxed max-w-lg font-poppins">
                     KPPU hadir di 7 (tujuh) wilayah kerja yang tersebar di seluruh Indonesia untuk mendekatkan layanan dan pengawasan persaingan usaha kepada masyarakat dan pelaku usaha di daerah.
                   </p>
                  <Button size="lg" variant="default" asChild className="mt-8 font-poppins">
                    <Link href="/theme-4/kanwil">Lihat Semua Kantor Wilayah <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
               </div>
               <div className="relative h-80 md:h-80 bg-gray-200 dark:bg-gray-800/50 rounded-2xl">
                 <Image src="/images/bg/map.png" alt="Peta Kantor Wilayah KPPU" fill className="object-cover rounded-2xl opacity-90" data-ai-hint="indonesia map" />
               </div>
             </div>
           </div>
        </section>

      </main>
      <Theme4Footer />
    </div>
  );
}

