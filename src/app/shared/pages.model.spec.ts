import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Pages} from './pages.model';

describe('Pages', () => {
  it('should create an instance', () => {
    expect(new Pages()).toBeTruthy();
  });
});
