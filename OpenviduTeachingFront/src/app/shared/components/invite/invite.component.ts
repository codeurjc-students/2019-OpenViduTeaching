import { RoomService } from './../../services/room.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

  code: string;
  roomName: string;
  userName: string;

  constructor(
    private roomSrv: RoomService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.code = params.get("code");
    });
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

  enterRoom() {
    if (this.userName !== undefined) {
      this.roomSrv.enterRoom(this.code, this.userName).subscribe(
        (_) => {
          this.router.navigate(['/',this.roomName]);
        },
        error => {
          console.log(error)
        }
      );
    }
  }

}
