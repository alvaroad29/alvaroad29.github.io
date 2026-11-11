import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { I18n } from '@core/i18n/i18n';
import { Section } from '@shared/ui/section/section';
import { ProjectCard } from '../components/project-card/project-card';
import { PROJECTS } from '../data/projects.data';

const CHIP =
  'cursor-pointer rounded-full border px-3 py-1 text-sm transition-colors ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500';
const CHIP_ACTIVE = 'border-brand-600 bg-brand-600 text-white';
const CHIP_IDLE = 'border-border text-muted hover:text-foreground';


@Component({
  selector: 'app-projects',
  imports: [Section, ProjectCard],
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly t = inject(I18n).t;

  /** Tecnologías únicas de todos los proyectos, calculadas una sola vez. */
  protected readonly technologies = [...new Set(PROJECTS.flatMap((p) => p.stack))].sort();

  protected readonly selected = signal<string | null>(null);

  protected readonly visible = computed(() => {
    const tech = this.selected();
    return tech ? PROJECTS.filter((p) => p.stack.includes(tech)) : PROJECTS;
  });

  protected select(tech: string | null): void {
    this.selected.set(tech);
  }

  protected chipClass(active: boolean): string {
    return `${CHIP} ${active ? CHIP_ACTIVE : CHIP_IDLE}`;
  }
}
