import { addProviders, describe, beforeEach, it, expect, inject } from '@angular/core/testing';
import { PagesService } from './pages.service';

import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { firebaseConf } from '../firebase.conf';

firebaseConf.databaseURL = firebaseConf.devDatabaseURL;

describe('Pages Service', () => {
    beforeEach(() => {
        addProviders([FIREBASE_PROVIDERS, defaultFirebase(firebaseConf), PagesService]);
    });

    it('should PagesService', inject([PagesService], (service: PagesService) => {
        expect(service).toBeTruthy();
    }));
});
