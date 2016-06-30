import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { ObjectToArray } from './object-to-array.pipe';

describe('ObjectToArray Pipe', () => {
  beforeEachProviders(() => [ObjectToArray]);

  it('should transform the input', inject([ObjectToArray], (pipe: ObjectToArray) => {
      expect(pipe.transform(true)).toBe(null);
  }));
});
