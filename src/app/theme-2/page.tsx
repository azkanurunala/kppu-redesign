'use client';

import Image from 'next/image';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ArrowRight, Search, FileText, Gavel, Scale, Megaphone } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Input } from '../../components/ui/input';

export default function Theme2HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#1B425F] text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <img src="/images/bg/map-bw-tq.png" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
            </div>
            <div className="container mx-auto relative z-10 text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold font-onest leading-tight"
                >
                    Mewujudkan Persaingan Usaha yang Sehat
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-white/80 font-onest"
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
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                        <div className="relative bg-white/95 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden" style={{ marginBottom: '88px' }}>
                            <div className="flex items-center">
                                <div className="pl-6 pr-4 py-5 flex-shrink-0">
                                    <Search className="w-6 h-6 text-gray-400 group-hover:text-[#1B425F] transition-colors duration-300" />
                                </div>
                                <Input
                                    type="search"
                                    placeholder="Cari putusan, regulasi, berita, atau informasi lainnya..."
                                    className="flex-1 h-16 border-0 bg-transparent text-gray-700 placeholder:text-gray-400 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none pr-6 shadow-none font-onest"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1B425F]/0 via-[#1B425F]/50 to-[#1B425F]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
        
        {/* Main Services Section */}
        <section className="py-4 lg:py-4 bg-blue-100 dark:bg-[#00AA88]">
           <div className="container mx-auto">
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
               {/* Regulasi */}
               <Link href="/theme-2/regulasi" className="group text-center">
                 <div className="p-6 rounded-xl hover:bg-[#1B425F]/10 transition-all duration-300">
                   <div className="p-4 bg-[#1B425F]/10 rounded-full mb-4 mx-auto w-fit">
                     <FileText className="h-8 w-8 text-[#1B425F]" />
                   </div>
                   <h3 className="text-sm font-bold text-[#1B425F] font-onest">REGULASI</h3>
                 </div>
               </Link>

               {/* Putusan */}
               <Link href="/theme-2/putusan" className="group text-center">
                 <div className="p-6 rounded-xl hover:bg-[#1B425F]/10 transition-all duration-300">
                   <div className="p-4 bg-[#1B425F]/10 rounded-full mb-4 mx-auto w-fit">
                     <Gavel className="h-8 w-8 text-[#1B425F]" />
                   </div>
                   <h3 className="text-sm font-bold text-[#1B425F] font-onest">PUTUSAN</h3>
                 </div>
               </Link>

               {/* Jadwal Sidang */}
               <Link href="/theme-2/jadwal-sidang" className="group text-center">
                 <div className="p-6 rounded-xl hover:bg-[#1B425F]/10 transition-all duration-300">
                   <div className="p-4 bg-[#1B425F]/10 rounded-full mb-4 mx-auto w-fit">
                     <Scale className="h-8 w-8 text-[#1B425F]" />
                   </div>
                   <h3 className="text-sm font-bold text-[#1B425F] font-onest">JADWAL SIDANG</h3>
                 </div>
               </Link>

               {/* Siaran Pers */}
               <Link href="/theme-2/siaran-pers" className="group text-center">
                 <div className="p-6 rounded-xl hover:bg-[#1B425F]/10 transition-all duration-300">
                   <div className="p-4 bg-[#1B425F]/10 rounded-full mb-4 mx-auto w-fit">
                     <Megaphone className="h-8 w-8 text-[#1B425F]" />
                   </div>
                   <h3 className="text-sm font-bold text-[#1B425F] font-onest">SIARAN PERS</h3>
                 </div>
               </Link>

               {/* Tanya Jawab */}
               <Link href="/theme-2/tanya-jawab" className="group text-center">
                 <div className="p-6 rounded-xl hover:bg-[#1B425F]/10 transition-all duration-300">
                   <div className="p-4 bg-[#1B425F]/10 rounded-full mb-4 mx-auto w-fit">
                     <Search className="h-8 w-8 text-[#1B425F]" />
                   </div>
                   <h3 className="text-sm font-bold text-[#1B425F] font-onest">TANYA JAWAB</h3>
                 </div>
               </Link>

               {/* PPID */}
               <Link href="/theme-2/ppid" className="group text-center">
                 <div className="p-6 rounded-xl hover:bg-[#1B425F]/10 transition-all duration-300">
                   <div className="p-4 bg-[#1B425F]/10 rounded-full mb-4 mx-auto w-fit">
                     <FileText className="h-8 w-8 text-[#1B425F]" />
                   </div>
                   <h3 className="text-sm font-bold text-[#1B425F] font-onest">PPID</h3>
                 </div>
               </Link>
            </div>
          </div>
        </section>

        {/* About KPPU Section */}
        <section className="py-24 lg:py-32 bg-[#1B425F]">
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-onest">Tentang KPPU</h2>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto font-onest">Lembaga independen yang mengawasi persaingan usaha di Indonesia.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
              <div>
                   <h3 className="text-3xl font-bold font-onest text-white mb-4">Pengawas Persaingan Usaha</h3>
                   <p className="text-white/80 leading-relaxed mb-6 font-onest">
                      Komisi Pengawas Persaingan Usaha (KPPU) adalah lembaga independen yang dibentuk untuk mengawasi pelaksanaan Undang-Undang No. 5 Tahun 1999 tentang Larangan Praktek Monopoli dan Persaingan Usaha Tidak Sehat. Kami bekerja untuk memastikan setiap pelaku usaha di Indonesia bersaing secara adil dan sehat, demi terwujudnya ekonomi yang efisien dan kesejahteraan masyarakat.
                    </p>
                   <Button asChild variant="link" className="p-0 h-auto self-start text-white font-bold font-onest">
                      <Link href="/theme-2/profil/visi-misi">Selengkapnya <ArrowRight className="w-4 h-4 ml-2"/></Link>
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

        {/* Region Grid Section */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1B425F] dark:text-white font-onest">Kantor Wilayah</h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-lg font-onest">
                  KPPU hadir di 7 (tujuh) wilayah kerja yang tersebar di seluruh Indonesia untuk mendekatkan layanan dan pengawasan persaingan usaha kepada masyarakat dan pelaku usaha di daerah.
                </p>
                <Button size="lg" variant="default" asChild className="mt-8 font-onest">
                  <Link href="/theme-2/kanwil">Lihat Semua Kantor Wilayah <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
              <div className="relative h-80 md:h-80 bg-gray-200 dark:bg-gray-800/50 rounded-2xl">
                <Image src="/images/bg/map.png" alt="Peta Kantor Wilayah KPPU" fill className="object-cover rounded-2xl opacity-90" data-ai-hint="indonesia map" />
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

