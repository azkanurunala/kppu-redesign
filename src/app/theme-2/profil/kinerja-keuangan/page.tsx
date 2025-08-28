
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronRight, Download, TrendingUp, PiggyBank, BarChart2, PieChart, Search, FileText, Calendar, FileDown } from 'lucide-react';
import Link from 'next/link';
import { BarChartComponent } from '@/components/ui/bar-chart';

const financialHighlights = [
  {
    icon: <PiggyBank className="w-10 h-10 text-primary" />,
    title: "Anggaran Tahun 2024",
    value: "Rp 250 Miliar",
    description: "Total pagu anggaran yang dialokasikan untuk operasional KPPU."
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: "Realisasi Anggaran 2023",
    value: "97.5%",
    description: "Tingkat penyerapan anggaran pada tahun sebelumnya."
  },
  {
    icon: <Download className="w-10 h-10 text-primary" />,
    title: "Laporan Keuangan",
    value: "WTP",
    description: "Opini Wajar Tanpa Pengecualian dari BPK selama 5 tahun berturut-turut."
  }
];

// Data dokumen keuangan
const financialDocuments = [
  {
    id: 1,
    title: "Laporan Kinerja Instansi Pemerintah (LKjIP) 2024",
    category: "LKjIP",
    year: 2024,
    fileSize: "2.5 MB",
    fileType: "PDF",
    downloadUrl: "/documents/lkjip-2024.pdf",
    description: "Laporan kinerja tahunan KPPU yang berisi capaian program dan kegiatan."
  },
  {
    id: 2,
    title: "Laporan Kinerja Instansi Pemerintah (LKjIP) 2023",
    category: "LKjIP",
    year: 2023,
    fileSize: "2.8 MB",
    fileType: "PDF",
    downloadUrl: "/documents/lkjip-2023.pdf",
    description: "Laporan kinerja tahunan KPPU yang berisi capaian program dan kegiatan."
  },
  {
    id: 3,
    title: "Rencana Kerja & Anggaran Kementerian/Lembaga (RKA-KL) 2024",
    category: "RKA-KL",
    year: 2024,
    fileSize: "1.8 MB",
    fileType: "PDF",
    downloadUrl: "/documents/rka-kl-2024.pdf",
    description: "Dokumen perencanaan anggaran tahunan KPPU."
  },
  {
    id: 4,
    title: "Rencana Kerja & Anggaran Kementerian/Lembaga (RKA-KL) 2023",
    category: "RKA-KL",
    year: 2023,
    fileSize: "1.9 MB",
    fileType: "PDF",
    downloadUrl: "/documents/rka-kl-2023.pdf",
    description: "Dokumen perencanaan anggaran tahunan KPPU."
  },
  {
    id: 5,
    title: "Laporan Tahunan KPPU 2024",
    category: "Laporan Tahunan",
    year: 2024,
    fileSize: "5.2 MB",
    fileType: "PDF",
    downloadUrl: "/documents/laporan-tahunan-2024.pdf",
    description: "Laporan tahunan lengkap KPPU yang berisi kinerja dan pencapaian."
  },
  {
    id: 6,
    title: "Laporan Tahunan KPPU 2023",
    category: "Laporan Tahunan",
    year: 2023,
    fileSize: "4.8 MB",
    fileType: "PDF",
    downloadUrl: "/documents/laporan-tahunan-2023.pdf",
    description: "Laporan tahunan lengkap KPPU yang berisi kinerja dan pencapaian."
  },
  {
    id: 7,
    title: "Laporan Kinerja Instansi Pemerintah (LKjIP) 2022",
    category: "LKjIP",
    year: 2022,
    fileSize: "2.6 MB",
    fileType: "PDF",
    downloadUrl: "/documents/lkjip-2022.pdf",
    description: "Laporan kinerja tahunan KPPU yang berisi capaian program dan kegiatan."
  },
  {
    id: 8,
    title: "Laporan Tahunan KPPU 2022",
    category: "Laporan Tahunan",
    year: 2022,
    fileSize: "4.5 MB",
    fileType: "PDF",
    downloadUrl: "/documents/laporan-tahunan-2022.pdf",
    description: "Laporan tahunan lengkap KPPU yang berisi kinerja dan pencapaian."
  }
];

export default function KinerjaKeuanganPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedYear, setSelectedYear] = useState('all');
    const [downloading, setDownloading] = useState<number | null>(null);

    // Filter dokumen berdasarkan search, category, dan year
    const filteredDocuments = financialDocuments.filter(doc => {
        const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             doc.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
        const matchesYear = selectedYear === 'all' || doc.year.toString() === selectedYear;
        
        return matchesSearch && matchesCategory && matchesYear;
    });

    // Fungsi download dokumen
    const handleDownload = async (doc: typeof financialDocuments[0]) => {
        setDownloading(doc.id);
        
        try {
            // Simulasi download (dalam implementasi nyata, ini akan mengunduh file dari server)
            const link = document.createElement('a');
            link.href = doc.downloadUrl;
            link.download = doc.title + '.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Simulasi delay download
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Tampilkan notifikasi sukses
            alert(`Dokumen "${doc.title}" berhasil diunduh!`);
        } catch (error) {
            alert('Gagal mengunduh dokumen. Silakan coba lagi.');
        } finally {
            setDownloading(null);
        }
    };

    // Get unique categories and years for filter
    const categories = ['all', ...Array.from(new Set(financialDocuments.map(doc => doc.category)))];
    const years = ['all', ...Array.from(new Set(financialDocuments.map(doc => doc.year.toString()))).sort((a, b) => parseInt(b) - parseInt(a))];

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
            <Header />
            <main className="flex-1">
                <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
                    <div className="absolute inset-0">
                        <img src="/images/bg/map-bw.png" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
                    </div>
                    <div className="container mx-auto relative z-10">
                        <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Kinerja Keuangan</h1>
                        <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                            <Link href="/theme-2/" className="hover:underline">Beranda</Link>
                            <ChevronRight className="h-4 w-4" />
                            <span>Kinerja Keuangan</span>
                        </div>
                    </div>
                </section>

                <section className="py-20 lg:py-24">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold font-poppins text-primary-dark dark:text-white">Transparansi Anggaran</h2>
                            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                                KPPU berkomitmen untuk mengelola keuangan negara secara transparan, akuntabel, dan efisien untuk sebesar-besarnya kesejahteraan rakyat.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                           {financialHighlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="h-full p-8 text-center bg-card shadow-lg rounded-2xl border-0">
                                        <div className="p-5 bg-primary/10 rounded-full mb-6 inline-block">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold font-poppins text-primary-dark dark:text-white mb-2">{item.title}</h3>
                                        <p className="text-4xl font-bold text-primary mb-4">{item.value}</p>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </Card>
                                </motion.div>
                           ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <Card className="shadow-xl rounded-2xl">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3"><BarChart2 className="w-6 h-6 text-primary" />Realisasi Anggaran per Program (2023)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[350px]">
                                        <BarChartComponent />
                                    </div>
                                </CardContent>
                            </Card>
                             <Card className="shadow-xl rounded-2xl">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3"><PieChart className="w-6 h-6 text-primary" />Alokasi Anggaran per Jenis Belanja (2024)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                     <div className="h-[350px] flex items-center justify-center">
                                       <p className="text-muted-foreground">Placeholder untuk Pie Chart Alokasi Anggaran</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Dokumen Keuangan Section */}
                        <section className="mt-20">
                            <div className="text-center mb-12">
                                <h3 className="text-3xl font-bold font-poppins text-primary-dark dark:text-white mb-4">Dokumen Keuangan</h3>
                                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                    Akses dokumen perencanaan dan laporan keuangan KPPU secara transparan dan akuntabel.
                                </p>
                            </div>

                            {/* Filter Section */}
                            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 mb-8">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                        <Input
                                            placeholder="Cari dokumen..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="pl-10"
                                        />
                                    </div>
                                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Kategori" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories.map((category) => (
                                                <SelectItem key={category} value={category}>
                                                    {category === 'all' ? 'Semua Kategori' : category}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <Select value={selectedYear} onValueChange={setSelectedYear}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Tahun" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {years.map((year) => (
                                                <SelectItem key={year} value={year}>
                                                    {year === 'all' ? 'Semua Tahun' : year}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <Button 
                                        variant="outline" 
                                        onClick={() => {
                                            setSearchTerm('');
                                            setSelectedCategory('all');
                                            setSelectedYear('all');
                                        }}
                                    >
                                        Reset Filter
                                    </Button>
                                </div>
                            </div>

                            {/* Documents Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredDocuments.map((doc, index) => (
                                    <motion.div
                                        key={doc.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Card className="h-full shadow-lg rounded-2xl border-0 hover:shadow-xl transition-shadow duration-300">
                                            <CardContent className="p-6">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="p-3 bg-primary/10 rounded-lg">
                                                        <FileText className="w-6 h-6 text-primary" />
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>{doc.year}</span>
                                                    </div>
                                                </div>
                                                
                                                <h4 className="font-bold text-primary-dark dark:text-white mb-2 line-clamp-2">
                                                    {doc.title}
                                                </h4>
                                                
                                                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                                    {doc.description}
                                                </p>
                                                
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full text-muted-foreground">
                                                        {doc.category}
                                                    </span>
                                                    <span className="text-xs text-muted-foreground">
                                                        {doc.fileSize} • {doc.fileType}
                                                    </span>
                                                </div>
                                                
                                                <Button
                                                    onClick={() => handleDownload(doc)}
                                                    disabled={downloading === doc.id}
                                                    className="w-full"
                                                    size="sm"
                                                >
                                                    {downloading === doc.id ? (
                                                        <>
                                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                            Mengunduh...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <FileDown className="w-4 h-4 mr-2" />
                                                            Unduh Dokumen
                                                        </>
                                                    )}
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>

                            {filteredDocuments.length === 0 && (
                                <div className="text-center py-12">
                                    <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                    <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
                                        Tidak ada dokumen ditemukan
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Coba ubah filter pencarian Anda
                                    </p>
                                </div>
                            )}
                        </section>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}





