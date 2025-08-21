
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getHeaderImageForPage } from '@/lib/kppu-pexels-images';
import { usePathname } from 'next/navigation';

const commissioners = [
  { name: 'M. Fanshurullah Asa', title: 'Ketua', image: 'https://images.pexels.com/photos/3184150/pexels-photo-3184150.jpeg?auto=compress&cs=tinysrgb&w=400&h=500', hint: 'portrait man suit' },
  { name: 'Aru Armando', title: 'Wakil Ketua', image: 'https://images.pexels.com/photos/3184150/pexels-photo-3184150.jpeg?auto=compress&cs=tinysrgb&w=400&h=500', hint: 'portrait man suit' },
  { name: 'Dr. Guntur S. Saragih', title: 'Anggota', image: 'https://images.pexels.com/photos/3184150/pexels-photo-3184150.jpeg?auto=compress&cs=tinysrgb&w=400&h=500', hint: 'portrait man suit' },
  { name: 'Gopprera Panggabean', title: 'Anggota', image: 'https://images.pexels.com/photos/3184150/pexels-photo-3184150.jpeg?auto=compress&cs=tinysrgb&w=400&h=500', hint: 'portrait man suit' },
  { name: 'Hilman Pujana', title: 'Anggota', image: 'https://images.pexels.com/photos/3184150/pexels-photo-3184150.jpeg?auto=compress&cs=tinysrgb&w=400&h=500', hint: 'portrait man suit' },
  { name: 'Mohammad Reza', title: 'Anggota', image: 'https://images.pexels.com/photos/3184150/pexels-photo-3184150.jpeg?auto=compress&cs=tinysrgb&w=400&h=500', hint: 'portrait man suit' },
  { name: 'Rhido Jusmadi', title: 'Anggota', image: 'https://images.pexels.com/photos/3184150/pexels-photo-3184150.jpeg?auto=compress&cs=tinysrgb&w=400&h=500', hint: 'portrait man suit' },
  { name: 'Ukay Karyadi', title: 'Anggota', image: 'https://images.pexels.com/photos/3184150/pexels-photo-3184150.jpeg?auto=compress&cs=tinysrgb&w=400&h=500', hint: 'portrait man suit' },
  { name: 'Yudi Hidayat', title: 'Anggota', image: 'https://images.pexels.com/photos/3184150/pexels-photo-3184150.jpeg?auto=compress&cs=tinysrgb&w=400&h=500', hint: 'portrait man suit' },
];

const pastMembers = [
    { period: "2018-2023", members: ["Kurnia Toha", "Guntur S. Saragih", "Afif Hasbullah", "Chandra Setiawan", "Dinni Melanie", "Harry Agustanto", "Kodrat Wibowo", "Ukay Karyadi", "Yudi Hidayat"] },
    { period: "2012-2017", members: ["M. Nawir Messi", "Saidah Sakwan", "Tresna P. Soemardi", "Sukarni", "Kamser Lumbanradja", "Munir Ahmad", "R. Kurnia Sya'ranie", "Syarkawi Rauf", "Mohammad Reza"] },
    { period: "2006-2011", members: ["Dedie S. Martadisastra", "A.M. Tri Anggraini", "Benny Pasaribu", "Erwin Syahril", "Tadjuddin Noer Said", "Tresna P. Soemardi", "Yoyo Arifardhani", "Anna Maria Tri Anggraini", "Ahmad Ramadhan Siregar"] },
    { period: "2000-2005", members: ["Mohammad Iqbal", "Pande Radja Silalahi", "H. T.P. Lumban Tobing", "Kamarul Komar", "Bambang Purnomo", "Syamsul Maarif", "Soy M. Pardede", "Sukarmi", "Didik J. Rachbini"] },
];

const pastLeaders = [
    { period: "2023-2028", chair: "M. Fanshurullah Asa", vice: "Aru Armando" },
    { period: "2018-2023", chair: "Kurnia Toha", vice: "Guntur S. Saragih" },
    { period: "2012-2017", chair: "M. Nawir Messi", vice: "Saidah Sakwan" },
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

export default function AnggotaPage() {
    const pathname = usePathname();
    const headerImage = getHeaderImageForPage(pathname);

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
            <Header />
            <main className="flex-1">
                <section
                    className="relative py-32 lg:py-40 text-white bg-primary-dark overflow-hidden"
                >
                    <div className="absolute inset-0">
                        <Image src="/images/kppu-building.jpeg" alt="Gedung KPPU" fill className="opacity-5 object-cover" data-ai-hint="modern office building kppu" />
                    </div>
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5"></div>
                    <div className="absolute inset-0 bg-primary-dark/60"></div>
                    <div className="container mx-auto relative text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold font-poppins">Anggota Komisi</motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            Mengenal para Anggota Komisi Pengawas Persaingan Usaha yang berdedikasi.
                        </motion.p>
                    </div>
                </section>

                <section className="py-24 lg:py-32">
                    <div className="container mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 font-poppins">Periode 2023-2028</h2>
                            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Pimpinan dan Anggota Komisi</p>
                        </div>
                        <motion.div 
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {commissioners.map((commissioner) => (
                                <motion.div key={commissioner.name} variants={itemVariants}>
                                    <Card className="text-center overflow-hidden group border-0 shadow-2xl rounded-2xl">
                                        <CardContent className="p-0">
                                            <div className="relative aspect-[4/5] w-full">
                                                <Image
                                                    src={commissioner.image}
                                                    alt={`Potret ${commissioner.name}`}
                                                                            fill
                        className="object-cover"
                                                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                                    data-ai-hint={commissioner.hint}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white text-left">
                                                    <h3 className="text-2xl font-bold font-poppins">{commissioner.name}</h3>
                                                    <p className="text-lg text-gray-300">{commissioner.title}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
                
                <section className="py-24 lg:py-32 bg-card">
                    <div className="container mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 font-poppins">Arsip</h2>
                            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Sejarah Keanggotaan KPPU</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                            <div>
                                <h3 className="text-2xl font-bold font-poppins text-primary-dark dark:text-white mb-8">Anggota Komisi dari Masa ke Masa</h3>
                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    {pastMembers.map((item, index) => (
                                        <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg shadow-md px-2">
                                            <AccordionTrigger className="p-4 text-left font-bold text-lg hover:no-underline text-primary-dark dark:text-white">
                                                Periode {item.period}
                                            </AccordionTrigger>
                                            <AccordionContent className="p-4 pt-0 text-muted-foreground">
                                                <ul className="list-disc list-inside space-y-2">
                                                   {item.members.map(member => <li key={member}>{member}</li>)}
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                            <div>
                                 <h3 className="text-2xl font-bold font-poppins text-primary-dark dark:text-white mb-8">Ketua & Wakil Ketua dari Masa ke Masa</h3>
                                 <Card className="bg-background shadow-md">
                                     <CardContent className="p-6">
                                         <ul className="space-y-6">
                                            {pastLeaders.map((item, index) => (
                                                <li key={index} className={index !== pastLeaders.length -1 ? "border-b border-border pb-6" : ""}>
                                                    <p className="font-bold text-lg text-primary-dark dark:text-white">Periode {item.period}</p>
                                                    <p className="text-muted-foreground mt-1"><span className="font-semibold">Ketua:</span> {item.chair}</p>
                                                    <p className="text-muted-foreground"><span className="font-semibold">Wakil Ketua:</span> {item.vice}</p>
                                                </li>
                                            ))}
                                         </ul>
                                     </CardContent>
                                 </Card>
                            </div>
                        </div>
                    </div>
                </section>
                
                 <section className="py-24 lg:py-32">
                    <div className="container mx-auto">
                         <div className="text-center max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Users className="h-16 w-16 text-primary mx-auto mb-6" />
                                <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 font-poppins">Integritas dan Profesionalisme</h2>
                                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white font-poppins mb-6">Kode Etik Komisi</p>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                                    Sebagai landasan dalam menjalankan tugas, setiap anggota Komisi berpegang teguh pada Kode Etik Perilaku Komisioner yang menjunjung tinggi nilai-nilai integritas, objektivitas, dan profesionalisme.
                                </p>
                                <Button size="lg" className="rounded-full px-8 text-base">
                                    <Download className="w-5 h-5 mr-3" />
                                    Unduh Dokumen Kode Etik
                                </Button>
                             </motion.div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
