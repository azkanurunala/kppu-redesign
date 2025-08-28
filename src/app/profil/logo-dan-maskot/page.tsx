'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ChevronRight, Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function LogoDanMaskotPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
            <Header />
            <main className="flex-1">
                <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
                    <div className="absolute inset-0">
                        <img src="/images/bg/map-bw.png" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
                    </div>
                    <div className="container mx-auto relative z-10">
                        <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Logo dan Maskot</h1>
                        <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                            <Link href="/" className="hover:underline">Beranda</Link>
                            <ChevronRight className="h-4 w-4" />
                            <span>Logo dan Maskot</span>
                        </div>
                    </div>
                </section>

                {/* Logo KPPU Section */}
                <section className="py-20 lg:py-24">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold font-poppins text-primary-dark dark:text-white mb-8">FILOSOFI LOGO KPPU</h2>
                            
                            <div className="flex justify-center mb-12">
                                <div className="relative w-64 h-64">
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

                        <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
                            <p className="mb-6">
                                Logo Komisi Pengawas Persaingan Usaha (KPPU) merupakan desain yang diciptakan sebagai jati diri visual dan simbol lembaga yang independen yang menjalankan amanat Undang-Undang Nomor 5 Tahun 1999 tentang Larangan Praktek Monopoli dan Persaingan Usaha Tidak Sehat. Logo ini juga sebagai visual identitas dari organisasi.
                            </p>
                            <p className="mb-6">
                                Bentuk logo KPPU adalah oval berwarna merah dengan gambar Garuda Pancasila di tengahnya dan di luar lingkaran merah terdapat lingkaran berwarna biru dengan tulisan Komisi Pengawas Persaingan Usaha Republik Indonesia dengan 5 tonggak berwarna merah dan tiang penyangga tajam berwarna kuning. Bentuk logo KPPU secara keseluruhan bahwa KPPU dimaksudkan untuk mengekspresikan makna bahwa KPPU adalah lembaga independen yang menjalankan amanat Undang-Undang Nomor 5 Tahun 1999.
                            </p>
                            <p className="mb-6">
                                Landasan tajam berwarna kuning pada logo KPPU menggambarkan kondisi dunia usaha di Indonesia yang sangat dinamis dan kompetitif. Ketatnya kompetisi membutuhkan adanya pihak netral yang memiliki wewenang kuat untuk menjaga kelangsungan persaingan usaha agar dapat berjalan dengan baik.
                            </p>
                            <p className="mb-6">
                                Tonggak berwarna merah melambangkan tonggak lahirnya KPPU didasarkan pada Undang-Undang untuk menyikapi fenomena persaingan usaha.
                            </p>
                            <p className="mb-8">
                                Lima segmen pada tonggak dan sembilan serat pada landasan merupakan visualisasi simbolik Undang-Undang Nomor 5 Tahun 1999 sebagai momen lahirnya Undang-Undang Nomor 5 Tahun 1999 dan landasan berdirinya KPPU.
                            </p>
                        </div>

                        <div className="text-center">
                            <Button size="lg" className="bg-primary hover:bg-primary/90">
                                <Download className="w-4 h-4 mr-2" />
                                Unduh Logo KPPU di sini
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Maskot KPPU Section */}
                <section className="py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold font-poppins text-primary-dark dark:text-white mb-8">FILOSOFI MASKOT KPPU, KOMPID</h2>
                            
                            <div className="flex justify-center mb-12">
                                <div className="relative w-64 h-64">
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

                        <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
                            <p className="mb-6">
                                Kompid, yang merupakan akronim dari Compete atau singkatan dari Kompetisi Usaha Tanpa Diskriminasi. Nama ini diambil sebagai visualisasi peran dan harapan Komisi dalam mewujudkan dunia usaha yang berkompetisi, berkualitas, dan berdaya saing tinggi, baik di Indonesia maupun di luar negeri, tanpa adanya diskriminasi terhadap pelaku usaha lain.
                            </p>
                            <p className="mb-6">
                                Wajah Kompid memiliki garis alis dan mata yang tegas dan tajam untuk melihat kebenaran, dengan paruh mencorong ke depan yang menandakan ketegasan dan keberanian dengan mengedepankan sisi humanis.
                            </p>
                            <p className="mb-6">
                                Kompid bermata tajam pertanda bijak dalam bersikap dan melihat dengan jelas segala kejadian di depannya, memiliki banyak pemahaman dalam perjuangannya menegakkan hukum persaingan usaha dan kemitraan di Indonesia.
                            </p>
                            <p className="mb-6">
                                Sayap Kompid memiliki perpaduan warna merah, biru, dan kuning, sebagai warna identitas Komisi. Warna merah memiliki filosofi energi yang kuat dan berani. Warna biru memiliki filosofi kepercayaan dan kebijaksanaan. Serta warna kuning memiliki filosofi kehangatan dan optimistis. Sayap Kompid dapat mengepak jauh yang melambangkan ketegasan, namun juga elastis yang melambangkan sisi humanis.
                            </p>
                            <p className="mb-6">
                                Kompid mengenakan rompi coklat muda sebagai identitasnya yang humanis namun tetap hangat dan dipercaya serta tegas. Celana pendek biru tua juga melambangkan mudah beradaptasi dan lincah dalam membuat keputusan yang benar berdasar fakta yang mengedepankan kebenaran.
                            </p>
                            <p className="mb-8">
                                Kompid tidak melupakan identitasnya sebagai abdi negara, melalui Komisi Pengawas Persaingan Usaha, demi kesejahteraan masyarakat Indonesia, dengan logo KPPU di dadanya.
                            </p>
                        </div>

                        <div className="text-center">
                            <Button size="lg" className="bg-primary hover:bg-primary/90">
                                <Download className="w-4 h-4 mr-2" />
                                Unduh Maskot KPPU di sini
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
