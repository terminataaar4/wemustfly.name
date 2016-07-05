import { Injectable } from '@angular/core';
import { Settings } from './settings.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class SettingsService {
    settings: FirebaseObjectObservable<Settings[]>;

    constructor(af: AngularFire) {
        this.settings = af.database.object('settings');
    }
}
