import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  isFooter?: boolean;
}

export function Logo({ isFooter = false }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <Image src="https://placehold.co/40x50.png" alt="KPPU Logo" width={40} height={50} data-ai-hint="logo crest" />
      <div>
        <span className={cn(
          "block font-bold leading-tight tracking-tighter font-poppins",
          isFooter ? "text-white text-2xl" : "text-primary-dark dark:text-white text-xl"
        )}>
          KPPU
        </span>
        <span className={cn(
          "block text-xs font-semibold leading-tight tracking-wide",
           isFooter ? "text-gray-300" : "text-gray-500 dark:text-gray-400"
        )}>
          Komisi Pengawas<br/>Persaingan Usaha
        </span>
      </div>
    </div>
  );
}
