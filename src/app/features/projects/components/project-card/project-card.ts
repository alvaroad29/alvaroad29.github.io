import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { I18n } from '@core/i18n/i18n';
import { Project } from '@features/projects/models/project';
import { Badge } from '@shared/ui/badge/badge';
import { Button } from '@shared/ui/button/button';
import { Card } from '@shared/ui/card/card';

@Component({
  selector: 'app-project-card',
  imports: [NgOptimizedImage, Badge, Button, Card],
  templateUrl: './project-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  private readonly i18n = inject(I18n);
  protected readonly t = this.i18n.t;

  protected readonly highlights = computed(() =>
    this.project().highlights.map((h) => h[this.i18n.lang()]),
  );

  readonly project = input.required<Project>();

  protected readonly summary = computed(() => this.project().summary[this.i18n.lang()]);
}
