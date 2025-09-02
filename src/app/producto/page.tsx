import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, ShieldCheck, Star } from 'lucide-react';
import { testimonials } from '@/lib/constants';

export default function SalesPage() {
  const features = [
    'Diagnóstico 360° (IPD) en 15 minutos',
    'Método Oxígeno para liberar flujo de efectivo rápido',
    'GPS Anti-Deuda: te dice qué estrategia usar y cuándo',
    'Plan paso a paso, sin tecnicismos',
    'Plantillas y recursos incluidos',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground text-center py-20 px-4">
        <p className="text-accent font-headline">EL LIBRO</p>
        <h1 className="text-4xl md:text-6xl font-headline font-bold mt-2 mb-4">Deuda Fuera, Paz Dentro: Tu Sistema Paso a Paso</h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          El método práctico para liberarte de deudas sin sacrificar tu tranquilidad. Diagnostica, elige la estrategia correcta y actúa con claridad.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
          <a href="#precio">Quiero mi paz financiera</a>
        </Button>
        <p className="text-sm mt-3">Pago seguro con Stripe · Acceso inmediato · Garantía 30 días</p>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-headline font-bold text-destructive mb-4">El Ciclo de la Deuda es Agotador.</h2>
            <p className="text-lg text-muted-foreground">Pagas y pagas, pero el balance apenas baja. La ansiedad te despierta a las 3 a.m. Sientes que tus sueños están en pausa, rehenes de tus deudas. ¿Te suena familiar? No estás solo, y más importante, <span className="font-bold text-primary">hay una salida</span>.</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Curso en un portatil"
              data-ai-hint="online course mockup"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">Te Presento tu Plan de Escape</h2>
            <p className="mb-6">El libro "Deuda Fuera, Paz Dentro" te guía con un sistema paso a paso para tomar el control total de tu dinero. Sin tecnicismos, con claridad y resultados tangibles.</p>
            <h3 className="font-headline font-semibold mb-2">¿Qué incluye?</h3>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="#precio">Quiero mi paz financiera</a>
              </Button>
              <p className="text-xs text-muted-foreground mt-2">Pago seguro con Stripe · Acceso inmediato</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-headline font-bold text-center mb-12">Lo que dicen nuestros alumnos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-background p-6 rounded-lg text-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  data-ai-hint={testimonial.imageHint}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />
                <p className="italic">"{testimonial.text}"</p>
                <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="text-accent fill-accent h-5 w-5" />)}
                </div>
                <p className="font-bold mt-4">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
       {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-headline font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-0">
              <AccordionTrigger>¿Cómo recibo el libro después de comprar?</AccordionTrigger>
              <AccordionContent>Al completar el pago seguro con Stripe, tendrás acceso inmediato a tu área privada con usuario y contraseña para descargar el libro y recursos.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Necesito conocimientos previos de finanzas?</AccordionTrigger>
              <AccordionContent>Absolutamente no. El curso está diseñado para principiantes, explicando cada concepto desde cero de una manera simple y fácil de entender.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>¿Cuánto tiempo necesito dedicarle?</AccordionTrigger>
              <AccordionContent>Puedes ir a tu propio ritmo. Recomendamos dedicar de 2 a 3 horas por semana para ver un progreso constante. ¡El acceso es de por vida!</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>¿Y si mi situación es muy complicada?</AccordionTrigger>
              <AccordionContent>El sistema es adaptable a cualquier situación. Te enseñamos los principios para que puedas crear un plan a la medida de tus circunstancias únicas.</AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger>¿Qué pasa si no me funciona?</AccordionTrigger>
              <AccordionContent>Estamos tan seguros del valor del curso que ofrecemos una garantía de devolución del 100% de tu dinero durante los primeros 30 días. Sin preguntas.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Guarantee & CTA Section */}
      <section id="precio" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
            <ShieldCheck className="h-16 w-16 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-headline font-bold mb-4">Tu Inversión está 100% Segura</h2>
            <p className="mb-6">Prueba el curso completo durante 30 días. Si no sientes que te ha dado la claridad y las herramientas para transformar tu vida financiera, te devolvemos cada centavo. Sin resentimientos.</p>
            <div className="bg-white text-foreground p-8 rounded-lg shadow-xl inline-block">
                <h3 className="text-2xl font-headline font-bold text-primary">Libro + Recursos</h3>
                <p className="text-5xl font-bold my-4 text-primary">$19 <span className="text-lg font-normal text-muted-foreground">pago único</span></p>
                <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
                    <a href="#">Quiero mi paz financiera</a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">Pago seguro con Stripe · Acceso inmediato · Garantía 30 días</p>
            </div>
        </div>
      </section>
    </div>
  );
}
