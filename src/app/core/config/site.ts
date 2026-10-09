export const SITE = {
  name: 'Alvaro Diaz',
} as const;

/** IDs de las secciones del scroll. También son las claves de `nav` en el diccionario. */
export const NAV_SECTIONS = ['about', 'skills', 'projects', 'contact'] as const;

export type NavSection = (typeof NAV_SECTIONS)[number];
