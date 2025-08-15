
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronRight, FileText, Gavel, Newspaper, MessageSquareQuestion, Info, Search, Phone } from 'lucide-react';
import React from 'react';

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
  { icon: MessageSquareQuestion, label: "TANYA JAWAB", href: "/tanya-jawab" },
  { icon: Info, label: "PPID", href: "/ppid" },
];

export default function TanyaJawabPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="bg-primary-dark text-white py-8 shadow-inner">
            <div 
              className="container mx-auto px-4 bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/wayang-pattern.svg')", backgroundSize: 'cover' }}
            >
                <h1 className="text-4xl font-bold font-poppins">Tanya Jawab</h1>
                <div className="text-sm mt-1 flex items-center">
                    <a href="/" className="hover:underline">Beranda</a>
                    <ChevronRight className="inline-block h-4 w-4 mx-1" />
                    <span>Tanya Jawab</span>
                </div>
            </div>
        </section>

        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold font-poppins text-primary-dark dark:text-white mb-6">Frequently Asked Questions (FAQ)</h2>
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqData.map((item, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-card">
                                    <AccordionTrigger className="p-6 text-left font-semibold text-lg hover:no-underline">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="p-6 pt-0 text-muted-foreground">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                        
                        <Card className="mt-12 bg-blue-50 dark:bg-blue-900/20 border-primary/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 font-poppins text-primary-dark dark:text-white">
                                    <Phone />
                                    Tidak Menemukan Jawaban?
                                 </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    Jika Anda tidak menemukan jawaban atas pertanyaan Anda, jangan ragu untuk menghubungi kami secara langsung. Tim kami siap membantu Anda.
                                </p>
                                <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-md font-semibold">
                                    Hubungi Kami
                                </button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <aside>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg font-poppins">Navigasi Cepat</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <nav className="flex flex-col">
                                {sidebarNavItems.map((item, index) => (
                                    <a key={index} href={item.href} className={`flex items-center p-4 cursor-pointer hover:bg-primary/10 transition-colors text-foreground/80 font-medium ${index !== sidebarNavItems.length - 1 ? 'border-b' : ''} ${item.label === 'TANYA JAWAB' ? 'bg-primary/10 text-primary' : ''}`}>
                                        <item.icon className="h-5 w-5 mr-4" />
                                        <span>{item.label}</span>
                                        <ChevronRight className="h-4 w-4 ml-auto text-muted-foreground" />
                                    </a>
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
