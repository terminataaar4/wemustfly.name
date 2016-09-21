import { Component } from '@angular/core';

import { SettingsService } from './shared/settings.service';

@Component({
    selector: 'simple-site-app',
    templateUrl: 'simple-site.component.html',
    styleUrls: ['simple-site.component.css'],
    providers: [SettingsService],
})
export class SimpleSiteAppComponent {
    constructor(public settings: SettingsService) {
    }
}
