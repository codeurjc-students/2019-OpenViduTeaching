import { Component, OnInit, Input } from '@angular/core';
import { OpenViduService } from 'src/app/shared/services/open-vidu.service';
import { Connection } from 'openvidu-browser';

@Component({
  selector: 'settings-component',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @Input() roomName: string;
  @Input() modConnections: Connection[];

  private isBeingRecorded: boolean;
  private changingRecordStatus: boolean;
  private modConnectionsId: string[] = [];

  constructor(
    private openviduSrv: OpenViduService
  ) { }

  ngOnInit(): void {
    this.checkIsBeingRecorded();
    this.updateModConnectionsId();
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
        this.updateModConnectionsId();
        this.openviduSrv.sendSignal(this.roomName, 'changeRecordingStatus', this.modConnectionsId, { 'isRecording': true }).subscribe(
          (_) => {
            this.isBeingRecorded = true
            this.changingRecordStatus = false;
          },
          error => console.error(error) 
        );
      },
      error => console.error(error) 
    );
  }

  private stopRecording() {
    this.changingRecordStatus = true;
    this.openviduSrv.stopRecording(this.roomName).subscribe(
      () => {
        this.updateModConnectionsId();
        this.openviduSrv.sendSignal(this.roomName, 'changeRecordingStatus', this.modConnectionsId, { 'isRecording': false }).subscribe(
          (_) => {
            this.isBeingRecorded = false
            this.changingRecordStatus = false;
          },
          error => console.error(error) 
        );
      },
      error => console.error(error) 
    );
  }

  public setRecordingStatus(recordingStatus: boolean) {
    this.isBeingRecorded = recordingStatus;
  }

  private updateModConnectionsId() {
    for(let connection of this.modConnections) {
      const index:number = this.modConnectionsId.indexOf(connection.connectionId);
      if(index == -1) {
        this.modConnectionsId.push(connection.connectionId);
      } else {
        this.modConnectionsId[index] = connection.connectionId;
      }
    }
  }
}
