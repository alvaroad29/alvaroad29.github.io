import { Localized } from '@core/i18n/dictionaries';

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly summary: Localized;
  readonly stack: readonly string[];
  readonly demoUrl?: string;
  readonly repoUrl?: string;
  readonly highlights: readonly Localized[];
  /** Ruta dentro de `public/`, ej. 'projects/mi-app.webp'. Sin imagen se muestra un degradado. */
  readonly image?: string;
}
