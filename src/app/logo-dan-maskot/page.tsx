
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Eye, Palette, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2,
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

export default function LogoMaskotPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
            <Header />
            <main className="flex-1">
                <section
                    className="relative py-32 lg:py-40 text-white bg-primary-dark"
                >
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5"></div>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="container mx-auto relative text-center">
                        <h1 className="text-5xl md:text-7xl font-bold font-poppins">Logo & Maskot</h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            Identitas visual yang merepresentasikan semangat dan nilai-nilai KPPU.
                        </p>
                    </motion.div>
                </section>

                <section className="py-24 lg:py-32">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                        >
                            <div className="lg:pr-12">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 font-poppins">Filosofi Logo</h2>
                                <p className="text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white font-poppins mb-8">Makna di Balik Identitas</p>
                                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                    <p>Logo KPPU dirancang untuk mencerminkan visi, misi, dan nilai-nilai yang dipegang teguh oleh lembaga. Setiap elemen dalam logo memiliki makna mendalam yang saling terkait.</p>
                                    <p>Bentuk perisai melambangkan fungsi perlindungan terhadap persaingan usaha yang sehat. Timbangan di tengah merepresentasikan keadilan dan keseimbangan dalam penegakan hukum. Warna biru memberikan kesan profesionalisme dan kepercayaan, sementara warna emas melambangkan kemakmuran yang menjadi tujuan akhir.</p>
                                </div>
                                 <Button size="lg" className="mt-10 rounded-full px-8 text-base">
                                    <Download className="w-5 h-5 mr-3" />
                                    Unduh Panduan Logo
                                </Button>
                            </div>
                            <div className="bg-card p-8 rounded-3xl shadow-2xl flex items-center justify-center aspect-square">
                                <Image
                                    src="https://kppu.go.id/wp-content/uploads/2019/09/cropped-LOGO-KPPU-1.png"
                                    alt="Logo KPPU"
                                    width={300}
                                    height={300}
                                    data-ai-hint="official logo"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="py-24 lg:py-32 bg-card">
                    <div className="container mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 font-poppins">Panduan Penggunaan</h2>
                            <p className="text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Konsistensi Visual</p>
                        </div>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-10"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <motion.div variants={itemVariants}>
                                <Card className="text-center p-8 bg-background shadow-lg rounded-2xl h-full">
                                    <CardContent className="p-0">
                                        <Eye className="h-12 w-12 text-primary mx-auto mb-6" />
                                        <h3 className="text-2xl font-bold font-poppins text-primary-dark dark:text-white mb-4">Ruang Kosong</h3>
                                        <p className="text-muted-foreground">Pastikan ada ruang kosong yang cukup di sekitar logo untuk menjaga visibilitas dan integritasnya.</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                             <motion.div variants={itemVariants}>
                                <Card className="text-center p-8 bg-background shadow-lg rounded-2xl h-full">
                                    <CardContent className="p-0">
                                        <Scale className="h-12 w-12 text-primary mx-auto mb-6" />
                                        <h3 className="text-2xl font-bold font-poppins text-primary-dark dark:text-white mb-4">Ukuran Minimum</h3>
                                        <p className="text-muted-foreground">Jangan gunakan logo dalam ukuran yang terlalu kecil sehingga sulit dikenali atau dibaca.</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                             <motion.div variants={itemVariants}>
                                <Card className="text-center p-8 bg-background shadow-lg rounded-2xl h-full">
                                    <CardContent className="p-0">
                                        <Palette className="h-12 w-12 text-primary mx-auto mb-6" />
                                        <h3 className="text-2xl font-bold font-poppins text-primary-dark dark:text-white mb-4">Warna</h3>
                                        <p className="text-muted-foreground">Gunakan varian warna logo yang telah disediakan. Jangan mengubah atau memodifikasi warna standar logo.</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                <section className="py-24 lg:py-32">
                    <div className="container mx-auto">
                         <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                        >
                             <div className="bg-card p-8 rounded-3xl shadow-2xl flex items-center justify-center aspect-square order-last lg:order-first">
                                <Image
                                    src="https://images.pexels.com/photos/3184150/pexels-photo-3184150.jpeg?auto=compress&cs=tinysrgb&w=500&h=500"
                                    alt="Maskot KPPU"
                                    width={400}
                                    height={400}
                                    data-ai-hint="eagle mascot cartoon"
                                />
                            </div>
                            <div className="lg:pl-12">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 font-poppins">Maskot KPPU</h2>
                                <p className="text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white font-poppins mb-8">"Cakra" Sang Penjaga Keadilan</p>
                                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                    <p>Perkenalkan "Cakra", maskot resmi KPPU. Cakra adalah personifikasi dari burung elang yang tajam penglihatannya dan kuat, melambangkan peran KPPU dalam mengawasi persaingan usaha dengan cermat dan tegas.</p>
                                    <p>Nama "Cakra" diambil dari bahasa Sansekerta yang berarti roda atau lingkaran, merepresentasikan siklus ekonomi yang terus berputar secara adil dan sehat. Dengan semangat Cakra, KPPU berkomitmen untuk terus menjaga iklim persaingan usaha di Indonesia.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

