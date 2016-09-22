/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';

import { AngularFireModule } from 'angularfire2';

import { MdCardModule } from '@angular2-material/card/card';
import { MdTabsModule } from '@angular2-material/tabs/tabs';
import { PageComponent } from '../page/';
import { CardComponent } from '../card/';
import { ObjectToArrayPipe } from '../shared/object-to-array.pipe';

import { PagesService } from '../shared/pages.service';
import { PagesComponent } from './pages.component';
import { firebaseConf } from '../firebase.conf';

describe('Component: PagesComponent', () => {
    let	fixture;

    beforeEach(()	=>	{
        TestBed.configureTestingModule({
            imports: [
                AngularFireModule.initializeApp(firebaseConf),
                MdCardModule.forRoot(),
                MdTabsModule.forRoot(),
            ],
            declarations:	[
                PageComponent,
                CardComponent,
                ObjectToArrayPipe,
                PagesComponent
            ],
            providers:	[
                PagesService
            ]
        });
        fixture	= TestBed.createComponent(PagesComponent);
        fixture.detectChanges();
    });

    it('should create an instance',	async(inject([], () => {
        expect(fixture.componentInstance).toBeTruthy();
        fixture.whenStable()
        .then(() => {
            fixture.detectChanges();
            return fixture.whenStable();
        })
        .then(() => {
            const compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('div').innerText).toEqual('Test quote');
        });
    })));
});
