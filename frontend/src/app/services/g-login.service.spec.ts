import { TestBed } from '@angular/core/testing';

import { GLoginService } from './g-login.service';

describe('GLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GLoginService = TestBed.get(GLoginService);
    expect(service).toBeTruthy();
  });
});
