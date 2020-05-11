import { TestBed, inject } from '@angular/core/testing';

import { OpenViduService } from './open-vidu.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OpenViduService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OpenViduService]
    });
  });

  it('should be created', inject([OpenViduService], (service: OpenViduService) => {
    expect(service).toBeTruthy();
  }));
});
