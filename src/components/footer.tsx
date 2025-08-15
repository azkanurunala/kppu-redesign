import { Logo } from './logo';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Twitter, Facebook, Instagram, Youtube, Mail } from 'lucide-react';
import Link from 'next/link';

const footerLinkColumns = [
  {
    title: "PROFIL",
    links: ["TENTANG KPPU", "SEJARAH", "PROFIL KOMISIONER", "STRUKTUR ORGANISASI", "KANTOR WILAYAH", "LINK K/L"],
  },
  {
    title: "REGULASI",
    links: ["UNDANG-UNDANG", "PERATURAN PEMERINTAH", "PERATURAN KOMISI", "PUTUSAN"],
  },
  {
    title: "PENANGANAN",
    links: ["PENANGANAN PERKARA", "NOTIFIKASI MERGER", "PELAPORAN", "PERKARA INKRACHT"],
  },
  {
    title: "PENCEGAHAN",
    links: ["KAJIAN & SARAN", "ADVOKASI", "KEMITRAAN", "KEPATUHAN"],
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
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

            {footerLinkColumns.map(({ title, links }) => (
                <div key={title} className="lg:col-span-2">
                    <h3 className="font-bold text-white tracking-wider text-base font-poppins">{title}</h3>
                    <ul className="mt-6 space-y-3">
                        {links.map((link) => (
                            <li key={link}>
                                <Link href="#">
                                    <div className="text-sm text-gray-400 transition-colors hover:text-white hover:underline">{link}</div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-700/50 text-center text-sm text-gray-500">
          <p>Hak Cipta &copy; {new Date().getFullYear()} Komisi Pengawas Persaingan Usaha Republik Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}
