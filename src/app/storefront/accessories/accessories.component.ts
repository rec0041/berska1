import { Component, Input } from "@angular/core";

@Component({
    selector: 'bershka-accessories',
    templateUrl: 'accessories.component.html',
    styleUrls: ['accessories.component.css']
})
export class AccessoriesComponent {
    @Input() img: string;
    @Input() price: number;
    @Input() description: string;

    constructor() {
        this.img = "";
        this.price = 0;
        this.description = "Missing Description";
    }
}