export type Lang = 'es' | 'en';

/** Para textos que viven en datos (ej. proyectos) y no en el diccionario. */
export type Localized = Record<Lang, string>;

const es = {
  nav: {
    about: 'Sobre mí',
    skills: 'Skills',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  a11y: {
    mainNav: 'Navegación principal',
    darkMode: 'Modo oscuro',
    changeLanguage: 'Cambiar idioma',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    skipToContent: 'Saltar al contenido',
  },
  hero: {
    greeting: 'Hola, soy',
    role: 'Desarrollador .NET & Angular',
    description:
      'Programador universitario graduado, apasionado por las aplicaciones web con .NET y Angular. Busco mi primer trabajo para seguir creciendo en desarrollo full stack.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Contactame',
    ctaCv: 'Descargar CV',
  },
  about: {
    paragraphs: [
      'Soy Programador Universitario graduado de la Universidad Nacional de Tucumán (2022–2025, promedio 9,19) y vivo en Salta, Argentina. Me apasiona el desarrollo full stack con .NET y Angular, las APIs REST y las buenas prácticas de ingeniería de software.',
      'Desarrollé un proyecto final en equipo (una plataforma de lectura con roles y moderación) y un proyecto personal con IA, refresh tokens y servicios externos. Busco mi primer trabajo como desarrollador para aprender y aportar dentro de un equipo.',
    ],
  },
  skills: {
    groups: {
      backend: 'Backend',
      frontend: 'Frontend',
      tools: 'Herramientas',
      databases: 'Bases de datos'
    },
  },
  projects: {
    filterLabel: 'Filtrar por tecnología',
    all: 'Todos',
    demo: 'Ver demo',
    code: 'Ver código',
  },
  contact: {
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ¿Hablamos? Escribime o completá el formulario.',
    name: 'Nombre',
    email: 'Email',
    message: 'Mensaje',
    send: 'Enviar mensaje',
    sending: 'Enviando...',
    success: '¡Gracias! Tu mensaje fue enviado.',
    error: 'No se pudo enviar el mensaje. Probá de nuevo o escribime por email.',
    validation: {
      required: 'Este campo es obligatorio.',
      email: 'Ingresá un email válido.',
      minLength: 'Escribí al menos 10 caracteres.',
    },
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    builtWith: 'Hecho con Angular y Tailwind',
  },
  meta: {
    title: 'Alvaro Diaz | Desarrollador .NET & Angular',
    description:
      'Portafolio de Alvaro Diaz, programador universitario y desarrollador full stack con .NET y Angular. Proyectos, skills y contacto.',
  },
  notFound: {
    title: 'Página no encontrada',
    text: 'La página que buscás no existe o fue movida.',
    back: 'Volver al inicio',
  },
};

export type Dictionary = typeof es;

const en: Dictionary = {
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },
  a11y: {
    mainNav: 'Main navigation',
    darkMode: 'Dark mode',
    changeLanguage: 'Change language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skipToContent: 'Skip to content',
  },
  hero: {
    greeting: "Hi, I'm",
    role: '.NET & Angular Developer',
    description:
      "Graduated university programmer, passionate about web applications built with .NET and Angular. I'm looking for my first job to keep growing in full stack development.",
    ctaProjects: 'View projects',
    ctaContact: 'Contact me',
    ctaCv: 'Download CV',
  },
  about: {
    paragraphs: [
      "I'm a graduate of the Universidad Nacional de Tucumán's university programming degree (2022–2025, GPA 9.19) and I live in Salta, Argentina. I'm passionate about full stack development with .NET and Angular, REST APIs and software engineering best practices.",
      "I built a team capstone project (a reading platform with roles and moderation) and a personal project featuring AI, refresh tokens and external services. I'm looking for my first developer job to learn and contribute within a team.",
    ],
  },
  skills: {
    groups: {
      backend: 'Backend',
      frontend: 'Frontend',
      tools: 'Tools',
      databases: 'Databases'
    },
  },
  projects: {
    filterLabel: 'Filter by technology',
    all: 'All',
    demo: 'Live demo',
    code: 'View code',
  },
  contact: {
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Let's talk! Email me or fill in the form.",
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send message',
    sending: 'Sending...',
    success: 'Thank you! Your message has been sent.',
    error: 'The message could not be sent. Try again or email me directly.',
    validation: {
      required: 'This field is required.',
      email: 'Enter a valid email address.',
      minLength: 'Write at least 10 characters.',
    },
  },
  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Built with Angular and Tailwind',
  },
  meta: {
    title: 'Alvaro Diaz | .NET & Angular Developer',
    description:
      "Portfolio of Alvaro Diaz, university programmer and full stack developer with .NET and Angular. Projects, skills and contact.",
  },
  notFound: {
    title: 'Page not found',
    text: "The page you're looking for doesn't exist or has been moved.",
    back: 'Back to home',
  },
};

export const dictionaries: Record<Lang, Dictionary> = { es, en };
