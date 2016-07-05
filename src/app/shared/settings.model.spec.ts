import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Settings} from './settings.model';

describe('Settings', () => {
  it('should create an instance', () => {
    expect(new Settings()).toBeTruthy();
  });
});
