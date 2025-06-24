import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { IProduct } from '../../../../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  public producto = input.required<IProduct>();
  public onIncrementQuantity = output<number>();

  public incrementQuantity(): void {
    this.onIncrementQuantity.emit( this.producto().quantity + 1 );
  }
}
