import { Component, OnInit } from "@angular/core";
import { mock_product_list } from "../mock_product_list";
import { ProductItemModel } from "../product-item.model";
import { ProductsService } from "../products.service";

@Component({
    selector: 'bershka-bestsellers',
    templateUrl: 'bestsellers.component.html',
    styleUrls: ['bestsellers.component.css']
})
export class BestSellersComponent implements OnInit{
    products: ProductItemModel [] = [];

  constructor(private productsService:ProductsService) {
    for (var product of mock_product_list) {
      console.log(product);
      this.products.push(product);
    }
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data =>  {
      console.log("Fetching product data");
      console.log(data);
    })
  }
}