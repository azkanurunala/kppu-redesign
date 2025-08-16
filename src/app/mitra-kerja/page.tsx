
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const partners = [
  { name: "Kepolisian Negara Republik Indonesia (Polri)", logo: "https://kppu.go.id/wp-content/uploads/2019/11/polri.png", hint: "police logo" },
  { name: "Kejaksaan Agung Republik Indonesia", logo: "https://kppu.go.id/wp-content/uploads/2019/11/jamdatun.png", hint: "attorney office logo" },
  { name: "Kementerian Hukum dan Hak Asasi Manusia", logo: "https://kppu.go.id/wp-content/uploads/2019/11/kemenkumham.png", hint: "government ministry logo" },
  { name: "Pusat Pelaporan dan Analisis Transaksi Keuangan (PPATK)", logo: "https://kppu.go.id/wp-content/uploads/2019/11/ppatk.png", hint: "financial intelligence logo" },
  { name: "Direktorat Jenderal Pajak", logo: "https://kppu.go.id/wp-content/uploads/2019/11/pajak.png", hint: "tax office logo" },
  { name: "Otoritas Jasa Keuangan (OJK)", logo: "https://kppu.go.id/wp-content/uploads/2019/11/ojk.png", hint: "financial authority logo" },
  { name: "Kementerian Dalam Negeri Republik Indonesia", logo: "https://kppu.go.id/wp-content/uploads/2019/11/kemendagri.png", hint: "internal affairs ministry logo" },
  { name: "Kementerian Komunikasi dan Informatika", logo: "https://kppu.go.id/wp-content/uploads/2019/11/kominfo.png", hint: "communication ministry logo" },
  { name: "Badan Pusat Statistik (BPS)", logo: "https://kppu.go.id/wp-content/uploads/2019/11/bps.png", hint: "statistics bureau logo" },
  { name: "Kementerian Pertanian Republik Indonesia", logo: "https://kppu.go.id/wp-content/uploads/2019/11/kementan.png", hint: "agriculture ministry logo" },
  { name: "Kementerian Kesehatan Republik Indonesia", logo: "https://kppu.go.id/wp-content/uploads/2019/11/kemenkes.png", hint: "health ministry logo" },
  { name: "Mahkamah Agung Republik Indonesia", logo: "https://kppu.go.id/wp-content/uploads/2019/11/ma.png", hint: "supreme court logo" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function MitraKerjaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <section
          className="bg-primary-dark text-white py-20"
        >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="container mx-auto px-4">
                <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Mitra Kerja</h1>
                <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                    <Link href="/" className="hover:underline">Beranda</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span>Mitra Kerja</span>
                </div>
            </motion.div>
        </section>

        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark dark:text-white font-poppins mb-6">Sinergi untuk Persaingan Usaha yang Sehat</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Informasi mengenai mitra kerja KPPU dapat diakses melalui Sistem Informasi Pengelolaan Kerja Sama (SIKERMA), yang merupakan sistem internal untuk mendokumentasikan, memantau, dan menjadi pusat informasi publik terkait kerja sama yang dimiliki KPPU.
              </p>
               <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Berikut adalah beberapa mitra kerja yang berkaitan dengan pelaksanaan tugas dan fungsi KPPU:
              </p>
            </div>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {partners.map((partner) => (
                <motion.div key={partner.name} variants={itemVariants}>
                  <Card className="h-full flex flex-col items-center justify-center p-6 text-center bg-card hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out border-border/50 rounded-xl">
                    <CardContent className="p-0 flex flex-col items-center justify-center">
                        <div className="relative h-20 w-20 mb-4">
                             <Image
                                src={partner.logo}
                                alt={`Logo ${partner.name}`}
                                layout="fill"
                                objectFit="contain"
                                data-ai-hint={partner.hint}
                                unoptimized
                              />
                        </div>
                      <p className="font-semibold text-sm text-foreground leading-snug">{partner.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
