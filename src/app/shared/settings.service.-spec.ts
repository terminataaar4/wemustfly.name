import { addProviders, describe, beforeEach, it, expect, inject } from '@angular/core/testing';
import { SettingsService } from './settings.service';

import { AngularFire, FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { firebaseConf } from '../firebase.conf';

firebaseConf.databaseURL = firebaseConf.devDatabaseURL;

describe('Settings Service', () => {
    let s: SettingsService;
    let af: AngularFire;

    beforeEach(() => {
        addProviders([FIREBASE_PROVIDERS, defaultFirebase(firebaseConf)]);
        inject([AngularFire], (_af: AngularFire) => {
            af = _af;
            s = new SettingsService(af);
        })();
    });
    
    it('should be injectable via FIREBASE_PROVIDERS', () => {
        //expect(af instanceof AngularFire).toBe(true);
    });

    it('should be', () => {
        //expect(s).toBeTruthy();
    });
});
