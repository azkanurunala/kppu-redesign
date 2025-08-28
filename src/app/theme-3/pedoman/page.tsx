
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ChevronRight, Gavel, Newspaper, MessageSquareQuote, Info, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';
import Link from 'next/link';

const guidelines = [
    "Pedoman Pelaksanaan Terhadap Penggabungan, Peleburan, atau Pengambilalihan",
    "Peraturan KPPU Nomor 4 Tahun 2010 tentang Pedoman Penggunaan Daftar Periksa Kebijakan Persaingan Usaha",
    "Peraturan KPPU Nomor 4 Tahun 2012 tentang Pedoman Pengenaan Denda Keterlambatan Pemberitahuan Penggabungan atau Peleburan Badan Usaha dan Pengambilalihan Saham Perusahaan",
    "Peraturan KPPU Nomor 3 Tahun 2012 tentang Perubahan Kedua atas Peraturan Komisi Pengawas Persaingan Usaha Nomor 13 Tahun 2010 tentang Pedoman Pelaksanaan tentang Penggabungan atau Peleburan Badan Usaha dan Pengambilalihan Saham Perusahaan yang Dapat Mengakibatkan Terjadinya Praktik Monopoli dan Persaingan Usaha Tidak Sehat",
    "Peraturan KPPU Nomor 11 Tahun 2011 tentang Pedoman Pasal 17 (Praktik Monopoli)",
    "Peraturan KPPU Nomor 10 Tahun 2011 tentang Perubahan atas Peraturan Komisi Pengawas Persaingan Usaha Nomor 13 Tahun 2010 tentang Pedoman Pelaksanaan tentang Penggabungan atau Peleburan Badan Usaha dan Pengambilalihan Saham Perusahaan yang Dapat Mengakibatkan Terjadinya Praktik Monopoli dan Persaingan Usaha Tidak Sehat",
    "Peraturan KPPU Nomor 9 Tahun 2011 tentang Pedoman Pasal 50 huruf h",
    "Peraturan KPPU Nomor 8 Tahun 2011 tentang Pedoman Pasal 8 (Pendekatan Harga Jual Kembali)",
    "Peraturan KPPU Nomor 7 Tahun 2011 tentang Pedoman Pasal 27 (Pemilikan Saham)",
    "Peraturan KPPU Nomor 6 Tahun 2011 tentang Pedoman Pasal 23 (Jual Rugi)",
    "Peraturan KPPU Nomor 5 Tahun 2011 tentang Pedoman Pasal 15 (Perjanjian Tertutup)",
    "Peraturan KPPU Nomor 4 Tahun 2011 tentang Pedoman Pasal 5 (Penetapan Harga)",
    "Peraturan KPPU Nomor 3 Tahun 2011 tentang Pedoman Pasal 10 huruf d (Produk Diskriminasi)",
];


const sidebarNavItems = [
  { icon: FileText, label: "REGULASI", href: "/regulasi" },
  { icon: Gavel, label: "PUTUSAN", href: "/penindakan/perkara-persaingan" },
  { icon: Newspaper, label: "JADWAL SIDANG", href: "/jadwal-sidang" },
  { icon: FileText, label: "SIARAN PERS", href: "/publikasi/siaran-pers" },
  { icon: MessageSquareQuote, label: "TANYA JAWAB", href: "/tanya-jawab" },
  { icon: Info, label: "PPID", href: "/ppid" },
];


export default function PedomanPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <img src="/images/bg/map-bw.png" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
            </div>
            <div className="container mx-auto relative z-10">
                <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Pedoman</h1>
                <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                    <Link href="/theme-3/" className="hover:underline">Beranda</Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/theme-3/regulasi" className="hover:underline">Peraturan</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span>Pedoman</span>
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
                                            <TableHead className="p-6 font-semibold">Judul</TableHead>
                                            <TableHead className="text-right w-[100px] p-6 font-semibold">Tautan</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {guidelines.map((item, index) => (
                                            <TableRow key={index} className="dark:border-gray-700/50">
                                                <TableCell className="font-medium px-6 py-5">{index + 1}</TableCell>
                                                <TableCell className="px-6 py-5 leading-relaxed">{item}</TableCell>
                                                <TableCell className="text-right px-6 py-5">
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




