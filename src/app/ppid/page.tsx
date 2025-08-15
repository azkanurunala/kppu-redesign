
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChartComponent } from '@/components/ui/bar-chart';
import { FileText, Database, ShieldCheck, Calendar, DollarSign, Newspaper, ChevronRight, Youtube, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const quickAccessItems = [
  { icon: FileText, label: "Permohonan Informasi" },
  { icon: Database, label: "Daftar Informasi Publik" },
  { icon: ShieldCheck, label: "Maklumat Layanan" },
];

const publicationItems = [
  { icon: Calendar, title: "Kalender Kerja" },
  { icon: DollarSign, title: "Standar Biaya Perolehan Informasi Publik" },
  { icon: Newspaper, title: "Berita Terbaru" },
];

const innovationItems = [
    { title: "OJS-JPU", description: "Open Journal System Jurnal Persaingan Usaha" },
    { title: "JDIH KPPU", description: "Jaringan Dokumentasi dan Informasi Hukum KPPU" },
    { title: "SIKERMA", description: "Sistem Informasi Kerja Sama KPPU" },
    { title: "DATABASE PUTUSAN KPPU", description: "Putusan" },
    { title: "PERPUS", description: "Perpustakaan Persaingan Usaha" },
    { title: "SPAN LAPOR!", description: "Layanan Aspirasi dan Pengaduan Online Rakyat" },
]

export default function PPIDPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="relative bg-primary-dark text-white py-20 md:py-28 overflow-hidden">
            <div className="absolute inset-0">
                <Image 
                    src="https://placehold.co/1920x600.png" 
                    alt="Informasi Publik" 
                    fill 
                    className="object-cover opacity-20"
                    data-ai-hint="business presentation"
                />
                 <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent"></div>
            </div>
            <div className="container mx-auto px-4 relative">
                <div className="max-w-3xl">
                    <p className="text-lg font-semibold text-primary-foreground/80 tracking-widest uppercase">PPID KPPU</p>
                    <h1 className="text-4xl md:text-6xl font-bold font-poppins mt-2">Informasi Publik</h1>
                    <p className="mt-6 text-lg text-primary-foreground/90 max-w-xl leading-relaxed">
                        Akses informasi publik yang transparan dan akuntabel sesuai dengan amanat Undang-Undang Keterbukaan Informasi Publik.
                    </p>
                    <Button size="lg" className="mt-8 bg-gold text-primary-dark font-bold hover:bg-gold/90 text-base">
                        Mulai Jelajahi <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </div>
        </section>

        <section className="py-20 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                     <h2 className="text-4xl font-bold font-poppins text-primary-dark dark:text-white">Layanan Utama PPID</h2>
                     <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">Akses cepat ke layanan utama Pejabat Pengelola Informasi dan Dokumentasi (PPID) KPPU.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {quickAccessItems.map((item, index) => (
                        <Card key={index} className="hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 bg-background">
                           <CardContent className="p-8 flex flex-col items-center">
                                <div className="p-5 bg-primary/10 rounded-full mb-5">
                                     <item.icon className="h-12 w-12 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold font-poppins text-primary-dark dark:text-white">{item.label}</h3>
                           </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                     <h2 className="text-4xl font-bold font-poppins text-primary-dark dark:text-white">Statistik Layanan Informasi</h2>
                </div>
                <Card>
                    <CardContent className="p-6">
                        <div className="h-[400px]">
                            <BarChartComponent />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>

         <section className="py-20 bg-card">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                     <h2 className="text-4xl font-bold font-poppins text-primary-dark dark:text-white">Publikasi & Dokumen</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {publicationItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center p-8 bg-background rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                           <div className="p-4 bg-gold/10 rounded-full mb-5">
                                <item.icon className="h-10 w-10 text-gold" />
                           </div>
                           <h3 className="text-lg font-semibold font-poppins text-primary-dark dark:text-white">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                     <h2 className="text-4xl font-bold font-poppins text-primary-dark dark:text-white">Inovasi Digital KPPU</h2>
                     <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">Berbagai inovasi digital untuk meningkatkan kualitas layanan dan transparansi.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {innovationItems.map((item, index) => (
                        <Card key={index} className="hover:border-primary transition-colors bg-card hover:shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-primary font-poppins text-xl">{item.title}</CardTitle>
                            </CardHeader>
                           <CardContent>
                                <p className="text-muted-foreground">{item.description}</p>
                           </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-20 bg-primary-dark text-white">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                     <h2 className="text-4xl font-bold font-poppins">Galeri & Media</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    <div className="md:col-span-3">
                        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg group">
                            <Image src="https://placehold.co/600x338.png" layout="fill" objectFit="cover" alt="Video PPID" data-ai-hint="youtube thumbnail" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <Youtube className="w-20 h-20 text-red-600 group-hover:text-red-500 cursor-pointer transition-transform group-hover:scale-110" />
                            </div>
                        </div>
                    </div>
                     <div className="md:col-span-2 grid grid-cols-2 gap-4">
                         <Image src="https://placehold.co/300x200.png" width={300} height={200} alt="Media 1" className="rounded-lg object-cover w-full h-full" data-ai-hint="man presenting" />
                         <Image src="https://placehold.co/300x200.png" width={300} height={200} alt="Media 2" className="rounded-lg object-cover w-full h-full" data-ai-hint="woman presenting" />
                         <Image src="https://placehold.co/300x200.png" width={300} height={200} alt="Media 3" className="rounded-lg object-cover w-full h-full" data-ai-hint="office meeting" />
                         <Image src="https://placehold.co/300x200.png" width={300} height={200} alt="Media 4" className="rounded-lg object-cover w-full h-full" data-ai-hint="person writing" />
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
