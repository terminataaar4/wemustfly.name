import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { SimpleSiteAppComponent } from '../app/simple-site.component';

beforeEachProviders(() => [SimpleSiteAppComponent, FIREBASE_PROVIDERS, defaultFirebase({
		apiKey: "AIzaSyDR008QoImMn2d7JSX1MuNnBq0hhVNibX4",
		authDomain: "radiant-torch-6850.firebaseapp.com",
		databaseURL: "https://radiant-torch-6850.firebaseio.com",
		storageBucket: "radiant-torch-6850.appspot.com",
})]);

describe('App: SimpleSite', () => {
  it('should create the app',
      inject([SimpleSiteAppComponent], (app: SimpleSiteAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
