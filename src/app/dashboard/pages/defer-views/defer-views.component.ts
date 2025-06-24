import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoaderSlowComponent } from '@shared/heavy-loader/heavy-loader-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [HeavyLoaderSlowComponent, CommonModule, TitleComponent],
  templateUrl: './defer-views.component.html',
})
export default class DeferViewsComponent {

}
