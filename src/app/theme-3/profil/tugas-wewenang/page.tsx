
'use client';



import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, FileText, Gavel, Newspaper, MessageSquareQuote, Info, CheckCircle } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const tugas = [
    "Melakukan penilaian terhadap perjanjian yang dapat mengakibatkan terjadinya praktek monopoli dan atau persaingan usaha tidak sehat sebagaimana diatur dalam Pasal 4 sampai dengan Pasal 16;",
    "Melakukan penilaian terhadap kegiatan usaha dan atau tindakan pelaku usaha yang dapat mengakibatkan terjadinya praktek monopoli dan atau persaingan usaha tidak sehat sebagaimana diatur dalam Pasal 17 sampai dengan Pasal 24;",
    "Melakukan penilaian terhadap ada atau tidak adanya penyalahgunaan posisi dominan yang dapat mengakibatkan terjadinya praktek monopoli dan atau persaingan usaha tidak sehat sebagaimana diatur dalam Pasal 25 sampai dengan Pasal 28;",
    "Mengambil tindakan sesuai dengan wewenang Komisi sebagaimana diatur dalam Pasal 36;",
    "Memberikan saran dan pertimbangan terhadap kebijakan Pemerintah yang berkaitan dengan praktek monopoli dan atau persaingan usaha tidak sehat;",
    "Menyusun pedoman dan atau publikasi yang berkaitan dengan undang-undang ini;",
    "Memberikan laporan secara berkala atas hasil kerja Komisi kepada Presiden dan Dewan Perwakilan Rakyat."
];

const wewenang = [
    "Menerima laporan dari masyarakat dan atau dari pelaku usaha tentang dugaan terjadinya praktek monopoli dan atau persaingan usaha tidak sehat;",
    "Melakukan penelitian tentang dugaan adanya kegiatan usaha dan atau tindakan pelaku usaha yang dapat mengakibatkan terjadinya praktek monopoli dan atau persaingan usaha tidak sehat;",
    "Melakukan penyelidikan dan atau pemeriksaan terhadap kasus dugaan praktek monopoli dan atau persaingan usaha tidak sehat yang dilaporkan oleh masyarakat atau oleh pelaku usaha atau yang ditemukan oleh Komisi sebagai hasil penelitiannya;",
    "Menyimpulkan hasil penyelidikan dan atau pemeriksaan tentang ada atau tidak adanya praktek monopoli dan atau persaingan usaha tidak sehat;",
    "Memanggil pelaku usaha yang diduga telah melakukan pelanggaran terhadap ketentuan undang-undang ini;",
    "Memanggil dan menghadirkan saksi, saksi ahli, dan setiap orang yang dianggap mengetahui pelanggaran terhadap ketentuan undang-undang ini;",
    "Meminta bantuan penyidik untuk menghadirkan pelaku usaha, saksi, saksi ahli, atau setiap orang sebagaimana dimaksud nomor 5 dan nomor 6, yang tidak bersedia memenuhi panggilan Komisi;",
    "Meminta keterangan dari instansi Pemerintah dalam kaitannya dengan penyelidikan dan atau pemeriksaan terhadap pelaku usaha yang melanggar ketentuan undang-undang ini;",
    "Mendapatkan, meneliti, dan atau menilai surat, dokumen, atau alat bukti lain guna penyelidikan dan atau pemeriksaan;",
    "Memutuskan dan menetapkan ada atau tidak adanya kerugian di pihak pelaku usaha lain atau masyarakat;",
    "Memberitahukan putusan Komisi kepada pelaku usaha yang diduga melakukan praktek monopoli dan atau persaingan usaha tidak sehat;",
    "Menjatuhkan sanksi berupa tindakan administratif kepada pelaku usaha yang melanggar ketentuan undang-undang ini."
];

const sidebarNavItems = [
  { icon: FileText, label: "REGULASI", href: "/regulasi" },
  { icon: Gavel, label: "PUTUSAN", href: "/penindakan/perkara-persaingan" },
  { icon: Newspaper, label: "JADWAL SIDANG", href: "/jadwal-sidang" },
  { icon: FileText, label: "SIARAN PERS", href: "/publikasi/siaran-pers" },
  { icon: MessageSquareQuote, label: "TANYA JAWAB", href: "/tanya-jawab" },
  { icon: Info, label: "PPID", href: "/ppid" },
];


export default function TugasWewenangPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">

      <main className="flex-1">
        <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <img src="/images/bg/theme-3.jpg" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
            </div>
            <div className="container mx-auto relative z-10">
                <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Tugas & Wewenang</h1>
                <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                    <Link href="/" className="hover:underline">Beranda</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span>Tugas & Wewenang</span>
                </div>
            </div>
                </section>

        <section className="py-20 lg:py-24">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-16"
                        >
                            <p className="text-lg text-muted-foreground leading-relaxed">Undang-Undang No 5 Tahun 1999 menjelaskan bahwa tugas dan wewenang Komisi Pengawas Persaingan Usaha adalah sebagai berikut:</p>
                            
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark dark:text-white font-poppins mb-8">Tugas</h2>
                                <ul className="space-y-5">
                                    {tugas.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                                            <span className="text-foreground/90 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark dark:text-white font-poppins mb-8">Wewenang</h2>
                                 <ul className="space-y-5">
                                    {wewenang.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                                            <span className="text-foreground/90 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    <aside className="lg:sticky lg:top-28 h-fit">
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-xl font-poppins text-primary-dark dark:text-white">Navigasi Cepat</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <nav className="flex flex-col">
                                {sidebarNavItems.map((item, index) => (
                                    <Link key={index} href={item.href}>
                                      <div className={`flex items-center p-5 cursor-pointer hover:bg-primary/10 transition-colors text-foreground/80 font-semibold ${index !== sidebarNavItems.length - 1 ? 'border-b border-border/50' : ''}`}>
                                          <item.icon className="h-5 w-5 text-primary mr-4" />
                                          <span>{item.label}</span>
                                          <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground" />
                                      </div>
                                    </Link>
                                ))}
                                </nav>
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </div>
        </section>
      </main>

    </div>
  );
}


