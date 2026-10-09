import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n } from '@core/i18n/i18n';
import { Button } from '@shared/ui/button/button';

@Component({
  selector: 'app-language-toggle',
  imports: [Button],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      appButton
      variant="icon"
      type="button"
      [attr.aria-label]="t().a11y.changeLanguage"
      (click)="i18n.toggle()"
    >
      <span class="text-sm font-semibold">{{ i18n.otherLang().toUpperCase() }}</span>
    </button>
  `,
})
export class LanguageToggle {
  protected readonly i18n = inject(I18n);
  protected readonly t = this.i18n.t;
}
