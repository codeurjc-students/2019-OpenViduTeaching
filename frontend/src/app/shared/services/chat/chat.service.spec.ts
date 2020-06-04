import { RemoteUsersService } from './../remote-users/remote-users.service';
import { MenuService } from './../menu/menu.service';
import { TestBed } from '@angular/core/testing';

import { ChatService } from './chat.service';
import { OpenViduSessionService } from '../openvidu-session/openvidu-session.service';
import { OpenViduSessionServiceMock } from '../openvidu-session/openvidu-session.service.mock';
import { MenuServiceMock } from '../menu/menu.service.mock';
import { RemoteUsersServiceMock } from '../remote-users/remote-users.service.mock';

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
