import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type TGrade = 'A' | 'B' | 'C' | 'D' | 'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<TGrade>('A');
  public frameworks = signal( ['Angular', 'React', 'Vue', 'Ember', 'Backbone', 'Svelte'] );
  public frameworks2 = signal(['Angular']);

  public toggleContent(){
    this.showContent.update( value => !value );
  }
}
