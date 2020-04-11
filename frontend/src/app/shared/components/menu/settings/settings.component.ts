import { Component, OnInit, Input } from '@angular/core';
import { OpenViduService } from 'src/app/shared/services/open-vidu.service';

@Component({
  selector: 'settings-component',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @Input() roomName: string;

  private isBeingRecorded: boolean;
  private changingRecordStatus: boolean;

  constructor(
    private openviduSrv: OpenViduService
  ) { }

  ngOnInit(): void {
    this.checkIsBeingRecorded();
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

}
