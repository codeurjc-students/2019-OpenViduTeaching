import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../shared/services/room.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

  code: string;
  roomName: string;
  userName: string;
  password: string;
  nameTaken: boolean = false;
  userErrorMsg: string;

  constructor(
    private roomSrv: RoomService,
    private userSrv: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.code = params.get("code");
    });
    this.checkRoom();
  }

  enterRoom() {
    if(this.userSrv.isLogged) {
      this.userName = this.userSrv.user.name;
      if(this.userSrv.isInRoom(this.roomName)) {
        this.router.navigate(['/',this.roomName]);
      } else {
        this.goToRoom(); 
      }
    } else {
      if(this.userName == null || this.userName == '') {
        this.userErrorMsg = 'You must enter a username';
      } else {
        this.userSrv.register(this.userName,this.password).subscribe(
          (_) => {
            this.goToRoom();
          },
          error => {
              this.userErrorMsg = 'Username already taken';
          }
        );
      }
    }
  }

  goToRoom() {
    this.roomSrv.enterRoom(this.code).subscribe(
      (_) => {
        this.router.navigate(['/', this.roomName]);
      },
      error => {
        console.log(error)
      }
    );
  }

  checkRoom() {
    this.roomSrv.checkRoom(this.code).subscribe(
      roomName => {
        this.roomName = roomName;
      },
      error => {
        this.router.navigate(['/']);
        console.log(error);
      }
    );
  }

  eventKeyPress(event) {
    if (event && event.keyCode === 13) {
      // Press Enter
      this.enterRoom();
    }
  }
}
