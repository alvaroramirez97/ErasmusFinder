import { TestBed } from '@angular/core/testing';

import { CompruebaTokenService } from './comprueba-token.service';

describe('CompruebaTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompruebaTokenService = TestBed.get(CompruebaTokenService);
    expect(service).toBeTruthy();
  });
});
