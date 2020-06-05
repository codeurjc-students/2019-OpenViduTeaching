import { RemoteUsersServiceMock } from './../../../../services/remote-users/remote-users.service.mock';
import { RemoteUsersService } from './../../../../services/remote-users/remote-users.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantsComponent } from './assistants.component';
import { UserServiceMock } from 'src/app/shared/services/user/user.service.mock';
import { RoomService } from 'src/app/shared/services/room/room.service';
import { RoomServiceMock } from 'src/app/shared/services/room/room.service.mock';
import { OpenViduSessionService } from 'src/app/shared/services/openvidu-session/openvidu-session.service';
import { OpenViduSessionServiceMock } from 'src/app/shared/services/openvidu-session/openvidu-session.service.mock';

describe('AssistantsComponent', () => {
  let component: AssistantsComponent;
  let fixture: ComponentFixture<AssistantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        { provide: UserService, useClass: UserServiceMock },
        { provide: RoomService, useClass: RoomServiceMock },
        { provide: RemoteUsersService, useClass: RemoteUsersServiceMock }
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
