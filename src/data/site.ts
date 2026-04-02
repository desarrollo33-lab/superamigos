export interface Zone {
  slug: string;
  name: string;
  description: string;
  keywords: string[];
  lat: number;
  lng: number;
  nearbyStreets: string[];
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  heroHeading: string;
  metaDescription: string;
  features: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
  priceRange: string;
  icon: string;
}

export const services: Service[] = [
  {
    slug: "mantenimiento-jardines",
    name: "Mantenimiento de Jardines",
    shortName: "Mantenimiento",
    description:
      "Servicio integral de mantenimiento de jardines para casas y condominios en el sector oriente de Las Condes. Corte, poda, riego y limpieza.",
    heroHeading: "Mantenimiento de Jardines en {zoneName}",
    metaDescription:
      "Jardinero en {zoneName} | Mantenimiento de jardines, corte de césped, poda y riego. Atención semanal y mensual. Presupuesto gratis por WhatsApp.",
    features: [
      "Corte de césped profesional con equipo especializado",
      "Poda de arbustos y plantas ornamentales",
      "Limpieza general del jardín (hojas, ramas, escombros)",
      "Revisión y ajuste de sistemas de riego",
      "Control de malezas y plagas",
      "Fertilización básica estacional",
    ],
    process: [
      { step: "Evaluación", description: "Visitamos tu jardín, medimos la superficie y evaluamos el estado de las plantas, césped y sistema de riego." },
      { step: "Propuesta", description: "Te enviamos un presupuesto personalizado por WhatsApp en menos de 24 horas." },
      { step: "Mantenimiento", description: "Ejecutamos el servicio con equipo profesional. Puedes estar presente o no." },
      { step: "Seguimiento", description: "Te recomendamos un plan mensual según las necesidades de tu jardín." },
    ],
    faqs: [
      { question: "¿Con qué frecuencia debo mantener mi jardín?", answer: "Lo mínimo es una vez por semana en temporada de crecimiento (primavera-verano) y cada 15 días en otoño-invierno. En jardines de alto tráfico, puede ser 2 veces por semana." },
      { question: "¿Ustedes llevan sus propias herramientas?", answer: "Sí. Traemos todo el equipo necesario: cortadora de césped, podadora, bordeadora, aspiradora de hojas, herramientas de mano y productos de limpieza." },
      { question: "¿Puedo contratar solo una vez?", answer: "Sí. También ofrecemos planes mensuales con descuento. El plan mensual es lo que más valor tiene porque mantiene el jardín siempre óptimo." },
    ],
    priceRange: "Desde $25.000 / visita",
    icon: "lucide:flower2",
  },
  {
    slug: "corte-cesped",
    name: "Corte de Césped",
    shortName: "Corte de Césped",
    description:
      "Corte profesional de césped en {zoneName}. Altura correcta, bordeado limpio y retiro de escombros incluidos.",
    heroHeading: "Corte de Césped en {zoneName}",
    metaDescription:
      "Corte de césped en {zoneName} | Jardinero profesional con equipo a gasolina. Bordeado, resiembra y Fertilización. Solicita presupuesto por WhatsApp.",
    features: [
      "Corte con cortadora profesional a gasolina",
      "Bordeado de senderos y bordes de jardín",
      "Resiembra en zonas dañadas",
      "Fertilización post-corte",
      "Retiro de escombros vegetales",
      "Riego posterior si es necesario",
    ],
    process: [
      { step: "Medición", description: "Evaluamos el estado del césped, tipo de pasto y superficie exacta a cortar." },
      { step: "Corte técnico", description: "Cortamos a la altura correcta según el tipo de césped (4-6 cm generalmente). Nunca cortamos más del 30% de la hoja." },
      { step: "Bordeado y acabado", description: "Bordeamos senderos, muros y macizos para un acabado limpio y profesional." },
      { step: "Limpieza", description: "Recogemos toda la hierba cortada y dejamos el jardín impecable." },
    ],
    faqs: [
      { question: "¿Cada cuántos días cortan el césped?", answer: "En primavera-verano cada 7-10 días. En otoño-invierno cada 15-20 días según el crecimiento." },
      { question: "¿Cortan el césped muy alto?", answer: "Sí. Si el césped está muy crecido cobramos un adicional porque requiere más tiempo y esfuerzo. Lo ideal es mantener un ritmo regular." },
      { question: "¿Incluyen Fertilización?", answer: "Sí. Incluimos Fertilización básica con cada corte de temporada para mantener el pasto verde y sano." },
    ],
    priceRange: "Desde $15.000 / visita",
    icon: "lucide:scissors",
  },
  {
    slug: "poda-arboles",
    name: "Poda de Árboles",
    shortName: "Poda de Árboles",
    description:
      "Poda profesional de árboles en {zoneName}. Árboles ornamentales, frutales y palmeras. Trabajo en altura con equipos especializados.",
    heroHeading: "Poda de Árboles en {zoneName}",
    metaDescription:
      "Poda de árboles en {zoneName} | Jardinero con experiencia en poda ornamental y frutal. Trabajo en altura. Solicita presupuesto por WhatsApp.",
    features: [
      "Poda ornamental de árboles ornamentales",
      "Poda de formación para árboles jóvenes",
      "Poda de limpieza (ramas secas, enfermas)",
      "Poda de palmeras (palma y cocotera)",
      "Trabajo en altura con arnés profesional",
      "Retiro de ramas y limpieza posterior",
    ],
    process: [
      { step: "Inspección", description: "Evaluamos el árbol: especie, estado fitosanitario, estructura y cercanía a tendidos eléctricos o estructuras." },
      { step: "Plan de poda", description: "Definimos el tipo de poda adecuado y el método de trabajo seguro según la altura y acceso." },
      { step: "Ejecución", description: "Poda con equipos especializados de corte. Protegemos la corteza y aplicamos pasta sellante en cortes grandes." },
      { step: "Limpieza", description: "Retiramos todas las ramas y limpiamos el área. El material vegetal se lleva o se tritura según prefieras." },
    ],
    faqs: [
      { question: "¿La poda daña los árboles?", answer: "No si se hace bien. Cada corte debe proteger la zona de corteza (cuello de la rama) para permitir la cicatrización correcta. Usamos técnicas de poda profesional." },
      { question: "¿Pueden podar árboles muy grandes?", answer: "Sí. Contamos con equipos para trabajo en altura (arnés, poleas, sierras de poda). Árboles de más de 10 metros requieren evaluación previa." },
      { question: "¿Qué赛季 es mejor para podar?", answer: "La mayoría de los árboles se podan en invierno (reposo vegetativo). Los frutales tienen ventanas específicas según especie. Te asesoramos según tu caso." },
    ],
    priceRange: "Desde $30.000 / árbol",
    icon: "lucide:tree-pine",
  },
  {
    slug: "riego-automatico",
    name: "Riego Automático",
    shortName: "Riego Automático",
    description:
      "Instalación y reparación de sistemas de riego automático en {zoneName}. Ahorra agua y mantiene tu jardín perfecto todo el año.",
    heroHeading: "Riego Automático en {zoneName}",
    metaDescription:
      "Riego automático en {zoneName} | Instalación y reparación de sistemas de riego. Ahorra agua y dinero. Jardinero con experiencia en riego. WhatsApp.",
    features: [
      "Diseño de sistema de riego según tipo de jardín",
      "Instalación de riego por goteo",
      "Instalación de aspersores emergentes",
      "Programación de controlador (timer)",
      "Reparación de sistemas existentes",
      "Consulta de optimización de consumo de agua",
    ],
    process: [
      { step: "Levantamiento", description: "Medimos el jardín, identificamos zonas de césped, macizos y tipos de plantas. Evaluamos la presión de agua disponible." },
      { step: "Diseño", description: "Proyectamos el sistema indicando ubicación de válvulas, tuberías, aspersores y goteros. Te presentamos el presupuesto con materiales." },
      { step: "Instalación", description: "Instalamos el sistema completo con materiales de calidad.通常需要1-2天完成。" },
      { step: "Programación", description: "Configuramos el timer y te enseñamos a usarlo. Te entregamos el plano del sistema para futuras mantenciones." },
    ],
    faqs: [
      { question: "¿Cuánto cuesta instalar un sistema de riego?", answer: "Depende del tamaño y complejidad. Un jardín de 200m² parte desde $250.000. Te visitamos y te damos un presupuesto exacto." },
      { question: "¿El riego automático gasta mucha agua?", answer: "Al contrario. Un sistema bien diseñado puede ahorrar hasta 50% de agua comparado con riego manual. El programador optimiza horarios y duración." },
      { question: "¿Pueden reparar mi sistema de riego existente?", answer: "Sí. Detectamos fugas, reemplazamos aspersores tapados, ajustamos válvulas y reprogramamos el controlador." },
    ],
    priceRange: "Desde $250.000 (instalación completa)",
    icon: "lucide:droplets",
  },
  {
    slug: "mantenimiento-mensual",
    name: "Mantenimiento Mensual",
    shortName: "Plan Mensual",
    description:
      "Plan mensual de mantenimiento de jardines en {zoneName}. Todo incluido: corte, poda, riego, limpieza y fertilización. Tu jardín siempre impecable.",
    heroHeading: "Plan Mensual de Jardines en {zoneName}",
    metaDescription:
      "Plan mensual de mantenimiento de jardines en {zoneName} | Corte, poda, riego y limpieza incluidos. Jardinero de confianza. WhatsApp para suscribirte.",
    features: [
      "2 visitas mensuales incluidas",
      "Corte de césped en cada visita",
      "Poda de arbustos y plantas",
      "Limpieza general del jardín",
      "Revisión de riego automático",
      "Fertilización estacional",
      "Descuento del 15% vs visitas individuales",
      "Atención prioritaria por WhatsApp",
    ],
    process: [
      { step: "Diagnóstico inicial", description: "Visitamos tu jardín, hacemos un diagnóstico completo y diseñamos el plan de mantenimiento personalizado." },
      { step: "Plan personalizado", description: "Te presentamos el plan mensual con las visitas necesarias según el tamaño y tipo de jardín." },
      { step: "Ejecución mensual", description: "Ejecutamos las visitas programadas. Siempre el mismo jardinero, que conhece tu jardín." },
      { step: "Reporte mensual", description: "Te enviamos un breve reporte por WhatsApp después de cada visita con el estado del jardín." },
    ],
    faqs: [
      { question: "¿Qué pasa si necesito una visita extra?", answer: "Los clientes del plan mensual tienen atención prioritaria. Puedes agendar visitas extras con descuento." },
      { question: "¿Puedo cambiar el día de la visita?", answer: "Sí. Coordinamos el día y horario que te quede cómodo. Valoramos la puntualidad." },
      { question: "¿Qué pasa si no quedo conforme?", answer: "Si el trabajo no está bien hecho, lo repetimos sin costo. Tu satisfacción es nuestra prioridad." },
    ],
    priceRange: "Desde $45.000 / mes",
    icon: "lucide:calendar-check",
  },
  {
    slug: "recuperacion-jardines",
    name: "Recuperación de Jardines",
    shortName: "Recuperación",
    description:
      "Jardines deteriorados o abandonados en {zoneName}? Los recuperamos. Limpieza, resiembra, poda correctiva y plan de mantenimiento.",
    heroHeading: "Recuperación de Jardines en {zoneName}",
    metaDescription:
      "Recuperación de jardines en {zoneName} | Jardinero profesional. Limpiamos, resiembramos y restauramos jardines abandonados. Presupuesto por WhatsApp.",
    features: [
      "Limpieza completa del jardín abandonado",
      "Eliminación de malezas y plantas secas",
      "Resiembra de césped en zonas dañadas",
      "Poda correctiva de árboles y arbustos",
      "Reconstrucción de sistemas de riego",
      "Plan de mantenimiento post-recuperación",
    ],
    process: [
      { step: "Evaluación del estado", description: "Visitamos el jardín y hacemos un diagnóstico: qué se puede salvar, qué necesita reemplazarse y cuál es el presupuesto posible." },
      { step: "Propuesta", description: "Te presentamos 2-3 opciones de recuperación según tu presupuesto: básica (solo limpieza), media (+resiembra) y completa (todo nuevo)." },
      { step: "Recuperación", description: "Ejecutamos los trabajos. La mayoría de las recuperaciones se hacen en 1-3 días según el estado." },
      { step: "Entrega y plan", description: "Te entregamos el jardín impecable y un plan de mantenimiento mensual para que no vuelva a deteriorarse." },
    ],
    faqs: [
      { question: "¿Cuánto cuesta recuperar un jardín abandonado?", answer: "Depende del estado. Una limpieza básica parte de $40.000. Una recuperación completa con resiembra puede partir de $150.000. Necesitamos verlo para darte un presupuesto exacto." },
      { question: "¿Cuánto tiempo toma?", answer: "Un jardín residencial pequeño (hasta 300m²) se recupera en 1-2 días. Jardines más grandes o muy abandonados pueden requerir más tiempo." },
      { question: "¿Después de la recuperación ofrecen mantenimiento?", answer: "Sí. De hecho lo recomendamos strongly. La mejor manera de cuidar la inversión en la recuperación es con un plan mensual." },
    ],
    priceRange: "Desde $40.000 (recuperación básica)",
    icon: "lucide:sprout",
  },
];

export const zones: Zone[] = [
  {
    slug: "san-carlos-de-apoquindo",
    name: "San Carlos de Apoquindo",
    description:
      "San Carlos de Apoquindo es un barrio residencial premium en Las Condes oriente, altitude 900m, conocido por sus casas con grandes jardines y condominios exclusivos.",
    keywords: [
      "jardinero San Carlos de Apoquindo",
      "mantenimiento jardines San Carlos de Apoquindo",
      "poda arboles San Carlos de Apoquindo",
    ],
    lat: -33.4589,
    lng: -70.5407,
    nearbyStreets: [
      "Camino El Alba",
      "Avenida Padre Hurtado Sur",
      "Camino Las Hojas",
      "Camino Los Dominicos",
      "Calle San Carlos",
    ],
  },
  {
    slug: "los-dominicos",
    name: "Los Dominicos",
    description:
      "Los Dominicos es un barrio tranquilo en Las Condes, cerca del Metro Los Dominicos (Línea 1). Ideal para casas con jardines medianos a grandes.",
    keywords: [
      "jardinero Los Dominicos Las Condes",
      "mantenimiento jardines Los Dominicos",
      "corte cesped Los Dominicos",
    ],
    lat: -33.4433,
    lng: -70.5533,
    nearbyStreets: [
      "Avenida Los Dominicos",
      "Avenida Apoquindo (sector poniente)",
      "Metro Los Dominicos",
      "Calle Los Libertadores",
    ],
  },
  {
    slug: "metro-los-dominicos",
    name: "Metro Los Dominicos",
    description:
      "Zona entorno a la estación de Metro Los Dominicos. Combinación de departamentos y casas con jardines. Acceso fácil desde toda Santiago.",
    keywords: [
      "jardinero cerca metro Los Dominicos",
      "mantenimiento jardines metro Los Dominicos",
    ],
    lat: -33.4411,
    lng: -70.5511,
    nearbyStreets: [
      "Avenida Los Dominicos",
      "Pasaje Los Dominicos",
      "Avenida Apoquindo",
    ],
  },
  {
    slug: "avenida-apoquindo",
    name: "Avenida Apoquindo",
    description:
      "Avenida Apoquindo es el eje principal de Las Condes. Casas y condominos con jardines en todo su recorrido desde el centro hasta Los Dominicos.",
    keywords: [
      "jardinero Avenida Apoquindo Las Condes",
      "mantenimiento jardines Avenida Apoquindo",
    ],
    lat: -33.4489,
    lng: -70.5489,
    nearbyStreets: [
      "Avenida Apoquindo (completa)",
      "Calle El Rodeo",
      "Calle La Futura",
      "Calle El Convento",
    ],
  },
  {
    slug: "la-quebrada",
    name: "La Quebrada",
    description:
      "La Quebrada es un sector residencial tranquilo en Las Condes oriente, caracterizado por parcelas grandes con jardines extensos y mucho verde.",
    keywords: [
      "jardinero La Quebrada Las Condes",
      "mantenimiento jardines La Quebrada",
      "corte cesped La Quebrada",
    ],
    lat: -33.4667,
    lng: -70.5333,
    nearbyStreets: [
      "Camino La Quebrada",
      "Calle El Litre",
      "Camino del Cerro",
      "Parcelas Los Aromos",
    ],
  },
  {
    slug: "padre-hurtado",
    name: "Padre Hurtado",
    description:
      "Sector Padre Hurtado en Las Condes, zona residencial consolidada con muchas casas de familia y jardines de tamaño mediano.",
    keywords: [
      "jardinero Padre Hurtado Las Condes",
      "mantenimiento jardines Padre Hurtado",
      "poda arboles Padre Hurtado",
    ],
    lat: -33.4533,
    lng: -70.5578,
    nearbyStreets: [
      "Avenida Padre Hurtado Sur",
      "Avenida Padre Hurtado Norte",
      "Calle María Elena",
      "Calle Los Militares",
    ],
  },
  {
    slug: "las-condes-oriente",
    name: "Las Condes Oriente",
    description:
      "Sector oriente de Las Condes, una de las zonas residenciales más exclusivas de Santiago. Jardines grandes que requieren mantenimiento profesional.",
    keywords: [
      "jardinero Las Condes oriente",
      "mantenimiento jardines Las Condes oriente",
      "corte cesped Las Condes oriente",
    ],
    lat: -33.4556,
    lng: -70.5333,
    nearbyStreets: [
      "Camino El Alba",
      "Camino Los Trapenses",
      "Avenida La Dehesa",
      "Calle El Roble",
    ],
  },
];

export const siteConfig = {
  businessName: "Superamigos",
  fullName: "Superamigos - Jardinero en Las Condes",
  phone: "+56 9 9999 9999",
  whatsapp: "56999999999",
  email: "contacto@superamigos.cl",
  siteUrl: "https://superamigos.cl",
  address: "San Carlos de Apoquindo, Las Condes, Santiago, Chile",
  description:
    "Jardinero profesional en San Carlos de Apoquindo, Los Dominicos y Las Condes oriente. Mantenimiento de jardines, poda, corte de césped y riego automático.",
  geo: {
    lat: -33.4589,
    lng: -70.5407,
  },
  hours: "Lunes a Sábado: 8:00 - 19:00",
  priceRange: "$15.000 - $45.000 / visita",
};
