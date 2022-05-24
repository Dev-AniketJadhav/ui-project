import { TestBed } from '@angular/core/testing';

import { CrypptoDataService } from './cryppto-data.service';

describe('CrypptoDataService', () => {
  let service: CrypptoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrypptoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
