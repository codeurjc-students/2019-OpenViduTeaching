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
  loading: boolean = false;

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
    if(this.userSrv.isLogged) { //User is logged
      this.loading = true;
      this.userName = this.userSrv.user.name;
      if(this.userSrv.isModOfRoom(this.roomName)) { //Direct access if already a mod
        this.navigate();
      } else {
        this.roomSrv.enterRoom(this.code).subscribe( //Update user if they are not in the room or mod
          user => {
            this.userSrv.saveUser(user);
            this.navigate();
          },
          error => {
            this.loading = false;
            console.log(error)
          }
        );
      }
    } else { //User is not logged
      if(this.userName == null || this.userName == '') {
        this.userErrorMsg = 'You must enter a username';
      } else if(this.password == null) {
        this.userErrorMsg = 'You must enter a password';
      } else {
        this.loading = true;
        this.userSrv.register(this.userName,this.password).subscribe(
          (_) => {
            this.roomSrv.enterRoom(this.code).subscribe(
              user => {
                let auth = window.btoa(this.userName + ':' + this.password);
                this.userSrv.saveUser(user, auth);
                this.navigate();
              },
              error => {
                this.loading = false;
                console.log(error)
              }
            );
          },
          error => {
            this.loading = false;
            this.userErrorMsg = 'Username already taken';
          }
        );
      }
    }
  }

  navigate() {
    this.router.navigate(['/', this.roomName]).then(() => {
			window.location.reload();
		});
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
