
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, User } from 'lucide-react';
import Link from 'next/link';

const officials = [
  { name: 'Ir. Charles Pandji Dewanto, M.A.P.', title: 'Sekretaris Jenderal', image: 'https://placehold.co/400x500.png', hint: 'portrait man official' },
  { name: 'Dr. Drs. Dominicus Susanto, M.A.', title: 'Kepala Biro Perencanaan dan Keuangan', image: 'https://placehold.co/400x500.png', hint: 'portrait man official' },
  { name: 'Ima Damayanti, S.H., M.H.', title: 'Kepala Biro Hukum, Humas, dan Kerja Sama', image: 'https://placehold.co/400x500.png', hint: 'portrait woman official' },
  { name: 'Drs. Taufik Ariyanto, M.M.', title: 'Kepala Biro Sumber Daya Manusia, Organisasi, dan Tata Laksana', image: 'https://placehold.co/400x500.png', hint: 'portrait man official' },
  { name: 'Tomy Su, S.E., M.S.E.', title: 'Kepala Biro Teknologi Informasi', image: 'https://placehold.co/400x500.png', hint: 'portrait man official' },
  { name: 'Ir. Deswin Nur, M.M.', title: 'Inspektur', image: 'https://placehold.co/400x500.png', hint: 'portrait man official' },
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
                <section className="bg-primary-dark text-white py-20">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Pejabat Sekretariat</h1>
                         <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                            <Link href="/" className="hover:underline">Beranda</Link>
                            <ChevronRight className="h-4 w-4" />
                            <span>Pejabat Sekretariat</span>
                        </div>
                    </div>
                </section>

                <section className="py-20 lg:py-24">
                    <div className="container mx-auto px-4">
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
                            {officials.map((official) => (
                                <motion.div key={official.name} variants={itemVariants}>
                                    <Card className="text-center overflow-hidden group border-0 shadow-lg rounded-2xl bg-card h-full">
                                        <CardContent className="p-0 flex flex-col">
                                            <div className="relative aspect-[4/5] w-full bg-gray-200">
                                                <Image
                                                    src={official.image}
                                                    alt={`Potret ${official.name}`}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                                    data-ai-hint={official.hint}
                                                />
                                            </div>
                                            <div className="p-6 flex-grow flex flex-col">
                                                <h3 className="text-xl font-bold font-poppins text-primary-dark dark:text-white">{official.name}</h3>
                                                <p className="text-muted-foreground mt-2 text-sm">{official.title}</p>
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

