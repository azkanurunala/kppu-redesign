
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Gavel, HelpCircle, Info, Library, Newspaper, Scale, ArrowRight, Search, FileText, Landmark, Youtube } from 'lucide-react';
import Link from 'next/link';
import { HomeCarousel } from '@/components/home-carousel';
import { KppuPieChart } from '@/components/kppu-pie-chart';

const iconNavItems = [
  { icon: <Scale className="h-8 w-8 text-primary" />, label: "REGULASI", href: "/regulasi" },
  { icon: <Gavel className="h-8 w-8 text-primary" />, label: "PUTUSAN", href: "/penindakan/perkara-persaingan" },
  { icon: <Newspaper className="h-8 w-8 text-primary" />, label: "JADWAL SIDANG", href: "/jadwal-sidang" },
  { icon: <Library className="h-8 w-8 text-primary" />, label: "SIARAN PERS", href: "/publikasi/siaran-pers" },
  { icon: <HelpCircle className="h-8 w-8 text-primary" />, label: "TANYA JAWAB", href: "/tanya-jawab" },
  { icon: <Info className="h-8 w-8 text-primary" />, label: "PPID", href: "/ppid" },
];

const quickStats = [
    { value: "424", label: "Total Putusan" },
    { value: "1,200+", label: "Laporan Ditangani" },
    { value: "300+", label: "Notifikasi Merger" },
    { value: "7", label: "Kantor Wilayah" }
];

const mainNews = {
    title: "KPPU Terus Melakukan Pengawasan atas Komoditas Beras",
    source: "JawaPos.com",
    href: "#",
    imgSrc: "https://placehold.co/300x200.png"
};

const otherMainNews = [
    { title: "Pertama dalam Sejarah: 97 Pelaku Usaha Menjadi Terlapor dalam Sidang Dugaan Kartel Pinjol", source: "Hukumonline.com", href: "#" },
    { title: "Sidang Perkara terkait Dugaan Hambatan Usaha PT Laboratorium Medio Pratama Masuk ke Tahap Pemeriksaan Lanjutan", source: "Kontan.co.id", href: "#" }
];

const activityNews = {
    title: "KPPU Hadiri Tasyakuran Ulang Tahun INDEF",
    source: "Infopublik.id",
    href: "#",
    imgSrc: "https://placehold.co/300x200.png"
};

const otherActivityNews = [
    { title: "KPPU Terima Kunjungan PETRONAS Bahas Implementasi Program Kemitraan", source: "Republika.co.id", href: "#" },
    { title: "Program Kepatuhan Persaingan Usaha PT PU Indonesia Disetujui KPPU", source: "Sindonews.com", href: "#" }
];

const regionalNews = {
    title: "Perkuat Sinergi, Kantor Wilayah VI KPPU Makassar Temui Gubernur Sulawesi Barat",
    source: "Antaranews.com",
    href: "#",
    imgSrc: "https://placehold.co/300x200.png"
};

const otherRegionalNews = [
    { title: "LIRA Sumut Dukung KPPU Kanwil I Bongkar Dugaan Persekongkolan Tender Rp66 Miliar di Kejari Sumut", source: "Analisadaily.com", href: "#" },
    { title: "Kunjungi Gapoktan di Kabupaten Bandung Barat, Kepala Kanwil III dan Petani Bahas Pemasaran Beras", source: "Tribunnews.com", href: "#" }
];

const commissioners = [
  { name: 'M. Fanshurullah Asa', image: 'https://placehold.co/150x200.png', hint: 'portrait man suit' },
  { name: 'Aru Armando', image: 'https://placehold.co/150x200.png', hint: 'portrait man suit' },
  { name: 'Dr. Guntur S. Saragih', image: 'https://placehold.co/150x200.png', hint: 'portrait man suit' },
  { name: 'Gopprera Panggabean', image: 'https://placehold.co/150x200.png', hint: 'portrait man suit' },
  { name: 'Hilman Pujana', image: 'https://placehold.co/150x200.png', hint: 'portrait man suit' },
  { name: 'Mohammad Reza', image: 'https://placehold.co/150x200.png', hint: 'portrait man suit' },
  { name: 'Rhido Jusmadi', image: 'https://placehold.co/150x200.png', hint: 'portrait man suit' },
  { name: 'Ukay Karyadi', image: 'https://placehold.co/150x200.png', hint: 'portrait man suit' },
  { name: 'Yudi Hidayat', image: 'https://placehold.co/150x200.png', hint: 'portrait man suit' },
];


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary-dark text-white py-32 md:py-48 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-black opacity-20"></div>
            <div className="container mx-auto px-4 relative">
                <h1 className="text-4xl md:text-6xl font-bold font-poppins leading-tight">Mewujudkan Persaingan Usaha yang Sehat</h1>
                <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
                    Jelajahi database putusan, peraturan terbaru, dan jadwal sidang untuk mendukung ekosistem bisnis yang adil dan transparan di Indonesia.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Button size="lg" asChild className="bg-gold text-primary-dark font-bold hover:bg-gold/90 text-base rounded-full px-8">
                        <Link href="/regulasi">Cari Regulasi</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="text-white border-white/50 hover:bg-white/10 hover:text-white rounded-full px-8 text-base">
                        <Link href="/penindakan/perkara-persaingan">Lihat Putusan</Link>
                    </Button>
                     <Button size="lg" variant="outline" asChild className="text-white border-white/50 hover:bg-white/10 hover:text-white rounded-full px-8 text-base">
                        <Link href="/jadwal-sidang">Jadwal Sidang</Link>
                    </Button>
                </div>
            </div>
        </section>
        
        {/* Carousel Section */}
        <section className="py-12 md:py-16 -mt-16 md:-mt-24 lg:-mt-[100px] relative z-10">
          <div className="container mx-auto px-4">
            <HomeCarousel />
          </div>
        </section>
        
        {/* Quick Access Nav */}
        <section className="border-b border-border bg-card">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                    {iconNavItems.map(item => (
                      <Link href={item.href} key={item.label}>
                        <div className="flex flex-col items-center justify-center gap-3 p-4 text-foreground/80 hover:text-primary transition-colors cursor-pointer rounded-xl hover:bg-primary/5">
                           {item.icon}
                           <span className="font-bold text-sm tracking-wide uppercase">{item.label}</span>
                        </div>
                      </Link>
                    ))}
                </div>
            </div>
        </section>

        {/* Quick Stats Section */}
        <section className="py-20 lg:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {quickStats.map(stat => (
                        <div key={stat.label} className="p-4">
                            <p className="text-5xl font-bold text-primary font-poppins">{stat.value}</p>
                            <p className="mt-2 text-muted-foreground font-semibold uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Spotlight Section */}
        <section className="py-20 lg:py-24 bg-card">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Info Terkini</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Kolom Berita Utama */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-primary-dark dark:text-white font-poppins border-b-2 border-primary pb-2">BERITA UTAMA</h3>
                        <div className="space-y-4">
                            <div className="bg-muted rounded-lg overflow-hidden">
                                <Image src={mainNews.imgSrc} alt={mainNews.title} width={300} height={200} className="w-full h-auto" data-ai-hint="news commodity rice"/>
                            </div>
                            <h4 className="text-lg font-semibold leading-snug text-primary-dark dark:text-white hover:text-primary transition-colors"><Link href={mainNews.href}>{mainNews.title}</Link></h4>
                            <p className="text-sm text-muted-foreground">{mainNews.source}</p>
                        </div>
                        <div className="space-y-5 pt-4 border-t border-border/50">
                            {otherMainNews.map((news, index) => (
                                <div key={index}>
                                    <h5 className="font-semibold leading-snug text-primary-dark dark:text-white hover:text-primary transition-colors"><Link href={news.href}>{news.title}</Link></h5>
                                    <p className="text-sm text-muted-foreground mt-1">{news.source}</p>
                                </div>
                            ))}
                        </div>
                        <Button variant="outline">Selengkapnya</Button>
                    </div>

                    {/* Kolom Kegiatan */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-primary-dark dark:text-white font-poppins border-b-2 border-primary pb-2">KEGIATAN</h3>
                         <div className="space-y-4">
                            <div className="bg-muted rounded-lg overflow-hidden">
                                <Image src={activityNews.imgSrc} alt={activityNews.title} width={300} height={200} className="w-full h-auto" data-ai-hint="conference presentation"/>
                            </div>
                            <h4 className="text-lg font-semibold leading-snug text-primary-dark dark:text-white hover:text-primary transition-colors"><Link href={activityNews.href}>{activityNews.title}</Link></h4>
                            <p className="text-sm text-muted-foreground">{activityNews.source}</p>
                        </div>
                        <div className="space-y-5 pt-4 border-t border-border/50">
                            {otherActivityNews.map((news, index) => (
                                <div key={index}>
                                    <h5 className="font-semibold leading-snug text-primary-dark dark:text-white hover:text-primary transition-colors"><Link href={news.href}>{news.title}</Link></h5>
                                    <p className="text-sm text-muted-foreground mt-1">{news.source}</p>
                                </div>
                            ))}
                        </div>
                        <Button variant="outline">Selengkapnya</Button>
                    </div>

                    {/* Kolom Info Wilayah */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-primary-dark dark:text-white font-poppins border-b-2 border-primary pb-2">INFO WILAYAH</h3>
                         <div className="space-y-4">
                            <div className="bg-muted rounded-lg overflow-hidden">
                                <Image src={regionalNews.imgSrc} alt={regionalNews.title} width={300} height={200} className="w-full h-auto" data-ai-hint="government meeting handshake"/>
                            </div>
                            <h4 className="text-lg font-semibold leading-snug text-primary-dark dark:text-white hover:text-primary transition-colors"><Link href={regionalNews.href}>{regionalNews.title}</Link></h4>
                            <p className="text-sm text-muted-foreground">{regionalNews.source}</p>
                        </div>
                        <div className="space-y-5 pt-4 border-t border-border/50">
                            {otherRegionalNews.map((news, index) => (
                                <div key={index}>
                                    <h5 className="font-semibold leading-snug text-primary-dark dark:text-white hover:text-primary transition-colors"><Link href={news.href}>{news.title}</Link></h5>
                                    <p className="text-sm text-muted-foreground mt-1">{news.source}</p>
                                </div>
                            ))}
                        </div>
                        <Button variant="outline">Selengkapnya</Button>
                    </div>
                </div>
            </div>
        </section>

        {/* Commissioners Section */}
        <section className="py-20 lg:py-28 bg-primary-dark text-white">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold font-poppins">Jajaran Komisioner KPPU</h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                      Diawasi oleh Komisioner yang berdedikasi untuk mewujudkan persaingan usaha yang sehat demi kesejahteraan rakyat Indonesia.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-primary-dark/40 dark:bg-card/5 border border-white/20 p-10 rounded-2xl flex flex-col justify-center">
                        <h3 className="text-4xl font-bold mb-6 font-poppins">Salam Kenal!</h3>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>KPPU adalah lembaga independen yang bertugas mengawasi pelaksanaan UU No.5/1999 dan UU No.20/2008, terdiri dari Anggota KPPU yang diangkat oleh Presiden Republik Indonesia atas persetujuan Dewan Perwakilan Rakyat.</p>
                            <p>Anggota KPPU terpilih periode kelima melalui Keputusan Presiden Nomor 8/P Tahun 2024 memiliki masa kerja tahun 2024-2029. Kami berkomitmen untuk mensejahterakan rakyat melalui penegakan hukum persaingan usaha dan pengawasan kemitraan UMKM yang sehat di Indonesia.</p>
                        </div>
                        <div className="mt-8">
                            <KppuPieChart />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-5">
                        {commissioners.map((commissioner, index) => (
                             <div key={index} className="text-center group">
                                <div className="relative overflow-hidden rounded-xl">
                                    <Image
                                        src={commissioner.image}
                                        alt={commissioner.name}
                                        width={150}
                                        height={200}
                                        className="w-full h-auto object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={commissioner.hint}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Media & Publikasi Section */}
        <section className="py-20 lg:py-24 bg-background">
             <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Media & Publikasi</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Akses berbagai materi publikasi dan media dari KPPU.</p>
                </div>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left Column: Video */}
                    <Card className="p-4 shadow-lg rounded-xl overflow-hidden group">
                        <div className="relative aspect-video">
                             <Image src="https://placehold.co/600x338.png" layout="fill" objectFit="cover" alt="Video Company Profile KPPU" className="rounded-lg" data-ai-hint="people discussing document"/>
                             <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer transition-opacity opacity-0 group-hover:opacity-100">
                                <Youtube className="w-20 h-20 text-red-600 group-hover:text-red-500 transition-transform group-hover:scale-110" />
                            </div>
                        </div>
                    </Card>
                    {/* Right Column: Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        <Card className="p-3 shadow-lg rounded-xl overflow-hidden">
                             <Image src="https://placehold.co/300x200.png" width={300} height={200} alt="JDIH KPPU" className="rounded-md w-full" data-ai-hint="law database mobile"/>
                        </Card>
                         <Card className="p-3 shadow-lg rounded-xl overflow-hidden">
                             <Image src="https://placehold.co/300x200.png" width={300} height={200} alt="Majalah Kompetisi" className="rounded-md w-full" data-ai-hint="magazine covers display"/>
                        </Card>
                         <Card className="p-3 shadow-lg rounded-xl overflow-hidden">
                             <Image src="https://placehold.co/300x200.png" width={300} height={200} alt="Buku KPPU" className="rounded-md w-full" data-ai-hint="stack of books"/>
                        </Card>
                         <Card className="p-3 shadow-lg rounded-xl overflow-hidden">
                             <Image src="https://placehold.co/300x200.png" width={300} height={200} alt="Perpustakaan KPPU" className="rounded-md w-full" data-ai-hint="library books promotion"/>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Document Finder Section */}
        <section className="py-20 lg:py-24 bg-card">
             <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Pencari Dokumen</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Akses cepat ke database peraturan, putusan, dan pedoman KPPU.</p>
                </div>
                <Card className="max-w-4xl mx-auto p-8 shadow-lg rounded-xl bg-background">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="relative flex-grow w-full">
                            <input placeholder="Ketik nomor atau kata kunci peraturan..." className="w-full h-14 pl-12 pr-4 rounded-lg border border-input text-lg" />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
                        </div>
                        <Button className="h-14 px-10 text-lg w-full md:w-auto">
                            Cari
                        </Button>
                    </div>
                </Card>
            </div>
        </section>

        {/* Region Grid Section */}
        <section className="py-20 lg:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="">
                        <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Kantor Wilayah</h2>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                            KPPU hadir di 7 (tujuh) wilayah kerja yang tersebar di seluruh Indonesia untuk mendekatkan layanan dan pengawasan persaingan usaha kepada masyarakat dan pelaku usaha di daerah.
                        </p>
                        <Button size="lg" variant="default" asChild className="mt-8">
                           <Link href="/kanwil">Lihat Semua Kantor Wilayah <ArrowRight className="w-4 h-4 ml-2" /></Link>
                        </Button>
                    </div>
                     <div className="relative h-80 bg-gray-200 dark:bg-gray-800/50 rounded-xl flex items-center justify-center">
                        <p className="text-muted-foreground">Peta Indonesia Placeholder</p>
                        <Image src="https://placehold.co/800x500.png" alt="Peta Kantor Wilayah KPPU" layout="fill" objectFit="cover" className="rounded-xl opacity-20" data-ai-hint="indonesia map" />
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
