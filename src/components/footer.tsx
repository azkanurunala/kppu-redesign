import { Logo } from './logo';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-primary-foreground/70">
              Komisi Pengawas Persaingan Usaha Republik Indonesia
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-primary-foreground/70 transition-colors hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Facebook" className="text-primary-foreground/70 transition-colors hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Instagram" className="text-primary-foreground/70 transition-colors hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" aria-label="YouTube" className="text-primary-foreground/70 transition-colors hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:col-span-3">
            <div>
              <h3 className="font-semibold tracking-wider text-white">Navigasi</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="text-primary-foreground/70 transition-colors hover:text-white">Tentang KPPU</a></li>
                <li><a href="#" className="text-primary-foreground/70 transition-colors hover:text-white">Regulasi</a></li>
                <li><a href="#" className="text-primary-foreground/70 transition-colors hover:text-white">Putusan Perkara</a></li>
                <li><a href="#" className="text-primary-foreground/70 transition-colors hover:text-white">Publikasi</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider text-white">Hubungi Kami</h3>
              <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
                <li>Jl. Ir. H. Juanda No. 36</li>
                <li>Jakarta Pusat 10120</li>
                <li><a href="mailto:humas@kppu.go.id" className="hover:text-white">humas@kppu.go.id</a></li>
                <li><a href="tel:0213507015" className="hover:text-white">(021) 3507015</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider text-white">Langganan Nawala</h3>
              <p className="mt-4 text-sm text-primary-foreground/70">Dapatkan informasi terbaru langsung ke email Anda.</p>
              <form className="mt-4 flex">
                <Input type="email" placeholder="Email Anda" className="flex-1 rounded-r-none bg-primary-foreground/10 text-white placeholder:text-primary-foreground/50" />
                <Button type="submit" variant="secondary" className="rounded-l-none bg-accent text-accent-foreground hover:bg-accent/90">
                  Daftar
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Komisi Pengawas Persaingan Usaha. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
