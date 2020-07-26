import { TestBed } from '@angular/core/testing';

import { ColorService } from './color.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ColorService', () => {
  let service: ColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
