import { RoomService } from './../../services/room.service';
import { UserService } from '../../services/user.service';
import { Component, OnInit, Input, EventEmitter, Output, HostListener } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { ApiService } from '../../services/api.service';
import { OvSettings } from '../../models/ov-settings';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  fullscreenIcon = 'fullscreen';
  positionInHandRaiseQueue: number = 0;

  @Input() lightTheme: boolean;
  @Input() mySessionId: string;
  @Input() localUser: UserModel;
  @Input() compact: boolean;
  @Input() showNotification: boolean;
  @Input() newMessagesNum: number;
  @Input() ovSettings: OvSettings;

  @Output() micButtonClicked = new EventEmitter<any>();
  @Output() camButtonClicked = new EventEmitter<any>();
  @Output() screenShareClicked = new EventEmitter<any>();
  @Output() exitButtonClicked = new EventEmitter<any>();
  @Output() menuButtonClicked = new EventEmitter<any>();
  @Output() stopScreenSharingClicked = new EventEmitter<any>();
  @Output() raiseHandClicked = new EventEmitter<any>();

  constructor(
    private apiSrv: ApiService,
    private userService:UserService,
    private roomSrv:RoomService,
    private urlSnackBar: MatSnackBar
  ) {}

  @HostListener('window:resize', ['$event'])
  sizeChange(event) {
    const maxHeight = window.screen.height;
    const maxWidth = window.screen.width;
    const curHeight = window.innerHeight;
    const curWidth = window.innerWidth;
    if (maxWidth !== curWidth && maxHeight !== curHeight) {
      this.fullscreenIcon = 'fullscreen';
    }
  }

  ngOnInit() {}

  micStatusChanged() {
    this.micButtonClicked.emit();
  }

  camStatusChanged() {
    this.camButtonClicked.emit();
  }

  screenShare() {
    this.screenShareClicked.emit();
  }

  stopScreenSharing() {
    this.stopScreenSharingClicked.emit();
  }

  exitSession() {
    this.exitButtonClicked.emit();
  }

  toggleMenu() {
    this.menuButtonClicked.emit();
  }

  raiseHand() {
    if(!this.localUser.isHandRaised()) {
      this.roomSrv.raiseHand(this.mySessionId, this.localUser.getNickname(), this.localUser.getAvatar(), this.localUser.getConnectionId()).subscribe(
        position => {
          this.positionInHandRaiseQueue = position;
          this.raiseHandClicked.emit();
        },
        error => console.error(error) 
      );
    } else {
      this.roomSrv.lowerHand(this.mySessionId, this.localUser.getConnectionId()).subscribe(
        (_) => {
          this.raiseHandClicked.emit();
        },
        error => console.error(error) 
      );
    }
    
  }

  getInviteURL(role:string){
    this.roomSrv.getRoomCode(this.mySessionId, role).subscribe(
      code => {
        let url:string = window.location.origin + '/#/invite/' + code;
        this.urlSnackBar.open(url, 'Close');
      },
      error => console.error(error)
    );
  }

  toggleFullscreen() {
    const state = this.apiSrv.toggleFullscreen('videoRoomNavBar');
    if (state === 'fullscreen') {
      this.fullscreenIcon = 'fullscreen_exit';
    } else {
      this.fullscreenIcon = 'fullscreen';
    }
  }
}
