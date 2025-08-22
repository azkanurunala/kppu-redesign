
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
import { motion } from 'framer-motion';

const researchData = [
    {
        year: "Tahun 2021",
        studies: [
            "Indeks Persaingan Usaha 2021",
            "Persaingan Usaha dan Kesejahteraan di Indonesia",
            "Kemitraan di Industri Otomotif",
        ]
    },
    {
        year: "Tahun 2020",
        studies: [
            "Indeks Persaingan Usaha Tahun 2020",
            "Penelitian Pelaku Usaha dan Struktur Pasar pada Industri Perbankan",
            "Penelitian Pelaku Usaha dan Struktur Pasar pada Komoditas Kopi",
            "Penelitian Pelaku Usaha dan Struktur Pasar pada Sektor Ekonomi Digital",
            "Penelitian Pelaku Usaha dan Struktur Pasar pada Sektor Jasa Rumah Sakit",
            "Penelitian Persaingan Usaha Terkait Kemitraan di Kelapa Sawit",
        ]
    },
    {
        year: "Tahun 2019",
        studies: [
            "Indeks Persaingan Usaha Tahun 2019",
            "Penelitian Industri Farmasi di Indonesia",
            "Penelitian Industri Gandum dan Tepung Terigu",
            "Penelitian Industri Hulu Migas",
            "Penelitian Kebijakan di Sektor Ekonomi Digital",
            "Penelitian Perilaku Pelaku Usaha di Sektor E-Commerce",
        ]
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


export default function PenelitianPage() {
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
                <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Penelitian</h1>
                <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                    <Link href="/" className="hover:underline">Beranda</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span>Penelitian</span>
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
                                        <TableRow>
                                            <TableHead className="w-1/4 p-6 font-semibold">Tahun</TableHead>
                                            <TableHead className="p-6 font-semibold">Judul Penelitian</TableHead>
                                            <TableHead className="text-center w-32 p-6 font-semibold">Abstrak</TableHead>
                                            <TableHead className="text-center w-40 p-6 font-semibold">Ringkasan Eksekutif</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {researchData.map((group, groupIndex) => (
                                            <React.Fragment key={group.year}>
                                                {group.studies.map((study, studyIndex) => (
                                                     <TableRow key={studyIndex} className="dark:border-gray-700/50">
                                                        {studyIndex === 0 && (
                                                            <TableCell rowSpan={group.studies.length} className="font-semibold align-top px-6 py-5 w-40">{group.year}</TableCell>
                                                        )}
                                                        <TableCell className="px-6 py-5 leading-relaxed">{study}</TableCell>
                                                        <TableCell className="text-center px-6 py-5">
                                                            <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80 hover:bg-primary/10 rounded-full">
                                                                <Download className="h-5 w-5" />
                                                            </Button>
                                                        </TableCell>
                                                        <TableCell className="text-center px-6 py-5">
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


