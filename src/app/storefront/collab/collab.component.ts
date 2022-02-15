import { Component, Input } from "@angular/core";

@Component({
    selector: 'bershka-collab',
    templateUrl: 'collab.component.html',
    styleUrls: ['collab.component.css']
})
export class CollabComponent {
    @Input() img: string;
    @Input() price: number;
    @Input() description: string;

    constructor() {
        this.img = "";
        this.price = 0;
        this.description = "Missing Description";
    }
}