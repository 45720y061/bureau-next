// ─────────────────────────────────────────────────────────────────────────────
// Bureau Consulting — Fuente central de contenido de Servicios
// Todos los componentes (Home, /servicios, /servicios/[slug]) consumen este
// archivo para evitar duplicación.
// Slugs actualizados en Fase 3 SEO. Las URLs antiguas redirigen via
// next.config.mjs con permanent: true.
// ─────────────────────────────────────────────────────────────────────────────

export type ServiceCategory = {
  /** id usado como anchor: /servicios#servicios-contables */
  id: string;
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  /** Referencia al id de ServiceCategory */
  categoryId: string;
  /** Título visible (sin "Outsourcing" como naming principal) */
  title: string;
  /** Descripción corta para cards de Home y grid de /servicios */
  short: string;
  /** Subtítulo/bajada para la página individual */
  bajada: string;
  /** Párrafo de introducción para la página individual */
  intro: string;
  /** Lista "Puede incluir" */
  includes: string[];
  /** Beneficio para el cliente */
  benefit: string;
  /** Texto del CTA contextual de cada servicio */
  cta: string;
  /** Párrafo "Cómo trabajamos" adaptado por servicio */
  howWeWork: string;
  /** Ruta al ícono en /public */
  iconSrc: string;
  /** Meta title para la página individual */
  seoTitle: string;
  /** Meta description para la página individual */
  seoDescription: string;
  /** Keywords orientativas (usadas en metadata.keywords) */
  keywords: string[];
  // ── Aliases para compatibilidad backward ──────────────────────────────────
  /** @deprecated Usar intro */
  long: string;
  /** @deprecated Usar includes */
  bullets: string[];
};

// ─────────────────────────────────────────────────────────────────────────────
// Categorías madre
// ─────────────────────────────────────────────────────────────────────────────

export const serviceCategories: ServiceCategory[] = [
  {
    id: "servicios-contables",
    title: "Servicios contables",
    description:
      "Acompañamiento en contabilidad, planillas y obligaciones tributarias con criterio técnico, orden y continuidad.",
  },
  {
    id: "servicios-legales",
    title: "Servicios legales",
    description:
      "Soporte jurídico para la estructura societaria y la gestión laboral de la empresa.",
  },
  {
    id: "servicios-administrativos",
    title: "Servicios administrativos",
    description:
      "Respaldo administrativo para sostener procesos internos con mayor organización y seguimiento.",
  },
  {
    id: "gestion-y-proyectos",
    title: "Gestión y proyectos",
    description:
      "Acompañamiento gerencial para estructurar iniciativas, proyectos y procesos con planificación y criterio.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Servicios
// ─────────────────────────────────────────────────────────────────────────────

export const services: Service[] = [
  // ── Servicios contables ───────────────────────────────────────────────────
  {
    slug: "gestion-contable",
    categoryId: "servicios-contables",
    title: "Gestión contable",
    short:
      "Ordenamos y gestionamos la información contable de su empresa para respaldar el cumplimiento, el control y la toma de decisiones.",
    bajada:
      "Acompañamiento contable para empresas que necesitan orden, continuidad y criterio técnico en su gestión.",
    intro:
      "La gestión contable requiere más que cumplimiento operativo. Requiere consistencia, seguimiento y una lógica de trabajo que permita sostener la operación con mayor claridad. En Bureau Consulting acompañamos a las empresas con una mirada profesional y cercana, integrando soporte técnico, metodología y calidad de servicio para contribuir a una gestión contable más ordenada y útil para el negocio.",
    includes: [
      "Procesamiento mensual de información contable.",
      "Preparación de información para fines tributarios.",
      "Elaboración de estados financieros.",
      "Informes contables para gerencia, directorio o casa matriz.",
      "Actualización y mejora de procesos contables.",
      "Preparación y revisión de libros electrónicos.",
      "Liquidación de impuestos vinculados a la gestión contable.",
      "Atención de fiscalizaciones.",
    ],
    benefit:
      "Este servicio ayuda a que la empresa cuente con una base contable más clara, consistente y preparada para responder a sus necesidades de gestión, cumplimiento y toma de decisiones.",
    cta: "Conversemos sobre la estructura contable que su empresa necesita.",
    howWeWork:
      "En Bureau Consulting desarrollamos la gestión contable con una lógica de acompañamiento profesional, orientada a la calidad, la eficiencia y la continuidad. Nos articulamos con cada cliente para brindar soporte con criterio técnico, orden y cercanía ejecutiva en cada etapa del proceso.",
    iconSrc: "/assets/icon-out-cont.png",
    seoTitle: "Gestión contable para empresas | Bureau Consulting",
    seoDescription:
      "Acompañamiento contable con criterio técnico, orden y continuidad. Procesamiento mensual, estados financieros, libros electrónicos y soporte ante fiscalizaciones.",
    keywords: [
      "gestión contable empresas",
      "outsourcing contable Perú",
      "contabilidad empresarial Lima",
      "estados financieros",
      "libros electrónicos SUNAT",
    ],
    // Aliases backward-compat
    get long() { return this.intro; },
    get bullets() { return this.includes; },
  },
  {
    slug: "administracion-de-planillas",
    categoryId: "servicios-contables",
    title: "Administración de planillas",
    short:
      "Gestionamos procesos de planilla con precisión, continuidad y cumplimiento de las obligaciones laborales correspondientes.",
    bajada:
      "Soporte especializado para procesos de planillas que requieren precisión, orden y seguimiento oportuno.",
    intro:
      "La gestión de planillas forma parte de los procesos más sensibles y recurrentes de la operación empresarial. Por eso debe comunicar seguridad, consistencia y manejo ordenado. En Bureau Consulting abordamos esta línea desde una lógica de acompañamiento profesional que prioriza precisión operativa, continuidad y coordinación con la gestión administrativa y contable de la empresa.",
    includes: [
      "Personalización de la planilla según la estructura de la empresa.",
      "Registro de información mensual o quincenal.",
      "Elaboración de planillas.",
      "Cálculo y seguimiento de obligaciones laborales.",
      "Cumplimiento de obligaciones tributarias vinculadas a planilla.",
      "Gestión de aportes a sistemas de pensiones.",
      "Coordinación de obligaciones relacionadas con seguridad social.",
      "Preparación de información para entidades administradoras.",
    ],
    benefit:
      "Este servicio ayuda a que la empresa gestione sus planillas con mayor orden, reduzca riesgos operativos y mantenga continuidad en una función recurrente y crítica para la organización.",
    cta: "Evaluemos una forma de acompañamiento para su gestión de planillas.",
    howWeWork:
      "En Bureau Consulting desarrollamos la administración de planillas con una lógica de acompañamiento profesional, orientada a la precisión, el cumplimiento y la continuidad operativa. Nos articulamos con cada cliente para brindar soporte con criterio técnico y cercanía ejecutiva en una función que impacta directamente a las personas de la organización.",
    iconSrc: "/assets/out-pla-icon.png",
    seoTitle: "Administración de planillas para empresas | Bureau Consulting",
    seoDescription:
      "Gestión de planillas con precisión y cumplimiento laboral. Cálculo de obligaciones, aportes a pensiones y soporte continuo para su empresa.",
    keywords: [
      "administración de planillas",
      "outsourcing de planilla Perú",
      "gestión de nómina Lima",
      "obligaciones laborales empresas",
      "aportes pensiones AFP",
    ],
    get long() { return this.intro; },
    get bullets() { return this.includes; },
  },
  {
    slug: "gestion-tributaria",
    categoryId: "servicios-contables",
    title: "Gestión tributaria",
    short:
      "Acompañamos el cumplimiento tributario mensual y anual, con criterio técnico y seguimiento oportuno.",
    bajada:
      "Soporte tributario orientado a una gestión más clara, ordenada y alineada con la operación de la empresa.",
    intro:
      "La gestión tributaria requiere una combinación de criterio técnico, seguimiento y articulación con la realidad operativa de la empresa. En Bureau Consulting la abordamos como una línea de acompañamiento seria, clara y práctica, orientada a sostener una dimensión crítica del negocio con mayor orden y respaldo profesional.",
    includes: [
      "Planeamiento tributario.",
      "Revisión y optimización de obligaciones tributarias.",
      "Gestión de devoluciones de tributos.",
      "Soporte en fiscalizaciones.",
      "Cumplimiento mensual de obligaciones tributarias.",
      "Cumplimiento anual de obligaciones tributarias.",
    ],
    benefit:
      "Este servicio ayuda a que la empresa mantenga una gestión tributaria más ordenada, con respaldo técnico y mejor articulación con su realidad contable y operativa.",
    cta: "Conversemos sobre el soporte tributario que requiere su operación.",
    howWeWork:
      "En Bureau Consulting desarrollamos la gestión tributaria con una lógica de acompañamiento profesional, orientada a la calidad, la eficiencia y la continuidad. Nos articulamos con cada cliente para brindar soporte con criterio técnico y seguimiento oportuno, anticipando obligaciones y reduciendo contingencias.",
    iconSrc: "/assets/icon-gest-trib.png",
    seoTitle: "Gestión tributaria para empresas | Bureau Consulting",
    seoDescription:
      "Soporte tributario con criterio técnico: planeamiento, cumplimiento mensual y anual, devoluciones y soporte en fiscalizaciones SUNAT para su empresa.",
    keywords: [
      "gestión tributaria empresarial",
      "outsourcing tributario Perú",
      "cumplimiento tributario Lima",
      "planeamiento tributario",
      "soporte fiscalizaciones SUNAT",
    ],
    get long() { return this.intro; },
    get bullets() { return this.includes; },
  },
  // ── Servicios legales ─────────────────────────────────────────────────────
  {
    slug: "asesoria-societaria",
    categoryId: "servicios-legales",
    title: "Asesoría societaria",
    short:
      "Brindamos soporte legal para la constitución, funcionamiento, reorganización o cierre formal de sociedades.",
    bajada:
      "Criterio jurídico para acompañar la estructura societaria y las decisiones corporativas de la empresa.",
    intro:
      "Los asuntos societarios requieren respaldo legal, claridad y comprensión del contexto empresarial. En Bureau Consulting esta línea se presenta como un acompañamiento que no se limita a una respuesta jurídica puntual, sino que aporta criterio para decisiones que impactan la estructura y funcionamiento formal de la empresa.",
    includes: [
      "Constitución de sociedades.",
      "Organización y actualización de libros societarios.",
      "Elaboración y revisión de actas.",
      "Asesoría en procesos de disolución, liquidación y extinción de empresas.",
      "Planificación del proceso societario correspondiente.",
      "Asesoría legal durante el proceso.",
      "Liquidación de personal, cuando corresponda.",
      "Representación como liquidador, cuando sea aplicable.",
    ],
    benefit:
      "Este servicio ayuda a que la empresa aborde sus asuntos societarios con mayor orden, respaldo legal y claridad en cada etapa del proceso.",
    cta: "Coordinemos una conversación sobre sus necesidades societarias.",
    howWeWork:
      "En Bureau Consulting desarrollamos la asesoría societaria con una lógica de acompañamiento profesional, orientada a la claridad, el orden formal y la continuidad jurídica. Nos articulamos con cada cliente para brindar soporte con criterio legal, precisión documental y cercanía ejecutiva en cada etapa del proceso.",
    iconSrc: "/assets/icon-as-societaria.png",
    seoTitle: "Asesoría societaria para empresas | Bureau Consulting",
    seoDescription:
      "Soporte legal para constitución, modificación y liquidación de sociedades. Libros societarios, actas, representación legal y acompañamiento en procesos corporativos.",
    keywords: [
      "asesoría societaria Perú",
      "constitución de sociedades Lima",
      "libros societarios",
      "disolución de empresa Perú",
      "asesoría legal corporativa",
    ],
    get long() { return this.intro; },
    get bullets() { return this.includes; },
  },
  {
    slug: "asesoria-laboral",
    categoryId: "servicios-legales",
    title: "Asesoría laboral",
    short:
      "Acompañamos asuntos laborales, contratos, obligaciones formales y procesos inspectivos con criterio profesional.",
    bajada:
      "Respaldo profesional para abordar asuntos laborales con mayor claridad, orden y criterio empresarial.",
    intro:
      "La dimensión laboral exige criterio, seguimiento y una mirada alineada con la operación de la empresa. En Bureau Consulting esta línea comunica acompañamiento profesional y cercanía ejecutiva, evitando un tono excesivamente normativo o defensivo.",
    includes: [
      "Elaboración y revisión de contratos de trabajo.",
      "Soporte en contratación de personal extranjero.",
      "Revisión de beneficios laborales.",
      "Acompañamiento en el cumplimiento de obligaciones formales.",
      "Soporte en procesos inspectivos ante la autoridad laboral.",
    ],
    benefit:
      "Este servicio ayuda a que la empresa gestione sus obligaciones laborales con mayor claridad, respaldo profesional y criterio preventivo.",
    cta: "Exploremos una forma de acompañamiento para su gestión laboral.",
    howWeWork:
      "En Bureau Consulting desarrollamos la asesoría laboral con una lógica de acompañamiento profesional, orientada a la calidad, la eficiencia y la continuidad. Nos articulamos con cada cliente para brindar soporte con criterio técnico-legal, orden procedimental y cercanía ejecutiva ante cada necesidad o contingencia laboral.",
    iconSrc: "/assets/icon-gest-lab.png",
    seoTitle: "Asesoría laboral para empresas | Bureau Consulting",
    seoDescription:
      "Acompañamiento laboral con criterio profesional: contratos, beneficios, obligaciones formales y procesos inspectivos.",
    keywords: [
      "asesoría laboral para empresas",
      "gestión laboral Lima",
      "contratos de trabajo Perú",
      "inspecciones laborales",
    ],
    get long() { return this.intro; },
    get bullets() { return this.includes; },
  },
  // ── Servicios administrativos ─────────────────────────────────────────────
  {
    slug: "gestion-administrativa",
    categoryId: "servicios-administrativos",
    title: "Gestión administrativa",
    short:
      "Reforzamos procesos administrativos clave para dar mayor orden, continuidad y seguimiento a la operación.",
    bajada:
      "Apoyo administrativo para sostener procesos clave con mayor organización, continuidad y capacidad de seguimiento.",
    intro:
      "La gestión administrativa es una base silenciosa pero decisiva para la continuidad operativa. En Bureau Consulting esta línea se presenta como una forma de acompañamiento que ayuda a reforzar procesos relevantes de la operación con orden, seguimiento y respaldo profesional.",
    includes: [
      "Soporte para el inicio de operaciones en el Perú.",
      "Representación legal, según el alcance requerido.",
      "Domicilio fiscal, de acuerdo con las necesidades del cliente.",
      "Gestión de cuentas por cobrar.",
      "Gestión de cuentas por pagar.",
      "Coordinación de pagos a proveedores.",
      "Apoyo en pagos de planillas, impuestos y bancos.",
      "Control de desembolsos.",
      "Elaboración o seguimiento de flujos de caja.",
      "Apoyo en presupuestos.",
    ],
    benefit:
      "Este servicio ayuda a reforzar el orden administrativo de la empresa, mejorar el seguimiento de procesos internos y dar mayor continuidad a funciones de soporte que impactan directamente en la operación.",
    cta: "Conversemos sobre el soporte administrativo que su empresa requiere.",
    howWeWork:
      "En Bureau Consulting desarrollamos la gestión administrativa con una lógica de acompañamiento profesional, orientada a la calidad, el orden y la continuidad operativa. Nos articulamos con cada cliente para brindar soporte con criterio técnico y cercanía ejecutiva, reforzando los procesos de soporte que sostienen la operación del negocio.",
    iconSrc: "/assets/out-adm.png",
    seoTitle: "Gestión administrativa para empresas | Bureau Consulting",
    seoDescription:
      "Apoyo administrativo integral: cuentas por cobrar y pagar, flujos de caja, pagos, domicilio fiscal y soporte para el inicio de operaciones en Perú.",
    keywords: [
      "gestión administrativa empresas",
      "outsourcing administrativo Perú",
      "cuentas por cobrar y pagar Lima",
      "flujo de caja empresarial",
      "domicilio fiscal Lima",
    ],
    get long() { return this.intro; },
    get bullets() { return this.includes; },
  },
  // ── Gestión y proyectos ───────────────────────────────────────────────────
  {
    slug: "consultoria-de-gestion-y-proyectos",
    categoryId: "gestion-y-proyectos",
    title: "Consultoría de gestión y proyectos",
    short:
      "Ayudamos a estructurar iniciativas, procesos y proyectos con planificación, orden y criterio gerencial.",
    bajada:
      "Acompañamiento gerencial para ordenar iniciativas, estructurar proyectos y alinear la gestión con los objetivos del negocio.",
    intro:
      "Los proyectos empresariales necesitan más que intención. Requieren objetivos claros, planificación, presupuestos, herramientas de gestión y capacidad de seguimiento. Bureau Consulting brinda acompañamiento para ordenar iniciativas y convertirlas en planes de acción más claros y ejecutables.",
    includes: [
      "Planificación estratégica.",
      "Elaboración de planes operativos.",
      "Preparación y seguimiento de presupuestos.",
      "Desarrollo de herramientas de gestión.",
      "Elaboración de manuales de funciones.",
      "Soporte en actividades y proyectos específicos.",
      "Acompañamiento en proyectos de inversión.",
      "Soporte en proyectos de mantenimiento.",
      "Capacitación.",
      "Organización de eventos corporativos.",
    ],
    benefit:
      "Este servicio ayuda a que la empresa estructure mejor sus iniciativas, ordene la ejecución y cuente con acompañamiento profesional para avanzar con mayor claridad.",
    cta: "Evaluemos cómo acompañar su próximo proyecto o necesidad de gestión.",
    howWeWork:
      "En Bureau Consulting desarrollamos la consultoría de gestión y proyectos con una lógica de acompañamiento profesional, orientada a la claridad, el orden y la ejecución efectiva. Nos articulamos con cada cliente para brindar soporte con criterio gerencial, planificación y cercanía ejecutiva en cada fase del proyecto.",
    iconSrc: "/assets/icon-cons-proy.png",
    seoTitle: "Consultoría de gestión y proyectos | Bureau Consulting",
    seoDescription:
      "Acompañamiento gerencial para estructurar proyectos, planificar operaciones y mejorar procesos con criterio profesional. Planes operativos, presupuestos y herramientas de gestión.",
    keywords: [
      "consultoría de gestión empresarial",
      "gestión de proyectos Lima",
      "planificación estratégica Perú",
      "planes operativos empresas",
      "consultoría de proyectos de inversión",
    ],
    get long() { return this.intro; },
    get bullets() { return this.includes; },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/** Retorna los servicios agrupados por categoría */
export function getServicesByCategory(): Array<{
  category: ServiceCategory;
  services: Service[];
}> {
  return serviceCategories.map((cat) => ({
    category: cat,
    services: services.filter((s) => s.categoryId === cat.id),
  }));
}
