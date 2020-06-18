import { RoomServiceMock } from 'src/app/shared/services/room/room.service.mock';
import { RoomService } from './../shared/services/room/room.service';
import { RecordingService } from './../shared/services/recording/recording.service';
import { MatDialogModule } from '@angular/material/dialog';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RecordingServiceMock } from '../shared/services/recording/recording.service.mock';
import { UserService } from '../shared/services/user/user.service';
import { UserServiceMock } from '../shared/services/user/user.service.mock';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HomeComponent],
			providers: [
				{ provide: RecordingService, useClass: RecordingServiceMock },
				{ provide: UserService, useClass: UserServiceMock },
				{ provide: RoomService, useClass: RoomServiceMock },
			],
			imports: [RouterTestingModule.withRoutes([]), MatSnackBarModule, MatDialogModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
