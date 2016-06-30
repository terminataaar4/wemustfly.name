import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { SimpleSiteAppComponent, environment } from './app/';

if (environment.production) {
	enableProdMode();
}

bootstrap(SimpleSiteAppComponent, [
	FIREBASE_PROVIDERS,
	// Initialize Firebase app  
	defaultFirebase({
		apiKey: "AIzaSyDR008QoImMn2d7JSX1MuNnBq0hhVNibX4",
		authDomain: "radiant-torch-6850.firebaseapp.com",
		databaseURL: "https://radiant-torch-6850.firebaseio.com",
		storageBucket: "radiant-torch-6850.appspot.com",
	})
]);
