import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { ObjectToArrayPipe } from './object-to-array.pipe';

describe('ObjectToArrayPipe', () => {
  beforeEachProviders(() => [ObjectToArrayPipe]);

  it('should transform the input', inject([ObjectToArrayPipe], (pipe: ObjectToArrayPipe) => {
      expect(pipe.transform(true)).toBe(null);
  }));
});
