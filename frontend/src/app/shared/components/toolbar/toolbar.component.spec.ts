import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { UtilsService } from '../../services/utils/utils.service';
import { UtilsServiceMock } from '../../services/utils/utils.service.mock';
import { HasChatPipe, HasVideoPipe, HasAudioPipe, HasScreenSharingPipe, HasFullscreenPipe, HasLayoutSpeakingPipe, HasExitPipe } from '../../pipes/ovSettings.pipe';
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
				HasExitPipe
			],
			providers: [
				{ provide: UtilsService, useClass: UtilsServiceMock },
				{ provide: MenuService, useClass: MenuServiceMock }
			]
		}).compileComponents();
		fixture = TestBed.createComponent(ToolbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
