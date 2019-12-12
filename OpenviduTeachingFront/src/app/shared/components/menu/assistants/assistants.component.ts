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

  moderators: string[];
  participants: string[];
  assistantsCount: Number;

  ngOnInit() {
    this.getParticipants();
  }

  getParticipants() {
    this.roomSrv.getAssistants(this.session.sessionId).subscribe(
      assistants => {
        console.log(assistants);
        this.moderators = assistants.moderators;
        this.participants = assistants.participants;
        this.assistantsCount = this.moderators.length + this.participants.length;
      },
      error => console.log(error)
    );
  }
}
