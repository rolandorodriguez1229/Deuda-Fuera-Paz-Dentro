import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, BarChart, CheckCircle, Lightbulb, Scissors, TrendingUp, Star } from 'lucide-react';
import { blogPosts } from '@/lib/constants';
import { TestimonialsSection } from '@/components/ui/testimonials';
import { BookOffersSection } from '@/components/ui/book-offers';
import { FAQSection } from '@/components/ui/faq-section';
import { BenefitsSection } from '@/components/ui/benefits-section';
import { MethodExplanation } from '@/components/ui/method-explanation';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Magnético y Emocional */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto Principal */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6 leading-tight">
                ¿Tus deudas te quitan el sueño?
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Descubre el sistema real que me sacó de <strong>$90,000</strong> en deudas y puede salvarte a ti. No necesitas ganar más dinero, <strong>necesitas un plan que funcione con tu realidad</strong>.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent" />
                  <span className="text-lg">Método probado por cientos de personas</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent" />
                  <span className="text-lg">Resultados desde el primer mes</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent" />
                  <span className="text-lg">Sin presupuestos imposibles de seguir</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-xl font-bold py-6 px-8">
                  <Link href="/producto">Quiero mi plan anti-deuda ahora</Link>
                </Button>
                <Button asChild variant="default" size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg py-6 px-8">
                  <Link href="/descarga-gratis">⬇️ Calculadora Gratis</Link>
                </Button>
              </div>

              <p className="text-sm opacity-75 mt-4">
                Solo $7.99 · Oferta de lanzamiento (precio subirá pronto) · Pago seguro con Stripe · Acceso inmediato · Garantía 30 días
              </p>
            </div>

            {/* Imagen del Libro */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-accent/20 rounded-lg blur-xl scale-110"></div>
                <Image
                  src="https://placehold.co/400x600.png"
                  alt="Portada del libro Deuda Fuera, Paz Dentro"
                  data-ai-hint="book cover with title and financial freedom theme"
                  width={400}
                  height={600}
                  className="relative rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full px-4 py-2 font-bold shadow-lg">
                  ¡NUEVO!
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
                <span className="ml-2 text-lg font-semibold">4.9/5 (127 reseñas)</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
      </section>

      {/* Storytelling breve */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl leading-relaxed">
              Llegué a deber <strong>$90,000</strong>, pagando <strong>$3,900</strong> al mes solo en mínimos. Había noches en las que me despertaba a las 3 a.m. con el corazón acelerado, temiendo abrir el estado de cuenta. Creé este sistema para recuperar mi paz, y ahora está en este libro.
            </p>
            <div className="mt-4">
              <Button asChild variant="link" className="p-0 h-auto text-accent">
                <Link href="/sobre-mi">Leer mi historia completa</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Elevator Pitch - Propuesta Única de Valor */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid md:grid-cols-4 gap-8 items-center">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-primary">Quién Soy</h3>
                <p className="text-sm text-muted-foreground">
                  Rolando Rodríguez, alguien que estuvo ahogado en deudas y encontró la salida
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-primary">Qué Resuelvo</h3>
                <p className="text-sm text-muted-foreground">
                  Deudas que te quitan el sueño + ansiedad financiera constante
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-primary">Cómo es Diferente</h3>
                <p className="text-sm text-muted-foreground">
                  Método claro sin complicaciones que se adapta a TU situación real
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-primary">Tu Resultado</h3>
                <p className="text-sm text-muted-foreground">
                  Paz interior + estabilidad financiera sin sacrificar todo
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-accent/5 rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-4">
                "No es otro libro de finanzas. Es el sistema que me devolvió la tranquilidad."
              </h2>
              <p className="text-lg text-muted-foreground">
                Después de probar todos los métodos tradicionales sin éxito, desarrollé un enfoque que realmente funciona para personas con vidas reales y presupuestos apretados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Method Explanation */}
      <MethodExplanation />

      {/* Problem/Solution Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Has Intentado de Todo. ¿Por Qué Nada Funciona?</h2>
            <p className="text-muted-foreground mt-4 max-w-4xl mx-auto text-lg">
              Has leído sobre el Método Avalancha (atacar el interés más alto), pero te deja sin aire para respirar cada mes. Has probado la Bola de Nieve (la deuda más pequeña), pero sientes que las deudas grandes con intereses altos te siguen comiendo vivo. La verdad es que no existe 'un método mejor'. <strong>Existe el método correcto PARA TU MOMENTO.</strong> La mayoría de los planes fallan porque no se adaptan a tu nivel real de presión financiera.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-headline font-bold text-primary">La Solución: Un Diagnóstico, No una Opinión</h3>
              <p className="text-lg">
                Mi libro "Deuda Fuera, Paz Dentro" no te da un consejo, <strong>te da un GPS Anti-Deuda.</strong> Usando el sistema IPD, primero calculas tu "Nivel de Oxígeno Financiero". Ese número te dirá con una claridad brutal si tu misión ahora es:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                  <span><strong className="font-bold">1. Liberar Flujo Urgente</strong> (Oxígeno Rápido)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                  <span><strong className="font-bold">2. Ganar Motivación</strong> (Método Nieve)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                  <span><strong className="font-bold">3. Atacar Intereses con Eficiencia</strong> (Método Avalancha)</span>
                </li>
              </ul>
              <div className="bg-accent/10 rounded-lg p-4 mt-6">
                <p className="text-sm font-semibold text-accent">💡 El Sistema IPD (Índice de Presión de Deuda)</p>
                <p className="text-sm mt-2">No más adivinanzas. Tu situación financiera te dice exactamente qué estrategia usar.</p>
              </div>
            </div>
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Sistema IPD - Diagnóstico Financiero"
                data-ai-hint="financial diagnostic system flowchart"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Author Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-3">
              <div className="md:col-span-1">
                 <Image
                    src="https://placehold.co/400x500.png"
                    alt="Rolando, creador de Deuda Fuera, Paz Dentro"
                    data-ai-hint="portrait author"
                    width={400}
                    height={500}
                    className="object-cover w-full h-full"
                  />
              </div>
              <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-4">Conoce a Rolando</h3>
                <p className="mb-4">
                  "Yo también estuve ahí. Ahogado en deudas, sin ver una salida. Me sentía frustrado y sin esperanza. Pero en lugar de rendirme, dediqué años a estudiar, probar y perfeccionar un sistema que no solo me sacó de deudas, sino que transformó mi vida por completo."
                </p>
                <p className="mb-6">
                  "Ahora, mi misión es compartir este sistema contigo, para que tú también puedas experimentar la paz y la libertad que vienen con el control de tus finanzas."
                </p>
                <Button asChild variant="link" className="p-0 h-auto self-start text-accent">
                  <Link href="/sobre-mi">Mi historia completa <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Si mi historia resuena contigo, déjame guiarte en tu transformación:
                  </p>
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/producto">Quiero mi plan anti-deuda ahora</Link>
                  </Button>
                  <p className="text-xs text-muted-foreground mt-3">Solo $7.99 · Pago seguro con Stripe · Acceso inmediato · Garantía 30 días</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Lead Magnet */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Lightbulb className="h-12 w-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Recibe la Herramienta #1 de mi Sistema: Tu Diagnóstico 360° GRATIS</h2>
          <p className="text-muted-foreground mt-4 mb-8 max-w-3xl mx-auto text-lg">
            Descarga la plantilla que es el corazón de mi libro. En menos de 15 minutos, tendrás tu <strong>IPD (Índice de Presión de Deuda)</strong> y sabrás con certeza cuál es tu primer paso para salir del hoyo.
          </p>
          
          <div className="bg-accent/10 rounded-xl p-8 max-w-lg mx-auto mb-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>Más de 2,000 descargas</span>
              </div>
              <div className="bg-primary/10 rounded-lg p-3 mb-4">
                <p className="text-sm font-semibold text-primary">🎯 Incluye:</p>
                <ul className="text-xs text-left mt-2 space-y-1">
                  <li>• Calculadora automática de IPD</li>
                  <li>• Análisis de tu "Oxígeno Financiero"</li>
                  <li>• Recomendación de estrategia personalizada</li>
                </ul>
              </div>
              <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold py-6">
                <Link href="/descarga-gratis">🔥 Calcular mi Oxígeno Financiero</Link>
              </Button>
              <p className="text-xs text-muted-foreground">
                ✅ Descarga inmediata • ✅ No spam • ✅ 100% gratis
              </p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Descubre tu estrategia personalizada en menos de 15 minutos
          </p>
        </div>
      </section>

      {/* Blog Excerpts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Desde Nuestro Blog</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Consejos, estrategias e inspiración para tu viaje hacia la libertad financiera.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Card key={post.slug} className="flex flex-col">
                <Image
                  src={post.image}
                  alt={post.title}
                  data-ai-hint={post.imageHint}
                  width={400}
                  height={250}
                  className="rounded-t-lg object-cover"
                />
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="link" className="p-0 h-auto text-accent">
                    <Link href={`/blog/${post.slug}`}>Leer más <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/blog">Visitar el Blog</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Book Offers Section */}
      <BookOffersSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Final */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">¿Listo para tu paz financiera?</h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">Acceso inmediato al sistema paso a paso.</p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              <Link href="/producto">Quiero mi plan anti-deuda ahora</Link>
            </Button>
          </div>
          <p className="text-sm mt-4">Solo $7.99 · Pago seguro con Stripe · Acceso inmediato · Garantía 30 días</p>
        </div>
      </section>
    </div>
  );
}
