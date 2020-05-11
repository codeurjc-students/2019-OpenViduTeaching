import { MatDialog } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoRoomComponent } from './video-room.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('VideoRoomComponent', () => {
  let component: VideoRoomComponent;
  let fixture: ComponentFixture<VideoRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: MatDialog, useValue: {} }
      ],
      declarations: [ VideoRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
