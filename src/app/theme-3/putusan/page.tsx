
"use client";

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Download, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ChevronDown, ChevronRight as ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

const decisions = [
    { no: 1, decisionNumber: "19/KPPU-M/2024", about: "DUGAAN PELANGGARAN TERKAIT KETERLAMBATAN PEMBERITAHUAN PENGAMBILALIHAN SAHAM EMERALD GRAIN PTY., LTD., (SEKARANG BERNAMA LOUIS DREYFUS COMPANY EMERALD AUSTRALIA PTY., LTD.) OLEH LOUIS DREYFUS COMPANY MELBOURNE HOLDINGS PTY., LTD.", date: "11 Agustus 2025" },
    { no: 2, decisionNumber: "21/KPPU-M/2024", about: "DUGAAN PELANGGARAN TERKAIT KETERLAMBATAN PEMBERITAHUAN PENGAMBILALIHAN SAHAM POSITION PARTNER PTY. LTD. OLEH MITSUI & CO., LTD. DAN MITSUI & CO. (AUSTRALIA) LTD.", date: "11 Agustus 2025" },
    { no: 3, decisionNumber: "18/KPPU-L/2024", about: "DUGAAN PELANGGARAN PASAL 14 DAN 19 HURUF A, B, C DAN D UNDANG-UNDANG NOMOR 5 TAHUN 1999 TERKAIT PENJUALAN TRUK MEREK SANY DI INDONESIA", date: "05 Agustus 2025" },
    { no: 4, decisionNumber: "17/KPPU-L/2024", about: "DUGAAN PELANGGARAN PASAL 22 UU NOMOR 5 TAHUN 1999 TERKAIT PENGADAAN PEKERJAAN KONSTRUKSI PEMBANGUNAN JEMBATAN SINTONG KABUPATEN ROKAN HILIR TAHUN ANGGARAN 2023", date: "28 Juli 2025" },
    { no: 5, decisionNumber: "14/KPPU-L/2024", about: "DUGAAN PELANGGARAN PASAL 22 UNDANG-UNDANG NOMOR 5 TAHUN 1999 TERKAIT PENGADAAN TRANSPORTASI DARAT UNTUK PEMASOKAN ELECTRIC MULTIPLE UNIT (EMU) UNTUK PROYEK JAKARTA BANDUNG HIGH SPEED RAILWAYS PROJECT", date: "22 Juli 2025" },
    { no: 6, decisionNumber: "11/KPPU-L/2024", about: "DUGAAN PELANGGARAN PASAL 22 UNDANG-UNDANG NOMOR 5 TAHUN 1999 TERKAIT PENGADAAN BADAN USAHA PENYEDIA AIR BERSIH DENGAN TEKNOLOGI SWRO (PRAKARSA BADAN USAHA) PADA PERUSAHAAN DAERAH AIR MINUM (PDAM) KABUPATEN LOMBOK UTARA TAHUN ANGGARAN 2017", date: "30 Juni 2025" },
    { no: 7, decisionNumber: "20/KPPU-M/2024", about: "DUGAAN PELANGGARAN TERKAIT KETERLAMBATAN PEMBERITAHUAN PENGAMBILALIHAN SAHAM PT ROYAL LESTARI UTAMA OLEH COMPAGNIE FINANCIERE MICHELIN SOCIETE PAR ACTIONS SIMPLIFIEE A ASSOCIE UNIQUE (CFM)", date: "10 Juni 2025" },
    { no: 8, decisionNumber: "14/KPPU-K/2023", about: "DUGAAN PELANGGARAN PASAL 35 AYAT (1) UNDANG-UNDANG NOMOR 20 TAHUN 2008 TERKAIT PELAKSANAAN KEMITRAAN BAGI HASIL DI SEKTOR PELAYANAN KESEHATAN ANTARA PT KIMIA FARMA DIAGNOSTIKA DAN MITRA DOKTER UMUM/GIGI", date: "26 Mei 2025" },
    { no: 9, decisionNumber: "08/KPPU-L/2024", about: "DUGAAN PELANGGARAN PASAL 23 UNDANG-UNDANG NOMOR 5 TAHUN 1999 TERKAIT PERSEKONGKOLAN UNTUK MENDAPATKAN RAHASIA PERUSAHAAN PT CHIYODA KOGYO INDONESIA", date: "25 Februari 2025" },
    { no: 10, decisionNumber: "15/KPPU-M/2024", about: "DUGAAN PELANGGARAN TERKAIT KETERLAMBATAN PEMBERITAHUAN PENGAMBILALIHAN SAHAM PT MITRA PINASTHIKA MUSTIKA RENT OLEH TRUSTY CARS PTE. LTD.", date: "24 Februari 2025" },
];

export default function PutusanPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <img src="/images/bg/map-bw.png" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
            </div>
            <div className="container mx-auto relative z-10">
                <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Database Putusan KPPU</h1>
                <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                    <Link href="/theme-3/" className="hover:underline">Beranda</Link>
                    <ChevronRightIcon className="h-4 w-4" />
                    <span>Database Putusan</span>
                </div>
                <p className="mt-4 text-lg text-primary-foreground/80 max-w-3xl mx-auto">
                  Temukan semua putusan yang telah dikeluarkan oleh Komisi Pengawas Persaingan Usaha secara transparan dan mudah diakses.
                </p>
            </div>
        </section>
      
        <div className="container mx-auto py-16 lg:py-24">
            <Card className="mb-8 p-6 bg-card border shadow-lg">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="relative flex-grow w-full">
                        <Input placeholder="Cari berdasarkan nomor putusan atau kata kunci..." className="pl-12 h-12 text-base" />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 text-base w-full md:w-auto">
                        Cari
                    </Button>
                    <Button variant="outline" className="text-base h-12 w-full md:w-auto">
                        Pencarian Lanjutan <ChevronDown className="h-4 w-4 ml-2"/>
                    </Button>
                </div>
            </Card>
            
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                 <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                <TableHead className="w-16 px-6 py-4 text-sm font-semibold text-muted-foreground">No.</TableHead>
                                <TableHead className="w-56 px-6 py-4 text-sm font-semibold text-muted-foreground">Nomor Putusan</TableHead>
                                <TableHead className="px-6 py-4 text-sm font-semibold text-muted-foreground">Tentang</TableHead>
                                <TableHead className="w-48 px-6 py-4 text-sm font-semibold text-muted-foreground">Tanggal Putusan</TableHead>
                                <TableHead className="w-32 text-center px-6 py-4 text-sm font-semibold text-muted-foreground">Dokumen</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {decisions.map((item) => (
                                <TableRow key={item.no} className="dark:border-gray-700/50">
                                    <TableCell className="px-6 py-5 font-medium">{item.no}</TableCell>
                                    <TableCell className="px-6 py-5 font-semibold text-primary">{item.decisionNumber}</TableCell>
                                    <TableCell className="px-6 py-5 leading-relaxed">{item.about}</TableCell>
                                    <TableCell className="px-6 py-5 text-muted-foreground">{item.date}</TableCell>
                                    <TableCell className="px-6 py-5 text-center">
                                        <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80 hover:bg-primary/10 rounded-full">
                                            <Download className="h-5 w-5" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                 </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-between mt-8">
                <span className="text-sm text-muted-foreground">Menampilkan 1-10 dari 424 hasil</span>
                <div className="flex items-center space-x-1">
                    <Button variant="outline" size="icon" disabled>
                        <ChevronsLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" disabled>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                      <Button variant="outline" className="px-4">1</Button>
                      <Button variant="ghost" className="px-4">2</Button>
                      <Button variant="ghost" className="px-4">3</Button>
                    <Button variant="outline" size="icon">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                        <ChevronsRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}




