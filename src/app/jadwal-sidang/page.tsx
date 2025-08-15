
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, ChevronRight, FileText, Gavel, Newspaper, MessageSquareQuestion, Info } from 'lucide-react';
import React from 'react';

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
  { icon: MessageSquareQuestion, label: "TANYA JAWAB", href: "/tanya-jawab" },
  { icon: Info, label: "PPID", href: "/ppid" },
];


export default function JadwalSidangPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="bg-primary-dark text-white py-8 shadow-inner">
            <div 
              className="container mx-auto px-4 bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/wayang-pattern.svg')", backgroundSize: 'cover' }}
            >
                <h1 className="text-4xl font-bold font-poppins">Jadwal Sidang</h1>
                <div className="text-sm mt-1 flex items-center">
                    <a href="/" className="hover:underline">Beranda</a>
                    <ChevronRight className="inline-block h-4 w-4 mx-1" />
                    <span>Jadwal Sidang</span>
                </div>
            </div>
        </section>

        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        {scheduleData.map((day, index) => (
                            <div key={index}>
                                <h2 className="text-2xl font-bold font-poppins text-primary-dark dark:text-white mb-4 flex items-center gap-3">
                                    <Calendar className="h-6 w-6 text-primary" />
                                    Agenda Sidang {day.date}
                                </h2>
                                <div className="space-y-6">
                                    {day.agendas.map((item, itemIndex) => (
                                        <Card key={itemIndex} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                            <CardHeader className="bg-gray-50 dark:bg-gray-800 p-4 border-b">
                                                <CardTitle className="text-base font-semibold text-primary-dark dark:text-gray-200">
                                                    Registrasi Perkara: {item.reg}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="p-6 space-y-4">
                                                <div>
                                                    <h4 className="font-semibold text-foreground mb-1">Tentang:</h4>
                                                    <p className="text-muted-foreground">{item.about}</p>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <Clock className="h-5 w-5 text-primary" />
                                                        <div>
                                                            <p className="font-semibold">Waktu</p>
                                                            <p className="text-muted-foreground">{item.time}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <FileText className="h-5 w-5 text-primary" />
                                                         <div>
                                                            <p className="font-semibold">Agenda</p>
                                                            <p className="text-muted-foreground">{item.agenda}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <MapPin className="h-5 w-5 text-primary" />
                                                         <div>
                                                            <p className="font-semibold">Tempat</p>
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
                    <aside>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg font-poppins">Navigasi Cepat</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <nav className="flex flex-col">
                                {sidebarNavItems.map((item, index) => (
                                    <a key={index} href={item.href} className={`flex items-center p-4 cursor-pointer hover:bg-primary/10 transition-colors text-foreground/80 font-medium ${index !== sidebarNavItems.length - 1 ? 'border-b' : ''} ${item.label === 'JADWAL SIDANG' ? 'bg-primary/10 text-primary' : ''}`}>
                                        <item.icon className="h-5 w-5 text-primary mr-4" />
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
