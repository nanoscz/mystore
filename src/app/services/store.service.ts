import { Injectable } from '@angular/core';
import { Product } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  myShoppingCart: Product[] = [];
  constructor() { }

  addProduct(product: Product): void {
    this.myShoppingCart.push(product);
  }

  getShoppingCart(): Product[] {
    return this.myShoppingCart;
  }

  getTotal(): number {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
