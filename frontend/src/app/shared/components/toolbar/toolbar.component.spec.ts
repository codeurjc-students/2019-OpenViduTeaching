import { UserModel } from 'src/app/shared/models/user-model';
import { RaiseHandServiceMock } from './../../services/raiseHand/raise-hand.service.mock';
import { RaiseHandService } from './../../services/raiseHand/raise-hand.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { UtilsService } from '../../services/utils/utils.service';
import { UtilsServiceMock } from '../../services/utils/utils.service.mock';
import { HasChatPipe, HasVideoPipe, HasAudioPipe, HasScreenSharingPipe, HasFullscreenPipe, HasLayoutSpeakingPipe, HasExitPipe, HasRaiseHandPipe } from '../../pipes/ovSettings.pipe';
import { MenuService } from '../../services/menu/menu.service';
import { MenuServiceMock } from '../../services/menu/menu.service.mock';

describe('ToolbarComponent', () => {
	let component: ToolbarComponent;
	let fixture: ComponentFixture<ToolbarComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				ToolbarComponent,
				HasLayoutSpeakingPipe,
				HasFullscreenPipe,
				HasScreenSharingPipe,
				HasChatPipe,
				HasVideoPipe,
				HasAudioPipe,
				HasExitPipe,
				HasRaiseHandPipe
			],
			providers: [
				{ provide: UtilsService, useClass: UtilsServiceMock },
				{ provide: MenuService, useClass: MenuServiceMock },
				{ provide: RaiseHandService, useClass: RaiseHandServiceMock }
			]
		}).compileComponents();
		fixture = TestBed.createComponent(ToolbarComponent);
		component = fixture.componentInstance;
		component.localUser = new UserModel();
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
