export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  bullets: string[];
  iconSrc: string; // served from /public
};

export const services: Service[] = [
  {
    slug: "outsourcing-contable",
    title: "Outsourcing Contable",
    short: "Precisión y claridad en registros, reportes y estados financieros.",
    long:
      "Nos encargamos del registro contable, cierres y reportes para que tengas control y visibilidad. Trabajamos con procesos ordenados, trazabilidad y entregables claros para la toma de decisiones.",
    bullets: [
      "Registro contable mensual y cierres",
      "Conciliaciones y control de cuentas",
      "Estados financieros y reportes gerenciales",
      "Soporte documentario y trazabilidad",
    ],
    iconSrc: "/assets/icon-out-cont.png",
  },
  {
    slug: "outsourcing-administrativo",
    title: "Outsourcing Administrativo",
    short: "Procesos internos más ágiles y eficientes.",
    long:
      "Estandarizamos y operamos procesos administrativos clave para reducir fricción, mejorar tiempos y mantener control de la operación diaria.",
    bullets: [
      "Control y orden documental",
      "Cuentas por pagar / cobrar (seguimiento)",
      "Gestión de proveedores y compras",
      "Reportes y soporte operativo",
    ],
    iconSrc: "/assets/out-adm.png",
  },
  {
    slug: "outsourcing-planilla",
    title: "Outsourcing de Planilla",
    short: "Gestión segura y confiable de sueldos y beneficios.",
    long:
      "Gestionamos la planilla con consistencia y cumplimiento. Calculamos remuneraciones y entregables para evitar contingencias y asegurar una experiencia ordenada para tu equipo.",
    bullets: [
      "Cálculo de remuneraciones y beneficios",
      "Boletas y entregables mensuales",
      "Altas, bajas y cambios del personal",
      "Control y soporte ante consultas",
    ],
    iconSrc: "/assets/out-pla-icon.png",
  },
  {
    slug: "asesoria-societaria",
    title: "Asesoría Societaria",
    short: "Constitución, modificación y liquidación de sociedades.",
    long:
      "Acompañamos decisiones societarias con documentación correcta y procesos claros para que tu empresa se mantenga al día y sin riesgos por formalidades.",
    bullets: [
      "Constitución y formalización",
      "Modificaciones societarias y poderes",
      "Regularización y libros societarios",
      "Disolución y liquidación (cuando aplique)",
    ],
    iconSrc: "/assets/icon-as-societaria.png",
  },
  {
    slug: "gestion-laboral",
    title: "Gestión Laboral",
    short: "Cumplimiento normativo y asesoría en contratación.",
    long:
      "Te ayudamos a operar con reglas claras en contratación y gestión laboral, reduciendo riesgos y manteniendo consistencia documental y procedimental.",
    bullets: [
      "Contratos, adendas y documentación",
      "Políticas internas y soporte laboral",
      "Gestión de incidencias y control",
      "Preparación ante fiscalizaciones/inspecciones",
    ],
    iconSrc: "/assets/icon-gest-lab.png",
  },
  {
    slug: "consultoria-proyectos",
    title: "Consultoría y Proyectos",
    short: "Planes estratégicos y capacitación para crecer con solidez.",
    long:
      "Diseñamos e implementamos mejoras puntuales: diagnóstico, plan, ejecución y seguimiento. Ideal para ordenar procesos, mejorar control y acelerar resultados.",
    bullets: [
      "Diagnóstico y plan de mejora",
      "Diseño/implementación de procesos",
      "KPIs y control de gestión",
      "Capacitación y acompañamiento",
    ],
    iconSrc: "/assets/icon-cons-proy.png",
  },
  {
    slug: "gestion-tributaria",
    title: "Gestión Tributaria",
    short: "Estrategias fiscales eficientes y soporte en fiscalizaciones.",
    long:
      "Aseguramos cumplimiento y orden tributario con enfoque preventivo. Te acompañamos en revisiones, requerimientos y planificación para reducir contingencias.",
    bullets: [
      "Cumplimiento y calendario tributario",
      "Revisión y consistencia de información",
      "Soporte en fiscalizaciones y requerimientos",
      "Prevención y reducción de contingencias",
    ],
    iconSrc: "/assets/icon-gest-trib.png",
  },
];