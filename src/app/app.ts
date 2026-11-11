import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@layout/header/header';
import { Footer } from '@layout/footer/footer';
import { I18n } from '@core/i18n/i18n';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
  protected readonly t = inject(I18n).t;
}
