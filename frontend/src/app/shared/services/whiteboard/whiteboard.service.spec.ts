import { TestBed } from '@angular/core/testing';

import { WhiteboardService } from './whiteboard.service';

describe('WhiteboardService', () => {
  let service: WhiteboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhiteboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
