import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NetworkService } from './network.service';
import { UserService } from '../user/user.service';
import { UserServiceMock } from '../user/user.service.mock';

describe('NetworkService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [
				{ provide: UserService, useClass: UserServiceMock },
				NetworkService
			]
		});
	});

	it('should be created', inject([NetworkService], (service: NetworkService) => {
		expect(service).toBeTruthy();
	}));
});
