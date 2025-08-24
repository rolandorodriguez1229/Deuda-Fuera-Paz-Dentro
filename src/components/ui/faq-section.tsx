import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "¿Cuánto tiempo necesito dedicarle a la semana?",
    answer: "El curso está diseñado para personas ocupadas. Con solo 2-3 horas por semana puedes completar las lecciones y aplicar las estrategias. Muchos estudiantes ven resultados desde la primera semana de implementación."
  },
  {
    question: "¿Qué pasa si mi situación financiera es muy complicada?",
    answer: "He trabajado con personas en todas las situaciones: desde deudas de $5,000 hasta más de $100,000. El sistema se adapta a tu situación específica. Además, tienes acceso a sesiones de Q&A donde puedo ayudarte personalmente con tu caso."
  },
  {
    question: "¿Necesito conocimientos previos de finanzas?",
    answer: "Para nada. El curso está diseñado para principiantes completos. Empezamos desde cero y te explico todo en términos simples. Si sabes sumar y restar, tienes todo lo que necesitas para empezar."
  },
  {
    question: "¿Hay garantía de devolución?",
    answer: "Sí, tienes 30 días completos para probar el curso. Si no estás satisfecho por cualquier razón, te devuelvo el 100% de tu dinero, sin preguntas. Mi objetivo es tu éxito, no solo tu dinero."
  },
  {
    question: "¿Funciona si vivo fuera de Estados Unidos?",
    answer: "Absolutamente. Los principios financieros son universales. Tengo estudiantes en más de 15 países que han aplicado exitosamente el sistema. Las estrategias se adaptan a cualquier moneda y sistema bancario."
  },
  {
    question: "¿Cuándo veré los primeros resultados?",
    answer: "La mayoría de estudiantes reportan mayor claridad y control desde la primera semana. Los resultados financieros tangibles (como liberar flujo de efectivo) típicamente se ven entre el primer y segundo mes de implementación."
  },
  {
    question: "¿Qué diferencia este curso de otros métodos?",
    answer: "Este no es teoría de libros. Es un sistema que yo mismo usé para salir de deudas y que he refinado con cientos de estudiantes. Incluye herramientas específicas, plantillas probadas y acceso directo a mí para resolver tus dudas."
  },
  {
    question: "¿El precio incluye todo o hay costos adicionales?",
    answer: "El precio incluye TODO: el curso completo, todas las plantillas, acceso a la comunidad, sesiones de Q&A y los bonos de lanzamiento. No hay costos ocultos ni upsells sorpresa."
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