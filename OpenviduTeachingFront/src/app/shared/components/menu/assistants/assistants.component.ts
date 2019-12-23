import { RoomService } from '../../../services/room.service';
import { Component, OnInit, Input } from '@angular/core';
import { Session } from 'openvidu-browser';

@Component({
  selector: 'assistants-component',
  templateUrl: './assistants.component.html',
  styleUrls: ['./assistants.component.css']
})
export class AssistantsComponent implements OnInit {

  @Input() session: Session;

  constructor(
    private roomSrv: RoomService
  ) { }

  moderatorsConnected: string[] = [];
  participantsConnected: string[] = [];
  assistantsConnectedCount: Number;

  moderatorsDisconnected: string[] = [];
  participantsDisconnected: string[] = [];
  assistantsDisconnectedCount: Number;

  ngOnInit() {
    this.getParticipants();
  }

  getParticipants() {
    this.roomSrv.getAssistants(this.session.sessionId).subscribe(
      assistants => {
        for(let moderator of assistants.moderators) {
          if(moderator.connected) {
            this.moderatorsConnected.push(moderator.name);
          } else {
            this.moderatorsDisconnected.push(moderator.name);
          }
        }
        for(let participant of assistants.participants) {
          if(participant.connected) {
            this.participantsConnected.push(participant.name);
          } else {
            this.participantsDisconnected.push(participant.name);
          }
        }
        this.assistantsConnectedCount = this.moderatorsConnected.length + this.participantsConnected.length;
        this.assistantsDisconnectedCount = this.moderatorsDisconnected.length + this.participantsDisconnected.length;
      },
      error => console.log(error)
    );
  }
}
