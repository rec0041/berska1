import { Component } from "@angular/core";
import { mock_product_list5 } from "./mock_product_list5";
import { ProductItem5Model } from "./product-item5.model";



@Component({
    selector: 'bershka-accessoriespage',
    templateUrl: 'accessoriespage.component.html',
    styleUrls: ['accessoriespage.component.css']
})
export class AccessoriesPageComponent {
    products: ProductItem5Model [] = [];

    constructor() {
      for (var product of mock_product_list5) {
        console.log(product);
        this.products.push(product);
      }
    }
}