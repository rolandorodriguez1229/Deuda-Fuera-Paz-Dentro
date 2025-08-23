import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './components/ContactForm';

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Ponte en Contacto</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes preguntas sobre el curso, necesitas ayuda o simplemente quieres saludar? Estamos aquí para ayudarte.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-headline font-bold text-primary mb-6">Envíanos un Mensaje</h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-headline font-bold text-primary">Información de Contacto</h2>
            <div className="flex items-start gap-4">
              <div className="bg-accent text-accent-foreground p-3 rounded-full">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">Envíanos tus preguntas a cualquier hora.</p>
                <a href="mailto:hola@deudafuera.com" className="text-primary hover:underline">hola@deudafuera.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-accent text-accent-foreground p-3 rounded-full">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Teléfono</h3>
                <p className="text-muted-foreground">Disponible de Lunes a Viernes, 9am - 5pm.</p>
                <a href="tel:+123456789" className="text-primary hover:underline">+1 (234) 567-89</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-accent text-accent-foreground p-3 rounded-full">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Oficina</h3>
                <p className="text-muted-foreground">123 Calle Libertad, Ciudad Financiera</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
