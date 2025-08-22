import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { Inter, Poppins } from 'next/font/google'
import { Chatbot } from '@/components/chatbot';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'KPPU | Komisi Pengawas Persaingan Usaha',
  description: 'Website resmi Komisi Pengawas Persaingan Usaha Republik Indonesia. Mewujudkan persaingan usaha yang sehat untuk pertumbuhan ekonomi Indonesia.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Chatbot />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
