import { Component, Input } from "@angular/core";

@Component({
    selector: 'bershka-shoes',
    templateUrl: 'shoes.component.html',
    styleUrls: ['shoes.component.css']
})
export class ShoesComponent {
    @Input() img: string;
    @Input() price: number;
    @Input() description: string;

    constructor() {
        this.img = "";
        this.price = 0;
        this.description = "Missing Description";
    }
}