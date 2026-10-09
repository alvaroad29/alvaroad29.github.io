import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE, NAV_SECTIONS } from '@core/config/site';
import { I18n } from '@core/i18n/i18n';
import { Button } from '@shared/ui/button/button';
import { Section } from '@shared/ui/section/section';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Button, Section],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
   protected readonly site = SITE;
  protected readonly sections = NAV_SECTIONS;
  protected readonly t = inject(I18n).t;
}
