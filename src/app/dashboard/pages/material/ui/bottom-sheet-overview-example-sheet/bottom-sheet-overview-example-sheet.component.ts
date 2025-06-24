import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-bottom-sheet-overview-example-sheet',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './bottom-sheet-overview-example-sheet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomSheetOverviewExampleSheetComponent {

  openLink( event: MouseEvent ): void {
    console.log('openLink');
  }

}
