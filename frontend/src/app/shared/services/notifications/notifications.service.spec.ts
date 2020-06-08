import { TestBed } from '@angular/core/testing';
import { MenuService } from '../menu/menu.service';
import { MenuServiceMock } from '../menu/menu.service.mock';
import { NotificationsService } from './notifications.service';

describe('NotificationsService', () => {
  let service: NotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
				{ provide: MenuService, useClass: MenuServiceMock }
			],
    });
    service = TestBed.inject(NotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
