import { Component, Input, OnInit } from '@angular/core';

import { Page } from './page';

import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { ObjectToArrayPipe } from '../object-to-array.pipe';

@Component({
    moduleId: module.id,
    selector: 'app-page',
    templateUrl: 'page.component.html',
    styleUrls: ['page.component.css'],
    directives: [
        MD_CARD_DIRECTIVES,
        MD_TABS_DIRECTIVES,
    ],
    pipes: [ObjectToArrayPipe]
})
export class PageComponent implements OnInit {
    @Input() page; //: Page;

    ngOnInit() {
    }

}
