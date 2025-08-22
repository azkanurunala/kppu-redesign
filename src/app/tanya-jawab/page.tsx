
'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronRight, FileText, Gavel, Newspaper, MessageSquareQuote, Info, Phone, ArrowRight } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const faqData = [
  {
    question: "Apa itu Program Kepatuhan Persaingan Usaha?",
    answer: "Program Kepatuhan Persaingan Usaha adalah serangkaian tindakan yang dirancang untuk memastikan pelaku usaha mematuhi Undang-Undang No. 5 Tahun 1999. Program ini membantu perusahaan mengidentifikasi dan memitigasi risiko pelanggaran hukum persaingan usaha secara proaktif."
  },
  {
    question: "Hal-hal apa saja yang perlu diketahui terkait Merger dan Akuisisi (M&A)?",
    answer: "Terkait M&A, pelaku usaha wajib memberitahukan (notifikasi) kepada KPPU paling lambat 30 hari kerja sejak tanggal transaksi berlaku efektif secara yuridis. Notifikasi ini diperlukan jika hasil penggabungan aset atau nilai penjualan melebihi ambang batas tertentu yang ditetapkan dalam peraturan."
  },
  {
    question: "Bagaimana cara melaporkan dugaan pelanggaran persaingan usaha?",
    answer: "Anda dapat melaporkan dugaan pelanggaran melalui situs web resmi KPPU di kppu.go.id pada bagian 'Pelaporan', atau datang langsung ke kantor pusat KPPU maupun Kantor Wilayah terdekat. Laporan harus disertai dengan bukti awal yang cukup."
  },
  {
    question: "Apa saja sanksi yang dapat dikenakan oleh KPPU?",
    answer: "KPPU dapat menjatuhkan sanksi administratif berupa denda, pembatalan perjanjian, perintah penghentian kegiatan yang terbukti melanggar, ganti rugi, dan/atau pengenaan denda kepada pelaku usaha yang melanggar."
  },
  {
    question: "Apakah prosedur untuk magang secara online tersedia?",
    answer: "Informasi terkini mengenai program magang, baik online maupun offline, dapat diakses melalui bagian karir di situs web KPPU atau dengan menghubungi sekretariat kami. Program ini biasanya diumumkan secara berkala sesuai kebutuhan."
  }
];

const sidebarNavItems = [
  { icon: FileText, label: "REGULASI", href: "/regulasi" },
  { icon: Gavel, label: "PUTUSAN", href: "/penindakan/perkara-persaingan" },
  { icon: Newspaper, label: "JADWAL SIDANG", href: "/jadwal-sidang" },
  { icon: FileText, label: "SIARAN PERS", href: "/publikasi/siaran-pers" },
  { icon: MessageSquareQuote, label: "TANYA JAWAB", href: "/tanya-jawab" },
  { icon: Info, label: "PPID", href: "/ppid" },
];

export default function TanyaJawabPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <img src="/images/bg/map-bw.png" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
            </div>
            <div className="container mx-auto relative z-10">
                <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Tanya Jawab (FAQ)</h1>
                <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                    <Link href="/" className="hover:underline">Beranda</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span>Tanya Jawab</span>
                </div>
            </div>
                </section>

        <section className="py-20 lg:py-24">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <div className="text-left mb-12">
                            <p className="text-primary font-semibold mb-2 uppercase tracking-widest">PERTANYAAN UMUM</p>
                            <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Jawaban untuk Anda</h2>
                        </div>
                        <Accordion type="single" collapsible className="w-full space-y-6">
                            {faqData.map((item, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="bg-card shadow-sm rounded-lg border-l-4 border-primary">
                                    <AccordionTrigger className="p-6 text-left font-bold text-xl hover:no-underline text-primary-dark dark:text-white">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6 pt-2 text-muted-foreground text-base leading-relaxed">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
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
                                      <div className={`flex items-center p-5 cursor-pointer hover:bg-primary/10 transition-colors text-foreground/80 font-semibold ${index !== sidebarNavItems.length - 1 ? 'border-b border-border/50' : ''} ${item.label === 'TANYA JAWAB' ? 'bg-primary/10 text-primary' : ''}`}>
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
      <Footer />
    </div>
  );
}


