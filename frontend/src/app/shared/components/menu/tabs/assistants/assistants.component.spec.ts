import { RemoteStreamersServiceMock } from './../../../../services/remote-streamers/remote-streamers.service.mock';
import { OpenViduSessionServiceMock } from './../../../../services/openvidu-session/openvidu-session.service.mock';
import { OpenViduSessionService } from './../../../../services/openvidu-session/openvidu-session.service';
import { RemoteUsersServiceMock } from './../../../../services/remote-users/remote-users.service.mock';
import { RemoteUsersService } from './../../../../services/remote-users/remote-users.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantsComponent } from './assistants.component';
import { UserServiceMock } from 'src/app/shared/services/user/user.service.mock';
import { MenuServiceMock } from 'src/app/shared/services/menu/menu.service.mock';
import { MenuService } from 'src/app/shared/services/menu/menu.service';
import { RemoteStreamersService } from 'src/app/shared/services/remote-streamers/remote-streamers.service';

describe('AssistantsComponent', () => {
  let component: AssistantsComponent;
  let fixture: ComponentFixture<AssistantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        { provide: UserService, useClass: UserServiceMock },
        { provide: MenuService, useClass: MenuServiceMock },
        { provide: RemoteUsersService, useClass: RemoteUsersServiceMock },
        { provide: RemoteStreamersService, useClass: RemoteStreamersServiceMock },
        { provide: OpenViduSessionService, useClass: OpenViduSessionServiceMock },
      ],
      declarations: [ AssistantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
