import Image from 'next/image';
import Link from 'next/link';

// Logo component tanpa Link (untuk digunakan dalam Link lain)
export function LogoImage() {
  return (
    <img 
      src="/images/logo.png" 
      alt="KPPU Logo" 
      className="h-6 w-auto object-contain" 
    />
  );
}

// Logo component dengan Link (untuk standalone usage)
export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <LogoImage />
    </Link>
  );
}
