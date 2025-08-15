
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from './logo';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';

const navItems = [
  {
    label: 'PROFIL',
    href: '#',
    subItems: [
      { label: 'VISI DAN MISI', href: '/visi-misi' },
      { label: 'ANGGOTA', href: '/anggota' },
      { label: 'TUGAS & WEWENANG', href: '#' },
      { label: 'ORGANISASI', href: '#' },
      { label: 'PEJABAT SEKRETARIAT', href: '#' },
      { label: 'KINERJA KEUANGAN', href: '#' },
      { label: 'MITRA KERJA', href: '/mitra-kerja' },
      { label: 'PPID', href: '/ppid' },
      { label: 'LOGO DAN MASKOT', href: '/logo-dan-maskot' },
    ],
  },
  {
    label: 'REGULASI',
    href: '/regulasi',
    subItems: [
        { label: 'UNDANG-UNDANG', href: '/regulasi' },
        { label: 'PERATURAN PEMERINTAH', href: '/regulasi' },
        { label: 'PERATURAN KOMISI', href: '/peraturan-komisi' },
        { label: 'PERATURAN KETUA KPPU', href: '/peraturan-ketua-kppu' },
        { label: 'PEDOMAN', href: '/pedoman' },
        { label: 'PUTUSAN', href: '/putusan' },
    ]
  },
  {
    label: 'PENGAWASAN',
    href: '#',
    subItems: [
        { label: 'KAJIAN KEBIJAKAN', href: '/kajian-kebijakan' },
        { label: 'ADVOKASI', href: '#' },
        { label: 'PENELITIAN', href: '#' },
        { label: 'INDEKS PERSAINGAN USAHA', href: '#' },
        { label: 'KPPU MENDENGAR', href: '#' },
    ]
  },
    {
    label: 'PENINDAKAN',
    href: '#',
    subItems: [
        { label: 'PENANGANAN PERKARA', href: '#' },
        { label: 'NOTIFIKASI MERGER', href: '#' },
        { label: 'PELAPORAN', href: '#' },
    ]
  },
  {
    label: 'PUBLIKASI',
    href: '#',
    subItems: [
        { label: 'BERITA', href: '#' },
        { label: 'SIARAN PERS', href: '/siaran-pers' },
        { label: 'MAJALAH', href: '#' },
        { label: 'JURNAL', href: '#' },
    ]
  },
  {
    label: 'KANWIL',
    href: '#',
    subItems: [
        { label: 'KANWIL I', href: '#' },
        { label: 'KANWIL II', href: '#' },
        { label: 'KANWIL III', href: '#' },
        { label: 'KANWIL IV', href: '#' },
        { label: 'KANWIL V', href: '#' },
        { label: 'KANWIL VI', href: '#' },
    ]
  },
  { label: 'E-PROCUREMENT', href: '#' },
  { label: 'KONTAK', href: '#' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                     isMobile ? "text-gray-700 dark:text-gray-300" : "text-primary-dark dark:text-gray-300 hover:text-primary dark:hover:text-white"
                  )}>
                    {item.label} <ChevronDown className="h-4 w-4" />
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-primary-dark text-primary-dark dark:text-white border-gray-200 dark:border-gray-700">
                {item.subItems.map((subItem) => (
                  <DropdownMenuItem key={subItem.label} asChild>
                    <Link href={subItem.href} className="text-sm font-semibold hover:!bg-primary/10 dark:hover:!bg-white/10">{subItem.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
             <Button variant="ghost" asChild className={cn(
                "text-sm font-semibold w-full justify-start lg:justify-center",
                 isMobile ? "text-gray-700 dark:text-gray-300" : "text-primary-dark dark:text-gray-300 hover:text-primary dark:hover:text-white"
            )}>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          )}
        </div>
      ))}
    </nav>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-colors duration-300",
      isScrolled ? "bg-white/80 dark:bg-primary-dark/80 shadow-md backdrop-blur-lg" : "bg-white dark:bg-primary-dark"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        
        <div className="hidden lg:flex flex-1 items-center justify-end">
          <NavMenu />
        </div>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary-dark dark:text-white" />
                <span className="sr-only">Buka menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-white dark:bg-gray-800">
               <SheetHeader>
                <SheetTitle>
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <Logo />
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
  );
}
