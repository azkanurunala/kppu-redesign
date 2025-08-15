
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarDays, ChevronRight, FileText, Search, ListFilter } from 'lucide-react';
import React from 'react';

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
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900 text-foreground">
      <Header />
      <main className="flex-1">
        <section className="bg-primary-dark text-white py-8 shadow-inner">
            <div 
              className="container mx-auto px-4 bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/wayang-pattern.svg')", backgroundSize: 'cover' }}
            >
                <h1 className="text-4xl font-bold font-poppins">Siaran Pers</h1>
                <div className="text-sm mt-1 flex items-center">
                    <a href="/" className="hover:underline">Beranda</a>
                    <ChevronRight className="inline-block h-4 w-4 mx-1" />
                    <span>Siaran Pers</span>
                </div>
            </div>
        </section>

        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    
                    {/* Press Release List */}
                    <div className="lg:col-span-3 space-y-6">
                        {pressReleases.map((item, index) => (
                           <Card key={index} className="transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 border-l-4 border-primary">
                                <CardContent className="p-6">
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2 mb-2 sm:mb-0">
                                            <FileText className="h-4 w-4" />
                                            <span>No: {item.no}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CalendarDays className="h-4 w-4" />
                                            <span>{item.date}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold font-poppins text-primary-dark dark:text-white mb-4 hover:text-primary cursor-pointer">
                                        {item.title}
                                    </h3>
                                    <Button>
                                        Baca Selengkapnya
                                        <ChevronRight className="h-4 w-4 ml-2" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                        <div className="flex justify-center pt-8">
                            <Button variant="outline" size="lg">Muat Lebih Banyak</Button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg font-poppins">
                                    <ListFilter className="h-5 w-5" />
                                    Pencarian & Filter
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <Input placeholder="Cari siaran pers..." className="pl-10" />
                                </div>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pilih Tahun" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {archiveYears.map(year => <SelectItem key={year} value={year}>{year}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pilih Bulan" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"].map(month => <SelectItem key={month} value={month.toLowerCase()}>{month}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <Button className="w-full">Terapkan Filter</Button>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg font-poppins">Arsip Siaran Pers</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {archiveYears.map(year => (
                                        <li key={year}>
                                            <a href="#" className="flex justify-between items-center text-foreground/80 hover:text-primary hover:underline">
                                                <span>Arsip {year}</span>
                                                <ChevronRight className="h-4 w-4" />
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
      <Footer />
    </div>
  );
}
