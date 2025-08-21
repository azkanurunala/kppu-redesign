
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Download, TrendingUp, PiggyBank, BarChart2, PieChart } from 'lucide-react';
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

export default function KinerjaKeuanganPage() {
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
                            <Link href="/" className="hover:underline">Beranda</Link>
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

                         <div className="mt-16 text-center">
                             <h3 className="text-2xl font-bold font-poppins text-primary-dark dark:text-white">Dokumen Keuangan</h3>
                             <p className="mt-2 text-muted-foreground mb-6">Akses dokumen perencanaan dan laporan keuangan KPPU.</p>
                             <div className="flex justify-center gap-4">
                                <Button size="lg" variant="outline">Laporan Kinerja (LKjIP)</Button>
                                <Button size="lg" variant="outline">Rencana Kerja &amp; Anggaran (RKA-KL)</Button>
                                <Button size="lg">Laporan Tahunan</Button>
                             </div>
                         </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}


