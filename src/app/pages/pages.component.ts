import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { PageComponent } from '../page/page.component';


@Component({
    moduleId: module.id,
    selector: 'app-pages',
    templateUrl: 'pages.component.html',
    styleUrls: ['pages.component.css'],
    directives: [
        MD_TABS_DIRECTIVES,
		PageComponent,
    ],
})
export class PagesComponent implements OnInit {
    pages: FirebaseListObservable<any[]>;

    constructor(af: AngularFire) {
        this.pages = af.database.list('pages', {
            query: {
                orderByChild: 'position'
            }
        });
    }

    ngOnInit() {
    }

}
