import { RecordingService } from './../../../../services/recording/recording.service';
import { Component, OnInit, Input } from '@angular/core';
import { Connection } from 'openvidu-browser';
import { InviteLinkComponent } from 'src/app/invite/invite-link/invite-link.component';
import { UserService } from 'src/app/shared/services/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OpenViduSessionService } from 'src/app/shared/services/openvidu-session/openvidu-session.service';
import { MenuService } from 'src/app/shared/services/menu/menu.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  roomName: string;

  isRecordingEnabled: boolean = false;
  isBeingRecorded: boolean;
  changingRecordStatus: boolean;

  constructor(
    private openviduSessionService: OpenViduSessionService,
    private recordingService: RecordingService,
    public userService: UserService,
    private menuService: MenuService,
    private urlSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.roomName = this.openviduSessionService.getSessionId();
    this.checkIsRecordingEnabled();
    this.menuService.subscribedToChangeRecordingStatus(this.setRecordingStatus);
  }

  private checkIsRecordingEnabled() {
    this.recordingService.isRecordingEnabled().subscribe(
      (isRecordingEnabled) => {
        this.isRecordingEnabled = isRecordingEnabled;
        if(this.isRecordingEnabled) {
          this.checkIsBeingRecorded();
        }
      },
      error => console.error(error) 
    );
  }

  private checkIsBeingRecorded() {
    this.changingRecordStatus = true;
    this.recordingService.isBeingRecorded(this.roomName).subscribe(
      (isBeingRecorded) => {
        this.isBeingRecorded = isBeingRecorded;
        this.changingRecordStatus = false;
      },
      error => console.error(error) 
    );
  }

  private startRecording() {
    this.changingRecordStatus = true;
    this.recordingService.startRecording(this.roomName).subscribe(
      () => {
        this.isBeingRecorded = true
        this.changingRecordStatus = false;
      },
      error => console.error(error) 
    );
  }

  private stopRecording() {
    this.changingRecordStatus = true;
    this.recordingService.stopRecording(this.roomName).subscribe(
      () => {
        this.isBeingRecorded = false
        this.changingRecordStatus = false;
      },
      error => console.error(error) 
    );
  }

  setRecordingStatus(recordingStatus: boolean) {
    this.isBeingRecorded = recordingStatus;
  }

  private getInviteURL(role:string){
    this.urlSnackBar.openFromComponent(InviteLinkComponent, {
      data: {
        roomName: this.roomName,
        role: role,
        dismiss: () => {this.urlSnackBar.dismiss()} 
      }
    });
  }
}
