
'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, ChevronRight, Gavel, Newspaper, MessageSquareQuote, Info, FileText, Scale, Shield, Users, ArrowRight } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { getHeaderImageForPage } from '@/lib/kppu-pexels-images';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

const sidebarNavItems = [
  { icon: FileText, label: "REGULASI", href: "/regulasi" },
  { icon: Gavel, label: "PUTUSAN", href: "/penindakan/perkara-persaingan" },
  { icon: Newspaper, label: "JADWAL SIDANG", href: "/jadwal-sidang" },
  { icon: FileText, label: "SIARAN PERS", href: "/publikasi/siaran-pers" },
  { icon: MessageSquareQuote, label: "TANYA JAWAB", href: "/tanya-jawab" },
  { icon: Info, label: "PPID", href: "/ppid" },
];

const advocacyPrinciples = [
    { icon: <Scale className="w-10 h-10 text-primary" />, title: "Objektivitas", description: "Saran dan pertimbangan diberikan berdasarkan analisis data dan fakta yang akurat." },
    { icon: <Shield className="w-10 h-10 text-primary" />, title: "Independensi", description: "KPPU bertindak independen tanpa intervensi dari pihak manapun dalam memberikan saran." },
    { icon: <Users className="w-10 h-10 text-primary" />, title: "Pro-Persaingan", description: "Setiap saran bertujuan untuk mendorong persaingan usaha yang sehat dan efisien." },
];

const faqItems = [
    { question: "Siapa yang dapat meminta saran dari KPPU?", answer: "Pemerintah, lembaga negara, maupun pelaku usaha dapat meminta saran dan pertimbangan dari KPPU terkait kebijakan yang berpotensi mempengaruhi persaingan usaha." },
    { question: "Berapa lama proses pemberian saran dan pertimbangan?", answer: "Jangka waktu dapat bervariasi tergantung pada kompleksitas isu kebijakan yang dikaji. KPPU berupaya memberikan tanggapan dalam waktu yang wajar dan proporsional." },
    { question: "Apakah saran dari KPPU bersifat mengikat?", answer: "Saran dan pertimbangan KPPU merupakan rekomendasi kebijakan yang tidak mengikat secara hukum, namun memiliki bobot yang kuat karena didasarkan pada analisis persaingan usaha yang mendalam." },
];

export default function AdvokasiPage() {
    const pathname = usePathname();
    const headerImage = getHeaderImageForPage(pathname);
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
                    <div className="absolute inset-0">
                        <img src="/images/bg/map-bw.png" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
                    </div>
                    <div className="container mx-auto relative z-10">
                        <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Advokasi Kebijakan</h1>
                        <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                            <a className="hover:underline" href="/theme-3/">Beranda</a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            <span>Advokasi</span>
                        </div>
                    </div>
                </section>

        <section className="py-20 lg:py-24">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-16"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                                    <Image src="https://images.pexels.com/photos/3184150/pexels-photo-3184150.jpeg?auto=compress&cs=tinysrgb&w=600&h=800" alt="Advokasi KPPU" fill className="object-cover" data-ai-hint="discussion meeting office" />
                                </div>
                                <div >
                                    <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark dark:text-white font-poppins mb-6">Peran Advokasi KPPU</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                        Salah satu tugas utama KPPU adalah memberikan saran dan pertimbangan kepada Pemerintah terhadap kebijakan yang berkaitan dengan praktik monopoli dan/atau persaingan usaha tidak sehat.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Advokasi kebijakan ini merupakan upaya preventif untuk memastikan peraturan perundang-undangan dan kebijakan publik selaras dengan prinsip-prinsip persaingan usaha yang sehat.
                                    </p>
                                </div>
                            </div>
                            
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark dark:text-white font-poppins mb-12 text-center">Prinsip Utama Advokasi</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {advocacyPrinciples.map((item, index) => (
                                         <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.5 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            <Card className="text-center p-8 bg-card shadow-lg rounded-2xl h-full border-0">
                                                <CardContent className="p-0">
                                                    <div className="mx-auto mb-6 flex items-center justify-center h-20 w-20 rounded-full bg-primary/10">
                                                        {item.icon}
                                                    </div>
                                                    <h3 className="text-2xl font-bold font-poppins text-primary-dark dark:text-white mb-4">{item.title}</h3>
                                                    <p className="text-muted-foreground">{item.description}</p>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark dark:text-white font-poppins mb-8">Publikasi Terkait Advokasi</h2>
                                 <Card className="shadow-lg">
                                    <CardContent className="p-6">
                                        <ul className="space-y-4">
                                            <li className="flex items-center justify-between p-4 rounded-lg bg-background hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                                                <p className="font-semibold text-foreground/90">Laporan Advokasi Kebijakan Sektor Logistik 2024</p>
                                                <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80 hover:bg-primary/10 rounded-full">
                                                    <Download className="h-5 w-5" />
                                                </Button>
                                            </li>
                                             <li className="flex items-center justify-between p-4 rounded-lg bg-background hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                                                <p className="font-semibold text-foreground/90">Saran & Pertimbangan Terkait Regulasi E-commerce</p>
                                                 <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80 hover:bg-primary/10 rounded-full">
                                                    <Download className="h-5 w-5" />
                                                </Button>
                                            </li>
                                             <li className="flex items-center justify-between p-4 rounded-lg bg-background hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                                                <p className="font-semibold text-foreground/90">Kajian Dampak Kebijakan Impor Gula</p>
                                                 <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80 hover:bg-primary/10 rounded-full">
                                                    <Download className="h-5 w-5" />
                                                </Button>
                                            </li>
                                        </ul>
                                         <Button variant="link" className="mt-4 text-primary font-bold">
                                            Lihat Semua Publikasi <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                            
                            <div>
                                 <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark dark:text-white font-poppins mb-8">Tanya Jawab Seputar Advokasi</h2>
                                  <Accordion type="single" collapsible className="w-full space-y-4">
                                    {faqItems.map((item, index) => (
                                        <AccordionItem key={index} value={`item-${index}`} className="bg-background dark:bg-card rounded-lg shadow-md px-2 border-b-0">
                                            <AccordionTrigger className="p-4 text-left font-bold text-lg hover:no-underline text-primary-dark dark:text-white">
                                                {item.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="p-4 pt-0 text-muted-foreground">
                                                <p className="leading-relaxed">{item.answer}</p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </motion.div>
                    </div>

                    <aside className="lg:sticky lg:top-28 h-fit">
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-xl font-poppins text-primary-dark dark:text-white">Navigasi Cepat</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <nav className="flex flex-col">
                                {sidebarNavItems.map((item, index) => (
                                    <Link key={index} href={item.href}>
                                      <div className={`flex items-center p-5 cursor-pointer hover:bg-primary/10 transition-colors text-foreground/80 font-semibold ${index !== sidebarNavItems.length - 1 ? 'border-b border-border/50' : ''}`}>
                                          <item.icon className="h-5 w-5 text-primary mr-4" />
                                          <span>{item.label}</span>
                                          <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground" />
                                      </div>
                                    </Link>
                                ))}
                                </nav>
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}



