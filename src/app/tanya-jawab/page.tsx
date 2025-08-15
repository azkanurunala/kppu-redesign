import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronRight, FileText, Gavel, Newspaper, MessageSquareQuote, Info, Phone } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
  { icon: Gavel, label: "PUTUSAN", href: "/putusan" },
  { icon: Newspaper, label: "JADWAL SIDANG", href: "/jadwal-sidang" },
  { icon: FileText, label: "SIARAN PERS", href: "/siaran-pers" },
  { icon: MessageSquareQuote, label: "TANYA JAWAB", href: "/tanya-jawab" },
  { icon: Info, label: "PPID", href: "/ppid" },
];

export default function TanyaJawabPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="bg-primary-dark text-white py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Tanya Jawab (FAQ)</h1>
                <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                    <Link href="/" className="hover:underline">Beranda</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span>Tanya Jawab</span>
                </div>
            </div>
        </section>

        <section className="py-20 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <div className="text-left mb-12">
                            <p className="text-primary font-semibold mb-2">PERTANYAAN UMUM</p>
                            <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Jawaban untuk Anda</h2>
                        </div>
                        <Accordion type="single" collapsible className="w-full space-y-6">
                            {faqData.map((item, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-b-2 border-border/50">
                                    <AccordionTrigger className="p-4 text-left font-bold text-xl hover:no-underline text-primary-dark dark:text-white">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="p-4 pt-2 text-muted-foreground text-base leading-relaxed">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                        
                        <Card className="mt-20 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-primary rounded-xl">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 font-poppins text-2xl text-primary-dark dark:text-white">
                                    <Phone />
                                    Tidak Menemukan Jawaban?
                                 </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-6 text-base">
                                    Jika Anda tidak menemukan jawaban atas pertanyaan Anda, jangan ragu untuk menghubungi kami secara langsung. Tim kami siap membantu Anda.
                                </p>
                                <Button size="lg" className="rounded-full px-8">
                                    Hubungi Kami <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    <aside className="lg:sticky lg:top-28 h-fit">
                        <Card className="rounded-xl shadow-lg">
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
