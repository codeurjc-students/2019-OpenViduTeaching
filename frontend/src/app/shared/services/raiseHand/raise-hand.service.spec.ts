import { SignalServiceMock } from './../signal/signal.service.mock';
import { SignalService } from './../signal/signal.service';
import { TestBed } from '@angular/core/testing';

import { RaiseHandService } from './raise-hand.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NotificationsService } from '../notifications/notifications.service';
import { NotificationsServiceMock } from '../notifications/notifications.service.mock';

describe('RaiseHandService', () => {
  let service: RaiseHandService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: SignalService, useClass: SignalServiceMock },
        { provide: NotificationsService, useClass: NotificationsServiceMock },
			]
    });
    service = TestBed.inject(RaiseHandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
