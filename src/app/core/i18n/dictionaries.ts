export type Lang = 'es' | 'en';

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
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    builtWith: 'Hecho con Angular y Tailwind',
  },
};

// El tipo sale del objeto en español: `en` debe tener EXACTAMENTE las mismas claves.
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
  },
  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Built with Angular and Tailwind',
  },
};

export const dictionaries: Record<Lang, Dictionary> = { es, en };
