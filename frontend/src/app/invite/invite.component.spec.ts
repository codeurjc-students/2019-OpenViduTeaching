import { ColorServiceMock } from './../shared/services/color/color.service.mock';
import { ColorService } from './../shared/services/color/color.service';
import { RoomServiceMock } from 'src/app/shared/services/room/room.service.mock';
import { RoomService } from 'src/app/shared/services/room/room.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteComponent } from './invite.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../shared/services/user/user.service';
import { UserServiceMock } from '../shared/services/user/user.service.mock';

describe('InviteComponent', () => {
  let component: InviteComponent;
  let fixture: ComponentFixture<InviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: RoomService, useClass: RoomServiceMock },
        { provide: UserService, useClass: UserServiceMock },
        { provide: ColorService, useClass: ColorServiceMock }
			],
      declarations: [ InviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});