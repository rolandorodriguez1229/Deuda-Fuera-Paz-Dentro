import Link from 'next/link';
import { Banknote } from 'lucide-react';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Banknote className="h-8 w-8 text-primary" />
      <span className="font-headline text-xl font-bold">Deuda Fuera, Paz Dentro</span>
    </Link>
  );
}
