import Link from 'next/link';
import { Twitter, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo />
            <p className="mt-2 text-muted-foreground text-sm">Transformando deudas en libertad.</p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
            </div>
          </div>
          <div>
            <h4 className="font-headline font-semibold">Navegación</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/producto" className="text-muted-foreground hover:text-primary">Curso</Link></li>
              <li><Link href="/sobre-mi" className="text-muted-foreground hover:text-primary">Sobre Mí</Link></li>
              <li><Link href="/contacto" className="text-muted-foreground hover:text-primary">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold">Recursos</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link href="/descarga-gratis" className="text-muted-foreground hover:text-primary">Herramienta Gratuita</Link></li>
              <li><Link href="/herramienta" className="text-muted-foreground hover:text-primary">Análisis Financiero</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Términos y Condiciones</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Política de Privacidad</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Deuda Fuera, Paz Dentro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
