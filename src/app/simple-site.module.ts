import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';

import { MdButtonModule } from '@angular2-material/button/button';
import { MdCardModule } from '@angular2-material/card/card';
import { MdTabsModule } from '@angular2-material/tabs/tabs';
import { MdToolbarModule } from '@angular2-material/toolbar/toolbar';

import { PagesComponent } from './pages/';
import { PageComponent } from './page/';
import { CardComponent } from './card/';

import { ObjectToArrayPipe } from './shared/object-to-array.pipe';

import { SimpleSiteAppComponent } from './simple-site.component';
import { firebaseConf } from './firebase.conf';

@NgModule({
	imports: [
		BrowserModule,
        AngularFireModule.initializeApp(firebaseConf),
		MdButtonModule.forRoot(),
		MdCardModule.forRoot(),
		MdTabsModule.forRoot(),
        MdToolbarModule.forRoot(),
	],
	declarations: [
        PagesComponent,
        PageComponent,
        CardComponent,
        ObjectToArrayPipe,
        SimpleSiteAppComponent,
    ],
	entryComponents: [
        SimpleSiteAppComponent
    ],
})
export class SimpleSiteAppModule {
	constructor(private _appRef: ApplicationRef) { }

	ngDoBootstrap() {
		this._appRef.bootstrap(SimpleSiteAppComponent);
	}
}
