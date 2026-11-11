import { inject, Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface PageMeta {
  readonly title: string;
  readonly description: string;
}

@Injectable({
  providedIn: 'root',
})
export class Seo {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  update({ title, description }: PageMeta): void {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
  }
}
