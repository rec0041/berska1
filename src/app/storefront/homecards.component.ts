import { Component, Input } from "@angular/core";

@Component({
    selector: 'bershka-homecards',
    templateUrl: 'homecards.component.html',
    styleUrls: ['homecards.component.css']
})
export class HomeCardsComponent {
    @Input() img: string;

    constructor() {
        this.img = "";
    }
}