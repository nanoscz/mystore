import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../types/Product';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  total = 0;
  myShoppingCart: Product[] = [];
  destroy$: Subject<void> = new Subject();
  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAll().pipe(takeUntil(this.destroy$)).subscribe({
      next: (products: Product[]) => { this.products = products }
    });
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
