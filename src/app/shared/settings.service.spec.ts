/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SettingsService } from './settings.service';

import { SimpleSiteAppModule } from '../simple-site.module';

describe('PagesService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SettingsService],
            imports: [SimpleSiteAppModule]
        });
    });

    it('should ...', inject([SettingsService], (service: SettingsService) => {
        expect(service).toBeTruthy();
    }));
});
