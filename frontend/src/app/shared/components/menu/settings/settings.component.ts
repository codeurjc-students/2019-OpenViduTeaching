import { UserService } from './../../../services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { OpenViduService } from 'src/app/shared/services/open-vidu.service';
import { Connection } from 'openvidu-browser';
import { MatSnackBar } from '@angular/material';
import { InviteLinkComponent } from 'src/app/invite/invite-link/invite-link.component';

@Component({
  selector: 'settings-component',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @Input() roomName: string;
  @Input() modConnections: Connection[];

  private isRecordingEnabled: boolean = false;
  private isBeingRecorded: boolean;
  private changingRecordStatus: boolean;

  constructor(
    private openviduSrv: OpenViduService,
    private userSrv: UserService,
    private urlSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.checkIsRecordingEnabled();
  }

  private checkIsRecordingEnabled() {
    this.openviduSrv.isRecordingEnabled().subscribe(
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
    this.openviduSrv.isBeingRecorded(this.roomName).subscribe(
      (isBeingRecorded) => {
        this.isBeingRecorded = isBeingRecorded;
        this.changingRecordStatus = false;
      },
      error => console.error(error) 
    );
  }

  private startRecording() {
    this.changingRecordStatus = true;
    this.openviduSrv.startRecording(this.roomName).subscribe(
      () => {
        this.isBeingRecorded = true
        this.changingRecordStatus = false;
      },
      error => console.error(error) 
    );
  }

  private stopRecording() {
    this.changingRecordStatus = true;
    this.openviduSrv.stopRecording(this.roomName).subscribe(
      () => {
        this.isBeingRecorded = false
        this.changingRecordStatus = false;
      },
      error => console.error(error) 
    );
  }

  public setRecordingStatus(recordingStatus: boolean) {
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
