
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Gavel, HelpCircle, Info, Library, Newspaper, Scale, Youtube, ArrowRight, Building, Users, BookOpen } from 'lucide-react';
import { KppuPieChart } from '@/components/kppu-pie-chart';
import Link from 'next/link';

const iconNavItems = [
  { icon: <Scale className="h-8 w-8 text-primary" />, label: "REGULASI", href: "/regulasi" },
  { icon: <Gavel className="h-8 w-8 text-primary" />, label: "PUTUSAN", href: "/putusan" },
  { icon: <Newspaper className="h-8 w-8 text-primary" />, label: "JADWAL SIDANG", href: "/jadwal-sidang" },
  { icon: <Library className="h-8 w-8 text-primary" />, label: "SIARAN PERS", href: "/siaran-pers" },
  { icon: <HelpCircle className="h-8 w-8 text-primary" />, label: "TANYA JAWAB", href: "/tanya-jawab" },
  { icon: <Info className="h-8 w-8 text-primary" />, label: "PPID", href: "/ppid" },
];

const newsColumns = {
  "BERITA UTAMA": [
    { image: "https://placehold.co/300x200.png", hint: "building exterior", title: "KPPU Terus Melakukan Pengawasan atas Komoditas Beras", date: "JawaPos.com" },
    { title: "Pertama dalam Sejarah: 97 Pelaku Usaha Menjadi Terlapor dalam Sidang Dugaan Kartel Pinjol", date: "Hukumonline.com" },
    { title: "Sidang Perkara terkait Dugaan Hambatan Usaha PT Laboratorium Medio Pratama Masuk ke Tahap Pemeriksaan Lanjutan", date: "Kontan.co.id" },
  ],
  "KEGIATAN": [
    { image: "https://placehold.co/300x200.png", hint: "group photo award", title: "KPPU Hadiri Tasyakuran Ulang Tahun INDEF", date: "infopublik.id" },
    { title: "KPPU Terima Kunjungan PETRONAS Bahas Implementasi Program Kemitraan", date: "Republika.co.id" },
    { title: "Program Kepatuhan Persaingan Usaha PT PU Indonesia Disetujui KPPU", date: "Sindonews.com" },
  ],
  "INFO WILAYAH": [
    { image: "https://placehold.co/300x200.png", hint: "men handshake official", title: "Perkuat Sinergi, Kantor Wilayah VI KPPU Makassar Temui Gubernur Sulawesi Barat", date: "Antaranews.com" },
    { title: "LIRA Sumut Dukung KPPU Kanwil I Bongkar Dugaan Persekongkolan Tender Rp66 Miliar di Kejari Sumut", date: "Analisadaily.com" },
    { title: "Kunjungi Gapoktan di Kabupaten Bandung Barat, Kepala Kanwil III dan Petani Bahas Pemasaran Beras", date: "Tribunnews.com" },
  ],
};

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

const sliderImages = [
  { src: "https://kppu.go.id/wp-content/uploads/2025/08/Slider-Banner-HUT-80-RI-15-Ags-2025.png", alt: "HUT 80 RI", hint: "indonesia independence day" },
  { src: "https://kppu.go.id/wp-content/uploads/2025/07/Slider-Banner-JPU-Vol-5-No-1-Tahun-2025-28-Jul-2025.png", alt: "Jurnal Persaingan Usaha", hint: "journal cover" },
  { src: "https://kppu.go.id/wp-content/uploads/slider6/slider-banner-juanda-36-6-sep-2024.png", alt: "Webinar Juanda 36", hint: "webinar poster" }
];


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="bg-primary-dark">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {sliderImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[350px] md:h-[500px] lg:h-[600px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      data-ai-hint={image.hint}
                      unoptimized
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 border-none" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 border-none" />
          </Carousel>
        </section>
        
        <section className="bg-card dark:bg-card border-b border-border/50">
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

        <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-primary font-semibold mb-2">INFO TERKINI</p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Seputar Persaingan Usaha</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {Object.entries(newsColumns).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="text-2xl font-bold mb-8 border-b-4 border-primary pb-4 text-primary-dark dark:text-gray-200 font-poppins">{category}</h3>
                            <div className="space-y-8">
                                {items.map((item, index) => (
                                    <div key={index} className={index === 0 ? "" : "border-t border-border/50 pt-8"}>
                                      {index === 0 && item.image && <Image src={item.image} alt={item.title} width={300} height={200} className="rounded-lg w-full mb-5 shadow-md" data-ai-hint={item.hint} />}
                                      <h4 className="font-bold text-xl text-foreground hover:text-primary cursor-pointer transition-colors leading-snug">{item.title}</h4>
                                      <p className="text-sm text-muted-foreground mt-3">{item.date}</p>
                                    </div>
                                ))}
                                <Button variant="outline" size="sm" className="mt-6 rounded-full px-5">
                                    Lihat Semua <ArrowRight className="h-4 w-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-20 lg:py-28 bg-primary-dark text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold font-poppins">Jajaran Komisioner KPPU</h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                        Diawasi oleh Komisioner yang berdedikasi untuk mewujudkan persaingan usaha yang sehat demi kesejahteraan rakyat Indonesia.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="bg-card/10 border-border/20 p-8 flex flex-col justify-center text-center items-center lg:col-span-1">
                        <h3 className="text-3xl font-bold mb-4 font-poppins">Salam Kenal!</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Kami berkomitmen untuk mewujudkan ekonomi pasar yang wajar, efisien, dan sehat.
                        </p>
                        <KppuPieChart />
                    </Card>
                    <div className="grid grid-cols-3 gap-5 md:col-span-2">
                        {commissioners.slice(0, 9).map((c, i) => (
                            <div key={i} className="text-center group">
                                <div className="relative overflow-hidden rounded-xl">
                                    <Image src={c.image} alt={c.name} width={150} height={200} className="w-full h-auto object-cover shadow-lg transition-transform duration-300 group-hover:scale-105" data-ai-hint={c.hint} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        
        <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-primary font-semibold mb-2">MEDIA & PUBLIKASI</p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white font-poppins">Galeri Informasi</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <div className="relative aspect-video overflow-hidden shadow-lg group">
                            <Image src="https://placehold.co/600x338.png" layout="fill" objectFit="cover" alt="KPPU Video Profile" data-ai-hint="office presentation" />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-80">
                                <Youtube className="w-20 h-20 text-red-600 cursor-pointer transition-transform duration-300 group-hover:scale-110" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                         {[
                            { title: "MAJALAH", hint: "magazine cover", icon: BookOpen },
                            { title: "LAPORAN", hint: "annual report", icon: Gavel },
                            { title: "KEMITRAAN", hint: "handshake deal", icon: Users },
                            { title: "PERPUSTAKAAN", hint: "library books", icon: Building },
                         ].map(({ title, hint, icon: Icon }) => (
                            <Card key={title} className="hover:shadow-xl transition-shadow bg-card dark:bg-card group overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="relative h-32 bg-primary-dark/10 flex items-center justify-center">
                                       <Icon className="h-12 w-12 text-primary" />
                                    </div>
                                    <div className="p-5 text-center">
                                        <p className="font-bold text-lg font-poppins group-hover:text-primary transition-colors">{title}</p>
                                    </div>
                                </CardContent>
                            </Card>
                         ))}
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

    