
'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChartComponent } from '@/components/ui/bar-chart';
import { TrendingUp, FileText, Microscope, Users, ArrowRight } from 'lucide-react';
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

export default function IndeksPersainganUsahaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <section
          className="relative bg-primary-dark text-white py-32 md:py-40 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5"></div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 relative text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-poppins">Indeks Persaingan Usaha</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Mengukur dinamika dan tingkat persaingan usaha di Indonesia untuk mendorong pertumbuhan ekonomi yang sehat.
            </p>
          </motion.div>
        </section>

        <section
          className="py-24 lg:py-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="lg:pr-12">
                <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 font-poppins">TENTANG IPU</h2>
                <p className="text-3xl lg:text-5xl font-bold text-primary-dark dark:text-white font-poppins mb-8">Apa Itu Indeks Persaingan Usaha?</p>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>Indeks Persaingan Usaha (IPU) adalah suatu indikator untuk mengukur tingkat persaingan usaha di suatu negara atau daerah. IPU disusun berdasarkan tiga dimensi utama: struktur pasar, perilaku pelaku usaha, dan kinerja pasar.</p>
                  <p>Skor IPU yang tinggi menunjukkan tingkat persaingan yang lebih sehat, yang pada akhirnya diharapkan dapat mendorong efisiensi, inovasi, dan kesejahteraan masyarakat.</p>
                </div>
                 <Button size="lg" className="mt-10 rounded-full px-8 text-base">
                    Pelajari Metodologi
                    <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <div className="bg-card p-8 rounded-3xl shadow-2xl flex items-center justify-center">
                 <div className="text-center">
                    <p className="text-muted-foreground font-semibold">SKOR IPU NASIONAL 2023</p>
                    <p className="text-8xl font-bold text-primary font-poppins my-4">4.92</p>
                    <p className="font-semibold text-2xl text-primary-dark dark:text-white">Kategori "Tinggi"</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 font-poppins">TREN INDEKS</h2>
              <p className="text-3xl lg:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Perkembangan Skor IPU Nasional</p>
            </div>
            <Card className="shadow-2xl rounded-2xl bg-background">
                <CardContent className="p-8">
                    <div className="h-[450px]">
                        <BarChartComponent />
                    </div>
                </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-24 lg:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 font-poppins">Manfaat</h2>
                    <p className="text-3xl lg:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Kegunaan Indeks Persaingan Usaha</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
