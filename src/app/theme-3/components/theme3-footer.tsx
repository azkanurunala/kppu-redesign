import { Logo } from '../../../components/logo';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Twitter, Facebook, Instagram, Youtube, Mail, Search, Handshake, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const footerLinkColumns = [
  {
    title: "PROFIL",
    links: [
        { label: "VISI DAN MISI", href: "/theme-3/profil/visi-misi" },
        { label: "ANGGOTA", href: "/theme-3/profil/anggota" },
        { label: "TUGAS & WEWENANG", href: "/theme-3/profil/tugas-wewenang" },
        { label: "ORGANISASI", href: "/theme-3/profil/organisasi" },
        { label: "PEJABAT SEKRETARIAT", href: "/theme-3/profil/pejabat-sekretariat" },
        { label: "KINERJA KEUANGAN", href: "/theme-3/profil/kinerja-keuangan" },
        { label: "MITRA KERJA", href: "/theme-3/profil/mitra-kerja" },
        { label: "PPID", href: "/theme-3/ppid" },
        { label: "LOGO DAN MASKOT", href: "/theme-3/profil/logo-maskot" },
    ],
  },
  {
    title: "REGULASI",
    links: [
        { label: "PERATURAN PERUNDANG-UNDANGAN", href: "/theme-3/regulasi/peraturan-perundang-undangan" },
        { label: "PERATURAN KOMISI", href: "/theme-3/regulasi/peraturan-komisi" },
        { label: "PEDOMAN", href: "/theme-3/regulasi/pedoman" },
    ],
  },
  {
    title: "PENGAWASAN",
    links: [
        { label: "KAJIAN KEBIJAKAN", href: "/theme-3/pengawasan/kajian-kebijakan" },
        { label: "ADVOKASI", href: "/theme-3/pengawasan/advokasi" },
        { label: "PENELITIAN", href: "/theme-3/pengawasan/penelitian" },
    ],
  },
  {
    title: "PENINDAKAN",
    links: [
        { label: "PERKARA PERSAINGAN", href: "/theme-3/penindakan/perkara-persaingan" },
        { label: "PENILAIAN MERGER", href: "/theme-3/penindakan/penilaian-merger" },
        { label: "PENGAWASAN KEMITRAAN", href: "/theme-3/penindakan/pengawasan-kemitraan" },
    ],
  },
  {
    title: "PUBLIKASI",
    links: [
        { label: "GALERI", href: "/theme-3/publikasi/galeri" },
        { label: "KOMPETISI", href: "#" },
        { label: "LAPORAN TAHUNAN", href: "/theme-3/publikasi/laporan-tahunan" },
        { label: "REFERENSI", href: "#" },
        { label: "SIARAN PERS", href: "/theme-3/publikasi/siaran-pers" },
        { label: "AKTIVITAS", href: "/theme-3/publikasi/aktivitas" },
        { label: "TANYA JAWAB", href: "/theme-3/tanya-jawab" },
        { label: "E-FLYER", href: "#" },
        { label: "PENGUMUMAN", href: "#" },
    ],
  },
   {
    title: "KANWIL",
    links: [
      { label: "KANWIL I", href: "/theme-3/kanwil" },
      { label: "KANWIL II", href: "/theme-3/kanwil" },
      { label: "KANWIL III", href: "/theme-3/kanwil" },
      { label: "KANWIL IV", href: "/theme-3/kanwil" },
      { label: "KANWIL V", href: "/theme-3/kanwil" },
      { label: "KANWIL VI", href: "/theme-3/kanwil" },
      { label: "KANWIL VII", href: "/theme-3/kanwil" },
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

export function Theme3Footer() {
  return (
    <>
      <section>
                     <div className="relative py-24 md:py-32 text-center bg-[#5B21B6]">
              <img src="/images/bg/map-bw-pp.png" alt="Peta Indonesia" className="absolute inset-0 w-full h-full object-cover opacity-80" data-ai-hint="indonesia map background" />
              <div className="relative z-10 container mx-auto">
                  <Handshake className="w-16 h-16 mx-auto mb-6 text-white"/>
                  <h2 className="text-4xl lg:text-5xl font-bold font-inter mb-4 text-white">Sinergi untuk Ekonomi Maju</h2>
                  <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8 font-inter">Punya informasi atau keluhan terkait persaingan usaha? Sampaikan kepada kami. Partisipasi Anda penting untuk ekonomi Indonesia yang lebih adil.</p>
                                     <Button asChild size="lg" className="bg-white text-[#5B21B6] font-bold hover:bg-white/90 rounded-full px-10 text-base font-inter">
                       <Link href="/theme-3/kppu-mendengar">Laporkan Sekarang <ArrowRight className="w-5 h-5 ml-2"/></Link>
                  </Button>
              </div>
          </div>
      </section>
             <footer className="bg-[#3C1A5F] text-gray-300">
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
              <Input placeholder="Search..." className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 h-11 pl-10 font-inter" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="border-y border-gray-700/50 py-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                  {footerLinkColumns.map(({ title, links }) => (
                      <div key={title}>
                          <h3 className="font-bold text-white tracking-wider text-sm font-inter">{title}</h3>
                          <ul className="mt-4 space-y-2">
                              {links.map((link) => (
                                  <li key={link.label}>
                                      <Link href={link.href}>
                                          <div className="text-xs text-gray-400 transition-colors hover:text-white hover:underline font-inter">{link.label}</div>
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
              <p className="text-center md:text-right text-xs text-gray-500 font-inter">
                  Hak Cipta &copy; {new Date().getFullYear()} Komisi Pengawas Persaingan Usaha Republik Indonesia.
              </p>
          </div>
        </div>
      </footer>
    </>
  );
}
