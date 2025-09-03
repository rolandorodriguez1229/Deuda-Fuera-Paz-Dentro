import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, ShieldCheck, Star, Clock, Compass, ListChecks } from 'lucide-react';
import { testimonials } from '@/lib/constants';

export default function SalesPage() {
  const bulletBenefits = [
    'El plan exacto para eliminar tus deudas',
    'Diagnóstico IPD en 15 minutos',
    'Resultados claros desde el primer mes',
  ];

  return (
    <div>
      {/* HERO corto para venta directa */}
      <section className="bg-primary text-primary-foreground py-20 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-headline font-bold">Deuda Fuera, Paz Dentro</h1>
            <p className="text-lg md:text-xl mt-3 mb-6 opacity-90">El plan exacto para eliminar tus deudas sin fórmulas complicadas.</p>
            <ul className="text-sm md:text-base space-y-2 mb-8 opacity-95">
              {bulletBenefits.map((b, i) => (
                <li key={i} className="">• {b}</li>
              ))}
            </ul>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              <a href="#comprar">Sí, quiero mi paz financiera</a>
            </Button>
            <p className="text-xs mt-3 opacity-90">Pago seguro con Stripe · Acceso inmediato · Garantía 30 días</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/Ebook%20Portada%203d.png"
              alt="Portada del libro Deuda Fuera, Paz Dentro"
              data-ai-hint="book cover 3D mockup"
              width={500}
              height={700}
              className="mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Paquete único y stack de valor */}
      <section id="comprar" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-background border rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-headline font-bold text-primary mb-2">Paquete Completo</h2>
                <p className="text-muted-foreground mb-4">Incluye el Libro Digital + Plantilla Interactiva IPD</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5" /> Libro digital completo (PDF + ePub)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5" /> Plantilla IPD para diagnosticar y priorizar deudas en 15 min</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5" /> Estrategias Oxígeno, Nieve y Avalancha aplicadas a tu caso</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5" /> Acceso inmediato y de por vida</li>
                </ul>
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm text-muted-foreground line-through">Antes $68</p>
                <p className="text-5xl font-bold text-primary">$49</p>
                <p className="text-xs text-green-600 font-semibold mb-4">¡Ahorras $19!</p>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 w-full md:w-auto">Comprar ahora</Button>
                <p className="text-xs text-muted-foreground mt-3">Pago seguro con Stripe · Garantía 30 días</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios rápidos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-headline font-bold text-center mb-10">Resultados Reales</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <div key={i} className="bg-background border rounded-xl p-6 text-center">
                <Image src={t.image} alt={t.name} width={80} height={80} className="rounded-full mx-auto mb-3" />
                <p className="text-sm italic mb-2">"{t.text}"</p>
                <p className="text-xs text-muted-foreground">— {t.name}</p>
              </div>
            ))}
          </div>
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

      {/* Historia muy breve (confianza visual) */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1 text-center">
              <Image src="/images/rolando.png" alt="Foto de Rolando" width={300} height={380} className="rounded-xl mx-auto shadow" />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-headline font-bold text-primary mb-2">Yo también estuve ahí</h3>
              <p className="text-muted-foreground">Llegué a deber $90,000 y pagaba $3,900 solo en mínimos. No necesitas más fuerza de voluntad: necesitas un plan probado. Aquí lo tienes.</p>
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
          <div className="mt-6 grid md:grid-cols-3 gap-4 text-left">
            <div className="bg-muted/30 rounded-lg p-4">
              <p className="text-sm font-semibold">Familia con hijos</p>
              <p className="text-sm text-muted-foreground">Liberó <strong>$500</strong> de flujo en 30 días aplicando Oxígeno Rápido.</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <p className="text-sm font-semibold">Profesional con 3 tarjetas</p>
              <p className="text-sm text-muted-foreground">Eliminó 2 tarjetas en 8 meses usando Nieve y luego Avalancha.</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <p className="text-sm font-semibold">Emprendedora</p>
              <p className="text-sm text-muted-foreground">Creó fondo de emergencia mientras salía de deudas con el plan paso a paso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantía + CTA final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-headline font-bold mb-4">Garantía Incondicional de 30 Días</h2>
          <p className="mb-6 opacity-90">Prueba el paquete completo durante 30 días. Si no sientes claridad y pasos prácticos, te devolvemos el 100%.</p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
            <a href="#comprar">Comprar ahora</a>
          </Button>
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
            <h2 className="text-3xl font-headline font-bold mb-4">Oferta de lanzamiento: solo $7.99</h2>
            <p className="mb-6">Un solo pago, acceso inmediato. Sin letra pequeña.</p>
            <div className="bg-white text-foreground p-8 rounded-lg shadow-xl inline-block">
                <h3 className="text-2xl font-headline font-bold text-primary">Libro + Recursos</h3>
                <p className="text-5xl font-bold my-4 text-primary">$7.99 <span className="text-lg font-normal text-muted-foreground">pago único</span></p>
                <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
                    <a href="#">Descargar mi plan anti-deuda ahora</a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">Pago seguro con Stripe · Acceso inmediato · Garantía 7 días</p>
            </div>
        </div>
      </section>

      {/* Bonus Plantilla IPD */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-headline font-bold mb-3">Incluye GRATIS la plantilla de diagnóstico IPD</h2>
          <p className="text-muted-foreground mb-6">En menos de 15 minutos sabrás qué deuda atacar primero y tendrás un plan inicial para actuar hoy mismo.</p>
        </div>
      </section>

      {/* Cierre persuasivo */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-headline font-bold mb-6">Hoy tienes dos opciones</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Opción 1</h3>
              <p className="text-muted-foreground">Seguir pagando mínimos, dejar que los intereses te roben cada mes y seguir sintiéndote atrapado.</p>
            </div>
            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Opción 2</h3>
              <p className="text-muted-foreground">Tomar acción con un plan probado, liberar tu flujo y recuperar la paz que mereces.</p>
            </div>
          </div>
          <p className="text-muted-foreground mt-6">Cada día que pasa sin actuar, los bancos ganan y tú pierdes. Da el primer paso hoy.</p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              <a href="#precio">Sí, quiero empezar mi plan anti-deuda ahora</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer simple */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4 text-center text-secondary-foreground text-sm">
          <p className="mb-1">Garantía clara: 30 días de devolución.</p>
          <p className="opacity-80">© {new Date().getFullYear()} Deuda Fuera, Paz Dentro · contacto@deudafuerapazdentro.com</p>
        </div>
      </section>
    </div>
  );
}
