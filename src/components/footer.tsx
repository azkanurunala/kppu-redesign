import { Logo } from './logo';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Komisi Pengawas Persaingan Usaha Republik Indonesia
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-muted-foreground transition-colors hover:text-foreground">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Facebook" className="text-muted-foreground transition-colors hover:text-foreground">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground transition-colors hover:text-foreground">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" aria-label="YouTube" className="text-muted-foreground transition-colors hover:text-foreground">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:col-span-3">
            <div>
              <h3 className="font-semibold tracking-wider text-foreground">Navigasi</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Tentang KPPU</a></li>
                <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Regulasi</a></li>
                <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Putusan Perkara</a></li>
                <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Publikasi</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider text-foreground">Hubungi Kami</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Jl. Ir. H. Juanda No. 36</li>
                <li>Jakarta Pusat 10120</li>
                <li><a href="mailto:humas@kppu.go.id" className="hover:text-foreground">humas@kppu.go.id</a></li>
                <li><a href="tel:0213507015" className="hover:text-foreground">(021) 3507015</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider text-foreground">Langganan Nawala</h3>
              <p className="mt-4 text-sm text-muted-foreground">Dapatkan informasi terbaru langsung ke email Anda.</p>
              <form className="mt-4 flex">
                <Input type="email" placeholder="Email Anda" className="flex-1 rounded-r-none bg-background text-foreground placeholder:text-muted-foreground" />
                <Button type="submit" variant="secondary" className="rounded-l-none bg-accent text-accent-foreground hover:bg-accent/90">
                  Daftar
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Komisi Pengawas Persaingan Usaha. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}