import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { IProduct } from '../../../interfaces/product.interface';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './input-output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent implements OnDestroy {
  public products = signal<IProduct[]>([
    { id: 1, name: 'Producto 1', quantity: 10 },
    { id: 2, name: 'Producto 2', quantity: 20 },
  ]);

  private intervalSuscription = interval( 1000 ).pipe(
    tap( () => {
      this.products.update( products => [
         ...products,
         {
           id: products.length + 1,
           name: `Producto ${products.length + 1}`,
           quantity: (products.length + 1) * 10
         }
      ])
    }),
    take( 7 )
  ).subscribe();

  public updateProduct( product: IProduct, quantity: number ) {
    this.products.update(
      products =>
        products.map( p =>
          p.id === product.id ? { ...p, quantity } : p
        )
    );
  }

  ngOnDestroy(): void {
    this.intervalSuscription.unsubscribe();
  }
}
