import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, BookOpen, FileSpreadsheet, Video, Zap } from 'lucide-react';
import Link from 'next/link';

const bookOffers = [
  {
    id: 'ebook',
    title: 'El Libro Digital',
    subtitle: '(Arranque Rápido)',
    price: '$7.99',
    originalPrice: null,
    description: 'Recibe acceso inmediato al eBook "Deuda Fuera, Paz Dentro" y aprende el sistema completo paso a paso en cualquier dispositivo.',
    features: [
      'Libro digital completo (PDF + ePub)',
      'Sistema IPD explicado paso a paso',
      'Los 3 métodos: Oxígeno, Nieve y Avalancha',
      'Acceso inmediato y de por vida',
      'Compatible con todos los dispositivos'
    ],
    buttonText: 'Comprar el eBook',
    buttonClass: 'bg-primary text-primary-foreground hover:bg-primary/90',
    popular: false
  }
];

export function BookOffersSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">
            Elige el Plan que te Devolverá la Paz Financiera
          </h2>
          <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
            Accede al sistema IPD que ha ayudado a cientos de personas a salir de deudas usando la estrategia correcta para su situación
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto place-items-center">
          {bookOffers.map((offer, index) => (
            <Card key={offer.id} className={`relative ${offer.popular ? 'ring-2 ring-accent scale-105' : ''} ${offer.disabled ? 'opacity-75' : ''}`}>
              {offer.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1">
                  <Star className="h-3 w-3 mr-1" />
                  MÁS POPULAR
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="space-y-2">
                  <CardTitle className="text-2xl font-headline">{offer.title}</CardTitle>
                  <p className="text-sm text-muted-foreground font-semibold">{offer.subtitle}</p>
                  
                  <div className="space-y-1">
                    {offer.originalPrice && (
                      <p className="text-sm text-muted-foreground line-through">{offer.originalPrice}</p>
                    )}
                    <p className="text-4xl font-bold text-foreground">{offer.price}</p>
                    {offer.originalPrice && (
                      <p className="text-sm text-green-600 font-semibold">¡Ahorras $19!</p>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {offer.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Qué incluye:</h4>
                  <ul className="space-y-2">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  asChild={!offer.disabled} 
                  size="lg" 
                  className={`w-full ${offer.buttonClass} text-lg font-bold py-6`}
                  disabled={offer.disabled}
                >
                  {offer.disabled ? (
                    <span>{offer.buttonText}</span>
                  ) : (
                    <Link href="/producto">{offer.buttonText}</Link>
                  )}
                </Button>

                {!offer.disabled && (
                  <p className="text-xs text-center text-muted-foreground">
                    ✅ Acceso inmediato • ✅ Garantía 30 días • ✅ Pago seguro
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-accent" />
              <h3 className="text-lg font-semibold">Garantía de Satisfacción</h3>
            </div>
            <p className="text-sm opacity-90">
              Tienes 30 días para probar el sistema. Si no estás satisfecho, te devuelvo el 100%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 