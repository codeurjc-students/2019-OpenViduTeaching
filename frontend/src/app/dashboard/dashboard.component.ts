import { RoomService } from './../shared/services/room.service';
import { UserService } from './../shared/services/user.service';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../shared/models/room-model';
import { MatSnackBar, MatDialogRef, MatDialog, MatDrawer } from '@angular/material';
import { InviteLinkComponent } from '../invite/invite-link/invite-link.component';
import { OpenViduService } from '../shared/services/open-vidu.service';

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

  private currentVideos: { name: string, createdAt: Date}[] = [];
  private currentRoomOfVideos: string;

  private loading: boolean;
  private roomInputOpen: boolean;
  private newRoom: string;

  @ViewChild('addRoomDialog') addRoomDialog: TemplateRef<any>;
  dialogRef: MatDialogRef<any, any>;
  @ViewChild('videosDrawer') videosDrawer: MatDrawer;
  
  constructor(
    private router: Router,
    private userSrv: UserService,
    private roomSrv: RoomService,
    private openviduSrv: OpenViduService,
    private urlSnackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    if(this.userSrv.isLogged) {
      this.getRooms();
    }
  }

  getRooms() {
    this.loading = true;
    this.userSrv.getRoomsForUser().subscribe(
      rooms => {
        this.moddedRooms = rooms.modded;
        this.presentedRooms = rooms.presented;
        this.participatedRooms = rooms.participated;
        this.loading = false;
      },
      error => console.log(error)
    );
  }

  openVideos(roomName: string) {
    const wasOpened = this.videosDrawer.opened;
    this.videosDrawer.close();
    this.currentVideos = [];
    if(this.currentRoomOfVideos !== roomName || !wasOpened) {
      this.openviduSrv.getRecordings(roomName).subscribe(
        recordings => {
          this.currentRoomOfVideos = roomName;
          for(let recording of recordings) {
            if(recording.status=="ready") {
              this.currentVideos.push({
                name: recording.name,
                createdAt: new Date(recording.createdAt)
              });
            }
          }
          this.videosDrawer.open();
        },
        error => console.log(error)
      );
    }
  }

  getInviteURL(roomName: string, role:string){
    this.urlSnackBar.openFromComponent(InviteLinkComponent, {
      data: {
        roomName: roomName,
        role: role,
        dismiss: () => {this.urlSnackBar.dismiss()}
      }
    });
  }

  openAddRoomDialog() {
    this.dialogRef = this.dialog.open(this.addRoomDialog, {
      width: '50%',
      height: '60%',
    });
  }

  eventKeyPress(event: any) {
    if (event && event.keyCode === 13) {
      // Press Enter
      this.createRoom();
    }
  }

  createRoom() {
    this.roomSrv.createRoom(this.newRoom).subscribe(
      room => {
        this.dialogRef.close("Room created");
        this.userSrv.user.moddedRooms.push(room)
        this.router.navigate([room.name]);
      },
      error => console.error(error)
    );
    this.newRoom;
  }
}
