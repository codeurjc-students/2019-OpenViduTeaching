import { TestBed } from '@angular/core/testing';
import { MenuService } from '../menu/menu.service';
import { MenuServiceMock } from '../menu/menu.service.mock';
import { NotificationsService } from './notifications.service';
import { OpenViduSessionService } from '../openvidu-session/openvidu-session.service';
import { OpenViduSessionServiceMock } from '../openvidu-session/openvidu-session.service.mock';

describe('NotificationsService', () => {
  let service: NotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MenuService, useClass: MenuServiceMock },
        { provide: OpenViduSessionService, useClass: OpenViduSessionServiceMock },
			],
    });
    service = TestBed.inject(NotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
