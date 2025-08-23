import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, ShieldCheck, Star } from 'lucide-react';
import { testimonials, courseDetails, faqs } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';

export default function SalesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground text-center py-20 px-4">
        <p className="text-accent font-headline">EL CURSO COMPLETO</p>
        <h1 className="text-4xl md:text-6xl font-headline font-bold mt-2 mb-4">El Sistema Completo 'Deuda Fuera, Paz Dentro': Tu Mapa Paso a Paso para Eliminar tus Deudas y Construir tu Futuro Financiero</h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          El único curso que necesitarás para eliminar tus deudas, construir riqueza y finalmente dormir tranquilo por las noches.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
          <a href="#precio">Inscríbete Ahora y Cambia tu Futuro</a>
        </Button>
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

       {/* For Who Section */}
       <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8">
            <h2 className="text-3xl font-headline font-bold text-primary mb-6 text-center">Este curso es para ti si...</h2>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {courseDetails.forWho.map((item, i) => (
                 <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                    <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* What you will achieve Section */}
      <section className="py-16 bg-white">
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
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">Qué Lograrás con este Sistema</h2>
            <p className="mb-6">Esto no es teoría aburrida; es un plan de acción que te dará resultados tangibles y duraderos.</p>
            <Accordion type="single" collapsible className="w-full">
                {courseDetails.whatYouWillAchieve.map((item, i) => (
                    <AccordionItem value={`item-${i}`} key={i}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>{item.description}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* What's included Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-headline font-bold text-primary mb-12">Todo lo que Incluye el Curso</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {courseDetails.whatIsIncluded.map((item, i) => (
                    <Card key={i} className="p-6">
                        <CardContent className="flex flex-col items-center text-center gap-4">
                            <div className="bg-accent text-accent-foreground p-3 rounded-full">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <p className="font-semibold">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-headline font-bold text-center mb-12">Lo que dicen nuestros alumnos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="bg-background p-6 rounded-lg text-center flex flex-col">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  data-ai-hint={testimonial.imageHint}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />
                <div className="flex-grow">
                  <p className="italic">"{testimonial.text}"</p>
                </div>
                <div className="mt-4">
                  <div className="flex justify-center">
                      {[...Array(5)].map((_, i) => <Star key={i} className="text-accent fill-accent h-5 w-5" />)}
                  </div>
                  <p className="font-bold mt-4">- {testimonial.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
       {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-headline font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
                <AccordionItem value={`item-${i}`} key={i}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
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
                <p className="font-semibold text-accent animate-pulse">OFERTA DE LANZAMIENTO</p>
                <h3 className="text-2xl font-headline font-bold text-primary">Acceso Completo e Inmediato</h3>
                <p className="text-5xl font-bold my-4 text-primary">$97 <span className="text-2xl font-normal text-muted-foreground line-through">$197</span></p>
                <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
                    <a href="#">Quiero mi Libertad Financiera</a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">Acceso de por vida. Compra segura.</p>
                <p className="text-sm font-semibold mt-2">Únete a los cientos de personas que ya están en camino a su libertad financiera.</p>
            </div>
        </div>
      </section>
    </div>
  );
}
