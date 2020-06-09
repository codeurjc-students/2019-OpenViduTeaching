import { TestBed } from '@angular/core/testing';

import { RaiseHandService } from './raise-hand.service';

describe('RaiseHandService', () => {
  let service: RaiseHandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaiseHandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
