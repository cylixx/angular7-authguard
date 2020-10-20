import { TestBed } from '@angular/core/testing';

import { HardcodedAuthorizeService } from './hardcoded-authorize.service';

describe('HardcodedAuthorizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcodedAuthorizeService = TestBed.get(HardcodedAuthorizeService);
    expect(service).toBeTruthy();
  });
});
