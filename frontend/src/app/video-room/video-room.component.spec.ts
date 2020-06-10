import { RaiseHandServiceMock } from './../shared/services/raiseHand/raise-hand.service.mock';
import { RaiseHandService } from './../shared/services/raiseHand/raise-hand.service';
import { MenuServiceMock } from './../shared/services/menu/menu.service.mock';
import { MenuService } from 'src/app/shared/services/menu/menu.service';
import { UserServiceMock } from './../shared/services/user/user.service.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { VideoRoomComponent } from './video-room.component';
import { LoggerService } from '../shared/services/logger/logger.service';
import { LoggerServiceMock } from '../shared/services/logger/logger.service.mock';
import { NetworkServiceMock } from '../shared/services/network/network.service.mock';
import { NetworkService } from '../shared/services/network/network.service';
import { UtilsService } from '../shared/services/utils/utils.service';
import { RemoteStreamersService } from '../shared/services/remote-streamers/remote-streamers.service';
import { DevicesService } from '../shared/services/devices/devices.service';
import { OpenViduSessionService } from '../shared/services/openvidu-session/openvidu-session.service';
import { OpenViduSessionServiceMock } from '../shared/services/openvidu-session/openvidu-session.service.mock';
import { DevicesServiceMock } from '../shared/services/devices/devices.service.mock';
import { UtilsServiceMock } from '../shared/services/utils/utils.service.mock';
import { RemoteStreamersServiceMock } from '../shared/services/remote-streamers/remote-streamers.service.mock';
import { UserService } from '../shared/services/user/user.service';
import { ChatServiceMock } from '../shared/services/chat/chat.service.mock';

describe('VideoRoomComponent unit test', () => {
	let component: VideoRoomComponent;
	let fixture: ComponentFixture<VideoRoomComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [VideoRoomComponent],
			providers: [
				{ provide: UserService, useClass: UserServiceMock },
				{ provide: LoggerService, useClass: LoggerServiceMock },
				{ provide: NetworkService, useClass: NetworkServiceMock },
				{ provide: UtilsService, useClass: UtilsServiceMock },
				{ provide: RemoteStreamersService, useClass: RemoteStreamersServiceMock },
				{ provide: OpenViduSessionService, useClass: OpenViduSessionServiceMock },
				{ provide: DevicesService, useClass: DevicesServiceMock },
				{ provide: MenuService, useClass: MenuServiceMock },
				{ provide: 'assistantsChatService', useClass: ChatServiceMock },
				{ provide: 'moderatorsChatService', useClass: ChatServiceMock },
				{ provide: RaiseHandService, useClass: RaiseHandServiceMock }
			],
			imports: [RouterTestingModule.withRoutes([])]
		}).compileComponents();
		fixture = TestBed.createComponent(VideoRoomComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
