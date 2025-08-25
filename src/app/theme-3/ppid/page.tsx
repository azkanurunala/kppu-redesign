
'use client';

import React from 'react';
import { motion } from 'framer-motion';


import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChartComponent } from '@/components/ui/bar-chart';
import { FileText, Database, ShieldCheck, Calendar, DollarSign, Newspaper, Youtube, ArrowRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const quickAccessItems = [
  { icon: FileText, label: "Permohonan Informasi" },
  { icon: Database, label: "Daftar Informasi Publik" },
  { icon: ShieldCheck, label: "Maklumat Layanan" },
];

const publicationItems = [
  { icon: Calendar, title: "Kalender Kerja" },
  { icon: DollarSign, title: "Standar Biaya" },
  { icon: Newspaper, title: "Berita Terbaru" },
];

const innovationItems = [
    { title: "OJS-JPU", description: "Open Journal System Jurnal Persaingan Usaha" },
    { title: "JDIH KPPU", description: "Jaringan Dokumentasi dan Informasi Hukum KPPU" },
    { title: "SIKERMA", description: "Sistem Informasi Kerja Sama KPPU" },
    { title: "DATABASE PUTUSAN KPPU", description: "Putusan" },
    { title: "PERPUS", description: "Perpustakaan Persaingan Usaha" },
    { title: "SPAN LAPOR!", description: "Layanan Aspirasi dan Pengaduan Online Rakyat" },
];

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export default function PPIDPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">

      <main className="flex-1">
        <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <img src="/images/bg/theme-3.jpg" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
            </div>
            <div className="container mx-auto relative z-10">
                <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Keterbukaan Informasi Publik</h1>
                <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                    <Link href="/" className="hover:underline">Beranda</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span>PPID</span>
                </div>
                <p className="mt-6 text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
                    Akses informasi publik yang transparan dan akuntabel sesuai dengan amanat Undang-Undang.
                </p>
            </div>
        </section>

        <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-24 lg:py-32 bg-card relative overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 opacity-10">
                <Image 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.png?auto=compress&cs=tinysrgb&w=1920&h=1080"
                    alt="Business Network Background"
                    fill
                    className="object-cover"
                    data-ai-hint="business network connections map"
                />
            </div>
            <div className="container mx-auto relative z-10">
                <div className="text-center mb-20">
                     <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-primary-dark dark:text-white">Layanan Utama PPID</h2>
                     <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg leading-relaxed">Akses cepat ke layanan utama Pejabat Pengelola Informasi dan Dokumentasi (PPID) KPPU.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    {quickAccessItems.map((item, index) => (
                        <motion.div
                            key={index}
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true, amount: 0.5 }}
                             transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 bg-background rounded-2xl">
                               <CardContent className="p-10 flex flex-col items-center">
                                    <div className="p-6 bg-primary/10 rounded-full mb-8">
                                         <item.icon className="h-14 w-14 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold font-poppins text-primary-dark dark:text-white">{item.label}</h3>
                               </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>

        <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-24 lg:py-32 bg-background"
        >
            <div className="container mx-auto">
                 <div className="text-center mb-20">
                     <p className="text-primary font-semibold mb-2 uppercase tracking-widest">Statistik</p>
                     <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-primary-dark dark:text-white">Layanan Informasi Publik</h2>
                </div>
                <Card className="shadow-2xl rounded-2xl">
                    <CardContent className="p-8">
                        <div className="h-[450px]">
                            <BarChartComponent />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </motion.section>

         <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-24 lg:py-32 bg-card"
        >
            <div className="container mx-auto">
                 <div className="text-center mb-20">
                    <p className="text-primary font-semibold mb-2 uppercase tracking-widest">Publikasi</p>
                    <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-primary-dark dark:text-white">Publikasi & Dokumen</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    {publicationItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center p-8 bg-background rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                           <div className="p-5 bg-[#B8860B]/10 rounded-full mb-6">
                                <item.icon className="h-10 w-10 text-[#B8860B]" />
                           </div>
                           <h3 className="text-xl font-bold font-poppins text-primary-dark dark:text-white">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>

        <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-24 lg:py-32 bg-background"
        >
            <div className="container mx-auto">
                 <div className="text-center mb-20">
                    <p className="text-primary font-semibold mb-2 uppercase tracking-widest">Inovasi</p>
                    <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-primary-dark dark:text-white">Inovasi Digital KPPU</h2>
                     <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-lg leading-relaxed">Berbagai inovasi digital untuk meningkatkan kualitas layanan dan transparansi.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {innovationItems.map((item, index) => (
                         <motion.div
                            key={index}
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true, amount: 0.5 }}
                             transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="hover:border-primary transition-colors bg-card hover:shadow-xl rounded-2xl h-full">
                                <CardHeader>
                                    <CardTitle className="text-primary font-poppins text-xl">{item.title}</CardTitle>
                                </CardHeader>
                               <CardContent>
                                    <p className="text-muted-foreground">{item.description}</p>
                               </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>

        <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-24 lg:py-32 bg-primary-dark text-white"
        >
            <div className="container mx-auto">
                 <div className="text-center mb-20">
                     <h2 className="text-4xl lg:text-5xl font-bold font-poppins">Galeri & Media</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="md:col-span-3">
                        <div className="relative aspect-video overflow-hidden shadow-lg group rounded-2xl">
                            <Image src="https://images.pexels.com/photos/3184150/pexels-photo-3184150.jpeg?auto=compress&cs=tinysrgb&w=600&h=338" fill className="object-cover" alt="Video PPID" data-ai-hint="youtube thumbnail" />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-80">
                                <Youtube className="w-20 h-20 text-red-600 group-hover:text-red-500 cursor-pointer transition-transform group-hover:scale-110" />
                            </div>
                        </div>
                    </div>
                     <div className="md:col-span-2 grid grid-cols-2 gap-6">
                         <Image src="https://images.pexels.com/photos/3184150/pexels-photo-3184150.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" width={300} height={200} alt="Media 1" className="object-cover w-full h-full shadow-lg rounded-2xl" data-ai-hint="man presenting" />
                         <Image src="https://images.pexels.com/photos/3184150/pexels-photo-3184150.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" width={300} height={200} alt="Media 2" className="object-cover w-full h-full shadow-lg rounded-2xl" data-ai-hint="woman presenting" />
                         <Image src="https://images.pexels.com/photos/3184150/pexels-photo-3184150.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" width={300} height={200} alt="Media 3" className="object-cover w-full h-full shadow-lg rounded-2xl" data-ai-hint="office meeting" />
                         <Image src="https://images.pexels.com/photos/3184150/pexels-photo-3184150.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" width={300} height={200} alt="Media 4" className="object-cover w-full h-full shadow-lg rounded-2xl" data-ai-hint="person writing" />
                    </div>
                </div>
            </div>
        </motion.section>
      </main>

    </div>
  );
}

    

