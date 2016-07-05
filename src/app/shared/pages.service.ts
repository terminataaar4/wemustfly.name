import { Injectable } from '@angular/core';
import { Pages } from './pages.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class PagesService {
    pages: FirebaseListObservable<Pages[]>;

    constructor(af: AngularFire) {
        this.pages = af.database.list('pages', {
            query: {
                orderByChild: 'position'
            }
        });
    }
}
