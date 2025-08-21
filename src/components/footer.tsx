
import { Logo } from './logo';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Twitter, Facebook, Instagram, Youtube, Mail, Search, Handshake, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const footerLinkColumns = [
  {
    title: "PROFIL",
    links: [
        { label: "VISI DAN MISI", href: "/profil/visi-misi" },
        { label: "ANGGOTA", href: "/profil/anggota" },
        { label: "TUGAS & WEWENANG", href: "/profil/tugas-wewenang" },
        { label: "ORGANISASI", href: "/profil/organisasi" },
        { label: "PEJABAT SEKRETARIAT", href: "/profil/pejabat-sekretariat" },
        { label: "KINERJA KEUANGAN", href: "/profil/kinerja-keuangan" },
        { label: "MITRA KERJA", href: "/profil/mitra-kerja" },
        { label: "PPID", href: "/ppid" },
        { label: "LOGO DAN MASKOT", href: "/profil/logo-maskot" },
    ],
  },
  {
    title: "REGULASI",
    links: [
        { label: "PERATURAN PERUNDANG-UNDANGAN", href: "/regulasi/peraturan-perundang-undangan" },
        { label: "PERATURAN KOMISI", href: "/regulasi/peraturan-komisi" },
        { label: "PEDOMAN", href: "/regulasi/pedoman" },
    ],
  },
  {
    title: "PENGAWASAN",
    links: [
        { label: "KAJIAN KEBIJAKAN", href: "/pengawasan/kajian-kebijakan" },
        { label: "ADVOKASI", href: "/pengawasan/advokasi" },
        { label: "PENELITIAN", href: "/pengawasan/penelitian" },
    ],
  },
  {
    title: "PENINDAKAN",
    links: [
        { label: "PERKARA PERSAINGAN", href: "/penindakan/perkara-persaingan" },
        { label: "PENILAIAN MERGER", href: "/penindakan/penilaian-merger" },
        { label: "PENGAWASAN KEMITRAAN", href: "/penindakan/pengawasan-kemitraan" },
    ],
  },
  {
    title: "PUBLIKASI",
    links: [
        { label: "GALERI", href: "/publikasi/galeri" },
        { label: "KOMPETISI", href: "#" },
        { label: "LAPORAN TAHUNAN", href: "/publikasi/laporan-tahunan" },
        { label: "REFERENSI", href: "#" },
        { label: "SIARAN PERS", href: "/publikasi/siaran-pers" },
        { label: "AKTIVITAS", href: "/publikasi/aktivitas" },
        { label: "TANYA JAWAB", href: "/tanya-jawab" },
        { label: "E-FLYER", href: "#" },
        { label: "PENGUMUMAN", href: "#" },
    ],
  },
   {
    title: "KANWIL",
    links: [
      { label: "KANWIL I", href: "/kanwil" },
      { label: "KANWIL II", href: "/kanwil" },
      { label: "KANWIL III", href: "/kanwil" },
      { label: "KANWIL IV", href: "/kanwil" },
      { label: "KANWIL V", href: "/kanwil" },
      { label: "KANWIL VI", href: "/kanwil" },
      { label: "KANWIL VII", href: "/kanwil" },
    ],
  },
];

const socialLinks = [
  { icon: Mail, href: '#', label: 'Email' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export function Footer() {
  return (
    <>
      <section>
          <div className="relative py-24 md:py-32 text-center bg-primary-dark">
              <Image src="/images/kppu-building.jpeg" alt="Gedung KPPU" fill className="object-cover opacity-10" data-ai-hint="modern office building kppu" />
              <div className="relative z-10 container mx-auto">
                  <Handshake className="w-16 h-16 mx-auto mb-6 text-gold"/>
                  <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-4 text-white">Sinergi untuk Ekonomi Maju</h2>
                  <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">Punya informasi atau keluhan terkait persaingan usaha? Sampaikan kepada kami. Partisipasi Anda penting untuk ekonomi Indonesia yang lebih adil.</p>
                  <Button asChild size="lg" className="bg-gold text-primary-dark font-bold hover:bg-gold/90 rounded-full px-10 text-base">
                       <Link href="/kppu-mendengar">Laporkan Sekarang <ArrowRight className="w-5 h-5 ml-2"/></Link>
                  </Button>
              </div>
          </div>
      </section>
      <footer className="bg-[#181F2A] text-gray-300">
        <div className="container mx-auto pt-16 pb-8">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="KPPU Logo" 
                className="h-6 w-auto object-contain" 
              />
            </div>
            <div className="relative w-full md:w-auto md:max-w-xs">
              <Input placeholder="Search..." className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 h-11 pl-10" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="border-y border-gray-700/50 py-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                  {footerLinkColumns.map(({ title, links }) => (
                      <div key={title}>
                          <h3 className="font-bold text-white tracking-wider text-sm font-poppins">{title}</h3>
                          <ul className="mt-4 space-y-2">
                              {links.map((link) => (
                                  <li key={link.label}>
                                      <Link href={link.href}>
                                          <div className="text-xs text-gray-400 transition-colors hover:text-white hover:underline">{link.label}</div>
                                      </Link>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center space-x-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <Link href={href} key={label}>
                      <div className="text-gray-400 hover:text-white transition-colors" aria-label={label}>
                          <Icon className="h-5 w-5" />
                      </div>
                    </Link>
                  ))}
              </div>
              <p className="text-center md:text-right text-xs text-gray-500">
                  Hak Cipta &copy; {new Date().getFullYear()} Komisi Pengawas Persaingan Usaha Republik Indonesia.
              </p>
          </div>
        </div>
      </footer>
    </>
  );
}
