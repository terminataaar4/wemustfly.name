import { Component, OnInit } from '@angular/core';

import { PagesService } from '../shared/pages.service';

import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { PageComponent } from '../page/page.component';

@Component({
    moduleId: module.id,
    selector: 'app-pages',
    templateUrl: 'pages.component.html',
    styleUrls: ['pages.component.css'],
    providers: [PagesService],
    directives: [
        MD_TABS_DIRECTIVES,
		PageComponent,
    ],
})
export class PagesComponent implements OnInit {
    constructor(public pages: PagesService) {
    }

    ngOnInit() {
    }

}
