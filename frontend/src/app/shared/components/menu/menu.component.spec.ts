import { MenuServiceMock } from './../../services/menu/menu.service.mock';
import { MenuService } from 'src/app/shared/services/menu/menu.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { UserService } from '../../services/user/user.service';
import { UserServiceMock } from '../../services/user/user.service.mock';
import { HasChatPipe } from '../../pipes/ovSettings.pipe';

describe('MenuComponent', () => {
	let component: MenuComponent;
	let fixture: ComponentFixture<MenuComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MenuComponent, HasChatPipe],
			providers: [
				{ provide: UserService, useClass: UserServiceMock },
				{ provide: MenuService, useClass: MenuServiceMock }
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MenuComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
