import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SITE } from '@core/config/site';
import { I18n } from '@core/i18n/i18n';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="border-t border-border py-8 text-center text-sm text-muted">
      <p>© {{ year }} {{ site.name }}. {{ t().footer.rights }}</p>
      <p class="mt-1">{{ t().footer.builtWith }}</p>
    </footer>
  `,
})
export class Footer {
  protected readonly site = SITE;
  protected readonly t = inject(I18n).t;
  protected readonly year = new Date().getFullYear();
}
