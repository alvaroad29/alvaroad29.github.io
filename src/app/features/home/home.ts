import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { Hero } from '@features/hero/hero';
import { About } from '@features/about/about';
import { Skills } from '@features/skills/skills';
import { Projects } from '@features/projects/projects/projects';
import { Contact } from '@features/contact/contact';
import { I18n } from '@core/i18n/i18n';
import { Seo } from '@core/seo/seo';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Skills, Projects, Contact],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly seo = inject(Seo);
  private readonly t = inject(I18n).t;

  constructor() {
    effect(() => this.seo.update(this.t().meta));
  }
}
