import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Cards} from './cards.model';

describe('Cards', () => {
  it('should create an instance', () => {
    expect(new Cards()).toBeTruthy();
  });
});
