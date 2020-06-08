import { UserServiceMock } from 'src/app/shared/services/user/user.service.mock';
import { UserService } from 'src/app/shared/services/user/user.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RecordingService } from 'src/app/shared/services/recording/recording.service';
import { RecordingServiceMock } from 'src/app/shared/services/recording/recording.service.mock';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        { provide: MatSnackBar, useValue: {} },
        { provide: RecordingService, useClass: RecordingServiceMock },
        { provide: UserService, useClass: UserServiceMock }
      ],
      declarations: [ SettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
