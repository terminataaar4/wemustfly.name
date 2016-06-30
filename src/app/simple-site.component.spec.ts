import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SimpleSiteAppComponent } from '../app/simple-site.component';

beforeEachProviders(() => [SimpleSiteAppComponent]);

describe('App: SimpleSite', () => {
  it('should create the app',
      inject([SimpleSiteAppComponent], (app: SimpleSiteAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
