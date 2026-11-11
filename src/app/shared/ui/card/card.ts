import { Directive } from '@angular/core';

@Directive({
  selector: '[appCard]',
  host: { class: 'block rounded-xl border border-border bg-surface' },
})
export class Card {}
