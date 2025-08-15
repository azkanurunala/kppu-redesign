import { Logo } from './logo';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Twitter, Facebook, Instagram, Youtube, Mail } from 'lucide-react';

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
  {
    title: "PUBLIKASI",
    links: ["BERITA", "SIARAN PERS", "MAJALAH KOMPETISI", "JURNAL PERSAINGAN USAHA", "BUKU", "LAPORAN"],
  },
  {
    title: "KANWIL",
    links: ["KANWIL I", "KANWIL II", "KANWIL III", "KANWIL IV", "KANWIL V", "KANWIL VI"],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#2f3844] text-gray-300">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-gray-600">
          <div className="md:col-span-1">
            <Logo isFooter={true} />
          </div>
          <div className="flex items-center space-x-4 md:col-span-1 justify-start md:justify-center">
            <a href="#" aria-label="Email" className="hover:text-white"><Mail className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-white"><Youtube className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
          </div>
          <div className="md:col-span-2">
            <div className="flex flex-col md:flex-row items-center justify-end gap-4">
                <form className="flex items-center w-full md:w-auto">
                    <Input type="search" placeholder="Search..." className="bg-gray-700 border-gray-600 rounded-r-none text-white h-9 placeholder:text-gray-400" />
                    <Button type="submit" className="bg-primary rounded-l-none h-9 text-sm px-4">Search</Button>
                </form>
                <div className="flex space-x-3">
                     <a href="#" className="text-sm hover:underline">Indonesia</a>
                     <a href="#" className="text-sm hover:underline">English</a>
                </div>
            </div>
          </div>
        </div>
      
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {footerLinkColumns.map(({ title, links }) => (
            <div key={title}>
              <h3 className="font-bold text-white tracking-wider text-sm font-poppins">{title}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                    <li key={link}><a href="#" className="text-sm text-gray-400 transition-colors hover:text-white hover:underline">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-600 text-center text-sm text-gray-400">
          <p>Copyright &copy; {new Date().getFullYear()} Komisi Pengawas Persaingan Usaha. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
