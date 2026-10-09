import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class Theme {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly _mode = signal<ThemeMode>(this.readInitialMode());

  readonly mode = this._mode.asReadonly();
  readonly isDark = computed(() => this._mode() === 'dark');


  constructor() {
    // Efecto secundario real: tocar el DOM fuera de Angular.
    effect(() => {
      if (!this.isBrowser) return;
      this.document.documentElement.classList.toggle('dark', this.isDark());
    });
  }
  

  toggle(): void {
    const next: ThemeMode = this.isDark() ? 'light' : 'dark';
    this._mode.set(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage bloqueado: el cambio vale solo para esta visita.
    }
  }

  /** La decisión ya la tomó el script del <head>; acá solo leemos su resultado. */
  private readInitialMode(): ThemeMode {
    if (!this.isBrowser) return 'light';
    return this.document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  }
}
