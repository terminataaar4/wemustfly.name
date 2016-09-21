import { Component, OnInit } from '@angular/core';

import { PagesService } from '../shared/pages.service';

@Component({
    selector: 'app-pages',
    templateUrl: 'pages.component.html',
    styleUrls: ['pages.component.css'],
    providers: [PagesService],
})
export class PagesComponent implements OnInit {
    constructor(public pages: PagesService) {
    }

    ngOnInit() {
    }
}
