import { Scale } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="KPPU Logo">
      <div className="rounded-md bg-primary p-2">
        <Scale className="h-6 w-6 text-primary-foreground" />
      </div>
      <span className="font-headline text-2xl font-bold tracking-tight text-primary">
        KPPU
      </span>
    </div>
  );
}
