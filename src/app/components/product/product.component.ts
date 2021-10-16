import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../types/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() addProduct = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  addCart(): void {
    this.addProduct.emit(this.product);
  }
}
