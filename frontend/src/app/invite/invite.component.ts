import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../shared/services/room/room.service';
import { UserService } from '../shared/services/user/user.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  code: string;
  roomName: string;
  userName: string;
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
      this.roomSrv.enterRoom(this.code).subscribe( //Update user in case the role changed
        user => {
          this.userSrv.saveUser(user);
          this.navigate();
        },
        error => {
          this.loading = false;
          console.error(error)
        }
      );
    } else { //User is not logged
      if(this.userName == null || this.userName == '') {
        this.userErrorMsg = 'You must enter a username';
      } else {
        this.loading = true;
        const password = Array(10).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz").map((x) => x[Math.floor(Math.random() * x.length)]).join('');
        console.error(password);
        this.userSrv.register(this.userName, password).subscribe(
          (_) => {
            this.roomSrv.enterRoom(this.code).subscribe(
              user => {
                let auth = window.btoa(this.userName + ':' + password);
                this.userSrv.saveUser(user, auth);
                this.navigate();
              },
              error => {
                this.loading = false;
                console.error(error)
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
      this.userSrv.mustRemoveTempUser = false;
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
        console.error(error);
      }
    );
  }

  eventKeyPress(event) {
    if (event && event.keyCode === 13) {
      // Press Enter
      this.enterRoom();
    }
  }

  isLogged(): boolean {
    return this.userSrv.isLogged;
  }
}
