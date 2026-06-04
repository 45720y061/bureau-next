/**
 * src/content/leadership.ts
 * Fuente única de verdad para perfiles del equipo gerencial de Bureau Consulting.
 * No publicar datos personales sensibles (DNI, teléfonos, correos personales).
 * No inventar años, clientes, certificaciones, premios ni resultados.
 */

export interface LeaderProfile {
  slug: string;
  name: string;
  role: string;
  aporte: string; // frase corta de aporte profesional (máx ~60 chars)
  bio: string; // párrafo institucional breve
  areas: string[]; // áreas de especialidad
  experiencia: string; // párrafo de experiencia relevante resumida
  cta: string; // texto del CTA final de la página individual
  img: string; // ruta local a foto
  flipped?: boolean; // espejo horizontal de la foto si aplica
}

export const leaders: LeaderProfile[] = [
  {
    slug: "fryda-argote",
    name: "Fryda Argote",
    role: "Gerente General",
    aporte: "Dirección y acompañamiento ejecutivo",
    bio: "Lidera la visión de Bureau Consulting, orientando el acompañamiento de la firma hacia relaciones de confianza, calidad de servicio y cercanía con cada cliente. Su dirección articula las capacidades del equipo para ofrecer un servicio coherente, profesional y orientado a los resultados del negocio.",
    areas: [
      "Dirección general",
      "Gestión de relaciones con clientes",
      "Alineación estratégica de servicios",
      "Calidad de servicio y mejora continua",
    ],
    experiencia:
      "Con formación y trayectoria en dirección empresarial, Fryda orienta la firma hacia un modelo de acompañamiento cercano y criterio profesional, asegurando que cada cliente reciba atención con visión de conjunto y capacidad de respuesta.",
    cta: "¿Desea conversar sobre cómo Bureau Consulting puede acompañar su gestión? Escríbanos y coordinamos una primera conversación.",
    img: "/assets/fryda-retrato.png",
    flipped: false,
  },
  {
    slug: "roxana-argote-lozano",
    name: "Roxana Argote Lozano",
    role: "Gerente Legal",
    aporte: "Criterio jurídico corporativo",
    bio: "Aporta experiencia en asesoría legal corporativa, societaria, comercial y laboral, con foco en decisiones empresariales que requieren orden, respaldo institucional y claridad. Acompaña a los clientes en la gestión legal de sus operaciones con criterio técnico y enfoque práctico.",
    areas: [
      "Asesoría societaria y corporativa",
      "Derecho comercial y contratos",
      "Derecho laboral empresarial",
      "Cumplimiento normativo e institucional",
    ],
    experiencia:
      "Su experiencia en asesoría legal corporativa le permite acompañar a empresas en decisiones que requieren respaldo jurídico claro: constitución y modificación de sociedades, gestión contractual, relaciones laborales y cumplimiento normativo para la operación del negocio.",
    cta: "Si su empresa requiere criterio jurídico corporativo con enfoque práctico, conversemos sobre cómo podemos apoyarle.",
    img: "/assets/rochi-retrato.png",
    flipped: true,
  },
  {
    slug: "juan-ayarza-richter",
    name: "Juan Ayarza Richter",
    role: "Gerente de Proyecto",
    aporte: "Gestión, planeamiento y mejora operativa",
    bio: "Aporta una mirada integral para ordenar proyectos, alinear procesos y acompañar iniciativas con criterio gerencial. Su enfoque combina planeamiento estructurado con capacidad de adaptación para responder a las necesidades reales de cada organización.",
    areas: [
      "Gestión y dirección de proyectos",
      "Planeamiento estratégico y operativo",
      "Mejora de procesos organizacionales",
      "Alineación presupuestal y seguimiento",
    ],
    experiencia:
      "Con experiencia en estructuración y seguimiento de proyectos en contextos organizacionales complejos, Juan aporta una perspectiva gerencial que va desde el diseño de iniciativas hasta su implementación, asegurando coherencia entre los objetivos definidos y la ejecución operativa.",
    cta: "Si su empresa necesita ordenar proyectos o mejorar procesos con criterio gerencial, conversemos.",
    img: "/assets/juan-retrato.png",
    flipped: true,
  },
  {
    slug: "alejandro-rocha",
    name: "Alejandro Rocha",
    role: "Gerente de Contabilidad",
    aporte: "Metodología contable y control",
    bio: "Aporta experiencia en outsourcing contable, liderazgo de equipos y procesos financieros, fortaleciendo la capacidad de Bureau para acompañar operaciones con orden, seguimiento y criterio técnico. Su gestión asegura que los clientes cuenten con información confiable para la toma de decisiones.",
    areas: [
      "Outsourcing y tercerización contable",
      "Reporting financiero y control",
      "Gestión de equipos contables",
      "Mejora de procesos financieros",
    ],
    experiencia:
      "Con experiencia en liderazgo de operaciones contables y procesos de tercerización, Alejandro aporta metodología y orden al trabajo contable de los clientes, con foco en la confiabilidad de la información, el cumplimiento de plazos y la mejora continua de los procesos de registro y reporte.",
    cta: "Si su empresa busca orden contable, seguimiento financiero y criterio técnico, conversemos sobre cómo podemos acompañarle.",
    img: "/assets/alejandro-ia.png",
    flipped: false,
  },
];
