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
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent
} from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Menu, ChevronDown, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  {
    label: 'Tentang KPPU',
    href: '#',
    subItems: [
      { label: 'Visi & Misi', href: '#' },
      { label: 'Struktur Organisasi', href: '#' },
      { label: 'Sejarah', href: '#' },
    ],
  },
  {
    label: 'Regulasi',
    href: '#',
    subItems: [
      { label: 'Undang-Undang', href: '#' },
      { label: 'Peraturan Pemerintah', href: '#' },
      { label: 'Peraturan Komisi', href: '#' },
    ],
  },
  {
    label: 'Penegakan Hukum',
    href: '#',
    subItems: [
      { label: 'Putusan Perkara', href: '#' },
      { label: 'Notifikasi Merger', href: '#' },
      { label: 'Laporan Dugaan', href: '#' },
    ],
  },
  { label: 'Publikasi', href: '#' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavMenu = ({ isMobile = false }) => (
    <nav className={cn("flex items-center", isMobile ? "flex-col space-y-4" : "space-x-2")}>
      {navItems.map((item) => (
        item.subItems ? (
          <DropdownMenu key={item.label}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 text-base hover:bg-primary/10">
                {item.label} <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {item.subItems.map((subItem) => (
                <DropdownMenuItem key={subItem.label} asChild>
                  <Link href={subItem.href}>{subItem.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button key={item.label} variant="ghost" asChild className="text-base hover:bg-primary/10">
            <Link href={item.href}>{item.label}</Link>
          </Button>
        )
      ))}
    </nav>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-white/80 shadow-md backdrop-blur-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <NavMenu />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Search className="h-6 w-6" />
          </Button>
          <Button className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90">Hubungi Kami</Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Buka menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="p-4 pt-8">
                <NavMenu isMobile />
                <Button className="w-full mt-6">Hubungi Kami</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
