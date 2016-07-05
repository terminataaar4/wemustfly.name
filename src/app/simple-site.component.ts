import { Component } from '@angular/core';

import { SettingsService } from './shared/settings.service';

import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { PagesComponent } from './pages/pages.component';

@Component({
    moduleId: module.id,
    selector: 'simple-site-app',
    templateUrl: 'simple-site.component.html',
    styleUrls: ['simple-site.component.css'],
    providers: [SettingsService],
    directives: [
        MD_TOOLBAR_DIRECTIVES,
		PagesComponent,
    ]
})
export class SimpleSiteAppComponent {
    constructor(public settings: SettingsService) {
    }
}
