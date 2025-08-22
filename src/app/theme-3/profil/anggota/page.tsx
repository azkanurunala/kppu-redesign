
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const commissioners = [
  { name: 'M. Fanshurullah Asa', title: 'Ketua', image: '/images/people/mfa.png', hint: 'portrait commissioner formal suit' },
  { name: 'Aru Armando', title: 'Wakil Ketua', image: '/images/people/aa.png', hint: 'portrait commissioner formal suit' },
  { name: 'Moh. Noor Rifiq', title: 'Anggota', image: '/images/people/mnr.png', hint: 'portrait commissioner formal suit' },
  { name: 'Gopprera Panggabean', title: 'Anggota', image: '/images/people/gp.png', hint: 'portrait commissioner formal suit' },
  { name: 'Hilman Pujana', title: 'Anggota', image: '/images/people/hp.png', hint: 'portrait commissioner formal suit' },
  { name: 'Mohammad Reza', title: 'Anggota', image: '/images/people/mr.png', hint: 'portrait commissioner formal suit' },
  { name: 'Rhido Jusmadi', title: 'Anggota', image: '/images/people/rj.png', hint: 'portrait commissioner formal suit' },
  { name: 'Eugenia Mardanugraha', title: 'Anggota', image: '/images/people/em.png', hint: 'portrait commissioner formal suit' },
  { name: 'Budi Jaya Santoso', title: 'Anggota', image: '/images/people/bjs.png', hint: 'portrait commissioner formal suit' },
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
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      
            <main className="flex-1">
                <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
                    <div className="absolute inset-0">
                        <img src="/images/bg/map-bw.png" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
                    </div>
                    <div className="container mx-auto relative z-10">
                        <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Anggota Komisi</h1>
                        <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                            <a className="hover:underline" href="/">Beranda</a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            <span>Anggota</span>
                        </div>
                    </div>
                </section>

                <section className="py-24 lg:py-32">
                    <div className="container mx-auto">
                        <div className="text-center mb-16 md:mb-20">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 font-poppins">Periode 2023-2028</h2>
                            <p className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Pimpinan dan Anggota Komisi</p>
                        </div>
                        <motion.div 
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {commissioners.map((commissioner) => (
                                <motion.div key={commissioner.name} variants={itemVariants}>
                                    <Card className="text-center overflow-hidden group border-0 shadow-lg rounded-2xl bg-card">
                                        <CardContent className="p-0">
                                            <div className="relative aspect-square w-full">
                                                <Image
                                                    src={commissioner.image}
                                                    alt={`Potret ${commissioner.name}`}
                                                                            fill
                        className="object-cover"
                                                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                                    data-ai-hint={commissioner.hint}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
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
                        <div className="text-center mb-16 md:mb-20">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 font-poppins">Arsip</h2>
                            <p className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Sejarah Keanggotaan KPPU</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                            <div>
                                <h3 className="text-2xl lg:text-3xl font-bold font-poppins text-primary-dark dark:text-white mb-8">Anggota Komisi dari Masa ke Masa</h3>
                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    {pastMembers.map((item, index) => (
                                        <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg shadow-sm px-2 border-transparent">
                                            <AccordionTrigger className="p-6 text-left font-bold text-lg hover:no-underline text-primary-dark dark:text-white">
                                                Periode {item.period}
                                            </AccordionTrigger>
                                            <AccordionContent className="px-6 pb-6 pt-0 text-muted-foreground">
                                                <ul className="list-disc list-inside space-y-2">
                                                   {item.members.map(member => <li key={member}>{member}</li>)}
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                            <div>
                                 <h3 className="text-2xl lg:text-3xl font-bold font-poppins text-primary-dark dark:text-white mb-8">Ketua & Wakil Ketua Terdahulu</h3>
                                 <Card className="bg-background shadow-sm">
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
                                <div className="flex justify-center mb-8">
                                    <div className="bg-primary/10 p-4 rounded-full">
                                        <Users className="h-12 w-12 text-primary" />
                                    </div>
                                </div>
                                <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 font-poppins">Integritas dan Profesionalisme</h2>
                                <p className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-white font-poppins mb-6">Kode Etik Komisi</p>
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
      
        </div>
    );
}

