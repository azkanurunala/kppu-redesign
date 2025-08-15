import { Scale } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
    isScrolled?: boolean;
}

export function Logo({ isScrolled }: LogoProps) {
  const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');

  return (
    <div className="flex items-center gap-2" aria-label="KPPU Logo">
      <div className={cn(
          "rounded-md p-2 transition-colors", 
          isScrolled || isDark ? "bg-primary text-primary-foreground" : "bg-primary-foreground text-primary"
        )}>
        <Scale className="h-6 w-6" />
      </div>
      <span className={cn(
          "font-headline text-2xl font-bold tracking-tight", 
          isScrolled ? "text-primary" : "text-primary-foreground",
          isDark && !isScrolled ? "text-primary-foreground" : ""
        )}>
        KPPU
      </span>
    </div>
  );
}
