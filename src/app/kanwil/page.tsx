
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Mail, Phone, Twitter, Instagram, Facebook, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const regionalOffices = [
  {
    name: 'Kantor Wilayah I',
    coverage: 'Sumatera',
    address: 'Jl. Gatot Subroto No. 123, Medan, Sumatera Utara',
    email: 'kanwil1@kppu.go.id',
    phone: '(061) 123-4567',
    socials: { twitter: '#', instagram: '#', facebook: '#' },
  },
  {
    name: 'Kantor Wilayah II',
    coverage: 'Lampung, Banten, DKI Jakarta, Jawa Barat',
    address: 'Jl. Ir. H. Juanda No. 36, Jakarta Pusat',
    email: 'kanwil2@kppu.go.id',
    phone: '(021) 789-1011',
    socials: { twitter: '#', instagram: '#', facebook: '#' },
  },
  {
    name: 'Kantor Wilayah III',
    coverage: 'Jawa Tengah & DI Yogyakarta',
    address: 'Jl. Pahlawan No. 8, Semarang, Jawa Tengah',
    email: 'kanwil3@kppu.go.id',
    phone: '(024) 234-5678',
    socials: { twitter: '#', instagram: '#', facebook: '#' },
  },
    {
    name: 'Kantor Wilayah IV',
    coverage: 'Jawa Timur, Bali, NTB, NTT',
    address: 'Jl. Basuki Rahmat No. 10, Surabaya, Jawa Timur',
    email: 'kanwil4@kppu.go.id',
    phone: '(031) 345-6789',
    socials: { twitter: '#', instagram: '#', facebook: '#' },
  },
    {
    name: 'Kantor Wilayah V',
    coverage: 'Kalimantan',
    address: 'Jl. Jend. Sudirman No. 5, Balikpapan, Kalimantan Timur',
    email: 'kanwil5@kppu.go.id',
    phone: '(0542) 456-7890',
    socials: { twitter: '#', instagram: '#', facebook: '#' },
  },
  {
    name: 'Kantor Wilayah VI',
    coverage: 'Sulawesi, Maluku, Papua',
    address: 'Jl. Urip Sumoharjo No. 45, Makassar, Sulawesi Selatan',
    email: 'kanwil6@kppu.go.id',
    phone: '(0411) 567-8901',
    socials: { twitter: '#', instagram: '#', facebook: '#' },
  },
   {
    name: 'Kantor Wilayah VII',
    coverage: 'TBD',
    address: 'TBD',
    email: 'kanwil7@kppu.go.id',
    phone: 'TBD',
    socials: { twitter: '#', instagram: '#', facebook: '#' },
  },
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
        opacity: 1
    }
};

export default function KanwilPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
            <Header />
            <main className="flex-1">
                <section className="relative py-32 lg:py-48 text-white bg-primary-dark">
                    <div className="absolute inset-0 bg-black">
                        <Image src="https://placehold.co/1920x1080.png" alt="Kantor Wilayah KPPU" layout="fill" objectFit="cover" className="opacity-30" data-ai-hint="indonesia map modern" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/70 to-transparent"></div>
                    </div>
                    <div className="container mx-auto px-4 relative text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins">Kantor Wilayah</motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            Menjangkau seluruh pelosok negeri untuk memastikan persaingan usaha yang sehat.
                        </motion.p>
                    </div>
                </section>

                <section className="py-24 lg:py-32">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 font-poppins">Jangkauan Nasional</h2>
                            <p className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Hadir Lebih Dekat</p>
                             <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                                Untuk meningkatkan efektivitas pengawasan, KPPU memiliki 7 Kantor Wilayah (Kanwil) yang tersebar di seluruh Indonesia. Setiap kanwil bertanggung jawab untuk melakukan pengawasan dan penegakan hukum persaingan usaha di wilayah kerjanya masing-masing.
                            </p>
                        </div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            {regionalOffices.map((office) => (
                                <motion.div key={office.name} variants={itemVariants}>
                                    <Card className="h-full bg-card shadow-lg rounded-2xl flex flex-col border-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                                        <CardHeader className="bg-primary/5 dark:bg-primary/10">
                                            <CardTitle className="font-poppins text-primary-dark dark:text-white text-2xl">{office.name}</CardTitle>
                                            <p className="text-primary font-semibold">{office.coverage}</p>
                                        </CardHeader>
                                        <CardContent className="p-6 flex flex-col flex-grow">
                                            <ul className="space-y-4 text-muted-foreground flex-grow">
                                                <li className="flex items-start gap-4">
                                                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                                    <span>{office.address}</span>
                                                </li>
                                                <li className="flex items-start gap-4">
                                                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                                    <span>{office.email}</span>
                                                </li>
                                                <li className="flex items-start gap-4">
                                                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                                    <span>{office.phone}</span>
                                                </li>
                                            </ul>
                                            <div className="border-t border-border/50 mt-6 pt-6 flex justify-between items-center">
                                                <div className="flex space-x-3">
                                                    <a href={office.socials.twitter} className="text-muted-foreground hover:text-primary"><Twitter className="w-5 h-5" /></a>
                                                    <a href={office.socials.instagram} className="text-muted-foreground hover:text-primary"><Instagram className="w-5 h-5" /></a>
                                                    <a href={office.socials.facebook} className="text-muted-foreground hover:text-primary"><Facebook className="w-5 h-5" /></a>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    <Globe className="w-4 h-4 mr-2" />
                                                    Kunjungi Laman
                                                </Button>
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
