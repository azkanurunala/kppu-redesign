"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogoImage } from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown, Search, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';

import { SearchDialog } from '@/components/search-dialog';

const navItems = [
  {
    label: 'PROFIL',
    href: '/theme-5/profil',
    subItems: [
      { label: 'VISI DAN MISI', href: '/theme-5/profil/visi-misi' },
      { label: 'ANGGOTA', href: '/theme-5/profil/anggota' },
      { label: 'TUGAS & WEWENANG', href: '/theme-5/profil/tugas-wewenang' },
      { label: 'ORGANISASI', href: '/theme-5/profil/organisasi' },
      { label: 'PEJABAT SEKRETARIAT', href: '/theme-5/profil/pejabat-sekretariat' },
      { label: 'KINERJA KEUANGAN', href: '/theme-5/profil/kinerja-keuangan' },
      { label: 'MITRA KERJA', href: '/theme-5/profil/mitra-kerja' },
      { label: 'PPID', href: '/theme-5/ppid' },
      { label: 'LOGO DAN MASKOT', href: '/theme-5/profil/logo-dan-maskot' },
    ],
  },
  {
    label: 'REGULASI',
    href: '/theme-5/regulasi',
    subItems: [
        { label: 'UNDANG-UNDANG & PP', href: '/theme-5/regulasi/peraturan-perundang-undangan' },
        { label: 'PERATURAN KOMISI', href: '/theme-5/regulasi/peraturan-komisi' },
        { label: 'PERATURAN KETUA KPPU', href: '/theme-5/regulasi/peraturan-ketua-kppu' },
        { label: 'PEDOMAN', href: '/theme-5/regulasi/pedoman' },
        { label: 'PUTUSAN', href: '/theme-5/penindakan/perkara-persaingan' },
    ]
  },
  {
    label: 'PENGAWASAN',
    href: '#',
    subItems: [
        { label: 'KAJIAN KEBIJAKAN', href: '/theme-5/pengawasan/kajian-kebijakan' },
        { label: 'ADVOKASI', href: '/theme-5/pengawasan/advokasi' },
        { label: 'PENELITIAN', href: '/theme-5/pengawasan/penelitian' },
        { label: 'INDEKS PERSAINGAN USAHA', href: '/theme-5/indeks-persaingan-usaha' },
        { label: 'KPPU MENDENGAR', href: '/theme-5/kppu-mendengar' },
    ]
  },
    {
    label: 'PENINDAKAN',
    href: '#',
    subItems: [
        { label: 'PERKARA PERSAINGAN', href: '/theme-5/penindakan/perkara-persaingan' },
        { label: 'PENILAIAN MERGER', href: '/theme-5/penindakan/penilaian-merger' },
        { label: 'PENGAWASAN KEMITRAAN', href: '/theme-5/penindakan/pengawasan-kemitraan' },
    ]
  },
  {
    label: 'PUBLIKASI',
    href: '/theme-5/publikasi',
    subItems: [
        { label: 'AKTIVITAS', href: '/theme-5/publikasi/aktivitas' },
        { label: 'SIARAN PERS', href: '/theme-5/publikasi/siaran-pers' },
        { label: 'LAPORAN TAHUNAN', href: '/theme-5/publikasi/laporan-tahunan' },
        { label: 'JURNAL', href: '#' },
    ]
  },
  {
    label: 'KANWIL',
    href: '/theme-5/kanwil',
  },
  { label: 'E-PROCUREMENT', href: '/theme-5/e-procurement' },
  { label: 'KONTAK', href: '/theme-5/contact' },
];

// Data tema yang tersedia
const themes = [
  { label: 'TEMA UTAMA', value: '', color: '#0D1D36' },
  { label: 'TEMA 2', value: 'theme-2', color: '#006666' },
  { label: 'TEMA 3', value: 'theme-3', color: '#421BBC' },
  { label: 'TEMA 4', value: 'theme-4', color: '#dc2626' },
  { label: 'TEMA 5', value: 'theme-5', color: '#FF6B35' },
];

export function Theme5Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleThemeSwitch = (themeValue: string) => {
    if (themeValue === '') {
      // Kembali ke tema utama
      window.location.href = '/';
    } else {
      // Switch ke tema tertentu
      window.location.href = `/${themeValue}`;
    }
  };

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
        isScrolled ? "bg-[#662e15] shadow-md backdrop-blur-lg" : "bg-[#662e15]"
      )}>
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/theme-5" className="flex items-center gap-2">
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
            
            {/* Theme Switch Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Palette className="h-5 w-5 text-white" />
                  <span className="sr-only">Switch Tema</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border min-w-[200px]">
                <div className="p-2">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Pilih Tema</h4>
                  {themes.map((theme) => (
                    <DropdownMenuItem 
                      key={theme.value} 
                      onClick={() => handleThemeSwitch(theme.value)}
                      className="flex items-center gap-3 cursor-pointer hover:!bg-primary/10"
                    >
                      <div 
                        className="w-4 h-4 rounded-full border-2 border-border"
                        style={{ backgroundColor: theme.color }}
                      />
                      <span className="text-sm font-medium">{theme.label}</span>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            

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
                    <Link href="/theme-5" onClick={() => setIsMobileMenuOpen(false)}>
                      <LogoImage />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8">
                  <NavMenu isMobile />
                  
                  {/* Theme Switch untuk Mobile */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="text-sm font-semibold mb-3 text-foreground">Pilih Tema</h4>
                    <div className="space-y-2">
                      {themes.map((theme) => (
                        <Button
                          key={theme.value}
                          variant="ghost"
                          onClick={() => {
                            handleThemeSwitch(theme.value);
                            setIsMobileMenuOpen(false);
                          }}
                          className="w-full justify-start gap-3 text-gray-700 dark:text-gray-300"
                        >
                          <div 
                            className="w-4 h-4 rounded-full border-2 border-border"
                            style={{ backgroundColor: theme.color }}
                          />
                          <span className="text-sm font-medium">{theme.label}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
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
