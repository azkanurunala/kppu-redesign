
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogoImage } from './logo';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Menu, ChevronDown, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';
import { SearchDialog } from './search-dialog';

const navItems = [
  {
    label: 'PROFIL',
    href: '/profil',
    subItems: [
      { label: 'VISI DAN MISI', href: '/profil/visi-misi' },
      { label: 'ANGGOTA', href: '/profil/anggota' },
      { label: 'TUGAS & WEWENANG', href: '/profil/tugas-wewenang' },
      { label: 'ORGANISASI', href: '/profil/organisasi' },
      { label: 'PEJABAT SEKRETARIAT', href: '/profil/pejabat-sekretariat' },
      { label: 'KINERJA KEUANGAN', href: '/profil/kinerja-keuangan' },
      { label: 'MITRA KERJA', href: '/profil/mitra-kerja' },
      { label: 'PPID', href: '/ppid' },
      { label: 'LOGO DAN MASKOT', href: '/profil/logo-maskot' },
    ],
  },
  {
    label: 'REGULASI',
    href: '/regulasi',
    subItems: [
        { label: 'UNDANG-UNDANG & PP', href: '/regulasi/peraturan-perundang-undangan' },
        { label: 'PERATURAN KOMISI', href: '/regulasi/peraturan-komisi' },
        { label: 'PERATURAN KETUA KPPU', href: '/regulasi/peraturan-ketua-kppu' },
        { label: 'PEDOMAN', href: '/regulasi/pedoman' },
        { label: 'PUTUSAN', href: '/penindakan/perkara-persaingan' },
    ]
  },
  {
    label: 'PENGAWASAN',
    href: '#',
    subItems: [
        { label: 'KAJIAN KEBIJAKAN', href: '/pengawasan/kajian-kebijakan' },
        { label: 'ADVOKASI', href: '/pengawasan/advokasi' },
        { label: 'PENELITIAN', href: '/pengawasan/penelitian' },
        { label: 'INDEKS PERSAINGAN USAHA', href: '/indeks-persaingan-usaha' },
        { label: 'KPPU MENDENGAR', href: '/kppu-mendengar' },
    ]
  },
    {
    label: 'PENINDAKAN',
    href: '#',
    subItems: [
        { label: 'PERKARA PERSAINGAN', href: '/penindakan/perkara-persaingan' },
        { label: 'PENILAIAN MERGER', href: '/penindakan/penilaian-merger' },
        { label: 'PENGAWASAN KEMITRAAN', href: '/penindakan/pengawasan-kemitraan' },
    ]
  },
  {
    label: 'PUBLIKASI',
    href: '/publikasi',
    subItems: [
        { label: 'AKTIVITAS', href: '/publikasi/aktivitas' },
        { label: 'SIARAN PERS', href: '/publikasi/siaran-pers' },
        { label: 'LAPORAN TAHUNAN', href: '/publikasi/laporan-tahunan' },
        { label: 'JURNAL', href: '#' },
    ]
  },
  {
    label: 'KANWIL',
    href: '/kanwil',
  },
  { label: 'E-PROCUREMENT', href: '/e-procurement' },
  { label: 'KONTAK', href: '/contact' },
];

export function Header() {
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
                     isMobile ? "text-gray-700 dark:text-gray-300" : "text-white hover:text-[#B8860B]"
                  )}>
                    {item.label} <ChevronDown className="h-4 w-4" />
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                {item.subItems.map((subItem) => (
                  <DropdownMenuItem key={subItem.label} asChild>
                    <Link href={subItem.href} className="text-sm font-semibold hover:!bg-primary/10">{subItem.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
             <Button variant="ghost" asChild className={cn(
                "text-sm font-semibold w-full justify-start lg:justify-center",
                 isMobile ? "text-gray-700 dark:text-gray-300" : "text-white hover:text-gold"
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
        isScrolled ? "bg-[#0D1D36] shadow-md backdrop-blur-lg" : "bg-[#0D1D36]"
      )}>
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
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
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
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
