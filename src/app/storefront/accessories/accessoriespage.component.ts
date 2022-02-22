import { Component } from "@angular/core";
import { mock_product_list5 } from "./mock_product_list5";
import { mock_product_list5_2 } from "./mock_product_list5-2";
import { ProductItem5ModelPt2 } from "./product-item5-2.model";
import { ProductItem5Model } from "./product-item5.model";



@Component({
    selector: 'bershka-accessoriespage',
    templateUrl: 'accessoriespage.component.html',
    styleUrls: ['accessoriespage.component.css']
})
export class AccessoriesPageComponent {
    products: ProductItem5Model [] = [];
    products2: ProductItem5ModelPt2 [] = [];

    constructor() {
      for (var product of mock_product_list5) {
        console.log(product);
        this.products.push(product);
      }
      for (var product2 of mock_product_list5_2) {
        console.log(product2);
        this.products2.push(product2)
      }
    }
}