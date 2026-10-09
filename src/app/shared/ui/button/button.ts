import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type ButtonVariant = 'primary' | 'outline' | 'icon';

const BASE =
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg font-medium transition-colors ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500';

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-brand-600 px-5 py-2.5 text-white hover:bg-brand-700',
  outline: 'border border-border px-5 py-2.5 hover:bg-surface',
  icon: 'size-10 text-muted hover:bg-surface hover:text-foreground',
};

@Component({
  selector: 'button[appButton], a[appButton]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'classes()' },
  template: '<ng-content />',
})
export class Button {
  readonly variant = input<ButtonVariant>('primary');

  protected readonly classes = computed(() => `${BASE} ${VARIANTS[this.variant()]}`);
}
