import {
    addProviders,
    inject
} from '@angular/core/testing';
import {ReflectiveInjector, provide, Provider} from '@angular/core';
import {
    AngularFire,
    FirebaseObjectObservable,
    FIREBASE_PROVIDERS,
    AngularFireAuth,
    FirebaseConfig,
    FirebaseApp,
    defaultFirebase,
    FirebaseDatabase,
    FirebaseAppConfig
} from 'angularfire2';
import {Subscription} from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { firebaseConf } from './firebase.conf';
import { SimpleSiteAppComponent } from '../app/simple-site.component';

describe('App: SimpleSiteAppComponent', () => {
    var subscription:Subscription;
    var app: SimpleSiteAppComponent;
    var angularFire2: AngularFire;

    beforeEach(() => {
        addProviders([FIREBASE_PROVIDERS, defaultFirebase(firebaseConf)]);
        inject([AngularFire], (_af: AngularFire) => {
            angularFire2 = _af;
        })();
    });

    afterEach((done) => {
        if(subscription && !subscription.isUnsubscribed) {
            subscription.unsubscribe();
        }
    });


    it('should be injectable via FIREBASE_PROVIDERS', () => {
        expect(angularFire2 instanceof AngularFire).toBe(true);
    });

    it('should create the app', inject([SimpleSiteAppComponent], (app: SimpleSiteAppComponent) => {
        expect(app).toBeTruthy();
    }));

    describe('.auth', () => {
        it('should be an instance of AuthService', inject([AngularFire], (af:AngularFire) => {
            expect(af.auth instanceof AngularFireAuth).toBe(true);
        }));
    });


    describe('.database', () => {
        it('should be an instance of Database', inject([AngularFire], (af:AngularFire) => {
            expect(af.database instanceof FirebaseDatabase).toBe(true);
        }));
    });

    describe('defaultFirebase', () => {
        it('should create a provider', () => {
            const provider = defaultFirebase(firebaseConf);
            expect(provider instanceof Provider).toBe(true);
        });
    });
});
