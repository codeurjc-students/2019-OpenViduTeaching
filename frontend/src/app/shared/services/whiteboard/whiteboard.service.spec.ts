import { TestBed } from '@angular/core/testing';

import { WhiteboardService } from './whiteboard.service';
import { UserService } from '../user/user.service';
import { UserServiceMock } from '../user/user.service.mock';
import { OpenViduSessionService } from '../openvidu-session/openvidu-session.service';
import { OpenViduSessionServiceMock } from '../openvidu-session/openvidu-session.service.mock';
import { SignalService } from '../signal/signal.service';
import { SignalServiceMock } from '../signal/signal.service.mock';
import { CanvasWhiteboardService } from 'ng2-canvas-whiteboard';

describe('WhiteboardService', () => {
  let service: WhiteboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: UserService, useClass: UserServiceMock },
        { provide: OpenViduSessionService, useClass: OpenViduSessionServiceMock },
        { provide: SignalService, useClass: SignalServiceMock },
        { provide: CanvasWhiteboardService }
			]
    });
    service = TestBed.inject(WhiteboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
