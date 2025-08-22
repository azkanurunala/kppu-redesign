import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { Chatbot } from '@/components/chatbot';
import { Theme2Header } from './components/theme2-header';
import { Theme2Footer } from './components/theme2-footer';

const onest = Onest({ 
  subsets: ['latin'], 
  variable: '--font-onest',
  weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'KPPU - Komisi Pengawas Persaingan Usaha (Theme 2)',
  description: 'Website resmi Komisi Pengawas Persaingan Usaha Republik Indonesia',
};

export default function Theme2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="theme-2" suppressHydrationWarning>
      <body className={`${onest.variable} font-onest antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Theme2Header />
          <main className="flex-1">
            {children}
          </main>
          <Theme2Footer />
          <Chatbot />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
