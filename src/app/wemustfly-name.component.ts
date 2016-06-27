import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    moduleId: module.id,
    selector: 'wemustfly-name-app',
    templateUrl: 'wemustfly-name.component.html',
    styleUrls: ['wemustfly-name.component.css']
})
export class WemustflyNameAppComponent {
    title = 'Welcome to our site!';
    pages: FirebaseListObservable<any[]>;

    constructor(af: AngularFire) {
        this.pages = af.database.list('pages');
    }
}
