import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { BookOpen, Gavel, Newspaper, Search, ArrowRight } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FadeIn } from '@/components/fade-in';

export default function Home() {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: 'Peraturan & Regulasi',
      description: 'Jelajahi semua undang-undang, peraturan pemerintah, dan peraturan komisi yang berlaku.',
      linkText: 'Cari Regulasi',
    },
    {
      icon: <Gavel className="h-8 w-8 text-primary" />,
      title: 'Putusan Perkara',
      description: 'Akses database putusan perkara yang telah dikeluarkan oleh KPPU secara transparan.',
      linkText: 'Lihat Putusan',
    },
    {
      icon: <Newspaper className="h-8 w-8 text-primary" />,
      title: 'Publikasi & Berita',
      description: 'Dapatkan berita terbaru, siaran pers, dan hasil penelitian dari KPPU.',
      linkText: 'Baca Publikasi',
    },
  ];

  const newsItems = [
    {
      image: 'https://placehold.co/600x400.png',
      alt: 'Business meeting',
      hint: 'business meeting',
      title: 'KPPU Denda 3 Perusahaan Terkait Tender Pengadaan',
      date: '18 Juli 2024',
    },
    {
      image: 'https://placehold.co/600x400.png',
      alt: 'Market analysis chart',
      hint: 'market analysis',
      title: 'Analisis Dampak Merger di Sektor Telekomunikasi',
      date: '15 Juli 2024',
    },
    {
      image: 'https://placehold.co/600x400.png',
      alt: 'Person speaking at a conference',
      hint: 'conference speaker',
      title: 'KPPU Gelar Sosialisasi UU Persaingan Usaha di Makassar',
      date: '12 Juli 2024',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section
          className="relative flex h-[80vh] min-h-[600px] w-full items-center justify-center bg-cover bg-center bg-no-repeat py-20 text-white"
          style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }}
          data-ai-hint="justice abstract building"
        >
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
          <div className="container relative z-10 mx-auto px-4">
            <FadeIn className="flex flex-col items-center space-y-6 text-center">
              <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                Keadilan dan Kepastian Usaha
              </h1>
              <p className="max-w-3xl text-lg text-primary-foreground/80 md:text-xl">
                Mewujudkan persaingan usaha yang sehat untuk pertumbuhan ekonomi Indonesia yang inklusif dan berkelanjutan.
              </p>
              <div className="w-full max-w-lg lg:max-w-xl pt-4">
                <div className="relative">
                  <Input
                    type="search"
                    aria-label="Cari Regulasi"
                    placeholder="Cari regulasi, putusan perkara..."
                    className="h-14 w-full rounded-full border-2 border-transparent bg-white/90 pl-14 pr-6 text-lg text-foreground shadow-lg transition-colors focus:border-accent focus:ring-accent"
                  />
                  <Search className="pointer-events-none absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center">
              <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">Akses Informasi Publik</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Temukan informasi penting mengenai regulasi, putusan perkara, dan publikasi KPPU dengan mudah.
              </p>
            </FadeIn>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <FadeIn key={feature.title} delay={index * 100}>
                  <Card className="flex h-full flex-col text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                    <CardHeader className="items-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-grow flex-col">
                      <p className="flex-grow text-muted-foreground">{feature.description}</p>
                      <Button variant="link" className="mt-4 self-center px-0 text-accent hover:text-accent/80">
                        {feature.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center">
              <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">Berita Terkini</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Ikuti perkembangan dan kegiatan terbaru dari Komisi Pengawas Persaingan Usaha.
              </p>
            </FadeIn>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {newsItems.map((item, index) => (
                <FadeIn key={item.title} delay={index * 100}>
                  <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl bg-background">
                    <Image src={item.image} alt={item.alt} width={600} height={400} className="w-full object-cover aspect-[3/2]" data-ai-hint={item.hint} />
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground">{item.title}</CardTitle>
                      <CardDescription className="pt-2 text-sm">{item.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <Button variant="outline">Baca Selengkapnya</Button>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">Punya Pertanyaan atau Laporan?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Tim kami siap membantu Anda. Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut atau melaporkan dugaan pelanggaran.
              </p>
              <Button size="lg" className="mt-8 bg-accent px-8 py-6 text-base font-semibold text-accent-foreground shadow-lg transition-transform hover:scale-105 hover:bg-accent/90">
                Hubungi Kami
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
