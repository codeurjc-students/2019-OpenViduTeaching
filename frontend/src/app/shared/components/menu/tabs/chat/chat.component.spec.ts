import { MenuServiceMock } from './../../../../services/menu/menu.service.mock';
import { MenuService } from 'src/app/shared/services/menu/menu.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';
import { ChatServiceMock } from 'src/app/shared/services/chat/chat.service.mock';

describe('ChatComponent', () => {
	let component: ChatComponent;
	let fixture: ComponentFixture<ChatComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ChatComponent],
			providers: [
				{ provide: 'assistantsChatService', useClass: ChatServiceMock },
				{ provide: 'moderatorsChatService', useClass: ChatServiceMock },
				{ provide: MenuService, useClass: MenuServiceMock}
			]
		}).compileComponents();
		fixture = TestBed.createComponent(ChatComponent);
		component = fixture.componentInstance;
		component.type = 'assistants';
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
