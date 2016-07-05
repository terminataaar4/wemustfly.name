import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SettingsService } from './settings.service';

describe('Settings Service', () => {
  beforeEachProviders(() => [SettingsService]);

  it('should ...',
      inject([SettingsService], (service: SettingsService) => {
    expect(service).toBeTruthy();
  }));
});
