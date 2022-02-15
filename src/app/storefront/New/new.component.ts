import { Component, Input } from "@angular/core";

@Component({
    selector: 'bershka-new',
    templateUrl: 'new.component.html',
    styleUrls: ['new.component.css']
})
export class NewComponent {
    @Input() img: string;
    @Input() price: number;
    @Input() description: string;

    constructor() {
        this.img = "";
        this.price = 0;
        this.description = "Missing Description";
    }
}