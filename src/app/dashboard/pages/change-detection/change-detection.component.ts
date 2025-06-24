import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title title="{{ currentFramework() }}" />

    <pre> {{ frameworAsSignal() | json }} </pre>
    <pre> {{ frameworAsProperty | json }} </pre>
  `,
})
export default class ChangeDetectionComponent {

  public currentFramework = computed( () => `Change detection - ${this.frameworAsSignal().name}` );

  public frameworAsSignal = signal({
    name: 'Angular',
    realseDate: '2016',
  });

  public frameworAsProperty = {
    name: 'Angular',
    realseDate: '2016',
  };

  constructor() {
    setTimeout(() => {
      this.frameworAsSignal.update((value) => ({
        ...value,
        name: 'Angular 2',
      }));
    }, 3000);
  }
}
