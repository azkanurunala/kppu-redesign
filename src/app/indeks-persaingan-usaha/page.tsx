
'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChartComponent } from '@/components/ui/bar-chart';
import { TrendingUp, FileText, Microscope, Users, ArrowRight, ChevronRight, Gavel, Newspaper, MessageSquareQuote, Info, Scale } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ipuBenefits = [
  {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: "Mengukur Efektivitas Kebijakan",
    description: "Memberikan gambaran umum tentang kondisi persaingan usaha di tingkat nasional dan provinsi."
  },
  {
    icon: <FileText className="w-10 h-10 text-primary" />,
    title: "Dasar Advokasi",
    description: "Menjadi dasar bagi KPPU untuk memberikan saran kepada pemerintah dalam merumuskan kebijakan yang pro-persaingan."
  },
  {
    icon: <Microscope className="w-10 h-10 text-primary" />,
    title: "Mendorong Penelitian",
    description: "Menjadi acuan bagi akademisi dan peneliti untuk melakukan kajian lebih lanjut terkait isu-isu persaingan usaha."
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

export default function IndeksPersainganUsahaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <img src="/images/bg/map-bw.png" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
            </div>
            <div className="container mx-auto relative z-10">
            <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Indeks Persaingan Usaha</h1>
            <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
              <Link href="/" className="hover:underline">Beranda</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Indeks Persaingan Usaha</span>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-16">
                        
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark dark:text-white font-poppins mb-6">Tentang Indeks Persaingan Usaha (IPU)</h2>
                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>Indeks Persaingan Usaha (IPU) adalah suatu indikator untuk mengukur tingkat persaingan usaha di suatu negara atau daerah. IPU disusun berdasarkan tiga dimensi utama: struktur pasar, perilaku pelaku usaha, dan kinerja pasar.</p>
                                <p>Skor IPU yang tinggi menunjukkan tingkat persaingan yang lebih sehat, yang pada akhirnya diharapkan dapat mendorong efisiensi, inovasi, dan kesejahteraan masyarakat.</p>
                            </div>
                            <Button size="lg" variant="outline" className="mt-8">
                                Pelajari Metodologi
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </motion.div>

                        <motion.div
                             initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark dark:text-white font-poppins mb-8 text-center">Skor IPU Nasional 2023</h2>
                            <Card className="bg-card p-8 rounded-3xl shadow-2xl flex items-center justify-center max-w-sm mx-auto">
                                <div className="text-center">
                                    <Scale className="w-16 h-16 text-primary mx-auto mb-4" />
                                    <p className="text-8xl font-bold text-primary font-poppins my-2">4.92</p>
                                    <p className="font-semibold text-2xl text-primary-dark dark:text-white">Kategori "Tinggi"</p>
                                </div>
                            </Card>
                        </motion.div>

                        <motion.div
                             initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                        >
                             <div className="text-center mb-12">
                                <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark dark:text-white font-poppins">Perkembangan Skor IPU Nasional</h2>
                            </div>
                            <Card className="shadow-xl rounded-2xl">
                                <CardContent className="p-8">
                                    <div className="h-[450px]">
                                        <BarChartComponent />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="text-center mb-12">
                                <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark dark:text-white font-poppins">Manfaat Indeks Persaingan Usaha</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {ipuBenefits.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Card className="text-center p-8 bg-card shadow-lg rounded-2xl h-full border-0">
                                            <CardContent className="p-0">
                                                <div className="mx-auto mb-6 flex items-center justify-center h-20 w-20 rounded-full bg-primary/10">
                                                    {item.icon}
                                                </div>
                                                <h3 className="text-2xl font-bold font-poppins text-primary-dark dark:text-white mb-4">{item.title}</h3>
                                                <p className="text-muted-foreground">{item.description}</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
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

