import { RoomService } from './../../shared/services/room.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-invite-link',
  templateUrl: './invite-link.component.html',
  styleUrls: ['./invite-link.component.css']
})
export class InviteLinkComponent implements OnInit {

  url: string;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private roomSrv: RoomService
  ) { }

  ngOnInit() {
    this.getLink();
  }

  private getLink() {
    this.roomSrv.getRoomCode(this.data.roomName, this.data.role).subscribe(
      code => {
        this.url = window.location.origin + '/#/invite/' + code;
      },
      error => console.error(error)
    );
  }

  private dismiss() {
    this.data.dismiss();
  }

}
