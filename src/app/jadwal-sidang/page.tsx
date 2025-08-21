
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, MapPin, ChevronRight, FileText, Gavel, Newspaper, MessageSquareQuote, Info } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

const scheduleData = [
  {
    date: "Kamis, 14 Agustus 2025",
    agendas: [
      {
        reg: "05/KPPU-I/2025",
        about: "Dugaan Pelanggaran Pasal 5 Undang-Undang Nomor 5 Tahun 1999 terkait Layanan Pinjam-Meminjam Uang atau Pendanaan Bersama Berbasis Teknologi Informasi (Fintech P2P Lending) di Indonesia",
        time: "09.00 WIB",
        agenda: "Pemaparan Laporan Dugaan Pelanggaran oleh Investigator",
        location: "Jakarta (Offline dan/ Online)"
      }
    ]
  },
  {
    date: "Selasa, 12 Agustus 2025",
    agendas: [
      {
        reg: "04/KPPU-I/2025",
        about: "Dugaan Pelanggaran Terkait Pengadaan Jasa Konstruksi Pembangunan Gedung A",
        time: "10.00 WIB",
        agenda: "Pemeriksaan Saksi Ahli",
        location: "Kantor Wilayah I, Medan"
      },
      {
        reg: "03/KPPU-M/2025",
        about: "Dugaan Keterlambatan Notifikasi Merger antara PT X dan PT Y",
        time: "14.00 WIB",
        agenda: "Sidang Majelis Komisi",
        location: "Jakarta (Online)"
      }
    ]
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


export default function JadwalSidangPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <img src="/images/bg/map-bw.png" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
            </div>
            <div className="container mx-auto relative z-10">
            <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Jadwal Sidang</h1>
            <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
              <Link href="/" className="hover:underline">Beranda</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Jadwal Sidang</span>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-12">
                        {scheduleData.map((day, index) => (
                            <div key={index}>
                                <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-primary-dark dark:text-white mb-8 flex items-center gap-4">
                                    <Calendar className="h-8 w-8 text-primary" />
                                    <span>{day.date}</span>
                                </h2>
                                <div className="space-y-8">
                                    {day.agendas.map((item, itemIndex) => (
                                        <Card key={itemIndex} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-primary">
                                            <CardHeader className="bg-gray-50 dark:bg-gray-800/30 p-6 border-b border-border/50">
                                                <CardTitle className="text-lg font-semibold text-primary-dark dark:text-gray-200">
                                                    Registrasi Perkara: {item.reg}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="p-6 space-y-5">
                                                <div>
                                                    <h3 className="font-bold text-xl text-foreground mb-3 leading-snug">{item.about}</h3>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5 border-t border-border/50">
                                                    <div className="flex items-start gap-4">
                                                        <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                                        <div>
                                                            <p className="font-semibold text-foreground">Waktu</p>
                                                            <p className="text-muted-foreground">{item.time}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start gap-4">
                                                        <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                                         <div>
                                                            <p className="font-semibold text-foreground">Agenda</p>
                                                            <p className="text-muted-foreground">{item.agenda}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start gap-4">
                                                        <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                                         <div>
                                                            <p className="font-semibold text-foreground">Tempat</p>
                                                            <p className="text-muted-foreground">{item.location}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:sticky lg:top-28 h-fit">
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-xl font-poppins text-primary-dark dark:text-white">Navigasi Cepat</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <nav className="flex flex-col">
                                {sidebarNavItems.map((item, index) => (
                                    <Link key={index} href={item.href}>
                                      <div className={`flex items-center p-5 cursor-pointer hover:bg-primary/10 transition-colors text-foreground/80 font-semibold ${index !== sidebarNavItems.length - 1 ? 'border-b border-border/50' : ''} ${item.label === 'JADWAL SIDANG' ? 'bg-primary/10 text-primary' : ''}`}>
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

