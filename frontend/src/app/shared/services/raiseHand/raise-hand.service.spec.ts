import { TestBed } from '@angular/core/testing';

import { RaiseHandService } from './raise-hand.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RaiseHandService', () => {
  let service: RaiseHandService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RaiseHandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
