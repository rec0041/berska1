import { Component } from "@angular/core";
import { ProductItem2Model } from "../product-item2.model";
import { mock_product_list2 } from "./mock_product_list2";

@Component({
    selector: 'bershka-shoespage',
    templateUrl: 'shoespage.component.html',
    styleUrls: ['shoespage.component.css']
})
export class ShoesPageComponent {
    products: ProductItem2Model [] = [];

    constructor() {
      for (var product of mock_product_list2) {
        console.log(product);
        this.products.push(product);
      }
    }
}