import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';
import { ChatService } from '../../services/chat/chat.service';
import { ChatServiceMock } from '../../services/chat/chat.service.mock';

describe('ChatComponent', () => {
	let component: ChatComponent;
	let fixture: ComponentFixture<ChatComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ChatComponent],
			providers: [{ provide: ChatService, useClass: ChatServiceMock }]
		}).compileComponents();
		fixture = TestBed.createComponent(ChatComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
