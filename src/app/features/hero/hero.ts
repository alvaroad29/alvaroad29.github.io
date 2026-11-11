import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '@core/config/site';
import { I18n } from '@core/i18n/i18n';
import { Button } from '@shared/ui/button/button';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, Button],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: `./hero.html`,
})
export class Hero {
  protected readonly site = SITE;
  protected readonly t = inject(I18n).t;
}
