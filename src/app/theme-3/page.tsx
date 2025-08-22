'use client';

import Image from 'next/image';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ArrowRight, Search, FileText, Gavel, Scale, Megaphone, TrendingUp, Users, Award, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Input } from '../../components/ui/input';

export default function Theme3HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <main className="flex-1">
        {/* Hero Section - Stacked Layout */}
        <section className="bg-[#5B21B6] text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <img src="/images/bg/map-bw-pp.png" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
            </div>
            <div className="container mx-auto relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Text Content - Top */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold font-inter leading-tight mb-6">
                            Mewujudkan Persaingan Usaha yang Sehat
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 font-inter leading-relaxed">
                          KPPU hadir untuk mengawasi dan memastikan persaingan usaha yang sehat di Indonesia. Jelajahi putusan, peraturan, dan informasi terkini dari Komisi Pengawas Persaingan Usaha.
                        </p>
                    </motion.div>
                    
                    {/* Search Bar - Bottom */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="relative group w-full max-w-2xl">
                            <div className="relative bg-white/95 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden" style={{ marginBottom: '88px' }}>
                                <div className="flex items-center">
                                    <div className="pl-6 pr-4 py-5 flex-shrink-0">
                                        <Search className="w-6 h-6 text-gray-400 group-hover:text-[#5B21B6] transition-colors duration-300" />
                                    </div>
                                    <Input
                                        type="search"
                                        placeholder="Cari putusan, regulasi, berita, atau informasi lainnya..."
                                        className="flex-1 h-16 border-0 bg-transparent text-gray-700 placeholder:text-gray-400 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none pr-6 shadow-none font-inter"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#5B21B6]/0 via-[#5B21B6]/50 to-[#5B21B6]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Main Services Section - Masonry Grid */}
        <section className="py-8 lg:py-12 bg-gradient-to-br from-purple-50 to-indigo-50 dark:bg-gradient-to-br dark:from-purple-900/20 dark:to-indigo-900/20">
           <div className="container mx-auto">
             <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
               {/* Regulasi */}
               <Link href="/theme-3/regulasi" className="group block break-inside-avoid">
                 <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-white/10 backdrop-blur-sm border-0">
                   <div className="text-center">
                     <div className="p-6 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mb-6 mx-auto w-fit">
                       <FileText className="h-12 w-12 text-white" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-800 dark:text-white font-inter mb-3">REGULASI</h3>
                     <p className="text-gray-600 dark:text-gray-300 text-sm">Peraturan dan regulasi terkait persaingan usaha</p>
                   </div>
                 </Card>
               </Link>

               {/* Putusan */}
               <Link href="/theme-3/putusan" className="group block break-inside-avoid">
                 <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-white/10 backdrop-blur-sm border-0">
                   <div className="text-center">
                     <div className="p-6 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl mb-6 mx-auto w-fit">
                       <Gavel className="h-12 w-12 text-white" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-800 dark:text-white font-inter mb-3">PUTUSAN</h3>
                     <p className="text-gray-600 dark:text-gray-300 text-sm">Lihat putusan-putusan KPPU terkini</p>
                   </div>
                 </Card>
               </Link>

               {/* Jadwal Sidang */}
               <Link href="/theme-3/jadwal-sidang" className="group block break-inside-avoid">
                 <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-white/10 backdrop-blur-sm border-0">
                   <div className="text-center">
                     <div className="p-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl mb-6 mx-auto w-fit">
                       <Scale className="h-12 w-12 text-white" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-800 dark:text-white font-inter mb-3">JADWAL SIDANG</h3>
                     <p className="text-gray-600 dark:text-gray-300 text-sm">Jadwal sidang KPPU yang akan datang</p>
                   </div>
                 </Card>
               </Link>

               {/* Siaran Pers */}
               <Link href="/theme-3/siaran-pers" className="group block break-inside-avoid">
                 <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-white/10 backdrop-blur-sm border-0">
                   <div className="text-center">
                     <div className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 mx-auto w-fit">
                       <Megaphone className="h-12 w-12 text-white" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-800 dark:text-white font-inter mb-3">SIARAN PERS</h3>
                     <p className="text-gray-600 dark:text-gray-300 text-sm">Berita dan pengumuman resmi KPPU</p>
                   </div>
                 </Card>
               </Link>

               {/* Tanya Jawab */}
               <Link href="/theme-3/tanya-jawab" className="group block break-inside-avoid">
                 <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-white/10 backdrop-blur-sm border-0">
                   <div className="text-center">
                     <div className="p-6 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl mb-6 mx-auto w-fit">
                       <Search className="h-12 w-12 text-white" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-800 dark:text-white font-inter mb-3">TANYA JAWAB</h3>
                     <p className="text-gray-600 dark:text-gray-300 text-sm">FAQ dan informasi umum KPPU</p>
                   </div>
                 </Card>
               </Link>

               {/* PPID */}
               <Link href="/theme-3/ppid" className="group block break-inside-avoid">
                 <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-white/10 backdrop-blur-sm border-0">
                   <div className="text-center">
                     <div className="p-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl mb-6 mx-auto w-fit">
                       <FileText className="h-12 w-12 text-white" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-800 dark:text-white font-inter mb-3">PPID</h3>
                     <p className="text-gray-600 dark:text-gray-300 text-sm">Layanan informasi publik KPPU</p>
                   </div>
                 </Card>
               </Link>
             </div>
           </div>
         </section>

        {/* Spotlight Section - List Layout */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white font-inter">Info Terkini</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-inter">Berita terbaru, kegiatan, dan informasi dari seluruh wilayah kerja KPPU.</p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
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
                }
              ].map((news, index) => (
                <div key={index} className="flex items-center gap-6 bg-white dark:bg-gray-800/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
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
                    <h3 className="font-bold text-lg text-gray-800 dark:text-white font-inter mb-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      {news.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>{news.source}</span>
                      <span>•</span>
                      <span>{news.date}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section - Circular Progress */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-inter">Indonesia dalam Angka</h2>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto font-inter">Sekilas data dan statistik kunci terkait pengawasan persaingan usaha di Indonesia.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { value: "4.92", label: "Skor IPU Nasional 2023", description: "Tingkat persaingan usaha yang 'Tinggi'", percentage: 49.2 },
                { value: "78", label: "Putusan Perkara", description: "Jumlah putusan yang dikeluarkan pada tahun 2023", percentage: 78 },
                { value: "Rp 120 M", label: "Total Denda", description: "Akumulasi denda yang dikenakan sepanjang tahun 2023", percentage: 85 },
                { value: "152", label: "Notifikasi Merger & Akuisisi", description: "Jumlah notifikasi yang diterima dan dinilai pada 2023", percentage: 76 }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-white/20" />
                      <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${stat.percentage * 2.51} ${100 * 2.51}`} className="transition-all duration-1000 ease-out" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-2xl font-bold text-white font-inter">{stat.value}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white font-inter mb-2">{stat.label}</h3>
                  <p className="text-white/60 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commissioners Section - Carousel */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white font-inter">Jajaran Komisioner KPPU</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-inter">Tim komisioner yang berdedikasi untuk mengawasi persaingan usaha di Indonesia.</p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide">
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
                  <div key={commissioner.name} className="flex-shrink-0 group">
                    <div className="relative overflow-hidden rounded-2xl aspect-square w-64 h-64">
                      <Image
                        src={commissioner.image}
                        alt={commissioner.name}
                        fill
                        className="object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={commissioner.hint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h4 className="font-bold text-lg font-inter leading-tight">{commissioner.name}</h4>
                        <p className="text-white/80 text-sm mt-1">Komisioner KPPU</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Media & Publikasi Section - Grid + Modal */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-indigo-50 dark:bg-gradient-to-br dark:from-purple-900/20 dark:to-indigo-900/20">
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white font-inter">Media & Publikasi</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-inter">Akses berbagai materi publikasi dan media dari KPPU.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: "JDIH KPPU - Kumpulan Produk Hukum", image: "/images/media/01.png", hint: "legal documents database mobile app" },
                { title: "Publikasi Buku KPPU", image: "/images/media/02.jpg", hint: "books publication stack competition law" },
                { title: "Majalah Kompetisi", image: "/images/media/03.jpg", hint: "magazine covers competition business" },
                { title: "Perpustakaan Persaingan Usaha (PERPUS)", image: "/images/media/04.jpg", hint: "digital library books collection" }
              ].map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <Card className="overflow-hidden shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="relative aspect-video">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-cover" 
                        data-ai-hint={item.hint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-bold text-lg font-inter">{item.title}</h3>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50 font-inter">
                Lihat Video Company Profile
              </Button>
            </div>
          </div>
        </section>

        {/* About KPPU Section - Tab Layout */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-inter">Tentang KPPU</h2>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto font-inter">Lembaga independen yang mengawasi persaingan usaha di Indonesia.</p>
            </div>
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="px-8 py-4 bg-white/20 backdrop-blur-sm rounded-2xl text-white font-inter font-semibold hover:bg-white/30 transition-all duration-300 border-2 border-white/20 hover:border-white/40">
                Penegakan Hukum
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-2xl text-white/70 font-inter font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/10 hover:border-white/30">
                Advokasi Kebijakan
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-2xl text-white/70 font-inter font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/10 hover:border-white/30">
                Pengawasan Kemitraan
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Gavel className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold font-inter text-white mb-4">Penegakan Hukum</h3>
                  <p className="text-white/80 leading-relaxed font-inter text-lg">
                    Komisi Pengawas Persaingan Usaha (KPPU) adalah lembaga independen yang dibentuk untuk mengawasi pelaksanaan Undang-Undang No. 5 Tahun 1999 tentang Larangan Praktek Monopoli dan Persaingan Usaha Tidak Sehat. Kami bekerja untuk memastikan setiap pelaku usaha di Indonesia bersaing secara adil dan sehat, demi terwujudnya ekonomi yang efisien dan kesejahteraan masyarakat.
                  </p>
                </div>
                
                <div className="text-center">
                  <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/20 font-inter">
                    <Link href="/theme-3/profil/visi-misi">Selengkapnya <ArrowRight className="w-4 h-4 ml-2"/></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Region Grid Section - Map Centric */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-purple-600 to-indigo-700 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/bg/map.png" alt="Peta Kantor Wilayah KPPU" fill className="object-cover opacity-20" data-ai-hint="indonesia map" />
          </div>
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-inter mb-6">Kantor Wilayah</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto font-inter">
                KPPU hadir di 7 (tujuh) wilayah kerja yang tersebar di seluruh Indonesia untuk mendekatkan layanan dan pengawasan persaingan usaha kepada masyarakat dan pelaku usaha di daerah.
              </p>
            </div>
            
            {/* Map Overlay Info */}
            <div className="relative max-w-6xl mx-auto">
              <div className="relative h-96 md:h-[500px] bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden">
                <Image src="/images/bg/map.png" alt="Peta Kantor Wilayah KPPU" fill className="object-cover" data-ai-hint="indonesia map" />
                
                {/* Overlay Info Cards */}
                <div className="absolute inset-0 p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 h-full">
                    {[
                      { name: "Kanwil I", location: "Medan", color: "from-red-500 to-pink-600" },
                      { name: "Kanwil II", location: "Palembang", color: "from-orange-500 to-amber-600" },
                      { name: "Kanwil III", location: "Bandung", color: "from-yellow-500 to-orange-600" },
                      { name: "Kanwil IV", location: "Surabaya", color: "from-green-500 to-emerald-600" },
                      { name: "Kanwil V", location: "Makassar", color: "from-blue-500 to-cyan-600" },
                      { name: "Kanwil VI", location: "Manado", color: "from-indigo-500 to-purple-600" },
                      { name: "Kanwil VII", location: "Denpasar", color: "from-purple-500 to-pink-600" }
                    ].map((kanwil, index) => (
                      <div key={kanwil.name} className="group cursor-pointer">
                        <div className={`bg-gradient-to-br ${kanwil.color} rounded-2xl p-4 text-white text-center hover:scale-110 transition-all duration-300 shadow-lg`}>
                          <div className="text-xs font-bold font-inter mb-1">{kanwil.name}</div>
                          <div className="text-xs opacity-90">{kanwil.location}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/20 font-inter">
                  <Link href="/theme-3/kanwil">Lihat Semua Kantor Wilayah <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

       </main>
     </div>
   );
 }
