import { WhiteboardService } from './../../../../services/whiteboard/whiteboard.service';
import { RecordingService } from './../../../../services/recording/recording.service';
import { Component, OnInit, Input } from '@angular/core';
import { InviteLinkComponent } from 'src/app/invite/invite-link/invite-link.component';
import { UserService } from 'src/app/shared/services/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OpenViduSessionService } from 'src/app/shared/services/openvidu-session/openvidu-session.service';
import { MenuService } from 'src/app/shared/services/menu/menu.service';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
	roomName: string;

	isWhiteboardActive: boolean;

	isRecordingEnabled: boolean = false;
	isBeingRecorded: boolean;
	changingRecordStatus: boolean;

	constructor(
		private openviduSessionService: OpenViduSessionService,
		private recordingService: RecordingService,
		public userService: UserService,
		private menuService: MenuService,
		private whiteboardService: WhiteboardService,
		private urlSnackBar: MatSnackBar
	) {}

	ngOnInit() {
		this.roomName = this.openviduSessionService.getSessionId();
        this.checkIsRecordingEnabled();
		this.subscribeToWhiteboardActive();
		this.subscribeToRecordingStatus();
	}

	showWhiteboard() {
		this.whiteboardService.showWhiteboard();
	}

	hideWhiteboard() {
        this.whiteboardService.hideWhiteBoard();
    }

	private checkIsRecordingEnabled() {
		this.recordingService.isRecordingEnabled().subscribe(
			(isRecordingEnabled) => {
				this.isRecordingEnabled = isRecordingEnabled;
				if (this.isRecordingEnabled) {
					this.checkIsBeingRecorded();
				}
			},
			(error) => console.error(error)
		);
	}

	private checkIsBeingRecorded() {
		this.changingRecordStatus = true;
		this.recordingService.isBeingRecorded(this.roomName).subscribe(
			(isBeingRecorded) => {
				this.menuService.setIsBeingRecorded(isBeingRecorded);
				this.changingRecordStatus = false;
			},
			(error) => console.error(error)
		);
	}

	private startRecording() {
		this.changingRecordStatus = true;
		this.recordingService.startRecording(this.roomName).subscribe(
			() => {
				this.menuService.setIsBeingRecorded(true);
				this.changingRecordStatus = false;
			},
			(error) => console.error(error)
		);
	}

	private stopRecording() {
		this.changingRecordStatus = true;
		this.recordingService.stopRecording(this.roomName).subscribe(
			() => {
				this.menuService.setIsBeingRecorded(false);
				this.changingRecordStatus = false;
			},
			(error) => console.error(error)
		);
	}

	private getInviteURL(role: string) {
		this.urlSnackBar.openFromComponent(InviteLinkComponent, {
			data: {
				roomName: this.roomName,
				role: role,
				dismiss: () => {
					this.urlSnackBar.dismiss();
				}
			}
		});
	}

	private subscribeToWhiteboardActive() {
		this.whiteboardService.isWhiteBoardActiveObs.subscribe((active) => {
            this.isWhiteboardActive = active;
		});
	}

	private subscribeToRecordingStatus() {
		this.menuService.isBeingRecordedObs.subscribe((status) => {
			this.isBeingRecorded = status;
		})
	}
}
