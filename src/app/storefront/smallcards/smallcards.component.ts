import { Component, Input } from "@angular/core";

@Component({
    selector: 'bershka-smallcards',
    templateUrl: 'smallcards.component.html',
    styleUrls: ['smallcards.component.css']
})
export class SmallCardsComponent {
    @Input() img: string;
    @Input() description: string;

    constructor() {
        this.img = "";
        this.description = "Missing Description";
    }
}