import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WemustflyNameAppComponent } from '../app/wemustfly-name.component';

beforeEachProviders(() => [WemustflyNameAppComponent]);

describe('App: WemustflyName', () => {
  it('should create the app',
      inject([WemustflyNameAppComponent], (app: WemustflyNameAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'Welcome to our site!\'',
      inject([WemustflyNameAppComponent], (app: WemustflyNameAppComponent) => {
    expect(app.title).toEqual('Welcome to our site!');
  }));
});
