/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

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

describe('SimpleSiteAppComponent', () => {
    let component: SimpleSiteAppComponent;
    let fixture: ComponentFixture<SimpleSiteAppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ 
                PagesComponent,
                PageComponent,
                CardComponent,
                ObjectToArrayPipe,
                SimpleSiteAppComponent
            ],
            imports: [
                AngularFireModule.initializeApp(firebaseConf),
                MdButtonModule.forRoot(),
                MdCardModule.forRoot(),
                MdTabsModule.forRoot(),
                MdToolbarModule.forRoot(),
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SimpleSiteAppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
