
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, Sparkles, X, Bot, User, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { chat, ChatInput } from '@/ai/flows/chatbot-flow';

// Dummy data for search results
const searchResults = [
    { title: 'Visi & Misi', href: '/profil/visi-misi', category: 'Halaman Statis' },
    { title: 'Anggota Komisi', href: '/profil/anggota', category: 'Halaman Statis' },
    { title: 'KPPU Putus Perkara Kemitraan', href: '/publikasi/siaran-pers', category: 'Siaran Pers' },
    { title: 'Database Putusan KPPU', href: '/penindakan/perkara-persaingan', category: 'Putusan' },
];

type Message = {
    role: 'user' | 'bot';
    text: string;
};

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'bot', text: 'Halo! Saya asisten AI dari KPPU. Apa yang bisa saya bantu hari ini terkait persaingan usaha di Indonesia?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async () => {
        if (inputValue.trim() && !isLoading) {
            const userMessage = inputValue.trim();
            const newMessages: Message[] = [...messages, { role: 'user', text: userMessage }];
            setMessages(newMessages);
            setInputValue('');
            setIsLoading(true);

            // Format history for the AI flow
            const history = newMessages.slice(0, -1).map(msg => ({
                role: msg.role === 'bot' ? 'model' : 'user',
                content: [{ text: msg.text }]
            }));

            const chatInput: ChatInput = {
                history: history,
                message: userMessage,
            };
            
            try {
                const response = await chat(chatInput);
                setMessages(prev => [...prev, { role: 'bot', text: response }]);
            } catch (error) {
                console.error("Error calling chat flow:", error);
                setMessages(prev => [...prev, { role: 'bot', text: 'Maaf, terjadi kesalahan. Silakan coba lagi.' }]);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const filteredSearchResults = searchQuery
        ? searchResults.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
        : [];

    return (
        <>
            <motion.div
                initial={{ scale: 0, y: 100 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 150 }}
                className="fixed bottom-6 right-6 z-50"
            >
                <Button
                    onClick={() => setIsOpen(true)}
                    size="icon"
                    className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 shadow-2xl"
                >
                    <Sparkles className="w-8 h-8 text-primary-foreground" />
                </Button>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogContent
                            className="p-0 max-w-4xl h-[90vh] flex flex-col gap-0 border-0 shadow-2xl rounded-2xl"
                            as={motion.div}
                            initial={{ opacity: 0, scale: 0.95, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 50 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <DialogHeader className="p-6 border-b flex-row items-center justify-between">
                                <DialogTitle className="flex items-center gap-3 text-xl font-poppins">
                                    <Sparkles className="w-6 h-6 text-primary" />
                                    Asisten AI KPPU
                                </DialogTitle>
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant={isSearching ? "ghost" : "default"}
                                        onClick={() => setIsSearching(false)}
                                        className="rounded-full"
                                    >
                                        <Bot className="w-4 h-4 mr-2" /> Chat
                                    </Button>
                                    <Button
                                        variant={isSearching ? "default" : "ghost"}
                                        onClick={() => setIsSearching(true)}
                                        className="rounded-full"
                                    >
                                        <Search className="w-4 h-4 mr-2" /> Cari
                                    </Button>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="absolute right-6 top-6 rounded-full p-1 hover:bg-muted">
                                    <X className="w-5 h-5" />
                                </button>
                            </DialogHeader>

                            <div className="flex-1 overflow-hidden">
                                {isSearching ? (
                                    <div className="p-6 h-full flex flex-col">
                                        <div className="relative mb-6">
                                            <Input
                                                placeholder="Cari halaman, berita, atau putusan..."
                                                className="pl-10 h-12 text-base rounded-full"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                            />
                                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                        </div>
                                        <ScrollArea className="flex-1 pr-4">
                                            {searchQuery && filteredSearchResults.length > 0 ? (
                                                <ul className="space-y-4">
                                                    {filteredSearchResults.map((item, index) => (
                                                        <li key={index} className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                                                            <a href={item.href} className="block">
                                                                <p className="font-semibold text-primary">{item.title}</p>
                                                                <p className="text-sm text-muted-foreground">{item.category}</p>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <div className="text-center py-10">
                                                    <p className="text-muted-foreground">
                                                        {searchQuery ? 'Tidak ada hasil ditemukan.' : 'Mulai ketik untuk mencari di seluruh situs.'}
                                                    </p>
                                                </div>
                                            )}
                                        </ScrollArea>
                                    </div>
                                ) : (
                                    <>
                                        <ScrollArea className="h-[calc(100%-80px)]" ref={scrollAreaRef}>
                                            <div className="space-y-6 p-6 pr-8">
                                                {messages.map((msg, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}
                                                    >
                                                        {msg.role === 'bot' && <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0"><Bot className="w-5 h-5" /></div>}
                                                        <div className={`max-w-md rounded-2xl px-4 py-3 ${msg.role === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted rounded-bl-none'}`}>
                                                            <p className="text-sm leading-relaxed">{msg.text}</p>
                                                        </div>
                                                        {msg.role === 'user' && <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center flex-shrink-0"><User className="w-5 h-5" /></div>}
                                                    </motion.div>
                                                ))}
                                                {isLoading && (
                                                     <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="flex items-start gap-3"
                                                    >
                                                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0"><Bot className="w-5 h-5" /></div>
                                                        <div className="max-w-md rounded-2xl px-4 py-3 bg-muted rounded-bl-none flex items-center">
                                                           <Loader2 className="w-5 h-5 text-muted-foreground animate-spin" />
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </div>
                                        </ScrollArea>
                                        <div className="p-6 border-t">
                                            <div className="relative">
                                                <Input
                                                    placeholder="Tanyakan apa saja..."
                                                    className="pr-12 h-12 text-base rounded-full"
                                                    value={inputValue}
                                                    onChange={(e) => setInputValue(e.target.value)}
                                                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                                    disabled={isLoading}
                                                />
                                                <Button
                                                    size="icon"
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full w-9 h-9"
                                                    onClick={handleSendMessage}
                                                    disabled={isLoading}
                                                >
                                                    <Send className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </DialogContent>
                    </Dialog>
                )}
            </AnimatePresence>
        </>
    );
}
