
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Gavel, HelpCircle, Info, Library, Newspaper, Scale, Youtube } from 'lucide-react';
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
        <section className="bg-gradient-to-r from-[#0d2a5a] to-[#0152a7] dark:from-[#081c3d] dark:to-[#013e7d]">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {sliderImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[450px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      style={{ objectFit: 'contain' }}
                      data-ai-hint={image.hint}
                      unoptimized
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/20 hover:bg-black/40 border-none" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/20 hover:bg-black/40 border-none" />
          </Carousel>
        </section>
        
        <section className="bg-card dark:bg-card shadow-md">
            <div className="container mx-auto px-4 py-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                    {iconNavItems.map(item => (
                      <Link href={item.href} key={item.label}>
                        <div className="flex flex-col items-center justify-center gap-2 p-3 text-foreground/80 hover:text-primary transition-colors cursor-pointer rounded-lg hover:bg-primary/5">
                           {item.icon}
                           <span className="font-semibold text-xs tracking-wider">{item.label}</span>
                        </div>
                      </Link>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 text-primary-dark dark:text-white font-poppins">Info Terkini</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(newsColumns).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="text-xl font-bold mb-4 border-b-2 border-primary pb-2 text-primary-dark dark:text-gray-300 font-poppins">{category}</h3>
                            <div className="space-y-6">
                                {items.map((item, index) => (
                                    <div key={index} className={index === 0 ? "" : "border-t pt-6"}>
                                      {index === 0 && item.image && <Image src={item.image} alt={item.title} width={300} height={200} className="rounded-lg w-full mb-4" data-ai-hint={item.hint} />}
                                      <p className="font-semibold text-foreground hover:text-primary cursor-pointer">{item.title}</p>
                                      <p className="text-sm text-muted-foreground mt-1">{item.date}</p>
                                    </div>
                                ))}
                                <Button variant="outline" size="sm" className="bg-gray-200 text-gray-600 border-gray-300 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600">
                                    Selengkapnya
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-16 bg-primary-dark text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 font-poppins">Jajaran Komisioner KPPU</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="bg-white/10 p-8 rounded-lg">
                        <h3 className="text-2xl font-bold mb-4 font-poppins">Salam Kenal!</h3>
                        <p className="text-gray-200 leading-relaxed mb-6">
                            KPPU diawasi oleh Komisi Pengawas Persaingan Usaha yang bertugas mengawasi pelaksanaan UU No. 5/1999 dan UU No. 20/2008, serta Peraturan Pemerintah dan Peraturan Presiden lainnya. Kami berkomitmen untuk mewujudkan ekonomi pasar yang wajar, efisien, dan sehat demi kesejahteraan rakyat Indonesia.
                        </p>
                        <KppuPieChart />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {commissioners.slice(0, 9).map((c, i) => (
                            <div key={i} className="text-center">
                                <Image src={c.image} alt={c.name} width={150} height={200} className="rounded-lg mx-auto shadow-lg object-cover" data-ai-hint={c.hint} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 text-primary-dark dark:text-white font-poppins">Media & Publikasi</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                            <Image src="https://placehold.co/600x338.png" layout="fill" objectFit="cover" alt="KPPU Video Profile" data-ai-hint="office presentation" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <Youtube className="w-16 h-16 text-red-600 hover:text-red-500 cursor-pointer transition-transform hover:scale-110" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Card className="hover:shadow-lg transition-shadow bg-card dark:bg-card">
                            <CardContent className="p-0">
                                <Image src="https://placehold.co/300x200.png" width={300} height={200} alt="Majalah" className="rounded-t-lg w-full" data-ai-hint="magazine cover" />
                                <div className="p-4">
                                    <p className="font-semibold font-poppins">MAJALAH</p>
                                </div>
                            </CardContent>
                        </Card>
                         <Card className="hover:shadow-lg transition-shadow bg-card dark:bg-card">
                             <CardContent className="p-0">
                                <Image src="https://placehold.co/300x200.png" width={300} height={200} alt="Laporan" className="rounded-t-lg w-full" data-ai-hint="annual report" />
                                <div className="p-4">
                                    <p className="font-semibold font-poppins">LAPORAN</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-shadow bg-card dark:bg-card">
                             <CardContent className="p-0">
                                <Image src="https://placehold.co/300x200.png" width={300} height={200} alt="Kemitraan" className="rounded-t-lg w-full" data-ai-hint="handshake deal" />
                                 <div className="p-4">
                                    <p className="font-semibold font-poppins">KEMITRAAN</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-shadow bg-card dark:bg-card">
                             <CardContent className="p-0">
                                <Image src="https://placehold.co/300x200.png" width={300} height={200} alt="Perpustakaan" className="rounded-t-lg w-full" data-ai-hint="library books" />
                                <div className="p-4">
                                    <p className="font-semibold font-poppins">PERPUSTAKAAN</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
