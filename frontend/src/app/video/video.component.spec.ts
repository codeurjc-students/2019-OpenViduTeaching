import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoComponent } from './video.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SecurePipe } from '../shared/pipes/secure.pipe';
import { OpenViduSessionServiceMock } from '../shared/services/openvidu-session/openvidu-session.service.mock';
import { OpenViduSessionService } from '../shared/services/openvidu-session/openvidu-session.service';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
				{provide: OpenViduSessionService, useClass: OpenViduSessionServiceMock},
			],
      declarations: [ VideoComponent, SecurePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
