


import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ChevronRight, Gavel, Newspaper, MessageSquareQuote, Info, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';

const regulations = [
    "Peraturan Ketua KPPU Nomor 6 Tahun 2023 tentang Penerapan Manajemen Risiko di Lingkungan Komisi Pengawas Persaingan Usaha",
    "Peraturan Ketua KPPU Nomor 5 Tahun 2023 tentang Pengelolaan Kerja Sama Antar Lembaga di Lingkungan Komisi Pengawas Persaingan Usaha",
    "Peraturan Ketua KPPU Nomor 4 Tahun 2023 tentang Pengelolaan Informasi Publik di Lingkungan Komisi Pengawas Persaingan Usaha",
    "Peraturan Ketua KPPU Nomor 3 Tahun 2023 tentang Pedoman Larangan Persekongkolan Dalam Tender",
    "Peraturan Ketua KPPU Nomor 2 Tahun 2023 tentang Pedoman Dampak Negatif Praktik Monopoli dan Persaingan Usaha Tidak Sehat",
    "Peraturan Ketua KPPU Nomor 1 Tahun 2023 tentang Pedoman Persetujuan Komisi atas Permohonan Kelonggaran Pembayaran Denda Secara Bertahap atau Dalam Jangka Waktu Tertentu",
    "Peraturan Ketua KPPU Nomor 4 Tahun 2022 tentang Penentuan Pasar Bersangkutan",
    "Peraturan Ketua KPPU Nomor 3 Tahun 2022 tentang Sistem Klasifikasi Keamanan dan Akses Arsip Dinamis Komisi Pengawas Persaingan Usaha",
    "Peraturan Ketua KPPU Nomor 2 Tahun 2022 tentang Klasifikasi Arsip di Lingkungan Komisi Pengawas Persaingan Usaha",
    "Peraturan Ketua KPPU Nomor 1 Tahun 2022 tentang Kebijakan Akuntansi di Lingkungan Komisi Pengawas Persaingan Usaha",
];

const sidebarNavItems = [
  { icon: FileText, label: "REGULASI", href: "/regulasi" },
  { icon: Gavel, label: "PUTUSAN", href: "/putusan" },
  { icon: Newspaper, label: "JADWAL SIDANG", href: "/jadwal-sidang" },
  { icon: FileText, label: "SIARAN PERS", href: "/siaran-pers" },
  { icon: MessageSquareQuote, label: "TANYA JAWAB", href: "/tanya-jawab" },
  { icon: Info, label: "PPID", href: "/ppid" },
];


export default function PeraturanKetuaKppuPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">

      <main className="flex-1">
        <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <img src="/images/bg/theme-3.jpg" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
            </div>
            <div className="container mx-auto relative z-10">
                <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Peraturan Ketua KPPU</h1>
                <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                    <Link href="/" className="hover:underline">Beranda</Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/regulasi" className="hover:underline">Peraturan</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span>Peraturan Ketua KPPU</span>
                </div>
            </div>
                </section>

        <section className="py-20 lg:py-24">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <div className="space-y-6">
                            {regulations.map((item, index) => (
                                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-6 flex items-center justify-between">
                                        <div className="flex items-start gap-4">
                                            <span className="font-semibold text-primary text-lg">{index + 1}.</span>
                                            <p className="leading-relaxed text-foreground/90">{item}</p>
                                        </div>
                                        <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80 hover:bg-primary/10 rounded-full flex-shrink-0 ml-4">
                                            <Download className="h-5 w-5" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
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


