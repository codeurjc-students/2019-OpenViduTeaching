import { MenuService } from './../menu/menu.service';
import { TestBed } from '@angular/core/testing';

import { ChatService } from './chat.service';
import { LoggerService } from '../logger/logger.service';
import { LoggerServiceMock } from '../logger/logger.service.mock';
import { RemoteUsersService } from '../remote-users/remote-users.service';
import { RemoteUsersServiceMock } from '../remote-users/remote-users.service.mock';
import { OpenViduSessionService } from '../openvidu-session/openvidu-session.service';
import { OpenViduSessionServiceMock } from '../openvidu-session/openvidu-session.service.mock';
import { MenuServiceMock } from '../menu/menu.service.mock';

describe('ChatService', () => {
	let service: ChatService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				{ provide: MenuService, useClass: MenuServiceMock },
				{ provide: RemoteUsersService, useClass: RemoteUsersServiceMock },
				{ provide: OpenViduSessionService, useClass: OpenViduSessionServiceMock },
			]
		});
		service = TestBed.inject(ChatService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
