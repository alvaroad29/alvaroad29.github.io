import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'inline-block rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted',
  },
  template: '<ng-content />',
})
export class Badge {}
