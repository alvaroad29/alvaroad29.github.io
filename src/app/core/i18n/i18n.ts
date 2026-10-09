import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { Lang, dictionaries } from './dictionaries';

const STORAGE_KEY = 'lang';

@Injectable({ providedIn: 'root' })
export class I18n {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly _lang = signal<Lang>(this.readInitialLang());

  /** Idioma actual (solo lectura desde afuera). */
  readonly lang = this._lang.asReadonly();
  /** signal para acceder al diccionario del idioma actual. En templates: `t().nav.about` */
  readonly t = computed(() => dictionaries[this._lang()]);
  /** El idioma al que cambiaría el toggle. */
  readonly otherLang = computed<Lang>(() => (this._lang() === 'es' ? 'en' : 'es'));

  constructor() {
    // Mantiene <html lang="..."> sincronizado (importante para accesibilidad y SEO).
    effect(() => {
      if (this.isBrowser) {
        this.document.documentElement.lang = this._lang();
      }
    });
  }

  toggle(): void {
    const next = this.otherLang();
    this._lang.set(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage bloqueado (modo privado, etc.): simplemente no persistimos.
    }
  }

  private readInitialLang(): Lang {
    // En Node (prerender) siempre español: es el HTML que verán buscadores y previews.
    if (!this.isBrowser) return 'es';
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'es' || stored === 'en') return stored;
    } catch {
      // ignoramos y caemos al idioma del navegador
    }
    return navigator.language.startsWith('en') ? 'en' : 'es';
  }
}
