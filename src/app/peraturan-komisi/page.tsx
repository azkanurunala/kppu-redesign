
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ChevronRight, Gavel, Newspaper, MessageSquareQuote, Info, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';

const regulations = [
    "Peraturan Komisi Nomor 4 Tahun 2023 tentang Perubahan Kedua atas Peraturan Komisi Pengawas Persaingan Usaha Nomor 1 Tahun 2019 tentang Tata Cara Penanganan Perkara Praktik Monopoli dan Persaingan Usaha Tidak Sehat",
    "Peraturan Komisi Nomor 3 Tahun 2023 tentang Penilaian Penggabungan, Peleburan, atau Pengambilalihan Saham dan/atau Aset Badan Usaha yang Dapat Mengakibatkan Terjadinya Praktik Monopoli dan/atau Persaingan Usaha Tidak Sehat",
    "Peraturan Komisi Nomor 2 Tahun 2023 tentang Perubahan atas Peraturan Komisi Pengawas Persaingan Usaha Nomor 2 Tahun 2021 tentang Pedoman Pengenaan Denda Pelanggaran Praktik Monopoli dan Persaingan Usaha Tidak Sehat",
    "Peraturan Komisi Nomor 1 Tahun 2023 tentang Perubahan atas Peraturan Komisi Pengawas Persaingan Usaha Nomor 4 Tahun 2012 tentang Pedoman Pelaksanaan Pasal 29 Undang-Undang Nomor 5 Tahun 1999 tentang Larangan Praktek Monopoli dan Persaingan Usaha Tidak Sehat",
    "Peraturan Komisi Nomor 2 Tahun 2022 tentang Program Kepatuhan Persaingan Usaha",
    "Peraturan Komisi Nomor 1 Tahun 2022 tentang Perubahan atas Peraturan Komisi Nomor 3 Tahun 2020 tentang Relaksasi Penegakan Hukum Praktik Monopoli dan Persaingan Usaha Tidak Sehat serta Pengawasan Pelaksanaan Kemitraan dalam rangka Mendukung Program Pemulihan Ekonomi Nasional",
    "Peraturan Komisi Nomor 2 Tahun 2021 tentang Pedoman Pengenaan Denda Pelanggaran Praktik Monopoli dan Persaingan Usaha Tidak Sehat",
    "Peraturan Komisi Nomor 1 Tahun 2021 tentang Perubahan Atas Peraturan Komisi Nomor 3 Tahun 2019 tentang Penilaian terhadap Penggabungan atau Peleburan Badan Usaha, atau Pengambilalihan Saham Perusahaan yang dapat Mengakibatkan Terjadinya Praktik Monopoli dan Persaingan Usaha Tidak Sehat",
    "Peraturan Komisi Nomor 3 Tahun 2020 tentang Relaksasi Penegakan Hukum Praktik Monopoli dan Persaingan Usaha Tidak Sehat serta Pengawasan Pelaksanaan Kemitraan dalam rangka Mendukung Program Pemulihan Ekonomi Nasional",
    "Peraturan Komisi Nomor 2 Tahun 2020 tentang Pedoman Mediasi dalam Perkara Praktik Monopoli dan Persaingan Usaha Tidak Sehat",
    "Peraturan Komisi Nomor 1 Tahun 2020 tentang Tata Cara dan Proses Banding Keberatan atas Putusan KPPU di Pengadilan Niaga",
    "Peraturan Komisi Nomor 4 Tahun 2019 tentang Tata Cara Pengawasan dan Penanganan Perkara Kemitraan",
    "Peraturan Komisi Nomor 3 Tahun 2019 tentang Penilaian Terhadap Penggabungan atau Peleburan Badan Usaha, atau Pengambilalihan Saham Perusahaan yang dapat mengakibatkan terjadinya Praktik Monopoli dan Persaingan Usaha Tidak Sehat",
    "Peraturan Komisi Nomor 2 Tahun 2019 tentang Perubahan Atas Peraturan Komisi Nomor 1 Tahun 2010 tentang Tata Cara Penilaian Penggabungan atau Peleburan Badan Usaha atau Pengambilalihan Saham Perusahaan",
    "Peraturan Komisi Nomor 1 Tahun 2019 tentang Tata Cara Penanganan Perkara Praktik Monopoli dan Persaingan Usaha Tidak Sehat",
];

const sidebarNavItems = [
  { icon: FileText, label: "REGULASI", href: "/regulasi" },
  { icon: Gavel, label: "PUTUSAN", href: "/putusan" },
  { icon: Newspaper, label: "JADWAL SIDANG", href: "/jadwal-sidang" },
  { icon: FileText, label: "SIARAN PERS", href: "/siaran-pers" },
  { icon: MessageSquareQuote, label: "TANYA JAWAB", href: "/tanya-jawab" },
  { icon: Info, label: "PPID", href: "/ppid" },
];


export default function PeraturanKomisiPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="bg-primary-dark text-white py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Peraturan Komisi</h1>
                <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                    <Link href="/" className="hover:underline">Beranda</Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/regulasi" className="hover:underline">Peraturan</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span>Peraturan Komisi</span>
                </div>
            </div>
        </section>

        <section className="py-20 lg:py-24">
            <div className="container mx-auto px-4">
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
      <Footer />
    </div>
  );
}
