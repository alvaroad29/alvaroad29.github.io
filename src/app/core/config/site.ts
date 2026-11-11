export const SITE = {
  name: 'Alvaro Diaz',
  email: 'alvaroad29012001@gmail.com',
  github: 'https://github.com/alvaroad29',
  linkedin: 'https://www.linkedin.com/in/alvaro-diaz-61145a29a/',
  cvUrl: '/cv-alvaro-diaz.pdf',
  web3formsKey: '924146b5-a96e-4c51-af73-3aa3c2d255a9',
} as const;

/** IDs de las secciones del scroll. También son las claves de `nav` en el diccionario. */
export const NAV_SECTIONS = ['about', 'skills', 'projects', 'contact'] as const;

export type NavSection = (typeof NAV_SECTIONS)[number];
