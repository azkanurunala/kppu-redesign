"use client";

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Download, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ChevronDown } from 'lucide-react';

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
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary-dark text-white py-12 text-center">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl lg:text-5xl font-bold font-poppins">Database Putusan KPPU</h1>
                <p className="mt-2 text-lg text-primary-foreground/80 max-w-2xl mx-auto">Temukan semua putusan yang telah dikeluarkan oleh Komisi Pengawas Persaingan Usaha.</p>
            </div>
        </section>
      
        <div className="container mx-auto px-4 py-12 lg:py-16">
            <Card className="mb-8 p-4 bg-card border-none shadow-lg">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full md:w-auto">
                        Pencarian Dinamis <ChevronDown className="h-4 w-4 ml-2"/>
                    </Button>
                    <div className="relative flex-grow w-full">
                        <Input placeholder="Cari berdasarkan nomor putusan atau kata kunci..." className="pl-10 h-11 text-base" />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                </div>
            </Card>
            
            <Card className="overflow-hidden shadow-lg">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800">
                            <TableHead className="w-12 text-black dark:text-white font-bold">No.</TableHead>
                            <TableHead className="w-48 text-black dark:text-white font-bold">Nomor Putusan</TableHead>
                            <TableHead className="text-black dark:text-white font-bold">Tentang</TableHead>
                            <TableHead className="w-48 text-black dark:text-white font-bold">Tanggal Putusan</TableHead>
                            <TableHead className="w-32 text-center text-black dark:text-white font-bold">Dokumen</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {decisions.map((item) => (
                            <TableRow key={item.no} className="dark:border-gray-700">
                                <TableCell className="font-medium">{item.no}</TableCell>
                                <TableCell className="font-semibold text-primary">{item.decisionNumber}</TableCell>
                                <TableCell>{item.about}</TableCell>
                                <TableCell>{item.date}</TableCell>
                                <TableCell className="text-center">
                                    <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-600 hover:bg-blue-500/10 rounded-full">
                                        <Download className="h-5 w-5" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="flex items-center justify-between p-4 border-t dark:border-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Menampilkan 1-10 dari 424 hasil</span>
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
            </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
