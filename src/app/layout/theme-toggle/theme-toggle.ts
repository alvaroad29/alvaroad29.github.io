import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n } from '@core/i18n/i18n';
import { Theme } from '@core/theme/theme';
import { Button } from '@shared/ui/button/button';

@Component({
  selector: 'app-theme-toggle',
  imports: [Button],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      appButton
      variant="icon"
      type="button"
      [attr.aria-label]="t().a11y.darkMode"
      [attr.aria-pressed]="theme.isDark()"
      (click)="theme.toggle()"
    >
      <!-- Ambos íconos están siempre en el HTML; el CSS muestra el que corresponde -->
      <svg class="size-5 dark:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
      <svg class="hidden size-5 dark:block" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </button>
  `,
})
export class ThemeToggle {
  protected readonly theme = inject(Theme);
  protected readonly t = inject(I18n).t;
}
