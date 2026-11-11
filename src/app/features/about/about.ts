import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SITE } from '@core/config/site';
import { I18n } from '@core/i18n/i18n';
import { Section } from '@shared/ui/section/section';

@Component({
  selector: 'app-about',
  imports: [Section],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: `./about.html`,
})
export class About {
  protected readonly t = inject(I18n).t;
  protected readonly initials = SITE.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}
