import { Stethoscope, ClipboardList, Zap, Trophy, ArrowRight } from 'lucide-react';

const methodSteps = [
  {
    icon: Stethoscope,
    step: "1",
    title: "Diagnóstico",
    subtitle: "Limpieza Rápida",
    description: "Calculamos tu IPD (Índice de Presión de Deuda) para conocer tu situación real",
    color: "bg-red-500",
    bgColor: "bg-red-50"
  },
  {
    icon: ClipboardList,
    step: "2", 
    title: "Organización",
    subtitle: "Plan Personalizado",
    description: "Organizamos tus deudas y definimos la estrategia correcta para TU situación",
    color: "bg-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    icon: Zap,
    step: "3",
    title: "Aceleración",
    subtitle: "Ejecución Inteligente", 
    description: "Implementas el método que mejor se adapte: Oxígeno, Nieve o Avalancha",
    color: "bg-yellow-500",
    bgColor: "bg-yellow-50"
  },
  {
    icon: Trophy,
    step: "4",
    title: "Libertad",
    subtitle: "Paz Interior",
    description: "Disfrutas de la tranquilidad de estar libre de deudas y con control total",
    color: "bg-green-500",
    bgColor: "bg-green-50"
  }
];

export function MethodExplanation() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">
            El Método Que Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un sistema probado que te lleva de la ansiedad financiera a la paz interior en 4 etapas claras
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Versión Desktop */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Línea conectora */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-red-200 via-orange-200 via-yellow-200 to-green-200 -translate-y-1/2 z-0"></div>
              
              <div className="grid md:grid-cols-4 gap-8 relative z-10">
                {methodSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 ${step.bgColor} rounded-full mb-6 relative`}>
                      <div className={`absolute inset-2 ${step.color} rounded-full flex items-center justify-center`}>
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className={`inline-block px-3 py-1 ${step.color} text-white text-sm font-bold rounded-full`}>
                        Paso {step.step}
                      </div>
                      <h3 className="text-xl font-headline font-bold text-primary">
                        {step.title}
                      </h3>
                      <p className="text-sm font-semibold text-accent">
                        {step.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Versión Mobile */}
          <div className="block md:hidden space-y-8">
            {methodSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center`}>
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 pt-2">
                  <div className={`inline-block px-2 py-1 ${step.color} text-white text-xs font-bold rounded-full mb-2`}>
                    Paso {step.step}
                  </div>
                  <h3 className="text-lg font-headline font-bold text-primary mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm font-semibold text-accent mb-2">
                    {step.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                
                {index < methodSteps.length - 1 && (
                  <div className="flex-shrink-0 mt-8">
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA del Método */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-headline font-bold mb-4">
              Este Sistema Ya Ha Transformado Cientos de Vidas
            </h3>
            <p className="text-lg opacity-90 mb-6">
              No tienes que reinventar la rueda. Sigue el método paso a paso y obtén los mismos resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                🚀 Empezar Ahora - $7.99
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors">
                📋 Ver Muestra Gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 