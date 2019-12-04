import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

  code: string;
  roomName: string;
  userName: string;
  nameTaken: boolean = false;
  inputErrorMsg: string;

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
    if(this.userName == null || this.userName == '') {
      this.inputErrorMsg = 'You must enter a username';
    } else {
      this.userSrv.checkUserName(this.userName).subscribe(
        (_) => {
          this.inputErrorMsg = 'Username already taken';
        },
        error => {
          //Only enters when the username isn't taken
          this.goToRoom();
        }
      );
    }
  }

  goToRoom() {
    this.roomSrv.enterRoom(this.code, this.userName).subscribe(
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
        console.log(error)
      }
    );
  }
}
