import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { PagesComponent } from './pages/pages.component';

@Component({
    moduleId: module.id,
    selector: 'simple-site-app',
    templateUrl: 'simple-site.component.html',
    styleUrls: ['simple-site.component.css'],
    directives: [
        MD_TOOLBAR_DIRECTIVES,
		PagesComponent,
    ]
})
export class SimpleSiteAppComponent {
    settings: FirebaseObjectObservable<any[]>;

    constructor(af: AngularFire) {
        this.settings = af.database.object('settings');
    }
}
