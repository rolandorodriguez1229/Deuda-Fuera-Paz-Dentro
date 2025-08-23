import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, Download } from 'lucide-react';
import Image from 'next/image';

export default function LeadCapturePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Image and Benefits */}
        <div className="space-y-6">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Herramienta de Diagnóstico Financiero"
            data-ai-hint="financial spreadsheet mockup"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
           <h2 className="text-2xl font-headline font-bold text-primary">
            Tu Primer Paso Hacia la Claridad Financiera
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
              <span>Organiza todas tus deudas en un solo lugar y entiende tu situación real.</span>
            </li>
             <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
              <span>Crea un presupuesto visual que te muestra exactamente a dónde va tu dinero.</span>
            </li>
             <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
              <span>Identifica oportunidades de ahorro y acelera el pago de tus deudas.</span>
            </li>
          </ul>
        </div>

        {/* Right Column: Form */}
        <div className="bg-card p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl font-headline font-bold text-center mb-2">
            Descarga Tu Herramienta Gratuita
          </h1>
          <p className="text-center text-muted-foreground mb-6">
            Recibe acceso inmediato a la plantilla de Excel que te ayudará a tomar el control.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Nombre</label>
              <Input id="name" type="text" placeholder="Tu nombre" required />
            </div>
            <div>
               <label htmlFor="email" className="sr-only">Email</label>
              <Input id="email" type="email" placeholder="Tu correo electrónico" required />
            </div>
            <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              <Download className="mr-2 h-5 w-5" />
              Descargar Ahora
            </Button>
          </form>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Respetamos tu privacidad. No compartiremos tu información.
          </p>
        </div>
      </div>
    </div>
  );
}
