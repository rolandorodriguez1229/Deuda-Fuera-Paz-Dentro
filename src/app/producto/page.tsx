import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, ShieldCheck, Star, Clock, Compass, ListChecks } from 'lucide-react';
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
        <h1 className="text-4xl md:text-6xl font-headline font-bold mt-2 mb-4">Libérate de tus deudas sin fórmulas complicadas</h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Descubre el sistema real que me sacó de <span className="font-bold">$90,000</span> en deudas y puede salvarte a ti.
        </p>
        <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto opacity-90">
          No necesitas ganar más dinero. Solo necesitas un plan que funcione con tu realidad.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
            <a href="#precio">Quiero mi plan anti-deuda ahora</a>
          </Button>
          <p className="text-sm">Pago seguro con Stripe · Acceso inmediato · Garantía 30 días</p>
        </div>
      </section>

      {/* Storytelling breve del autor */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-lg md:text-xl leading-relaxed">
            Durante años despertaba con ansiedad, ahogado en <strong>$90,000</strong> de deudas entre tarjetas, autos y préstamos. Pagaba casi <strong>$4,000</strong> al mes y apenas bajaba el saldo. Hasta que creé un sistema que liberó mi flujo y me devolvió la paz. Hoy lo comparto contigo en este libro.
          </p>
          <div className="mt-4">
            <Button asChild variant="link" className="p-0 h-auto text-accent">
              <a href="#precio">Empieza hoy mismo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Dolor del lector */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-headline font-bold text-center mb-6">¿Te sientes atrapado en un ciclo de deudas sin fin?</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="bg-muted/30 rounded-lg p-4">Pagas mes tras mes y la deuda no baja.</li>
            <li className="bg-muted/30 rounded-lg p-4">Vives con miedo a un gasto inesperado.</li>
            <li className="bg-muted/30 rounded-lg p-4">Te sientes culpable por no poder ahorrar.</li>
            <li className="bg-muted/30 rounded-lg p-4">Las fórmulas de internet no funcionan en tu caso.</li>
          </ul>
          <p className="text-center text-muted-foreground mt-6">No estás solo. El sistema está diseñado para que caigas en deuda. Con el plan correcto, puedes salir.</p>
        </div>
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
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">La estrategia Deuda Fuera, Paz Dentro</h2>
            <p className="mb-6">Este no es un libro de teoría. Es un <strong>GPS anti-deuda</strong> basado en la vida real, con pasos claros y comprobados para salir de deudas y recuperar la tranquilidad.</p>
            <h3 className="font-headline font-semibold mb-2">Beneficios que vas a sentir</h3>
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
                <a href="#precio">Sí, quiero mi plan ahora</a>
              </Button>
              <p className="text-xs text-muted-foreground mt-2">Pago seguro con Stripe · Acceso inmediato</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona en 3 pasos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-headline font-bold text-center mb-10">Cómo funciona el método</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background border rounded-xl p-6 text-center">
              <Clock className="h-10 w-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Diagnostica en 15 minutos</h3>
              <p className="text-muted-foreground text-sm">Calcula tu IPD con la plantilla y conoce tu primer paso.</p>
            </div>
            <div className="bg-background border rounded-xl p-6 text-center">
              <Compass className="h-10 w-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Aplica la estrategia correcta</h3>
              <p className="text-muted-foreground text-sm">Oxígeno, Nieve o Avalancha según tu situación.</p>
            </div>
            <div className="bg-background border rounded-xl p-6 text-center">
              <ListChecks className="h-10 w-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Recupera tu flujo y paz</h3>
              <p className="text-muted-foreground text-sm">Avanza mes a mes con un plan claro y medible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Autoridad breve */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-headline font-bold mb-3">No soy gurú, estuve en tu lugar</h2>
          <p className="text-muted-foreground">Este sistema nació cuando yo mismo estaba al borde. Lo probé primero en mi vida, luego lo compartí y hoy está ayudando a más personas.</p>
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
            <h2 className="text-3xl font-headline font-bold mb-4">Oferta de lanzamiento</h2>
            <p className="mb-6">Llévate el libro digital hoy por solo <strong>$7.99</strong>. Sin trucos ni pagos ocultos. Acceso inmediato.</p>
            <div className="bg-white text-foreground p-8 rounded-lg shadow-xl inline-block">
                <h3 className="text-2xl font-headline font-bold text-primary">Libro + Recursos</h3>
                <p className="text-5xl font-bold my-4 text-primary">$7.99 <span className="text-lg font-normal text-muted-foreground">pago único</span></p>
                <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
                    <a href="#">Quiero empezar mi plan anti-deuda ahora</a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">Pago seguro con Stripe · Acceso inmediato · Garantía 30 días</p>
            </div>
        </div>
      </section>

      {/* Bonus Plantilla IPD */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-headline font-bold mb-3">Bonus: Plantilla IPD</h2>
          <p className="text-muted-foreground mb-6">Incluye plantilla en Excel/Google Sheets para calcular tu IPD y saber cuál estrategia aplicar primero.</p>
        </div>
      </section>

      {/* Cierre persuasivo */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-headline font-bold mb-6">Tienes dos opciones hoy</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Opción 1</h3>
              <p className="text-muted-foreground">Seguir pagando mínimos, esperando a que la deuda baje sola.</p>
            </div>
            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Opción 2</h3>
              <p className="text-muted-foreground">Tomar acción con un plan probado y recuperar tu paz financiera.</p>
            </div>
          </div>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              <a href="#precio">Descargar ahora mi plan anti-deuda</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
