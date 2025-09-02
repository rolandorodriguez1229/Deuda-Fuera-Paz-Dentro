import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "¿En qué se diferencia este libro de otros libros de finanzas?",
    answer: "A diferencia de otros libros que solo describen métodos genéricos, 'Deuda Fuera, Paz Dentro' te entrega un sistema de diagnóstico único (el IPD) para que apliques la estrategia correcta (Oxígeno, Nieve o Avalancha) en el momento correcto. No es teoría, es un plan de acción personalizado."
  },
  {
    question: "¿Cómo recibo el libro después de comprar?",
    answer: "Al completar el pago seguro con Stripe, recibirás acceso inmediato a tu área privada con usuario y contraseña. Desde ahí podrás descargar el libro y los recursos incluidos."
  },
  {
    question: "¿Veré resultados si mis ingresos son bajos?",
    answer: "¡Sí! El sistema está diseñado precisamente para realidades con flujo de efectivo limitado. La primera fase, 'Oxígeno Rápido', se enfoca 100% en liberar dinero mensual para que puedas respirar, sin importar cuánto ganes."
  },
  {
    question: "¿Qué necesito para usar la Plantilla Interactiva del Paquete Completo?",
    answer: "Solo necesitas acceso a Excel o Google Sheets (gratuito). La plantilla está diseñada para ser súper fácil de usar: solo ingresas tus números y ella hace todos los cálculos por ti."
  },
  {
    question: "¿Cuánto tiempo necesito para implementar el sistema?",
    answer: "El libro se lee en 2-3 horas, pero lo importante es la implementación. Con la Plantilla Interactiva, puedes tener tu diagnóstico IPD en 15 minutos y tu plan de acción el mismo día. La mayoría ve claridad inmediata."
  },
  {
    question: "¿Funciona si tengo muchas deudas diferentes?",
    answer: "Especialmente si tienes muchas deudas. El sistema IPD está diseñado para situaciones complejas. La plantilla organiza automáticamente todas tus deudas y te dice exactamente cuál atacar primero según tu nivel de presión financiera."
  },
  {
    question: "¿Hay garantía de devolución?",
    answer: "Sí, tienes 30 días completos para probar el sistema. Si no estás satisfecho por cualquier razón, te devuelvo el 100% de tu dinero, sin preguntas. Mi objetivo es tu éxito, no solo tu dinero."
  },
  {
    question: "¿Funciona si vivo fuera de Estados Unidos?",
    answer: "Absolutamente. Los principios del sistema IPD son universales. Tengo lectores en más de 15 países que han aplicado exitosamente el sistema. Las estrategias se adaptan a cualquier moneda y sistema bancario."
  },
  {
    question: "¿El precio incluye todo o hay costos adicionales?",
    answer: "El precio incluye TODO lo listado en cada paquete. No hay costos ocultos ni upsells sorpresa. Una vez que compras, tienes acceso de por vida a todo el contenido incluido."
  }
];

export function FAQSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="h-8 w-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Preguntas Frecuentes
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Resolvemos las dudas más comunes para que puedas tomar la mejor decisión
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿Tienes otra pregunta? Estoy aquí para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contacto@deudafuerapazdentro.com" 
              className="text-accent hover:text-accent/80 font-semibold"
            >
              📧 contacto@deudafuerapazdentro.com
            </a>
            <span className="hidden sm:block text-muted-foreground">•</span>
            <span className="text-muted-foreground">
              📞 Respuesta en menos de 24 horas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 