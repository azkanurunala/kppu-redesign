
'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, Search, ListFilter, ChevronRight, FileText, Calendar, Users, MessageSquareQuote, Info, Gavel, Newspaper } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const researchData = [
  {
    title: "Analisis Dampak Regulasi Terhadap Persaingan di Industri Telekomunikasi Digital",
    authors: "Dr. A. Suprapto, M.Sc. & Tim",
    date: "15 Juni 2025",
    description: "Kajian mendalam mengenai bagaimana peraturan pemerintah terbaru memengaruhi struktur pasar, inovasi, dan tingkat persaingan di antara penyedia layanan telekomunikasi di era digital.",
    category: "Telekomunikasi"
  },
  {
    title: "Struktur Pasar dan Persaingan dalam E-commerce: Studi Kasus Marketplace di Indonesia",
    authors: "Prof. Dr. B. Wijayanti, S.E.",
    date: "28 Mei 2025",
    description: "Penelitian ini memetakan struktur pasar e-commerce di Indonesia, menganalisis tingkat konsentrasi pasar, dan mengidentifikasi potensi praktik usaha tidak sehat di platform marketplace terbesar.",
    category: "Ekonomi Digital"
  },
  {
    title: "Efektivitas Kebijakan Kemitraan UMKM dengan Usaha Besar di Sektor Ritel",
    authors: "Tim Peneliti Kanwil III",
    date: "10 April 2025",
    description: "Evaluasi terhadap implementasi program kemitraan antara UMKM pemasok dengan peritel modern, mengukur dampak ekonomi dan tantangan yang dihadapi oleh UMKM.",
    category: "UMKM"
  },
  {
    title: "Kajian Persaingan Usaha pada Industri Jasa Pengiriman Logistik",
    authors: "Dr. C. Nugroho",
    date: "20 Februari 2025",
    description: "Menganalisis dinamika persaingan dalam industri logistik yang berkembang pesat, dengan fokus pada hambatan masuk (entry barrier) dan potensi perilaku kartel.",
    category: "Logistik"
  },
];

const archiveYears = ["2025", "2024", "2023", "2022"];
const categories = ["Semua", "Telekomunikasi", "Ekonomi Digital", "UMKM", "Logistik"];

const sidebarNavItems = [
  { icon: FileText, label: "REGULASI", href: "/regulasi" },
  { icon: Gavel, label: "PUTUSAN", href: "/putusan" },
  { icon: Newspaper, label: "JADWAL SIDANG", href: "/jadwal-sidang" },
  { icon: FileText, label: "SIARAN PERS", href: "/siaran-pers" },
  { icon: MessageSquareQuote, label: "TANYA JAWAB", href: "/tanya-jawab" },
  { icon: Info, label: "PPID", href: "/ppid" },
];

export default function PenelitianPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-primary-dark text-white py-20"
        >
          <div className="container mx-auto px-4">
            <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Penelitian KPPU</h1>
            <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
              <Link href="/" className="hover:underline">Beranda</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Penelitian</span>
            </div>
          </div>
        </motion.section>

        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
              <div className="lg:col-span-3 space-y-10">
                {researchData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1.5 border-l-4 border-primary bg-card">
                      <CardHeader>
                          <div className="flex items-center text-sm text-muted-foreground gap-6 mb-3">
                              <div className="flex items-center gap-2">
                                  <Users className="h-4 w-4" />
                                  <span>{item.authors}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4" />
                                  <span>{item.date}</span>
                              </div>
                          </div>
                          <CardTitle className="text-2xl font-bold font-poppins text-primary-dark dark:text-white leading-snug hover:text-primary cursor-pointer transition-colors">
                              {item.title}
                          </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                        <Button size="lg" variant="outline" className="rounded-full px-6 border-primary text-primary hover:bg-primary/10 hover:text-primary">
                          <Download className="h-4 w-4 mr-2" />
                          Unduh Laporan
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
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
                      <Input placeholder="Cari penelitian..." className="pl-11 h-11" />
                    </div>
                    <Select>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Pilih Kategori" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(cat => <SelectItem key={cat} value={cat.toLowerCase()}>{cat}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Pilih Tahun" />
                      </SelectTrigger>
                      <SelectContent>
                        {archiveYears.map(year => <SelectItem key={year} value={year}>{year}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <Button className="w-full h-11">Terapkan Filter</Button>
                  </CardContent>
                </Card>
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
