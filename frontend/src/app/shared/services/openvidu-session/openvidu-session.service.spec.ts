import { UserServiceMock } from './../user/user.service.mock';
import { TestBed } from '@angular/core/testing';

import { OpenViduSessionService } from './openvidu-session.service';
import { LoggerService } from '../logger/logger.service';
import { LoggerServiceMock } from '../logger/logger.service.mock';
import { UserService } from '../user/user.service';

describe('SessionService', () => {
	let service: OpenViduSessionService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				{ provide: LoggerService, useClass: LoggerServiceMock },
				{ provide: UserService, useClass: UserServiceMock } 
			],
		});
		service = TestBed.inject(OpenViduSessionService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
