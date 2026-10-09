import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <section [id]="sectionId()" class="py-20 sm:py-28">
      <div class="mx-auto max-w-5xl px-6">
        <h2 class="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">{{ heading() }}</h2>
        <ng-content />
      </div>
    </section>
  `,
})
export class Section {
  readonly sectionId = input.required<string>();
  readonly heading = input.required<string>();
}