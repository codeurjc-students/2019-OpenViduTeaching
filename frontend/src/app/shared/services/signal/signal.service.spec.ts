import { TestBed } from '@angular/core/testing';

import { SignalService } from './signal.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SignalService', () => {
  let service: SignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
