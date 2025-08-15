
import { Logo } from './logo';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Twitter, Facebook, Instagram, Youtube, Mail } from 'lucide-react';
import Link from 'next/link';

const footerLinkColumns = [
  {
    title: "PROFIL",
    links: [
        { label: "TENTANG KPPU", href: "/profil" },
        { label: "VISI & MISI", href: "/profil/visi-misi" },
        { label: "ANGGOTA", href: "/profil/anggota" },
        { label: "STRUKTUR ORGANISASI", href: "/profil/organisasi" },
        { label: "MITRA KERJA", href: "/profil/mitra-kerja" },
        { label: "KANTOR WILAYAH", href: "/kanwil" },
    ],
  },
  {
    title: "REGULASI",
    links: [
        { label: "UNDANG-UNDANG", href: "/regulasi/peraturan-perundang-undangan" },
        { label: "PERATURAN PEMERINTAH", href: "/regulasi/peraturan-perundang-undangan" },
        { label: "PERATURAN KOMISI", href: "/regulasi/peraturan-komisi" },
        { label: "PUTUSAN", href: "/penindakan/perkara-persaingan" },
    ],
  },
  {
    title: "PUBLIKASI",
    links: [
        { label: "SIARAN PERS", href: "/publikasi/siaran-pers" },
        { label: "BERITA", href: "/publikasi/aktivitas" },
        { label: "JURNAL", href: "#" },
        { label: "GALERI", href: "/publikasi/galeri" },
    ],
  },
  {
    title: "INFORMASI",
    links: [
        { label: "JADWAL SIDANG", href: "/jadwal-sidang" },
        { label: "TANYA JAWAB", href: "/tanya-jawab" },
        { label: "PPID", href: "/ppid" },
        { label: "E-PROCUREMENT", href: "/e-procurement" },
        { label: "KONTAK", href: "/contact" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
                <div className="mb-6">
                    <Logo isFooter={true} />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                    Komisi Pengawas Persaingan Usaha (KPPU) adalah lembaga independen yang bertugas mengawasi pelaksanaan UU No. 5/1999 untuk mewujudkan ekonomi yang efisien dan mensejahterakan rakyat.
                </p>
                <div className="flex items-center space-x-4 mt-6">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <Link href={href} key={label}>
                        <div className="text-gray-400 hover:text-white transition-colors" aria-label={label}>
                            <Icon className="h-5 w-5" />
                        </div>
                      </Link>
                    ))}
                </div>
            </div>

             <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                {footerLinkColumns.map(({ title, links }) => (
                    <div key={title}>
                        <h3 className="font-bold text-white tracking-wider text-base font-poppins">{title}</h3>
                        <ul className="mt-6 space-y-3">
                            {links.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href}>
                                        <div className="text-sm text-gray-400 transition-colors hover:text-white hover:underline">{link.label}</div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-700/50 text-center text-sm text-gray-500">
          <p>Hak Cipta &copy; {new Date().getFullYear()} Komisi Pengawas Persaingan Usaha Republik Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}
