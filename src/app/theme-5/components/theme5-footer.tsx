import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Theme5Footer() {
  return (
    <footer className="bg-[#662e15] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo dan Deskripsi */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="KPPU Logo"
                width={80}
                height={27}
                className="h-7 w-auto"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Komisi Pengawas Persaingan Usaha Republik Indonesia
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/theme-5/regulasi" className="text-white/80 hover:text-white transition-colors">
                  Regulasi
                </Link>
              </li>
              <li>
                <Link href="/theme-5/putusan" className="text-white/80 hover:text-white transition-colors">
                  Putusan
                </Link>
              </li>
              <li>
                <Link href="/theme-5/jadwal-sidang" className="text-white/80 hover:text-white transition-colors">
                  Jadwal Sidang
                </Link>
              </li>
              <li>
                <Link href="/theme-5/siaran-pers" className="text-white/80 hover:text-white transition-colors">
                  Siaran Pers
                </Link>
              </li>
              <li>
                <Link href="/theme-5/tanya-jawab" className="text-white/80 hover:text-white transition-colors">
                  Tanya Jawab
                </Link>
              </li>
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informasi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/theme-5/profil" className="text-white/80 hover:text-white transition-colors">
                  Profil
                </Link>
              </li>
              <li>
                <Link href="/theme-5/pengawasan" className="text-white/80 hover:text-white transition-colors">
                  Pengawasan
                </Link>
              </li>
              <li>
                <Link href="/theme-5/penindakan" className="text-white/80 hover:text-white transition-colors">
                  Penindakan
                </Link>
              </li>
              <li>
                <Link href="/theme-5/publikasi" className="text-white/80 hover:text-white transition-colors">
                  Publikasi
                </Link>
              </li>
              <li>
                <Link href="/theme-5/ppid" className="text-white/80 hover:text-white transition-colors">
                  PPID
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-white/60 mt-0.5 flex-shrink-0" />
                <p className="text-white/80">
                  Jl. Ir. H. Juanda No.36, Jakarta Pusat 10120
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white/60 flex-shrink-0" />
                <p className="text-white/80">(021) 385-5511</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white/60 flex-shrink-0" />
                <p className="text-white/80">info@kppu.go.id</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Komisi Pengawas Persaingan Usaha. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-white/60 hover:text-white transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors">
                Syarat & Ketentuan
              </Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors">
                Peta Situs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
