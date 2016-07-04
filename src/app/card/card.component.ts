import { Component, Input, OnInit } from '@angular/core';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
    moduleId: module.id,
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css'],
    directives: [
        MD_CARD_DIRECTIVES,
    ]
})
export class CardComponent implements OnInit {
    @Input() card;

    constructor() {}

    ngOnInit() {
    }

}
