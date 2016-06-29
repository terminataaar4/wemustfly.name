import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

import { Objects2ArraysPipe } from './shared/objects2arrays.pipe';

@Component({
    moduleId: module.id,
    selector: 'wemustfly-name-app',
    templateUrl: 'wemustfly-name.component.html',
    styleUrls: ['wemustfly-name.component.css'],
    directives: [
        MD_CARD_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        MD_TABS_DIRECTIVES,
        MD_TOOLBAR_DIRECTIVES,
    ],
	pipes: [Objects2ArraysPipe]
})
export class WemustflyNameAppComponent {
    settings: FirebaseObjectObservable<any[]>;
    pages: FirebaseListObservable<any[]>;

    constructor(af: AngularFire) {
        this.settings = af.database.object('settings');
        this.pages = af.database.list('pages', {
            query: {
                orderByChild: 'position'
            }
        });
    }
}
