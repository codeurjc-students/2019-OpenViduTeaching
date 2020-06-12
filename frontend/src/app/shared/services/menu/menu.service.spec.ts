import { OpenViduSessionServiceMock } from './../openvidu-session/openvidu-session.service.mock';
import { OpenViduSessionService } from 'src/app/shared/services/openvidu-session/openvidu-session.service';
import { RoomServiceMock } from 'src/app/shared/services/room/room.service.mock';
import { RoomService } from 'src/app/shared/services/room/room.service';
import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';
import { LoggerService } from '../logger/logger.service';
import { LoggerServiceMock } from '../logger/logger.service.mock';

describe('MenuService', () => {
  let service: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
			providers: [
        { provide: LoggerService, useClass: LoggerServiceMock },
        { provide: RoomService, useClass: RoomServiceMock },
        { provide: OpenViduSessionService, useClass: OpenViduSessionServiceMock }
			]
		});
    service = TestBed.inject(MenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
