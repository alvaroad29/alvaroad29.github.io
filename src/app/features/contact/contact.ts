import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';
import { SITE } from '@core/config/site';
import { I18n } from '@core/i18n/i18n';
import { Button } from '@shared/ui/button/button';
import { Section } from '@shared/ui/section/section';
import { firstValueFrom } from 'rxjs';

const ENDPOINT = 'https://api.web3forms.com/submit';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';
type FieldName = 'name' | 'email' | 'message';

const FIELD =
  'w-full rounded-lg border border-border bg-background px-4 py-2.5 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ' +
  'aria-[invalid=true]:border-red-500';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Section, Button],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly http = inject(HttpClient);
  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly site = SITE;
  protected readonly t = inject(I18n).t;
  protected readonly fieldClass = FIELD;

  protected readonly status = signal<SubmitStatus>('idle');

  protected readonly form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  /** Devuelve el mensaje de error del campo, o null si no hay (o aún no lo tocó el usuario). */
  protected errorMessage(field: FieldName): string | null {
    const control = this.form.controls[field];
    if (!control.touched || !control.errors) return null;

    const messages = this.t().contact.validation;
    if (control.errors['required']) return messages.required;
    if (control.errors['email']) return messages.email;
    if (control.errors['minlength']) return messages.minLength;
    return null;
  }

  protected async submit(): Promise<void> {
    if (this.status() === 'sending') return;

    if (this.form.invalid) {
      this.form.markAllAsTouched(); // fuerza a mostrar todos los errores
      return;
    }

    this.status.set('sending');
    const value = this.form.getRawValue();

    try {
      const response = await firstValueFrom(
        this.http.post<{ success: boolean }>(ENDPOINT, {
          access_key: SITE.web3formsKey,
          subject: `Portfolio: mensaje de ${value.name}`,
          ...value,
        }),
      );
      if (!response.success) throw new Error('Web3Forms rechazó el envío');

      this.status.set('success');
      this.form.reset();
    } catch {
      this.status.set('error');
    }
  }
}
