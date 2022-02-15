import { Component } from "@angular/core";
import { mock_product_list3 } from "./mock_product_list3";
import { ProductItem3Model } from "./product-item3.model";


@Component({
    selector: 'bershka-collabpage',
    templateUrl: 'collabpage.component.html',
    styleUrls: ['collabpage.component.css']
})
export class CollabPageComponent {
    products: ProductItem3Model [] = [];

    constructor() {
      for (var product of mock_product_list3) {
        console.log(product);
        this.products.push(product);
      }
    }
}