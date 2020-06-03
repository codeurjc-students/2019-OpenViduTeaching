import { TestBed } from '@angular/core/testing';

import { RemoteStreamersService } from './remote-streamers.service';
import { LoggerService } from '../logger/logger.service';
import { LoggerServiceMock } from '../logger/logger.service.mock';

describe('RemoteStreamersService', () => {
	let service: RemoteStreamersService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [{ provide: LoggerService, useClass: LoggerServiceMock }]
		});
		service = TestBed.inject(RemoteStreamersService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
