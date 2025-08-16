
'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AnimatedCard } from '@/components/animated-card';
import { Target, CheckCircle, Shield, Rocket, Lightbulb, Users, Handshake, Heart, BrainCircuit, Gem } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MisiItems = [
    {
        icon: <Target className="w-10 h-10" />,
        title: "Mendukung Cita-cita Nasional",
        description: "Mewujudkan cita-cita bangsa melalui persaingan usaha yang sehat dan berkeadilan."
    },
    {
        icon: <CheckCircle className="w-10 h-10" />,
        title: "Penegakan Hukum Efektif",
        description: "Menegakkan hukum persaingan usaha yang memberikan kepastian dan manfaat bagi masyarakat."
    },
    {
        icon: <Shield className="w-10 h-10" />,
        title: "Mencegah Praktik Monopoli",
        description: "Secara aktif mencegah praktik monopoli dan persaingan usaha tidak sehat."
    },
];

const NilaiItems = [
  { icon: <Handshake className="w-8 h-8 mx-auto mb-4 text-primary" />, title: "Rasa (Responsibility)", description: "Bertanggung jawab penuh atas setiap tugas dan kewajiban yang diemban." },
  { icon: <Gem className="w-8 h-8 mx-auto mb-4 text-primary" />, title: "Integritas (Integrity)", description: "Jujur, konsisten, dan bertindak sesuai dengan nilai dan etika organisasi." },
  { icon: <Rocket className="w-8 h-8 mx-auto mb-4 text-primary" />, title: "Kepercayaan (Confidence)", description: "Percaya pada kemampuan diri sendiri untuk menyelesaikan setiap tantangan." },
  { icon: <Lightbulb className="w-8 h-8 mx-auto mb-4 text-primary" />, title: "Kerja Keras (Hardwork)", description: "Bekerja keras dan pantang menyerah untuk mencapai tujuan organisasi." },
  { icon: <Users className="w-8 h-8 mx-auto mb-4 text-primary" />, title: "Kerja Tim (Teamwork)", description: "Bekerja sama secara harmonis, saling membantu, dan berkoordinasi efektif." },
];

export default function VisiMisiPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative py-32 lg:py-48 text-center bg-gradient-to-br from-primary-dark via-background to-background"
                >
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5"></div>
                    <div className="container mx-auto px-4 relative">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-poppins text-white">Visi & Misi</h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            Membentuk fondasi persaingan usaha yang sehat untuk Indonesia Maju.
                        </p>
                    </div>
                </motion.section>

                {/* Visi Section */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    className="py-24 lg:py-32"
                >
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-4xl mx-auto">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 font-poppins">VISI KPPU</h2>
                            <p className="text-3xl md:text-4xl lg:text-6xl font-semibold text-primary-dark dark:text-white leading-tight font-poppins">
                                "Terwujudnya <span className="text-primary">persaingan usaha yang sehat</span> untuk kesejahteraan rakyat"
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Misi Section */}
                <section className="py-24 lg:py-32 bg-card">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-20">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 font-poppins">MISI KPPU</h2>
                            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Langkah Strategis Kami</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {MisiItems.map((item, index) => (
                                <AnimatedCard key={index} title={item.title} description={item.description} icon={item.icon} />
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Tujuan & Sasaran Section */}
                <section className="py-24 lg:py-32">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 font-poppins">TUJUAN</h2>
                                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white mb-6 font-poppins">Arah dan Fokus Utama</p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Mewujudkan perekonomian nasional yang efisien dan berkeadilan untuk meningkatkan kesejahteraan rakyat melalui persaingan usaha yang sehat.
                                </p>
                                <div className="mt-8 relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl">
                                     <Image src="https://placehold.co/600x400.png" alt="Tujuan KPPU" layout="fill" objectFit="cover" data-ai-hint="abstract arrows target" />
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8 }}
                                className="lg:mt-24"
                            >
                                <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl mb-8">
                                     <Image src="https://placehold.co/600x400.png" alt="Sasaran Strategis KPPU" layout="fill" objectFit="cover" data-ai-hint="chess strategy board" />
                                </div>
                                <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 font-poppins">SASARAN STRATEGIS</h2>
                                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white mb-6 font-poppins">Target yang Terukur</p>
                                <ul className="space-y-4 text-lg text-muted-foreground list-inside">
                                    <li className="flex items-start"><CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" /><span>Terwujudnya kepastian hukum persaingan usaha.</span></li>
                                    <li className="flex items-start"><CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" /><span>Optimalnya pencegahan pelanggaran hukum persaingan usaha.</span></li>
                                    <li className="flex items-start"><CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" /><span>Meningkatnya kualitas tata kelola kelembagaan.</span></li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Nilai-nilai Section */}
                <section className="py-24 lg:py-32 bg-card">
                    <div className="container mx-auto px-4">
                         <div className="text-center mb-20">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 font-poppins">NILAI-NILAI KPPU (RICH TEAM)</h2>
                            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Prinsip yang Kami Junjung Tinggi</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {NilaiItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center p-8 bg-background rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                                >
                                    {item.icon}
                                    <h3 className="font-bold text-xl mb-2 font-poppins text-primary-dark dark:text-white">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
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
