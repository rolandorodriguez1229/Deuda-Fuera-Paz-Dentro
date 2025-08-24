import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Users, Video, FileText, MessageCircle, Gift, Zap } from 'lucide-react';
import Link from 'next/link';

const courseModules = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Diagnóstico 360° y Estrategia Personal",
    benefit: "Descubrirás la estrategia exacta (Oxígeno, Nieve o Avalancha) que TU situación necesita para ver resultados desde el primer mes."
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Presupuesto Sin Restricciones",
    benefit: "Crearás un presupuesto que no se sienta como una cárcel, dándote control total de tu dinero sin sacrificar todo lo que te gusta."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Hábitos de Libertad Financiera",
    benefit: "Instalarás los hábitos que te mantendrán libre de deudas PARA SIEMPRE, blindando tu futuro contra recaídas."
  }
];

const courseIncludes = [
  { icon: <Video className="h-5 w-5" />, text: "12+ horas de video-lecciones paso a paso" },
  { icon: <FileText className="h-5 w-5" />, text: "Plantillas de Diagnóstico 360° y Presupuesto" },
  { icon: <MessageCircle className="h-5 w-5" />, text: "Acceso a comunidad privada de estudiantes" },
  { icon: <Users className="h-5 w-5" />, text: "Sesiones mensuales de Q&A en vivo" },
  { icon: <CheckCircle className="h-5 w-5" />, text: "Garantía de 30 días o tu dinero de vuelta" }
];

const launchBonuses = [
  "🎯 Masterclass: Cómo Negociar con Bancos (Valor: $97)",
  "💰 Guía de Ingresos Extra: 15 Formas Probadas (Valor: $67)",
  "📊 Calculadora de Libertad Financiera (Valor: $47)"
];

export function CourseOfferSection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="bg-accent text-accent-foreground mb-4 text-sm font-semibold px-4 py-2">
            🔥 OFERTA DE LANZAMIENTO
          </Badge>
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">
            El Sistema Completo "Deuda Fuera, Paz Dentro"
          </h2>
          <p className="text-xl opacity-90 mb-2">
            Tu Mapa Paso a Paso para Eliminar tus Deudas y Construir tu Futuro Financiero
          </p>
          <div className="flex items-center justify-center gap-2 text-sm opacity-75">
            <Clock className="h-4 w-4" />
            <span>Oferta válida por tiempo limitado</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Course Content */}
          <div className="space-y-8">
            {/* For Whom */}
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Este curso es para ti si...</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-white/90">Te sientes ahogado por los pagos mínimos de tus tarjetas</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-white/90">Has intentado otros métodos sin éxito duradero</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-white/90">Quieres un plan claro y no solo consejos vagos</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-white/90">Buscas paz mental y control sobre tu dinero</span>
                </div>
              </CardContent>
            </Card>

            {/* What You'll Achieve */}
            <div className="space-y-4">
              <h3 className="text-2xl font-headline font-bold text-white">Qué Lograrás:</h3>
              {courseModules.map((module, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent text-accent-foreground p-2 rounded-lg shrink-0">
                        {module.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">{module.title}</h4>
                        <p className="text-white/80 text-sm">{module.benefit}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Offer Details */}
          <div className="space-y-6">
            <Card className="bg-white text-foreground">
              <CardHeader className="text-center">
                <div className="space-y-2">
                  <Badge className="bg-red-500 text-white">⏰ SOLO POR TIEMPO LIMITADO</Badge>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground line-through">Precio regular: $297</p>
                    <p className="text-3xl font-bold text-accent">$147</p>
                    <p className="text-sm text-green-600 font-semibold">¡Ahorras $150!</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* What's Included */}
                <div>
                  <h4 className="font-semibold mb-3">Qué Incluye el Curso:</h4>
                  <div className="space-y-2">
                    {courseIncludes.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="text-accent">{item.icon}</div>
                        <span className="text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Launch Bonuses */}
                <div className="bg-accent/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Gift className="h-5 w-5 text-accent" />
                    <h4 className="font-semibold text-accent">Bonos de Lanzamiento GRATIS:</h4>
                  </div>
                  <div className="space-y-2">
                    {launchBonuses.map((bonus, index) => (
                      <p key={index} className="text-sm">{bonus}</p>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Valor total de bonos: $211</p>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold py-6">
                    <Link href="/producto">🚀 COMENZAR MI TRANSFORMACIÓN</Link>
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Garantía de 30 días • Acceso inmediato • Pago seguro
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Proof */}
            <div className="text-center text-white/80">
              <p className="text-sm mb-2">Tú puedes ser el próximo caso de éxito</p>
              <div className="flex justify-center items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-accent rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-xs">+500 estudiantes transformados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 