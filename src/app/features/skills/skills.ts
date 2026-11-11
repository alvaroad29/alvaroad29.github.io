import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n } from '@core/i18n/i18n';
import { Badge } from '@shared/ui/badge/badge';
import { Card } from '@shared/ui/card/card';
import { Section } from '@shared/ui/section/section';
import { SKILL_GROUPS } from './skills.data';

@Component({
  selector: 'app-skills',
  imports: [Section, Card, Badge],
  templateUrl: './skills.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly t = inject(I18n).t;
  protected readonly groups = SKILL_GROUPS;
}
