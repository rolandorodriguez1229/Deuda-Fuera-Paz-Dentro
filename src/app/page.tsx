import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, BarChart, CheckCircle, Lightbulb, Scissors, TrendingUp } from 'lucide-react';
import { blogPosts } from '@/lib/constants';
import { TestimonialsSection } from '@/components/ui/testimonials';
import { CourseOfferSection } from '@/components/ui/course-offer';
import { FAQSection } from '@/components/ui/faq-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">
            Transforma tus Deudas en Libertad Financiera
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Descubre el sistema paso a paso que te ayudará a salir de deudas, tomar el control de tu dinero y construir un futuro de paz y prosperidad.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/producto">Comienza tu Transformación</Link>
          </Button>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">¿Te sientes atrapado por las deudas?</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              El estrés financiero puede ser abrumador. La falta de un plan claro te mantiene en un ciclo de pagos interminables sin ver progreso real.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-headline font-bold text-primary">La Solución: Un Sistema Probado</h3>
              <p>
                "Deuda Fuera, Paz Dentro" no es una solución mágica, es un método estratégico que te empodera. Te enseñamos a entender tu situación, crear un plan de ataque y desarrollar hábitos financieros que durarán toda la vida.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                  <span><strong className="font-bold">Claridad Total:</strong> Visualiza tu camino para salir de deudas con herramientas simples y efectivas.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                  <span><strong className="font-bold">Control Absoluto:</strong> Aprende a presupuestar, ahorrar y tomar decisiones financieras inteligentes sin sacrificar tu calidad de vida.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                  <span><strong className="font-bold">Paz Mental:</strong> Reemplaza la ansiedad con confianza, sabiendo que cada paso te acerca a tu libertad financiera.</span>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Diagrama de solución financiera"
                data-ai-hint="financial freedom chart"
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
                    <Link href="/producto">🚀 Ver Cómo Puedo Ayudarte</Link>
                  </Button>
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
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Empieza con tu Diagnóstico Financiero Gratuito</h2>
          <p className="text-muted-foreground mt-4 mb-8 max-w-2xl mx-auto">
            Descarga nuestra herramienta exclusiva en Excel para organizar tus deudas, visualizar tu presupuesto y dar el primer paso hacia la claridad financiera.
          </p>
          
          <div className="bg-accent/10 rounded-xl p-8 max-w-lg mx-auto mb-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>Más de 2,000 descargas</span>
              </div>
              <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold py-6">
                <Link href="/descarga-gratis">📊 Descargar Herramienta Gratis</Link>
              </Button>
              <p className="text-xs text-muted-foreground">
                ✅ Descarga inmediata • ✅ No spam • ✅ 100% gratis
              </p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Da el primer paso hacia tu libertad financiera hoy mismo
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

      {/* Enhanced Course Offer Section */}
      <CourseOfferSection />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
