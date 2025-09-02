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
      <section className="bg-primary text-primary-foreground py-20 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <p className="text-accent font-headline">EL LIBRO</p>
            <h1 className="text-4xl md:text-6xl font-headline font-bold mt-2 mb-4">¿Tus deudas no te dejan dormir? Descubre el sistema real que me sacó de $90,000 en deudas y puede salvarte a ti.</h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              No necesitas ganar más dinero ni fórmulas complicadas. Necesitas un plan que funcione con tu realidad. Este libro te lo da.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
                <a href="#precio">Quiero mi plan anti-deuda ahora</a>
              </Button>
            </div>
            <p className="text-sm mt-3">Pago seguro con Stripe · Acceso inmediato · Garantía 7 días</p>
          </div>
          <div className="text-center">
            <Image
              src="https://placehold.co/500x700.png"
              alt="Portada del libro Deuda Fuera, Paz Dentro"
              data-ai-hint="book cover 3D mockup"
              width={500}
              height={700}
              className="mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Storytelling breve del autor */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-lg md:text-xl leading-relaxed">
            "Durante años viví atrapado en un ciclo que parecía no tener salida. Llegué a acumular casi <strong>$90,000</strong> en deudas entre autos, préstamos y tarjetas de crédito. Solo en pagos mínimos se me iban más de <strong>$3,900</strong> al mes… y aun así la deuda apenas bajaba.
            Me acostaba con ansiedad, pensando qué pasaría si surgía un gasto inesperado. Trabajaba duro, pero todo parecía destinado a los bancos.
            Probé métodos como la bola de nieve y la avalancha, pero en situaciones extremas no me funcionaban. Fue entonces cuando diseñé mi propio sistema.
            Un plan que combina lo mejor de cada estrategia, con un enfoque claro: liberar flujo de efectivo rápido y <strong>recuperar la paz mental</strong>.
            Ese plan me permitió salir adelante. Y hoy está en tus manos."
          </p>
          <p className="mt-4 text-primary font-semibold">Si yo pude, tú también puedes. La deuda no se paga solo con dinero, se paga con estrategia.</p>
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
            <li className="bg-muted/30 rounded-lg p-4">Pagas mes tras mes y el saldo apenas baja.</li>
            <li className="bg-muted/30 rounded-lg p-4">Sientes que trabajas solo para los bancos.</li>
            <li className="bg-muted/30 rounded-lg p-4">La ansiedad no te deja dormir tranquilo.</li>
            <li className="bg-muted/30 rounded-lg p-4">Los consejos típicos no funcionan en tu caso real.</li>
          </ul>
          <p className="text-center text-muted-foreground mt-6">No es tu culpa. El sistema está diseñado para que caigas en deuda. Pero con un plan correcto, puedes salir.</p>
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

      {/* Beneficios / Transformación */}
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
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">Lo que vas a lograr con Deuda Fuera, Paz Dentro</h2>
            <ul className="space-y-3">
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" /><span><strong>Libera flujo en semanas, no en años:</strong> descubre qué deuda atacar primero con el Selector de Estrategia IPD.</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" /><span><strong>Respira tranquilo cada noche:</strong> aplica el Método Oxígeno Rápido y siente alivio inmediato aunque tengas varias tarjetas encima.</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" /><span><strong>Recupera el control de tu dinero:</strong> deja de pagar mínimos eternos y redirige tu dinero hacia lo que importa.</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" /><span><strong>Deja de improvisar:</strong> tendrás un GPS financiero que te dice paso a paso qué hacer en cada etapa.</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" /><span><strong>Convierte la deuda en motivación:</strong> pasa de sentirte ahogado a ver cómo cada pago te acerca a tu libertad.</span></li>
            </ul>
            <div className="my-8 text-center">
              <Image
                src="https://placehold.co/700x450.png"
                alt="Mockup 3D del libro"
                data-ai-hint="centered 3D book mockup"
                width={700}
                height={450}
                className="mx-auto rounded-lg shadow-2xl"
              />
            </div>
            <div className="mt-6">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="#precio">Quiero mi plan ahora</a>
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

      {/* Prueba social inicial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-headline font-bold text-center mb-12">Historias que demuestran que funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg">
              <p className="font-semibold mb-2">Juan y Ana, padres de dos hijos</p>
              <p className="text-sm text-muted-foreground">Liberaron <strong>$500</strong> de flujo en 30 días aplicando el Método Oxígeno.</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <p className="font-semibold mb-2">María, madre soltera</p>
              <p className="text-sm text-muted-foreground">Bajó su pago mensual en <strong>$320</strong> en 2 meses usando la estrategia de Bola de Nieve.</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <p className="font-semibold mb-2">Carlos</p>
              <p className="text-sm text-muted-foreground">Redujo <strong>$2,000</strong> en intereses con la estrategia de transferencia 0% APR (cap. 11).</p>
            </div>
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
          <p className="mb-1">Garantía clara: 7 días de devolución si no ves claridad ni pasos prácticos.</p>
          <p className="opacity-80">© {new Date().getFullYear()} Deuda Fuera, Paz Dentro · contacto@deudafuerapazdentro.com</p>
        </div>
      </section>
    </div>
  );
}
