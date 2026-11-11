import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { I18n } from '@core/i18n/i18n';
import { Button } from '@shared/ui/button/button';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, Button],
  templateUrl: './not-found.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFound {
  protected readonly t = inject(I18n).t;

  constructor() {
    // Que los buscadores no indexen la página de error.
    const meta = inject(Meta);
    const tag = meta.addTag({ name: 'robots', content: 'noindex' });
    inject(DestroyRef).onDestroy(() => meta.removeTagElement(tag!));
  }
}
