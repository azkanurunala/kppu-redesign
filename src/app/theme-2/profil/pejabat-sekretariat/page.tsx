
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, User, MapPin } from 'lucide-react';
import Link from 'next/link';

// Data Pejabat Sekretariat (6 orang)
const secretariatOfficials = [
  {
    name: 'Lukman Sungkar, S.E., M.M.',
    title: 'Plt. Sekretaris Jenderal',
    image: '/images/people/lukman-sungkar.jpg',
    hint: 'portrait man official black suit black tie peci'
  },
  {
    name: 'Taufik Ariyanto Arsad, S.E., M.E.',
    title: 'Deputi Bidang Kajian dan Advokasi',
    image: '/images/people/taufik-ariyanto.jpg',
    hint: 'portrait man official gray hair black suit blue tie'
  },
  {
    name: 'Setyabudi Yulianto, S.H.',
    title: 'Deputi Bidang Penegakan Hukum',
    image: '/images/people/setyabudi-yulianto.jpg',
    hint: 'portrait man official black suit blue tie'
  },
  {
    name: 'Daniel Agustino, S.E., M.P.P.',
    title: 'Staf Ahli Unsur Pembantu Komisi Bidang Ekonomi',
    image: '/images/people/daniel-agustino.jpg',
    hint: 'portrait man official glasses black suit blue tie'
  },
  {
    name: 'Andi Zubaida Assaf, S.T.P., M.Si.',
    title: 'Kepala Biro Perencanaan dan Keuangan',
    image: '/images/people/andi-zubaida.jpg',
    hint: 'portrait woman official pink hijab dark top smiling'
  },
  {
    name: 'Manaek SM Pasaribu, S.H., LL.M.',
    title: 'Kepala Biro Hukum',
    image: '/images/people/manaek-pasaribu.jpg',
    hint: 'portrait man official black peci black suit red tie'
  }
];

// Data Pejabat Kantor Wilayah (7 orang)
const regionalOfficials = [
  {
    name: 'Ridho Pamungkas, S.I.P.',
    title: 'Kepala Kantor Wilayah I',
    location: 'Medan',
    image: '/images/people/ridho-pamungkas.jpg',
    hint: 'portrait man official gray suit blue tie'
  },
  {
    name: 'Wahyu Bekti Anggoro, S.H., M.H.',
    title: 'Kepala Kantor Wilayah II',
    location: 'Lampung',
    image: '/images/people/wahyu-bekti.jpg',
    hint: 'portrait man official glasses black suit white shirt smiling'
  },
  {
    name: 'Lina Rosmiati, S.P., M.E.',
    title: 'Kepala Kantor Wilayah III',
    location: 'Bandung',
    image: '/images/people/lina-rosmiati.jpg',
    hint: 'portrait woman official bright pink hijab glasses black blazer'
  },
  {
    name: 'Dyah Paramita, S.I.Kom., M.Si',
    title: 'Plt. Kepala Kantor Wilayah IV',
    location: 'Surabaya',
    image: '/images/people/dyah-paramita.jpg',
    hint: 'portrait woman official black hijab white ciput white top black blazer'
  },
  {
    name: 'FY Andriyanto, S.E., M.Si.',
    title: 'Kepala Kantor Wilayah V',
    location: 'Samarinda',
    image: '/images/people/fy-andriyanto.jpg',
    hint: 'portrait man official dark skin black suit black peci'
  },
  {
    name: 'Charisma Desta Ardiansyah, S.Sos.',
    title: 'Plt. Kepala Kantor Wilayah VI',
    location: 'Makassar',
    image: '/images/people/charisma-desta.jpg',
    hint: 'portrait man official white shirt red patterned tie'
  },
  {
    name: 'M. Hendry Setyawan, S.E., S.Si., M.S.M.',
    title: 'Kepala Kantor Wilayah VII',
    location: 'Yogyakarta',
    image: '/images/people/hendry-setyawan.jpg',
    hint: 'portrait man official glasses black suit blue tie black peci'
  }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
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

export default function PejabatSekretariatPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
            <Header />
            <main className="flex-1">
                <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
                    <div className="absolute inset-0">
                        <img src="/images/bg/map-bw.png" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
                    </div>
                    <div className="container mx-auto relative z-10">
                        <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Pejabat Sekretariat</h1>
                         <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                            <Link href="/theme-2/" className="hover:underline">Beranda</Link>
                            <ChevronRight className="h-4 w-4" />
                            <span>Pejabat Sekretariat</span>
                        </div>
                    </div>
                </section>

                {/* Pejabat Sekretariat */}
                <section className="py-20 lg:py-24">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold font-poppins text-primary-dark dark:text-white">Pimpinan Tinggi Pratama</h2>
                            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                                Para pejabat yang memimpin unit-unit pendukung di lingkungan Sekretariat Jenderal KPPU.
                            </p>
                        </div>
                        <motion.div 
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {secretariatOfficials.map((official) => (
                                <motion.div key={official.name} variants={itemVariants}>
                                    <Card className="text-center overflow-hidden group border-0 shadow-lg rounded-2xl bg-card h-full hover:shadow-xl transition-all duration-300">
                                        <CardContent className="p-0 flex flex-col">
                                            <div className="relative aspect-[4/5] w-full bg-gray-200">
                                                <Image
                                                    src={official.image}
                                                    alt={`Potret ${official.name}`}
                                                                            fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                                    data-ai-hint={official.hint}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                            <div className="p-6 flex-grow flex flex-col">
                                                <h3 className="text-lg font-bold font-poppins text-primary-dark dark:text-white leading-tight">{official.name}</h3>
                                                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{official.title}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Pejabat Kantor Wilayah */}
                <section className="py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold font-poppins text-primary-dark dark:text-white">Kepala Kantor Wilayah</h2>
                            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                                Para pejabat yang memimpin kantor wilayah KPPU di berbagai daerah di Indonesia.
                            </p>
                        </div>
                        <motion.div 
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {regionalOfficials.map((official) => (
                                <motion.div key={official.name} variants={itemVariants}>
                                    <Card className="text-center overflow-hidden group border-0 shadow-lg rounded-2xl bg-card h-full hover:shadow-xl transition-all duration-300">
                                        <CardContent className="p-0 flex flex-col">
                                            <div className="relative aspect-[4/5] w-full bg-gray-200">
                                                <Image
                                                    src={official.image}
                                                    alt={`Potret ${official.name}`}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                                    data-ai-hint={official.hint}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                            <div className="p-4 flex-grow flex flex-col">
                                                <h3 className="text-base font-bold font-poppins text-primary-dark dark:text-white leading-tight">{official.name}</h3>
                                                <p className="text-muted-foreground mt-1 text-xs leading-relaxed">{official.title}</p>
                                                {official.location && (
                                                    <div className="flex items-center justify-center mt-2 text-xs text-primary">
                                                        <MapPin className="w-3 h-3 mr-1" />
                                                        <span>{official.location}</span>
                                                    </div>
                                                )}
                                            </div>
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





