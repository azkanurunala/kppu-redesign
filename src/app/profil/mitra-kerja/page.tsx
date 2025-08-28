
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Shield, Scale, Building2, TrendingUp, DollarSign, Users, Radio, BarChart3, Leaf, Heart, Gavel } from 'lucide-react';
import Link from 'next/link';

const partners = [
  { name: "Kepolisian Negara Republik Indonesia (Polri)", icon: Shield, color: "text-blue-600" },
  { name: "Kejaksaan Agung Republik Indonesia", icon: Scale, color: "text-red-600" },
  { name: "Kementerian Hukum dan Hak Asasi Manusia", icon: Building2, color: "text-green-600" },
  { name: "Pusat Pelaporan dan Analisis Transaksi Keuangan (PPATK)", icon: TrendingUp, color: "text-purple-600" },
  { name: "Direktorat Jenderal Pajak", icon: DollarSign, color: "text-yellow-600" },
  { name: "Otoritas Jasa Keuangan (OJK)", icon: Users, color: "text-indigo-600" },
  { name: "Kementerian Dalam Negeri Republik Indonesia", icon: Building2, color: "text-orange-600" },
  { name: "Kementerian Komunikasi dan Informatika", icon: Radio, color: "text-pink-600" },
  { name: "Badan Pusat Statistik (BPS)", icon: BarChart3, color: "text-teal-600" },
  { name: "Kementerian Pertanian Republik Indonesia", icon: Leaf, color: "text-emerald-600" },
  { name: "Kementerian Kesehatan Republik Indonesia", icon: Heart, color: "text-rose-600" },
  { name: "Mahkamah Agung Republik Indonesia", icon: Gavel, color: "text-amber-600" },
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
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-primary-dark text-white py-20 relative overflow-hidden"
        >
            <div className="container mx-auto">
                <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Mitra Kerja</h1>
                <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                    <Link href="/" className="hover:underline">Beranda</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span>Mitra Kerja</span>
                </div>
            </div>
        </motion.section>

        <section className="py-24 lg:py-32">
          <div className="container mx-auto">
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
               className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
             >
               {partners.map((partner) => {
                 const IconComponent = partner.icon;
                 return (
                   <motion.div key={partner.name} variants={itemVariants}>
                     <Card className="h-full flex flex-col items-center p-6 text-center bg-card hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out border-border/50 rounded-xl">
                       <CardContent className="p-0 flex flex-col items-center">
                                                      <div className="flex items-center justify-center h-20 w-20 mb-4">
                                 <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white/90 shadow-lg">
                                     <IconComponent className={`h-8 w-8 ${partner.color}`} />
                                 </div>
                            </div>
                         <p className="font-semibold text-sm text-foreground leading-snug">{partner.name}</p>
                       </CardContent>
                     </Card>
                   </motion.div>
                 );
               })}
             </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}


