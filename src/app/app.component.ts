import { Component } from '@angular/core';
import { Product } from './types/Product';
import { ProductsMock } from './__mocks__/products.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  image = null;
}
