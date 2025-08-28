import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { Chatbot } from '@/components/chatbot';
import { Theme5Header } from './components/theme5-header';
import { Theme5Footer } from './components/theme5-footer';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'KPPU - Komisi Pengawas Persaingan Usaha (Theme 5)',
  description: 'Website resmi Komisi Pengawas Persaingan Usaha Republik Indonesia',
};

export default function Theme5Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="theme-5" suppressHydrationWarning>
      <body className={`${inter.variable} font-inter antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Theme5Header />
          <main className="flex-1">
            {children}
          </main>
          <Theme5Footer />
          <Chatbot />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
