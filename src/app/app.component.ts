import { Component } from '@angular/core';
// import { mock_product_list } from './mock_product_list';
// import { ProductItemModel } from './product-item.model';
import { ProductItem2Model } from './storefront/product-item2.model';
import { mock_product_list2 } from './storefront/shoes/mock_product_list2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bershka';
  products: ProductItem2Model [] = [];

  constructor() {
    for (var product of mock_product_list2) {
      console.log(product);
      this.products.push(product);
    }
  }
}
