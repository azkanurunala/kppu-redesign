
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Briefcase, Users, Building } from 'lucide-react';
import Link from 'next/link';

const orgStructure = [
  { level: 1, title: 'Ketua & Wakil Ketua', description: 'Pimpinan tertinggi KPPU yang bertanggung jawab atas seluruh kegiatan lembaga.', icon: <Users className="w-10 h-10 text-primary" />, gridClass: 'md:col-span-2' },
  { level: 2, title: 'Sekretariat Jenderal', description: 'Mendukung pelaksanaan tugas-tugas komisi dan pengelolaan administrasi.', icon: <Briefcase className="w-10 h-10 text-primary" />, gridClass: '' },
  { level: 2, title: 'Deputi Bidang', description: 'Terdiri dari beberapa deputi yang membawahi direktorat teknis.', icon: <Building className="w-10 h-10 text-primary" />, gridClass: '' },
];

const directorates = [
    { title: "Direktorat Penegakan Hukum", area: "Deputi Bidang Penegakan Hukum" },
    { title: "Direktorat Merger & Akuisisi", area: "Deputi Bidang Penegakan Hukum" },
    { title: "Direktorat Kebijakan Persaingan", area: "Deputi Bidang Kajian & Advokasi" },
    { title: "Direktorat Advokasi", area: "Deputi Bidang Kajian & Advokasi" },
    { title: "Biro Perencanaan dan Keuangan", area: "Sekretariat Jenderal" },
    { title: "Biro Hukum, Humas & Kerja Sama", area: "Sekretariat Jenderal" },
]


export default function OrganisasiPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      
            <main className="flex-1">
                <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
                    <div className="absolute inset-0">
                        <img src="/images/bg/theme-2.jpg" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
                    </div>
                    <div className="container mx-auto relative z-10">
                        <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Struktur Organisasi</h1>
                        <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                            <Link href="/" className="hover:underline">Beranda</Link>
                            <ChevronRight className="h-4 w-4" />
                            <span>Struktur Organisasi</span>
                        </div>
                    </div>
                </section>

                <section className="py-20 lg:py-24">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold font-poppins text-primary-dark dark:text-white">Struktur Organisasi KPPU</h2>
                            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                                Struktur organisasi KPPU dirancang untuk mendukung pelaksanaan tugas dan wewenang secara efektif dan efisien.
                            </p>
                        </div>
                        
                        <div className="mb-16">
                             <Card className="shadow-2xl rounded-3xl bg-card border-0">
                                 <CardContent className="p-10 md:p-16">
                                     <div className="text-center mb-8">
                                         <h3 className="text-3xl lg:text-4xl font-bold text-primary-dark dark:text-white font-poppins mb-6">Struktur Organisasi KPPU</h3>
                                         <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                                             Struktur organisasi KPPU yang menggambarkan hierarki dan hubungan kerja antar unit di lingkungan Komisi Pengawas Persaingan Usaha. Struktur ini memastikan alur koordinasi yang jelas dari Pimpinan Komisi hingga ke unit-unit pelaksana teknis di bawahnya, termasuk kesekretariatan jenderal dan para deputi.
                                         </p>
                                     </div>
                                     <div className="relative w-full rounded-2xl overflow-hidden bg-white">
                                        <img src="/images/bg/organisasi.jpg" alt="Struktur Organisasi KPPU" className="w-full h-auto object-contain" data-ai-hint="organization chart flowchart" />
                                     </div>
                                 </CardContent>
                             </Card>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {orgStructure.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={item.gridClass}
                                >
                                    <Card className="h-full p-8 bg-card shadow-lg rounded-2xl border-0 flex flex-col items-center text-center">
                                        <div className="p-5 bg-primary/10 rounded-full mb-6">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold font-poppins text-primary-dark dark:text-white mb-4">{item.title}</h3>
                                        <p className="text-muted-foreground flex-grow">{item.description}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                         <div className="mt-16">
                             <h3 className="text-3xl font-bold text-primary-dark dark:text-white font-poppins mb-8 text-center">Direktorat &amp; Biro</h3>
                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                 {directorates.map((item, index) => (
                                     <Card key={index} className="bg-card shadow-md rounded-xl border-0">
                                         <CardContent className="p-6">
                                             <p className="text-sm text-primary font-semibold">{item.area}</p>
                                             <h4 className="text-lg font-bold font-poppins text-primary-dark dark:text-white mt-1">{item.title}</h4>
                                         </CardContent>
                                     </Card>
                                 ))}
                             </div>
                         </div>
                    </div>
                </section>
            </main>
      
        </div>
    );
}

