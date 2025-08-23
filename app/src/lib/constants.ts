import { Video, BookOpen, Users, HelpCircle, type LucideIcon } from "lucide-react";

export const blogPosts = [
  {
    slug: '5-pasos-para-crear-tu-presupuesto',
    title: '5 Pasos Simples para Crear tu Primer Presupuesto',
    excerpt: 'Aprende a crear un presupuesto que funcione para ti, sin sentirte restringido y tomando el control de tu dinero desde hoy.',
    image: 'https://placehold.co/400x250.png',
    imageHint: 'budget planning notebook',
    content: `
      <p>Crear un presupuesto es el primer paso fundamental hacia la libertad financiera. No tiene por qué ser complicado. Aquí te presentamos 5 pasos sencillos para empezar:</p>
      <ol>
        <li><strong>Calcula tus Ingresos:</strong> Suma todas tus fuentes de ingreso mensuales después de impuestos.</li>
        <li><strong>Rastrea tus Gastos:</strong> Durante un mes, anota cada gasto. Usa una app o una libreta.</li>
        <li><strong>Categoriza tus Gastos:</strong> Agrupa tus gastos en fijos (renta, servicios) y variables (comida, entretenimiento).</li>
        <li><strong>Define tus Metas:</strong> ¿Quieres pagar una deuda? ¿Ahorrar para un viaje? Asigna una cantidad a cada meta.</li>
        <li><strong>Ajusta y Revisa:</strong> Tu presupuesto es un documento vivo. Revísalo cada mes y ajústalo según sea necesario.</li>
      </ol>
      <p>¡Con estos pasos, tendrás un mapa claro de tu dinero y podrás tomar decisiones informadas!</p>
    `,
    category: 'Presupuesto'
  },
  {
    slug: 'metodo-bola-de-nieve-vs-avalancha',
    title: 'Deuda: Método Bola de Nieve vs. Avalancha',
    excerpt: '¿Cuál es la mejor estrategia para pagar tus deudas? Analizamos dos de los métodos más populares para que elijas el ideal para ti.',
    image: 'https://placehold.co/400x250.png',
    imageHint: 'snowball versus avalanche',
    content: `
      <p>Cuando se trata de pagar deudas, dos métodos destacan: la Bola de Nieve y la Avalancha. Ambos son efectivos, pero apelan a diferentes motivaciones.</p>
      <h3>Método Bola de Nieve</h3>
      <p>Pagas tus deudas de la más pequeña a la más grande, sin importar la tasa de interés. La ventaja es psicológica: al liquidar deudas pequeñas rápidamente, obtienes victorias tempranas que te motivan a seguir.</p>
      <h3>Método Avalancha</h3>
      <p>Pagas tus deudas de la tasa de interés más alta a la más baja. Matemáticamente, este es el método más eficiente y te ahorra más dinero en intereses a largo plazo.</p>
      <p><strong>¿Cuál elegir?</strong> Si necesitas motivación y ver progreso rápido, elige la Bola de Nieve. Si eres disciplinado y quieres ahorrar la mayor cantidad de dinero, la Avalancha es para ti.</p>
    `,
    category: 'Estrategias de Deuda'
  },
  {
    slug: 'como-ahorrar-dinero-sin-sacrificar-tu-vida',
    title: 'Cómo Ahorrar Dinero Sin Sacrificar tu Vida Social',
    excerpt: 'Ahorrar no significa encerrarte en casa. Descubre trucos para reducir gastos sin dejar de disfrutar de la vida.',
    image: 'https://placehold.co/400x250.png',
    imageHint: 'friends having fun',
    content: `
      <p>La idea de que para ahorrar hay que dejar de vivir es un mito. Aquí tienes algunas ideas para equilibrar tus finanzas y tu vida social:</p>
      <ul>
        <li><strong>Planifica salidas más baratas:</strong> Opta por picnics, noches de juegos en casa o visitas a museos en días gratuitos.</li>
        <li><strong>Busca ofertas y descuentos:</strong> Usa apps y sitios web para encontrar promociones en restaurantes y actividades.</li>
        <li><strong>Establece un "presupuesto de diversión":</strong> Asigna una cantidad mensual para entretenimiento y ajústate a ella.</li>
        <li><strong>Sé honesto con tus amigos:</strong> Comunica tus metas financieras. Los buenos amigos lo entenderán y te apoyarán.</li>
      </ul>
    `,
    category: 'Ahorro'
  }
];

export const testimonials = [
    {
      name: 'Laura G.',
      text: 'Este curso cambió mi vida. Por primera vez en años, no siento ansiedad al revisar mi cuenta bancaria. ¡Liquidamos $15,000 en deudas en 8 meses!',
      image: 'https://placehold.co/100x100.png',
      imageHint: 'happy woman portrait'
    },
    {
      name: 'Carlos R.',
      text: 'El sistema de Rolando es claro y fácil de seguir. La herramienta de Excel fue un antes y un después para entender a dónde se iba mi dinero.',
      image: 'https://placehold.co/100x100.png',
      imageHint: 'smiling man portrait'
    },
    {
      name: 'Ana y Miguel S.',
      text: 'Como pareja, el dinero era una fuente constante de estrés. Aprender a comunicarnos y a trabajar juntos en nuestras finanzas nos unió más que nunca. ¡Gracias!',
      image: 'https://placehold.co/100x100.png',
      imageHint: 'happy couple portrait'
    }
];

export const courseDetails = {
    forWho: [
        "Te sientes ahogado por los pagos mínimos.",
        "Has intentado otros métodos sin éxito.",
        "Quieres un plan claro y no solo consejos vagos.",
        "Estás cansado del estrés que te genera el dinero.",
        "Buscas un sistema paso a paso para tomar el control.",
        "Quieres construir un futuro financiero sólido y en paz."
    ],
    whatYouWillAchieve: [
        {
            title: "Descubrirás tu Estrategia de Deuda Ideal",
            description: "Analizarás tu situación única y elegirás la estrategia exacta (Oxígeno, Nieve o Avalancha) que necesitas para ver resultados desde el primer mes."
        },
        {
            title: "Crearás un Presupuesto Anti-Fallas",
            description: "Diseñarás un presupuesto que no se sienta como una cárcel, dándote control total de tu dinero sin sacrificar todo lo que te gusta."
        },
        {
            title: "Instalarás Hábitos Financieros Sostenibles",
            description: "Instalarás los hábitos que te mantendrán libre de deudas PARA SIEMPRE, blindando tu futuro contra recaídas y emergencias."
        },
        {
            title: "Aprenderás a Generar Ingresos Extra",
            description: "Exploraremos métodos prácticos y realistas para aumentar tus ingresos y acelerar tu camino hacia la libertad financiera."
        }
    ],
    whatIsIncluded: [
        {
            icon: Video as LucideIcon,
            description: "Más de 5 horas de video-lecciones claras y al grano."
        },
        {
            icon: BookOpen as LucideIcon,
            description: "Plantillas y herramientas descargables (Presupuesto, Plan de Deuda)."
        },
        {
            icon: Users as LucideIcon,
            description: "Acceso a una comunidad privada para apoyo y motivación."
        },
        {
            icon: HelpCircle as LucideIcon,
            description: "Sesiones mensuales de preguntas y respuestas con Rolando."
        }
    ]
};

export const faqs = [
    {
      question: "¿Necesito conocimientos previos de finanzas?",
      answer: "Absolutamente no. El curso está diseñado para principiantes, explicando cada concepto desde cero de una manera simple y fácil de entender."
    },
    {
      question: "¿Cuánto tiempo necesito dedicarle a la semana?",
      answer: "Puedes ir a tu propio ritmo. Recomendamos dedicar de 2 a 3 horas por semana para ver un progreso constante. ¡El acceso es de por vida!"
    },
    {
      question: "¿Y si mi situación es muy complicada?",
      answer: "El sistema es adaptable a cualquier situación. Te enseñamos los principios para que puedas crear un plan a la medida de tus circunstancias únicas."
    },
    {
      question: "¿Hay garantía de devolución?",
      answer: "¡Sí! Estamos tan seguros del valor del curso que ofrecemos una garantía de devolución del 100% de tu dinero durante los primeros 30 días. Sin preguntas."
    }
];
