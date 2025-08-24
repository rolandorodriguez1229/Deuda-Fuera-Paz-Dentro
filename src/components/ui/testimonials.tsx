import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const testimonials = [
  {
    name: "María González",
    role: "Madre de familia",
    image: "https://placehold.co/80x80.png",
    testimonial: "Gracias al sistema de Rolando, por fin entendí por dónde empezar. En 3 meses liberé $450 de flujo mensual y recuperé la paz.",
    result: "$450 liberados mensualmente"
  },
  {
    name: "Carlos Mendoza",
    role: "Ingeniero",
    image: "https://placehold.co/80x80.png",
    testimonial: "Llevaba años pagando solo los mínimos. Con este método, eliminé 2 tarjetas de crédito en 8 meses. ¡Increíble!",
    result: "2 tarjetas eliminadas"
  },
  {
    name: "Ana Rodríguez",
    role: "Emprendedora",
    image: "https://placehold.co/80x80.png",
    testimonial: "No solo salí de deudas, sino que ahora tengo un fondo de emergencia. El cambio de mentalidad fue clave.",
    result: "Fondo de emergencia creado"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            Lo Que Dicen Nuestros Estudiantes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Más de 500 personas ya han transformado su vida financiera con nuestro sistema probado.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-accent mb-4 opacity-50" />
                <p className="text-sm mb-4 italic">"{testimonial.testimonial}"</p>
                
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="bg-accent/10 rounded-lg p-3">
                  <p className="text-xs font-semibold text-accent">Resultado:</p>
                  <p className="text-sm font-bold">{testimonial.result}</p>
                </div>
                
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">
            Únete a los cientos de personas que ya están en camino a su libertad financiera
          </p>
          <div className="flex justify-center items-center gap-2 text-sm mb-8">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-accent rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-accent-foreground">
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span className="text-muted-foreground">+495 estudiantes más</span>
          </div>
          
          <div className="bg-accent/10 rounded-xl p-6 max-w-md mx-auto">
            <p className="font-semibold text-primary mb-3">
              Tú puedes ser el próximo caso de éxito
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
              <Link href="/producto">✨ Ver Detalles del Sistema</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 