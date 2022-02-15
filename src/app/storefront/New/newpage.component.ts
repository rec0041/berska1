import { Component } from "@angular/core";
import { mock_product_list4 } from "./mock_product_list4";
import { ProductItem4Model } from "./product-item4.model";


@Component({
    selector: 'bershka-newpage',
    templateUrl: 'newpage.component.html',
    styleUrls: ['newpage.component.css']
})
export class NewPageComponent {
    products: ProductItem4Model [] = [];

    constructor() {
      for (var product of mock_product_list4) {
        console.log(product);
        this.products.push(product);
      }
    }
}