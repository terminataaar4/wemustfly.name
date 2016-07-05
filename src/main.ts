import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { SimpleSiteAppComponent, environment, firebaseConf } from './app/';

if (environment.production) {
	enableProdMode();
} else {
    firebaseConf.databaseURL = firebaseConf.devDatabaseURL;
}

bootstrap(SimpleSiteAppComponent, [
	FIREBASE_PROVIDERS,
	// Initialize Firebase app  
	defaultFirebase(firebaseConf)
]);
