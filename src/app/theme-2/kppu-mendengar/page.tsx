
'use client';



import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageSquarePlus, ChevronRight, Send, FileUp, Building, User, Mail, Phone } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const faqItems = [
    { question: "Informasi apa saja yang perlu saya sertakan?", answer: "Sertakan detail yang jelas mengenai isu yang Anda hadapi, termasuk nama perusahaan atau industri terkait, deskripsi kebijakan atau perilaku yang menjadi perhatian, dan dampak yang Anda rasakan." },
    { question: "Apakah identitas saya akan dirahasiakan?", answer: "KPPU menjamin kerahasiaan identitas pemberi masukan. Informasi pribadi Anda hanya akan digunakan untuk keperluan verifikasi dan tindak lanjut internal." },
    { question: "Bagaimana saya bisa mengetahui tindak lanjut dari masukan saya?", answer: "KPPU akan mengkaji setiap masukan yang diterima. Meskipun kami tidak dapat memberikan pembaruan individual untuk setiap masukan, semua informasi akan menjadi bahan pertimbangan penting dalam advokasi dan pengawasan kami." },
];

export default function KppuMendengarPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">

      <main className="flex-1">
        <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <img src="/images/bg/theme-2.jpg" alt="Peta Indonesia" className="w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
            </div>
            <div className="container mx-auto relative z-10">
                <h1 className="text-4xl lg:text-6xl font-bold font-poppins">KPPU Mendengar</h1>
                <div className="text-sm mt-4 flex items-center space-x-2 text-gray-300">
                    <Link href="/" className="hover:underline">Beranda</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span>KPPU Mendengar</span>
                </div>
            </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
                <div className="lg:col-span-3">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark dark:text-white font-poppins mb-4">Sampaikan Masukan Anda</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                            Punya masukan, informasi, atau keluhan terkait kebijakan atau perilaku usaha yang berpotensi menghambat persaingan sehat? Sampaikan kepada kami melalui formulir di bawah ini. Setiap masukan dari Anda sangat berharga.
                        </p>
                        <Card className="shadow-2xl">
                            <CardContent className="p-8">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                             <label className="font-semibold flex items-center gap-2"><User className="w-4 h-4 text-primary"/>Nama Lengkap</label>
                                             <Input placeholder="Nama Anda" />
                                        </div>
                                         <div className="space-y-2">
                                             <label className="font-semibold flex items-center gap-2"><Mail className="w-4 h-4 text-primary"/>Alamat Email</label>
                                             <Input type="email" placeholder="email@anda.com" />
                                        </div>
                                         <div className="space-y-2">
                                             <label className="font-semibold flex items-center gap-2"><Phone className="w-4 h-4 text-primary"/>Nomor Telepon</label>
                                             <Input placeholder="Nomor telepon aktif" />
                                        </div>
                                         <div className="space-y-2">
                                             <label className="font-semibold flex items-center gap-2"><Building className="w-4 h-4 text-primary"/>Sektor Industri</label>
                                             <Select>
                                                <SelectTrigger><SelectValue placeholder="Pilih Sektor Industri Terkait" /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="digital">Digital & Teknologi</SelectItem>
                                                    <SelectItem value="pangan">Pangan</SelectItem>
                                                    <SelectItem value="energi">Energi</SelectItem>
                                                    <SelectItem value="logistik">Logistik</SelectItem>
                                                    <SelectItem value="konstruksi">Konstruksi</SelectItem>
                                                    <SelectItem value="lainnya">Lainnya</SelectItem>
                                                </SelectContent>
                                             </Select>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-semibold flex items-center gap-2"><MessageSquarePlus className="w-4 h-4 text-primary"/>Detail Masukan Anda</label>
                                        <Textarea placeholder="Jelaskan secara rinci masukan atau informasi yang ingin Anda sampaikan..." rows={8} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-semibold flex items-center gap-2"><FileUp className="w-4 h-4 text-primary"/>Lampirkan Dokumen Pendukung (Opsional)</label>
                                        <Input type="file" className="pt-2"/>
                                        <p className="text-xs text-muted-foreground">Ukuran file maksimal 5MB. Format: PDF, JPG, PNG.</p>
                                    </div>
                                    <div className="text-right pt-4">
                                        <Button size="lg" className="px-10">
                                            <Send className="w-5 h-5 mr-2"/>
                                            Kirim Masukan
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

              <aside className="lg:col-span-2 lg:sticky lg:top-28 h-fit">
                 <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-10"
                >
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-xl font-poppins text-primary-dark dark:text-white">Alur Proses Masukan</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <ul className="space-y-6">
                                <li className="flex items-start gap-4"><div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div><div><h4 className="font-semibold">Pengiriman</h4><p className="text-sm text-muted-foreground">Anda mengirimkan masukan melalui formulir.</p></div></li>
                                <li className="flex items-start gap-4"><div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div><div><h4 className="font-semibold">Verifikasi Awal</h4><p className="text-sm text-muted-foreground">Tim kami melakukan verifikasi kelengkapan informasi.</p></div></li>
                                <li className="flex items-start gap-4"><div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div><div><h4 className="font-semibold">Kajian & Analisis</h4><p className="text-sm text-muted-foreground">Informasi dikaji dan dianalisis oleh unit terkait.</p></div></li>
                                <li className="flex items-start gap-4"><div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div><div><h4 className="font-semibold">Tindak Lanjut</h4><p className="text-sm text-muted-foreground">Hasil kajian menjadi dasar advokasi atau pengawasan.</p></div></li>
                           </ul>
                        </CardContent>
                    </Card>
                     <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-xl font-poppins text-primary-dark dark:text-white">Pertanyaan Umum (FAQ)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Accordion type="single" collapsible className="w-full">
                                {faqItems.map((item, index) => (
                                    <AccordionItem key={index} value={`item-${index}`} className="border-b-border/50">
                                        <AccordionTrigger className="text-left font-semibold text-base hover:no-underline text-foreground/90">
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="pt-0 text-muted-foreground">
                                            <p className="leading-relaxed">{item.answer}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                </motion.div>
              </aside>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}



