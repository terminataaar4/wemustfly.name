import { Component, Input, OnInit } from '@angular/core';

import { Page } from './page';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { CardComponent } from '../card/card.component';

import { ObjectToArrayPipe } from '../object-to-array.pipe';

@Component({
    moduleId: module.id,
    selector: 'app-page',
    templateUrl: 'page.component.html',
    styleUrls: ['page.component.css'],
    directives: [
        MD_CARD_DIRECTIVES,
        CardComponent,
    ],
    pipes: [ObjectToArrayPipe]
})
export class PageComponent implements OnInit {
    @Input() page;

    ngOnInit() {
    }

}
