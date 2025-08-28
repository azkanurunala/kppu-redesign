"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogoImage } from '../../../components/logo';
import { Button } from '../../../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../../components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../../../components/ui/sheet';
import { Menu, ChevronDown, Search } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { ThemeToggle } from '../../../components/theme-toggle';
import { SearchDialog } from '../../../components/search-dialog';

const navItems = [
  {
    label: 'PROFIL',
    href: '/theme-2/profil',
    subItems: [
      { label: 'VISI DAN MISI', href: '/theme-2/profil/visi-misi' },
      { label: 'ANGGOTA', href: '/theme-2/profil/anggota' },
      { label: 'TUGAS & WEWENANG', href: '/theme-2/profil/tugas-wewenang' },
      { label: 'ORGANISASI', href: '/theme-2/profil/organisasi' },
      { label: 'PEJABAT SEKRETARIAT', href: '/theme-2/profil/pejabat-sekretariat' },
      { label: 'KINERJA KEUANGAN', href: '/theme-2/profil/kinerja-keuangan' },
      { label: 'MITRA KERJA', href: '/theme-2/profil/mitra-kerja' },
      { label: 'PPID', href: '/theme-2/ppid' },
      { label: 'LOGO DAN MASKOT', href: '/theme-2/profil/logo-dan-maskot' },
    ],
  },
  {
    label: 'REGULASI',
    href: '/theme-2/regulasi',
    subItems: [
        { label: 'UNDANG-UNDANG & PP', href: '/theme-2/regulasi/peraturan-perundang-undangan' },
        { label: 'PERATURAN KOMISI', href: '/theme-2/regulasi/peraturan-komisi' },
        { label: 'PERATURAN KETUA KPPU', href: '/theme-2/regulasi/peraturan-ketua-kppu' },
        { label: 'PEDOMAN', href: '/theme-2/regulasi/pedoman' },
        { label: 'PUTUSAN', href: '/theme-2/penindakan/perkara-persaingan' },
    ]
  },
  {
    label: 'PENGAWASAN',
    href: '#',
    subItems: [
        { label: 'KAJIAN KEBIJAKAN', href: '/theme-2/pengawasan/kajian-kebijakan' },
        { label: 'ADVOKASI', href: '/theme-2/pengawasan/advokasi' },
        { label: 'PENELITIAN', href: '/theme-2/pengawasan/penelitian' },
        { label: 'INDEKS PERSAINGAN USAHA', href: '/theme-2/indeks-persaingan-usaha' },
        { label: 'KPPU MENDENGAR', href: '/theme-2/kppu-mendengar' },
    ]
  },
    {
    label: 'PENINDAKAN',
    href: '#',
    subItems: [
        { label: 'PERKARA PERSAINGAN', href: '/theme-2/penindakan/perkara-persaingan' },
        { label: 'PENILAIAN MERGER', href: '/theme-2/penindakan/penilaian-merger' },
        { label: 'PENGAWASAN KEMITRAAN', href: '/theme-2/penindakan/pengawasan-kemitraan' },
    ]
  },
  {
    label: 'PUBLIKASI',
    href: '/theme-2/publikasi',
    subItems: [
        { label: 'AKTIVITAS', href: '/theme-2/publikasi/aktivitas' },
        { label: 'SIARAN PERS', href: '/theme-2/publikasi/siaran-pers' },
        { label: 'LAPORAN TAHUNAN', href: '/theme-2/publikasi/laporan-tahunan' },
        { label: 'JURNAL', href: '#' },
    ]
  },
  {
    label: 'KANWIL',
    href: '/theme-2/kanwil',
  },
  { label: 'E-PROCUREMENT', href: '/theme-2/e-procurement' },
  { label: 'KONTAK', href: '/theme-2/contact' },
];

export function Theme2Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavMenu = ({ isMobile = false }) => (
    <nav className={cn(
        "flex items-center",
        isMobile ? "flex-col space-y-2 items-start" : "space-x-1"
    )}>
      {navItems.map((item) => (
        <div key={item.label} className="w-full">
          {item.subItems ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className={cn(
                    "text-sm font-semibold flex items-center gap-1 w-full justify-start lg:justify-center",
                     isMobile ? "text-gray-700 dark:text-gray-300" : "text-white hover:text-[#00AA88]"
                  )}>
                    {item.label} <ChevronDown className="h-4 w-4" />
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                {item.subItems.map((subItem) => (
                  <DropdownMenuItem key={subItem.label} asChild>
                    <Link href={subItem.href} className="text-sm font-semibold hover:!bg-[#006666]/10">{subItem.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
             <Button variant="ghost" asChild className={cn(
                "text-sm font-semibold w-full justify-start lg:justify-center",
                 isMobile ? "text-gray-700 dark:text-gray-300" : "text-white hover:text-[#00AA88]"
            )}>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          )}
        </div>
      ))}
    </nav>
  );

  return (
    <>
      <header className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        isScrolled ? "bg-[#00AA88] shadow-md backdrop-blur-lg" : "bg-[#00AA88]"
      )}>
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/theme-2" className="flex items-center gap-2">
            <LogoImage />
          </Link>
          
          <div className="hidden lg:flex flex-1 items-center justify-end">
            <NavMenu />
          </div>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5 text-white" />
              <span className="sr-only">Cari</span>
            </Button>
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-white" />
                  <span className="sr-only">Buka menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm bg-background">
                 <SheetHeader>
                  <SheetTitle>
                    <Link href="/theme-2" onClick={() => setIsMobileMenuOpen(false)}>
                      <LogoImage />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8">
                  <NavMenu isMobile />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </>
  );
}


