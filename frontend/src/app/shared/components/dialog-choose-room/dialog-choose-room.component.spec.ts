import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { DialogChooseRoomComponent } from './dialog-choose-room.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DialogChooseRoomComponent', () => {
  let component: DialogChooseRoomComponent;
  let fixture: ComponentFixture<DialogChooseRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ DialogChooseRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogChooseRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
