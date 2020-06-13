import { RaiseHandServiceMock } from './../../services/raiseHand/raise-hand.service.mock';
import { RaiseHandService } from './../../services/raiseHand/raise-hand.service';
import { UserServiceMock } from './../../services/user/user.service.mock';
import { UserService } from './../../services/user/user.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupComponent } from './popup.component';

describe('PopupComponent', () => {
  let component: PopupComponent;
  let fixture: ComponentFixture<PopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        { provide: UserService, useClass: UserServiceMock },
        { provide: RaiseHandService, useClass: RaiseHandServiceMock }
			],
      declarations: [ PopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
