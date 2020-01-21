import { RoomService } from './../shared/services/room.service';
import { UserService } from './../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../shared/models/room-model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  public version = require('../../../package.json').version;

  private moddedRooms: Room[] = [];
  private presentedRooms: Room[] = [];
  private participatedRooms: Room[] = [];

  constructor(
    private router: Router,
    private userSrv: UserService,
    private roomSrv: RoomService,
    private urlSnackBar: MatSnackBar
  ) {}

  ngOnInit() {
    if(this.userSrv.isLogged) {
      this.getRooms();
    }
  }

  getRooms() {
    this.userSrv.getRoomsForUser().subscribe(
      rooms => {
        this.moddedRooms = rooms.modded;
        this.presentedRooms = rooms.presented;
        this.participatedRooms = rooms.participated;
      },
      error => console.log(error)
    );
  }

  getInviteURL(roomName: string, role:string){
    this.roomSrv.getRoomCode(roomName, role).subscribe(
      code => {
        let url:string = window.location.origin + '/#/invite/' + code;
        this.urlSnackBar.open(url, 'Close');
      },
      error => console.error(error)
    );
  }
}
