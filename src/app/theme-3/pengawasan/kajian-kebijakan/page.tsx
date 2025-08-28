
'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ChevronRight, Gavel, Newspaper, MessageSquareQuote, Info, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';
import Link from 'next/link';
import { getHeaderImageForPage } from '@/lib/kppu-pexels-images';
import { usePathname } from 'next/navigation';

const policyStudies = [
    "Kajian Kebijakan Rencana Tindakan Pengamanan Perdagangan (TPP) Produk Sirop Fruktosa Tahun 2020",
    "Position Paper Rancangan Peraturan Presiden Tentang Penataan dan Pembinaan Usaha Pasar Modern dan Usaha Toko Modern",
    "Position Paper MoU Microsoft dan Pemerintah dalam Perspektif Persaingan Usaha",
    "Position Paper KPPU Terhadap Perkembangan Perkebunan Kelapa Sawit",
    "Position Paper KPPU Terhadap Surat Edaran Menteri Komunikasi dan Informatika RI No. 01/M/KOMINFO/1/07 Tentang Pengiriman Surat",
    "Position Paper KPPU Terhadap Perkembangan Industri Jasa Konstruksi",
    "Laporan Akhir Evaluasi Kebijakan Pemerintah Terkait dengan Persaingan Usaha dalam Rancangan Perubahan Undang-Undang No. 17/1999 Tentang Penyelenggaraan Haji",
    "Position Paper KPPU Terhadap Kebijakan Perbukuan Nasional",
    "Position Paper RUU Pos dalam Perspektif Persaingan Usaha",
    "Background Paper Analisis Kebijakan Persaingan dalam Industri LPG Indonesia",
    "Position Paper KPPU Terhadap Kebijakan Industry Tally di Pelabuhan Tanjung Priok",
    "Background Paper Evaluasi dan Dampak Kebijakan Persaingan Usaha dalam Sektor Angkutan Darat",
    "Background Paper Analisis Kebijakan Persaingan dalam Industri Angkutan Darat Indonesia",
    "Background Paper Analisis KPPU Terhadap Kebijakan Kepala Dinas Peternakan Provinsi Jawa Timur Mengenai Standarisasi Tata Niaga Bulu Bebek di Wilayah Jawa Timur",
    "Background Paper Analisis KPPU Terhadap Undang-Undang Nomor 4 Tahun 2009 Tentang Pertambangan Mineral dan Batu Bara",
    "Position Paper KPPU Minyak Goreng",
    "Background Paper Kajian Industri dan Perdagangan Kakao",
    "Position Paper KPPU Terhadap Kebijakan Industri Ritel Indonesia",
    "Position Paper KPPU terkait Kebijakan Klaster Perikanan Tangkap",
    "Position Paper KPPU Terhadap Peraturan Daerah DKI Jakarta No. 4 Tahun 2007 Tentang Pengendalian Pemeliharaan dan Peredaran Unggas",
    "Positioning Paper KPPU Terhadap Kebijakan Ekspor Rotan",
    "Position Paper KPPU Terhadap Kebijakan dalam Industri Gula",
];


const sidebarNavItems = [
  { icon: FileText, label: "REGULASI", href: "/regulasi" },
  { icon: Gavel, label: "PUTUSAN", href: "/penindakan/perkara-persaingan" },
  { icon: Newspaper, label: "JADWAL SIDANG", href: "/jadwal-sidang" },
  { icon: FileText, label: "SIARAN PERS", href: "/publikasi/siaran-pers" },
  { icon: MessageSquareQuote, label: "TANYA JAWAB", href: "/tanya-jawab" },
  { icon: Info, label: "PPID", href: "/ppid" },
];


export default function KajianKebijakanPage() {
    const pathname = usePathname();
    const headerImage = getHeaderImageForPage(pathname);
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <img src="/images/bg/map-bw.png" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
            </div>
            <div className="container mx-auto relative z-10">
                <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Kajian Kebijakan</h1>
                <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                    <Link href="/theme-3/" className="hover:underline">Beranda</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span>Kajian Kebijakan</span>
                </div>
            </div>
        </section>

        <section className="py-20 lg:py-24">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                         <Card className="shadow-lg">
                            <CardContent className="p-0">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="border-b-0">
                                            <TableHead className="w-[60px] p-6 font-semibold">No.</TableHead>
                                            <TableHead className="p-6 font-semibold">Judul Kajian Kebijakan</TableHead>
                                            <TableHead className="text-right w-[100px] p-6 font-semibold">Tautan</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {policyStudies.map((item, index) => (
                                            <TableRow key={index} className="dark:border-gray-700/50">
                                                <TableCell className="font-medium px-6 py-5 align-top">{index + 1}</TableCell>
                                                <TableCell className="px-6 py-5 leading-relaxed">{item}</TableCell>
                                                <TableCell className="text-right px-6 py-5 align-top">
                                                    <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80 hover:bg-primary/10 rounded-full">
                                                        <Download className="h-5 w-5" />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
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




