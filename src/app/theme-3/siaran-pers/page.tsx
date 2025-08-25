
'use client';



import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarDays, ChevronRight, FileText, Search, ListFilter } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { getHeaderImageForPage } from '@/lib/kppu-pexels-images';
import { usePathname } from 'next/navigation';

const pressReleases = [
  { no: "25/SP-KPPU/VIII/2025", date: "14 Agustus 2025", title: "KPPU Putus Perkara Kemitraan Jasa Angkutan Semen di Sumatra" },
  { no: "24/SP-KPPU/VIII/2025", date: "12 Agustus 2025", title: "Antisipasi Integrasi Vertikal, KPPU Awasi Rencana Akuisisi Perusahaan B oleh Perusahaan A" },
  { no: "23/SP-KPPU/VIII/2025", date: "07 Agustus 2025", title: "KPPU Dorong Kemitraan Sehat di Sektor Perkebunan Kelapa Sawit" },
  { no: "22/SP-KPPU/VII/2025", date: "30 Juli 2025", title: "Denda Rp1 Miliar bagi Pelaku Usaha Terlambat Notifikasi Merger" },
  { no: "21/SP-KPPU/VII/2025", date: "25 Juli 2025", title: "Perkuat Pengawasan, KPPU Gandeng Pemerintah Daerah" },
  { no: "20/SP-KPPU/VII/2025", date: "18 Juli 2025", title: "Webinar Nasional: Tantangan Persaingan Usaha di Era Digital" },
  { no: "19/SP-KPPU/VII/2025", date: "11 Juli 2025", title: "Sidang Dugaan Kartel Jasa Telekomunikasi Memasuki Tahap Lanjutan" },
  { no: "18/SP-KPPU/VI/2025", date: "28 Juni 2025", title: "KPPU Peringatkan Potensi Monopoli pada Industri Logistik Nasional" },
  { no: "17/SP-KPPU/VI/2025", date: "20 Juni 2025", title: "Efektivitas Hukuman Denda dalam Penegakan Hukum Persaingan Usaha" },
  { no: "16/SP-KPPU/VI/2025", date: "14 Juni 2025", title: "Peluncuran Indeks Persaingan Usaha Tingkat Provinsi Tahun 2025" },
];

const archiveYears = ["2025", "2024", "2023", "2022", "2021"];

export default function SiaranPersPage() {
    const pathname = usePathname();
    const headerImage = getHeaderImageForPage(pathname);
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">

      <main className="flex-1">
        <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <img src="/images/bg/theme-3.jpg" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
            </div>
            <div className="container mx-auto relative z-10">
                <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Siaran Pers</h1>
                <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                    <Link href="/" className="hover:underline">Beranda</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span>Siaran Pers</span>
                </div>
            </div>
                </section>

        <section className="py-20 lg:py-24">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
                    
                    <div className="lg:col-span-3 space-y-8">
                        {pressReleases.map((item, index) => (
                           <Card key={index} className="transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1.5 border-l-4 border-primary bg-card">
                                <CardContent className="p-8">
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2 mb-2 sm:mb-0">
                                            <FileText className="h-4 w-4" />
                                            <span>No: {item.no}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CalendarDays className="h-4 w-4" />
                                            <span>{item.date}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold font-poppins text-primary-dark dark:text-white mb-6 hover:text-primary cursor-pointer transition-colors leading-snug">
                                        {item.title}
                                    </h3>
                                    <Button size="lg" className="rounded-full px-6">
                                        Baca Selengkapnya
                                        <ChevronRight className="h-4 w-4 ml-2" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                        <div className="flex justify-center pt-8">
                            <Button variant="outline" size="lg" className="rounded-full px-8">Muat Lebih Banyak</Button>
                        </div>
                    </div>

                    <aside className="space-y-10 lg:sticky lg:top-28 h-fit">
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl font-poppins text-primary-dark dark:text-white">
                                    <ListFilter className="h-5 w-5" />
                                    Pencarian & Filter
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="relative">
                                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <Input placeholder="Cari siaran pers..." className="pl-11 h-11" />
                                </div>
                                <Select>
                                    <SelectTrigger className="h-11">
                                        <SelectValue placeholder="Pilih Tahun" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {archiveYears.map(year => <SelectItem key={year} value={year}>{year}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger className="h-11">
                                        <SelectValue placeholder="Pilih Bulan" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"].map(month => <SelectItem key={month} value={month.toLowerCase()}>{month}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <Button className="w-full h-11">Terapkan Filter</Button>
                            </CardContent>
                        </Card>
                        
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-xl font-poppins text-primary-dark dark:text-white">Arsip Siaran Pers</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    {archiveYears.map(year => (
                                        <li key={year}>
                                            <a href="#" className="flex justify-between items-center text-foreground/80 hover:text-primary transition-colors font-semibold">
                                                <span>Arsip {year}</span>
                                                <ChevronRight className="h-5 w-5" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
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


