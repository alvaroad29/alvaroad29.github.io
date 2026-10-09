import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_SECTIONS, SITE } from '@core/config/site';
import { I18n } from '@core/i18n/i18n';
import { LanguageToggle } from '@layout/language-toggle/language-toggle';
import { ThemeToggle } from '@layout/theme-toggle/theme-toggle';
import { Button } from '@shared/ui/button/button';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Button, ThemeToggle, LanguageToggle],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html'
})
export class Header {
  protected readonly site = SITE; // Mi nombre
  protected readonly sections = NAV_SECTIONS;
  protected readonly t = inject(I18n).t;

  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
