import { Component } from '@angular/core';
import { mock_product_list } from './mock_product_list';
import { ProductItemModel } from './product-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bershka';
  
}
