/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PagesService } from './pages.service';

import { SimpleSiteAppModule } from '../simple-site.module';

describe('PagesService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PagesService],
            imports: [SimpleSiteAppModule]
        });
    });

    it('should ...', inject([PagesService], (service: PagesService) => {
        expect(service).toBeTruthy();
    }));
});
