import { Component, Input } from "@angular/core";

@Component({
    selector: 'bershka-verticalcard',
    templateUrl: 'verticalcard.component.html',
    styleUrls: ['verticalcard.component.css']
})
export class VerticalCardComponent {
    @Input() img: string;
    @Input() price: number;
    @Input() description: string;

    constructor() {
        this.img = "";
        this.price = 0;
        this.description = "Missing Description";
    }
}