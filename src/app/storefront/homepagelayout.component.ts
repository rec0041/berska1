import { Component } from "@angular/core";
import { mock_product_list6 } from "./mock_product_list6";
import { ProductItem6Model } from "./product-item6.model";

@Component({
    selector: 'bershka-homepagelayout',
    templateUrl: 'homepagelayout.component.html',
    styleUrls: ['homepagelayout.component.css']
})
export class HomePageLayoutComponent {
    products: ProductItem6Model [] = [];

  constructor() {
    for (var product of mock_product_list6) {
      console.log(product);
      this.products.push(product);
    }
  }
}