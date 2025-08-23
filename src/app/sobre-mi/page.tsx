import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutMePage() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Mi Viaje: De la Desesperación a la Disciplina</h1>
          <p className="mt-4 text-lg text-muted-foreground">La historia detrás de "Deuda Fuera, Paz Dentro".</p>
        </header>
        
        <Image
          src="https://placehold.co/900x500.png"
          alt="Rolando trabajando en su plan financiero"
          data-ai-hint="man working desk"
          width={900}
          height={500}
          className="rounded-lg shadow-lg mb-12 w-full"
        />
        
        <div className="prose prose-lg max-w-none mx-auto">
          <p className="lead">Hola, soy Rolando. Si estás aquí, es probable que te sientas como yo me sentí hace unos años: atrapado, ansioso y sin una idea clara de cómo salir del agujero de las deudas.</p>
          
          <h2 className="font-headline text-primary">El Punto de Quiebre</h2>
          <p>Mi historia no es de riqueza de la noche a la mañana. Es una historia de trabajo duro, errores y, finalmente, de un gran descubrimiento. Hubo un día en que miré el saldo de mis tarjetas de crédito, mi préstamo estudiantil y el crédito del coche, y sentí un nudo en el estómago. Estaba trabajando más que nunca, pero mi patrimonio neto no se movía. Cada mes era una carrera para cubrir los pagos mínimos, con la esperanza de que sobrara algo. Rara vez sobraba.</p>
          <p>La ansiedad era mi compañera constante. Me avergonzaba hablar de ello. Sentía que le había fallado a mi familia y a mí mismo. Ese fue mi punto de quiebre. Decidí que no podía seguir viviendo así. No quería que el dinero controlara mi vida, mis decisiones y mi felicidad.</p>
          
          <h2 className="font-headline text-primary">La Creación del Sistema</h2>
          <p>Empecé a devorar libros de finanzas personales, a escuchar podcasts, a tomar cursos. Probé todas las apps de presupuesto que existen. Algunas cosas funcionaban, otras no. Lo que me di cuenta es que no existía un "sistema único" que funcionara para todos. Faltaba un enfoque que combinara la psicología del dinero, estrategias prácticas y herramientas sencillas.</p>
          <p>Así que empecé a construir el mío. Un sistema que no se basaba en la privación, sino en la intencionalidad. Un método para atacar la deuda de forma estratégica mientras construía hábitos de ahorro e inversión. Lo probé en mí mismo. Mes a mes, empecé a ver progreso. Pequeñas victorias se convirtieron en grandes hitos. Pagué mi primera tarjeta de crédito. Luego la segunda. Y así sucesivamente, hasta que un día, estaba libre de deudas de consumo.</p>
          
          <h2 className="font-headline text-primary">Mi Misión</h2>
          <p>La sensación de paz que experimenté fue indescriptible. No era solo la ausencia de deudas; era la presencia de control, de opciones, de libertad. Supe entonces que tenía que compartir este sistema.</p>
          <p>"Deuda Fuera, Paz Dentro" es la culminación de ese viaje. Es el mapa que me hubiera encantado tener cuando estaba perdido. Mi misión ahora es simple: darte ese mapa, para que puedas encontrar tu propio camino hacia la libertad financiera, mucho más rápido y con menos tropiezos de los que yo tuve.</p>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-headline font-bold">¿Listo para empezar tu propio viaje?</h3>
          <p className="text-muted-foreground mt-2 mb-6">El primer paso es el más importante. Déjame ayudarte a darlo.</p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/producto">Conoce el Curso</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
