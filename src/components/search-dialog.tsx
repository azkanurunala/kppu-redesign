
'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

// Dummy data for search results
const searchResults = [
    { title: 'Visi & Misi', href: '/profil/visi-misi', category: 'Halaman Statis' },
    { title: 'Anggota Komisi', href: '/profil/anggota', category: 'Halaman Statis' },
    { title: 'Struktur Organisasi', href: '/profil/organisasi', category: 'Halaman Statis' },
    { title: 'KPPU Putus Perkara Kemitraan', href: '/publikasi/siaran-pers', category: 'Siaran Pers' },
    { title: 'Database Putusan KPPU', href: '/penindakan/perkara-persaingan', category: 'Putusan' },
    { title: 'Denda Rp1 Miliar bagi Pelaku Usaha Terlambat Notifikasi Merger', href: '/publikasi/siaran-pers', category: 'Siaran Pers' },
];

interface SearchDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredSearchResults = searchQuery
        ? searchResults.filter(item => 
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : [];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="bg-background/80 backdrop-blur-lg p-0 max-w-3xl gap-0 shadow-2xl border-0">
                <div className="flex items-center gap-4 p-6 border-b">
                    <Search className="w-6 h-6 text-muted-foreground" />
                    <input
                        placeholder="Cari di seluruh situs KPPU..."
                        className="w-full bg-transparent outline-none border-none text-lg placeholder:text-muted-foreground"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                    />
                </div>
                <div className="p-6 h-[400px] overflow-y-auto">
                    {searchQuery && filteredSearchResults.length > 0 ? (
                        <ul className="space-y-4">
                            {filteredSearchResults.map((item, index) => (
                                <motion.li 
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <a href={item.href} className="block p-4 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors group">
                                        <p className="font-semibold text-primary group-hover:underline">{item.title}</p>
                                        <p className="text-sm text-muted-foreground">{item.category}</p>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-center py-10 h-full flex flex-col justify-center">
                            <p className="text-muted-foreground">
                                {searchQuery ? 'Tidak ada hasil ditemukan.' : 'Mulai ketik untuk mencari halaman, putusan, atau berita.'}
                            </p>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}

    