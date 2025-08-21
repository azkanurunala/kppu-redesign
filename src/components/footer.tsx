
import { Logo } from './logo';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Twitter, Facebook, Instagram, Youtube, Mail, Search } from 'lucide-react';
import Link from 'next/link';

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
      { label: "KANWIL I", href: "/kanwil/1" },
      { label: "KANWIL II", href: "/kanwil/2" },
      { label: "KANWIL III", href: "/kanwil/3" },
      { label: "KANWIL IV", href: "/kanwil/4" },
      { label: "KANWIL V", href: "/kanwil/5" },
      { label: "KANWIL VI", href: "/kanwil/6" },
      { label: "KANWIL VII", href: "/kanwil/7" },
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
    <footer className="bg-[#181F2A] text-gray-300">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
            {/* Left Column */}
            <div className="lg:w-1/4 space-y-6">
                <div className="flex items-center space-x-4">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <Link href={href} key={label}>
                        <div className="text-gray-400 hover:text-white transition-colors" aria-label={label}>
                            <Icon className="h-5 w-5" />
                        </div>
                      </Link>
                    ))}
                </div>
                 <div className="relative">
                    <Input placeholder="Search..." className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 h-11 pl-10" />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
            </div>

            {/* Right Column (Link Grid) */}
             <div className="lg:w-3/4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
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
        
        <div className="mt-16 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo isFooter={true} />
          <p className="text-center md:text-right text-xs text-gray-500">
            Hak Cipta &copy; {new Date().getFullYear()} Komisi Pengawas Persaingan Usaha Republik Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}
