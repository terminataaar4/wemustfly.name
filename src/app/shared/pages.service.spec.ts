import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PagesService } from './pages.service';

describe('Pages Service', () => {
  beforeEachProviders(() => [PagesService]);

  it('should ...',
      inject([PagesService], (service: PagesService) => {
    expect(service).toBeTruthy();
  }));
});
