import { TestBed } from '@angular/core/testing';

import { RecordingService } from './recording.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RecordingService', () => {
  let service: RecordingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RecordingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
