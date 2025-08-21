import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      {/* Menggunakan HTML img standar */}
      <img 
        src="/images/logo.png" 
        alt="KPPU Logo" 
        className="h-6 w-auto object-contain" 
      />
    </Link>
  );
}
