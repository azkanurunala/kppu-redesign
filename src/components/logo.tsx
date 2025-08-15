import { Scale } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {}

export function Logo({}: LogoProps) {
  return (
    <div className="flex items-center gap-2" aria-label="KPPU Logo">
      <div className="rounded-md bg-primary p-2 text-primary-foreground">
        <Scale className="h-6 w-6" />
      </div>
      <span className="font-headline text-2xl font-bold tracking-tight text-foreground">
        KPPU
      </span>
    </div>
  );
}
