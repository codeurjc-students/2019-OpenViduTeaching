import { MenuService } from './../menu/menu.service';
import { TestBed } from '@angular/core/testing';

import { ChatService } from './chat.service';
import { LoggerService } from '../logger/logger.service';
import { LoggerServiceMock } from '../logger/logger.service.mock';
import { RemoteStreamersService } from '../remote-streamers/remote-streamers.service';
import { RemoteStreamersServiceMock } from '../remote-streamers/remote-streamers.service.mock';
import { OpenViduSessionService } from '../openvidu-session/openvidu-session.service';
import { OpenViduSessionServiceMock } from '../openvidu-session/openvidu-session.service.mock';
import { MenuServiceMock } from '../menu/menu.service.mock';

describe('ChatService', () => {
	let service: ChatService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				{ provide: MenuService, useClass: MenuServiceMock },
				{ provide: RemoteStreamersService, useClass: RemoteStreamersServiceMock },
				{ provide: OpenViduSessionService, useClass: OpenViduSessionServiceMock },
			]
		});
		service = TestBed.inject(ChatService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
