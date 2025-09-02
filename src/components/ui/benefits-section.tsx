import { Heart, DollarSign, Shield, Smile, TrendingUp, Home, Plane, Moon } from 'lucide-react';

const emotionalBenefits = [
  {
    icon: Moon,
    title: "Dormirás sin preocupaciones",
    description: "Ya no te despertarás a las 3 AM pensando en cómo pagar las cuentas"
  },
  {
    icon: Plane,
    title: "Podrás planear vacaciones",
    description: "Imagina poder decir 'sí' a ese viaje que tanto has querido hacer"
  },
  {
    icon: Heart,
    title: "Recuperarás tu libertad",
    description: "Toma decisiones basadas en lo que quieres, no en lo que debes"
  },
  {
    icon: Smile,
    title: "Paz mental genuina",
    description: "Elimina el estrés constante que las deudas ponen en tus relaciones"
  }
];

const tangibleBenefits = [
  {
    icon: DollarSign,
    title: "Menos pagos de interés",
    description: "Ahorra cientos o miles de dólares en intereses innecesarios"
  },
  {
    icon: TrendingUp,
    title: "Más liquidez mensual",
    description: "Libera dinero cada mes para lo que realmente importa"
  },
  {
    icon: Shield,
    title: "Crédito mejorado",
    description: "Reconstruye tu historial crediticio de forma inteligente"
  },
  {
    icon: Home,
    title: "Estabilidad familiar",
    description: "Protege a tu familia con un futuro financiero sólido"
  }
];

export function BenefitsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-accent/5 via-white to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">
            Qué Cambiará en Tu Vida
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Este no es solo un libro sobre dinero. Es tu boleto hacia una vida sin la ansiedad constante de las deudas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Beneficios Emocionales */}
          <div>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-headline font-bold text-primary mb-2">
                Beneficios Emocionales
              </h3>
              <p className="text-muted-foreground">
                Lo que realmente importa: tu bienestar y el de tu familia
              </p>
            </div>
            
            <div className="space-y-6">
              {emotionalBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Beneficios Tangibles */}
          <div>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-headline font-bold text-primary mb-2">
                Beneficios Tangibles
              </h3>
              <p className="text-muted-foreground">
                Resultados concretos que verás en tu cuenta bancaria
              </p>
            </div>
            
            <div className="space-y-6">
              {tangibleBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bullets del sistema (IPD, Oxígeno, GPS) */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ul className="grid md:grid-cols-3 gap-4">
            <li className="bg-white rounded-xl p-5 border">
              <p className="font-semibold mb-1">✅ Diagnóstico 360° en 15 min</p>
              <p className="text-sm text-muted-foreground">Calcula tu IPD y conoce tu primer paso.</p>
            </li>
            <li className="bg-white rounded-xl p-5 border">
              <p className="font-semibold mb-1">✅ Método Oxígeno</p>
              <p className="text-sm text-muted-foreground">Libera flujo sin sacrificar tu vida.</p>
            </li>
            <li className="bg-white rounded-xl p-5 border">
              <p className="font-semibold mb-1">✅ GPS Anti-Deuda</p>
              <p className="text-sm text-muted-foreground">Te indica qué estrategia usar y cuándo.</p>
            </li>
          </ul>
        </div>

        {/* CTA Intermedio */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto border">
            <h3 className="text-2xl font-headline font-bold text-primary mb-4">
              ¿Listo para Experimentar Estos Cambios?
            </h3>
            <p className="text-muted-foreground mb-6">
              Miles de personas ya han transformado su relación con el dinero. Es tu turno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/producto" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                Quiero mi paz financiera — $19
              </a>
              <button className="border border-primary text-primary hover:bg-primary/5 px-8 py-4 rounded-lg font-semibold transition-colors">
                📊 Calculadora Gratis
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">Pago seguro con Stripe · Acceso inmediato · Garantía 30 días</p>
          </div>
        </div>
      </div>
    </section>
  );
} 