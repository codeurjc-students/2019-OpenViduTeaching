import { RoomServiceMock } from 'src/app/shared/services/room/room.service.mock';
import { RoomService } from 'src/app/shared/services/room/room.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InviteLinkComponent } from './invite-link.component';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

describe('InviteLinkComponent', () => {
  let component: InviteLinkComponent;
  let fixture: ComponentFixture<InviteLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        { provide: MAT_SNACK_BAR_DATA, useValue: {} },
        { provide: RoomService, useClass: RoomServiceMock }
      ],
      declarations: [ InviteLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
