'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ChevronRight, Download, Star, Shield, Eye, Heart, Zap, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function LogoDanMaskotPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="bg-gradient-to-br from-primary-dark via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden"
                >
                    <div className="absolute inset-0">
                        <img src="/images/bg/map-bw.png" alt="Peta Indonesia" className="w-full h-full object-cover opacity-20" data-ai-hint="indonesia map background" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-transparent"></div>
                    </div>
                    <div className="container mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-4xl lg:text-6xl font-bold font-poppins mb-4">Logo dan Maskot</h1>
                            <p className="text-xl text-blue-100 mb-6">Identitas Visual KPPU yang Mewakili Semangat Keadilan</p>
                            <div className="text-sm flex items-center space-x-2 text-gray-300">
                                <Link href="/" className="hover:underline">Beranda</Link>
                                <ChevronRight className="h-4 w-4" />
                                <span>Logo dan Maskot</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Logo KPPU Section - Left Side */}
                <section className="py-20 lg:py-32 relative">
                    <div className="container mx-auto">
                        <motion.div 
                            className="grid lg:grid-cols-2 gap-16 items-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {/* Content - Left */}
                            <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
                                <div className="flex items-center mb-6">
                                    <Shield className="w-8 h-8 text-primary mr-3" />
                                    <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary-dark dark:text-white">
                                        FILOSOFI LOGO KPPU
                                    </h2>
                                </div>
                                
                                <div className="space-y-6 text-muted-foreground">
                                    <p className="text-lg leading-relaxed">
                                        Logo Komisi Pengawas Persaingan Usaha (KPPU) merupakan desain yang diciptakan sebagai jati diri visual dan simbol lembaga yang independen yang menjalankan amanat Undang-Undang Nomor 5 Tahun 1999 tentang Larangan Praktek Monopoli dan Persaingan Usaha Tidak Sehat.
                                    </p>
                                    <p className="text-lg leading-relaxed">
                                        Bentuk logo KPPU adalah oval berwarna merah dengan gambar Garuda Pancasila di tengahnya dan di luar lingkaran merah terdapat lingkaran berwarna biru dengan tulisan Komisi Pengawas Persaingan Usaha Republik Indonesia dengan 5 tonggak berwarna merah dan tiang penyangga tajam berwarna kuning.
                                    </p>
                                    <p className="text-lg leading-relaxed">
                                        Landasan tajam berwarna kuning pada logo KPPU menggambarkan kondisi dunia usaha di Indonesia yang sangat dinamis dan kompetitif.
                                    </p>
                                    <p className="text-lg leading-relaxed">
                                        Tonggak berwarna merah melambangkan tonggak lahirnya KPPU didasarkan pada Undang-Undang untuk menyikapi fenomena persaingan usaha.
                                    </p>
                                </div>

                                <motion.div 
                                    className="mt-8"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
                                        <Download className="w-4 h-4 mr-2" />
                                        Unduh Logo KPPU
                                    </Button>
                                </motion.div>
                            </motion.div>

                            {/* Image - Right */}
                            <motion.div variants={fadeInRight} className="order-1 lg:order-2">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
                                    <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                                        <div className="relative w-full h-80">
                                            <Image
                                                src="/images/logo-kppu.png"
                                                alt="Logo KPPU"
                                                fill
                                                className="object-contain"
                                                data-ai-hint="kppu logo garuda pancasila red blue yellow"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>



                {/* Maskot KPPU Section - Right Side */}
                <section className="py-20 lg:py-32 relative">
                    <div className="container mx-auto">
                        <motion.div 
                            className="grid lg:grid-cols-2 gap-16 items-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {/* Image - Left */}
                            <motion.div variants={fadeInLeft}>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-red-500/20 rounded-3xl blur-3xl"></div>
                                    <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                                        <div className="relative w-full h-80">
                                            <Image
                                                src="/images/kompid.png"
                                                alt="Maskot KPPU - KOMPID"
                                                fill
                                                className="object-contain"
                                                data-ai-hint="kompid owl mascot kppu thumbs up red blue yellow"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Content - Right */}
                            <motion.div variants={fadeInRight}>
                                <div className="flex items-center mb-6">
                                    <Heart className="w-8 h-8 text-red-500 mr-3" />
                                    <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary-dark dark:text-white">
                                        FILOSOFI MASKOT KOMPID
                                    </h2>
                                </div>
                                
                                <div className="space-y-6 text-muted-foreground">
                                    <p className="text-lg leading-relaxed">
                                        Kompid, yang merupakan akronim dari Compete atau singkatan dari Kompetisi Usaha Tanpa Diskriminasi. Nama ini diambil sebagai visualisasi peran dan harapan Komisi dalam mewujudkan dunia usaha yang berkompetisi, berkualitas, dan berdaya saing tinggi.
                                    </p>
                                    <p className="text-lg leading-relaxed">
                                        Wajah Kompid memiliki garis alis dan mata yang tegas dan tajam untuk melihat kebenaran, dengan paruh mencorong ke depan yang menandakan ketegasan dan keberanian dengan mengedepankan sisi humanis.
                                    </p>
                                    <p className="text-lg leading-relaxed">
                                        Sayap Kompid memiliki perpaduan warna merah, biru, dan kuning, sebagai warna identitas Komisi. Warna merah memiliki filosofi energi yang kuat dan berani. Warna biru memiliki filosofi kepercayaan dan kebijaksanaan.
                                    </p>
                                    <p className="text-lg leading-relaxed">
                                        Kompid mengenakan rompi coklat muda sebagai identitasnya yang humanis namun tetap hangat dan dipercaya serta tegas. Celana pendek biru tua juga melambangkan mudah beradaptasi dan lincah dalam membuat keputusan yang benar.
                                    </p>
                                </div>

                                <motion.div 
                                    className="mt-8"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button size="lg" className="bg-red-600 hover:bg-red-700 shadow-lg">
                                        <Download className="w-4 h-4 mr-2" />
                                        Unduh Maskot KPPU
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Features Section - Bottom */}
                <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-dark to-blue-900 text-white relative">
                    <div className="container mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">Nilai-Nilai yang Diwakili</h2>
                            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                                Logo dan Maskot KPPU tidak hanya sekadar identitas visual, tetapi juga mencerminkan nilai-nilai dan prinsip yang dipegang teguh oleh lembaga
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                        >
                            {[
                                { icon: Shield, title: "Perlindungan", desc: "Melindungi persaingan usaha yang sehat" },
                                { icon: Target, title: "Keadilan", desc: "Menegakkan keadilan dalam bisnis" },
                                { icon: Zap, title: "Dinamis", desc: "Beradaptasi dengan perubahan zaman" },
                                { icon: Star, title: "Kualitas", desc: "Mengutamakan kualitas pelayanan" }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                                >
                                    <feature.icon className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-blue-100">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Video Kompid Section - Bottom */}
                <section className="py-20 lg:py-32 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                            className="text-center mb-16"
                        >
                            <div className="flex items-center justify-center mb-6">
                                <Eye className="w-8 h-8 text-primary mr-3" />
                                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary-dark dark:text-white">
                                    VIDEO RESMI KOMPID
                                </h2>
                            </div>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Saksikan Maskot KPPU - KOMPID dalam aksi yang menampilkan semangat keadilan dan persaingan usaha yang sehat
                            </p>
                        </motion.div>

                        <motion.div
                            variants={scaleIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="relative"
                        >
                            <div className="max-w-4xl mx-auto">
                                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                                    <iframe
                                        src="https://www.youtube.com/embed/02UyF4LnNe8"
                                        title="Video Kompid - Maskot KPPU"
                                        className="w-full h-full"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
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
