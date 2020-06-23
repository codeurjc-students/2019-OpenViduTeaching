import { MenuServiceMock } from './../../../../services/menu/menu.service.mock';
import { UserServiceMock } from 'src/app/shared/services/user/user.service.mock';
import { UserService } from 'src/app/shared/services/user/user.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RecordingService } from 'src/app/shared/services/recording/recording.service';
import { RecordingServiceMock } from 'src/app/shared/services/recording/recording.service.mock';
import { MenuService } from 'src/app/shared/services/menu/menu.service';
import { WhiteboardServiceMock } from 'src/app/shared/services/whiteboard/whiteboard.service.mock';
import { WhiteboardService } from 'src/app/shared/services/whiteboard/whiteboard.service';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        { provide: MatSnackBar, useValue: {} },
        { provide: RecordingService, useClass: RecordingServiceMock },
        { provide: UserService, useClass: UserServiceMock },
        { provide: MenuService, useClass: MenuServiceMock },
        { provide: WhiteboardService, useClass: WhiteboardServiceMock}
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
