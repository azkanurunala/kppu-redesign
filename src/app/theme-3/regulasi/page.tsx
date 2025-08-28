
'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Download, ChevronRight, Gavel, Newspaper, MessageSquareQuote, Info, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';
import { getHeaderImageForPage } from '@/lib/kppu-pexels-images';
import { usePathname } from 'next/navigation';

const regulations = [
    {
        category: "Undang-Undang",
        items: [
            "Surat Edaran Nomor 1 Tahun 2021 tentang Peralihan Pemeriksaan Keberatan Terhadap Putusan Komisi Pengawas Persaingan Usaha ke Pengadilan Niaga",
            "Undang-Undang Nomor 20 Tahun 2008 tentang Usaha Mikro, Kecil, dan Menengah",
            "Undang-Undang Nomor 5 Tahun 1999 tentang Larangan Praktek Monopoli dan Persaingan Usaha Tidak Sehat",
            "Undang-Undang Nomor 5 Tahun 1999 tentang Larangan Praktek Monopoli dan Persaingan Usaha Tidak Sehat Dengan Amandemen Berdasarkan Putusan Mahkamah Konstitusi No. 85/PUU-XIV/2016 dan Perubahan Berdasarkan Undang-Undang No. 11 Tahun 2020 tentang Cipta Kerja",
            "Keputusan Presiden Republik Indonesia Nomor 75 Tahun 1999 tentang Komisi Pengawas Persaingan Usaha",
            "Hasil Uji Materiil Putusan MK Nomor 85/PUU-XIV/2016",
        ]
    },
    {
        category: "Peraturan Pemerintah",
        items: [
            "Peraturan Pemerintah Nomor 28 Tahun 2023 tentang Jenis dan Tarif atas Jenis Penerimaan Negara Bukan Pajak yang Berlaku pada Komisi Pengawas Persaingan Usaha",
            "Peraturan Pemerintah Nomor 44 Tahun 2021 tentang Pelaksanaan Larangan Praktek Monopoli dan Persaingan Usaha Tidak Sehat",
            "Peraturan Pemerintah Nomor 7 Tahun 2021 tentang Kemudahan, Pelindungan, dan Pemberdayaan Koperasi dan Usaha Mikro, Kecil, dan Menengah",
            "Peraturan Pemerintah Nomor 58 Tahun 2015 tentang Jenis dan Tarif atas Jenis Penerimaan Negara Bukan Pajak yang Berlaku pada Komisi Pengawas Persaingan Usaha",
            "Peraturan Pemerintah Nomor 17 Tahun 2013 tentang Pelaksanaan Undang-Undang Nomor 20 Tahun 2008 tentang Usaha Mikro, Kecil, dan Menengah",
            "Peraturan Pemerintah Nomor 57 Tahun 2010 tentang Penggabungan atau Peleburan Badan Usaha dan Pengambilalihan Saham Perusahaan yang Dapat Mengakibatkan Terjadinya Praktik Monopoli dan Persaingan Usaha Tidak Sehat",
        ]
    },
];

const sidebarNavItems = [
  { icon: FileText, label: "REGULASI", href: "/regulasi" },
  { icon: Gavel, label: "PUTUSAN", href: "/penindakan/perkara-persaingan" },
  { icon: Newspaper, label: "JADWAL SIDANG", href: "/jadwal-sidang" },
  { icon: FileText, label: "SIARAN PERS", href: "/publikasi/siaran-pers" },
  { icon: MessageSquareQuote, label: "TANYA JAWAB", href: "/tanya-jawab" },
  { icon: Info, label: "PPID", href: "/ppid" },
];


export default function RegulasiPage() {
    const pathname = usePathname();
    const headerImage = getHeaderImageForPage(pathname);
  let counter = 1;
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <img src="/images/bg/map-bw.png" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
            </div>
            <div className="container mx-auto relative z-10">
                <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Peraturan & Regulasi</h1>
                <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                    <Link href="/theme-3/" className="hover:underline">Beranda</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span>Peraturan</span>
                </div>
            </div>
                </section>

        <section className="py-20 lg:py-24">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <Card className="shadow-lg">
                            <CardContent className="p-0">
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="border-b-0">
                                                <TableHead className="w-[60px] p-6 font-semibold">No.</TableHead>
                                                <TableHead className="p-6 font-semibold">Judul</TableHead>
                                                <TableHead className="text-right w-[100px] p-6 font-semibold">Tautan</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {regulations.map(reg => (
                                                <React.Fragment key={reg.category}>
                                                    <TableRow className="bg-gray-100 dark:bg-gray-800/30">
                                                        <TableCell colSpan={3} className="p-6 font-bold text-xl text-primary-dark dark:text-white font-poppins">{reg.category}</TableCell>
                                                    </TableRow>
                                                    {reg.items.map((item, index) => (
                                                        <TableRow key={index} className="dark:border-gray-700/50">
                                                            <TableCell className="font-medium px-6 py-5">{counter++}</TableCell>
                                                            <TableCell className="px-6 py-5 leading-relaxed">{item}</TableCell>
                                                            <TableCell className="text-right px-6 py-5">
                                                                <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80 hover:bg-primary/10 rounded-full">
                                                                    <Download className="h-5 w-5" />
                                                                </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </React.Fragment>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </CardContent>
                        </Card>
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
                                      <div className={`flex items-center p-5 cursor-pointer hover:bg-primary/10 transition-colors text-foreground/80 font-semibold ${index !== sidebarNavItems.length - 1 ? 'border-b border-border/50' : ''} ${item.label === 'REGULASI' ? 'bg-primary/10 text-primary' : ''}`}>
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



