import { RoomService } from './../shared/services/room.service';
import { AssistantsComponent } from './../shared/components/menu/assistants/assistants.component';
import { UserService } from '../shared/services/user.service';
import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { MatDialog, MatTabChangeEvent } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import {
  OpenVidu,
  Publisher,
  Session,
  SignalOptions,
  Stream,
  StreamEvent,
  StreamManagerEvent,
  StreamManager,
  ConnectionEvent,
  Connection,
} from 'openvidu-browser';
import { DialogErrorComponent } from '../shared/components/dialog-error/dialog-error.component';
import { OpenViduLayout, OpenViduLayoutOptions } from '../shared/layout/openvidu-layout';
import { UserModel } from '../shared/models/user-model';
import { OpenViduService } from '../shared/services/open-vidu.service';
import { ChatComponent } from '../shared/components/menu/chat/chat.component';
import { OvSettings } from '../shared/models/ov-settings';
import { ApiService } from '../shared/services/api.service';
import { ThrowStmt } from '@angular/compiler';
import { trigger, transition, style, animate, query, stagger, animateChild } from '@angular/animations';

@Component({
  selector: 'app-video-room',
  templateUrl: './video-room.component.html',
  styleUrls: ['./video-room.component.css'],
  animations: [
    trigger('popup', [
      transition(':enter', [
        style({ transform: 'scale(0.1)', opacity: 0 }),
        animate('0.75s cubic-bezier(.8, -0.6, 0.26, 1.6)',
          style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate('0.5s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({
            transform: 'scale(0.1)', opacity: 0,
            height: '0px', margin: '0px'
          }))
      ])
    ])
  ]
})
export class VideoRoomComponent implements OnInit, OnDestroy {
  // webComponent's inputs and outputs
  @Input() ovSettings: OvSettings;
  @Input() sessionName: string;
  @Input() user: string;
  @Input() openviduServerUrl: string;
  @Input() tokens: string[];
  @Input() theme: string;
  @Input() isWebComponent: boolean;
  @Output() joinSession = new EventEmitter<any>();
  @Output() leaveSession = new EventEmitter<any>();
  @Output() error = new EventEmitter<any>();

  @ViewChild('sidenav') menu: any;
  @ViewChild('tabGroup') tabGroup: any;
  @ViewChild('chatComponent') chatComponent: ChatComponent;
  @ViewChild('modChatComponent') modChatComponent: ChatComponent;
  @ViewChild('assistants') assistantsComponent: AssistantsComponent;
  @ViewChildren('popup', { read: ElementRef }) currentPopups: QueryList<ElementRef>;
  @ViewChild('raisedHands', { read: ElementRef }) raisedHandsPopup: ElementRef;

  // Constants
  BIG_ELEMENT_CLASS = 'OV_big';
  SCREEN_TYPE: 'screen' = 'screen';
  REMOTE_TYPE: 'remote' = 'remote';

  // Variables
  compact = false;
  sidenavMode: 'side' | 'over' = 'side';
  lightTheme: boolean;
  menuOpened: boolean;
  showDialogExtension = false;
  showDialogChooseRoom = true;
  session: Session;
  sessionScreen: Session;
  openviduLayout: OpenViduLayout;
  openviduLayoutOptions: OpenViduLayoutOptions;
  mySessionId: string;
  roomName: string;
  myUserName: string;
  localUsers: UserModel[] = [];
  remoteStreamers: UserModel[] = [];
  remoteUsers: UserModel[] = [];
  messageList: { connectionId: string; nickname: string; message: string; userAvatar: string }[] = [];
  messageListMod: { connectionId: string; nickname: string; message: string; userAvatar: string }[] = [];
  newMessages = 0;
  newMessagesAssistants = 0;
  newMessagesModerators = 0;
  modConnections: Connection[] = [];
  updatingModConnections: boolean;
  currentNotifications: { top: string, subtitle: string; nickname: string; content: string; userAvatar: string; color: string}[] = [];
  handsRaised: {nickname: string, avatar: string, connectionId: string}[] = [];
  handsRaisedMessage: string;

  private OV: OpenVidu;
  private OVScreen: OpenVidu;
  private userCamDeleted: UserModel;

  constructor(
    private openViduSrv: OpenViduService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private apiSrv: ApiService,
    private userService:UserService,
    private roomService: RoomService
  ) {}

  @HostListener('window:beforeunload')
  beforeunloadHandler() {
    this.openViduSrv.syncRemoveUser(this.mySessionId);
    if(this.localUsers[0].isHandRaised()) {
      this.roomService.syncLowerHand(this.mySessionId, this.localUsers[0].getConnectionId());
    }
    this.exitSession();
  }

  @HostListener('window:resize')
  sizeChange() {
    if (this.openviduLayout) {
      this.openviduLayout.updateLayout();
      this.checkSizeComponent();
    }
  }

  ngOnInit() {
    if(!this.userService.isLogged) {
      this.openDialogError('You need to be logged in to enter a room', 'Rooms can only be accessed with an invite URL');
    }
    this.route.paramMap.subscribe(params => {
      this.roomName = params.get("roomName");
    });
    this.checkTheme();
    this.openViduSrv
      .getOvSettingsData(this.roomName)
      .then((data: OvSettings) => {
        this.ovSettings = this.ovSettings ? this.ovSettings : data;
      })
      .catch((error) => console.error(error));
  }

  ngOnDestroy() {
    this.exitSession();
  }

  initApp() {
    setTimeout(() => {
      this.openviduLayout = new OpenViduLayout();
      this.openviduLayoutOptions = this.apiSrv.getOpenviduLayoutOptions();
      this.openviduLayout.initLayoutContainer(document.getElementById('layout'), this.openviduLayoutOptions);
      this.checkSizeComponent();
      this.joinToSession();
    }, 50);
  }

  toggleMenu() {
    this.menu.toggle().then(() => {
      this.menuOpened = this.menu.opened;
      if (this.menuOpened) {
        this.newMessages = this.tabGroup.selectedIndex===0 ? this.newMessagesModerators : (this.tabGroup.selectedIndex>1 ? this.newMessagesAssistants+this.newMessagesModerators : this.newMessagesAssistants);
      }
      const ms = this.isWebComponent ? 300 : 0;
      setTimeout(() => this.openviduLayout.updateLayout(), ms);
    });
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent) {
    if(tabChangeEvent.index===0) {
      this.newMessagesAssistants = 0;
      this.newMessages = this.newMessagesModerators;
    } else if (tabChangeEvent.index===1) {
      this.newMessagesModerators = 0;
      this.newMessages = this.newMessagesAssistants;
    }
  }

  checkNotification(signal: string) {
    if(signal==='chat') {
      this.newMessagesAssistants = this.tabGroup.selectedIndex===0 ? 0 : this.newMessagesAssistants + 1;
    } else {
      this.newMessagesModerators = this.tabGroup.selectedIndex===1 ? 0 : this.newMessagesModerators + 1;
    }
    this.newMessages = this.menuOpened ? (this.tabGroup.selectedIndex===0 ? this.newMessagesModerators : (this.tabGroup.selectedIndex>1 ? this.newMessagesAssistants+this.newMessagesModerators: this.newMessagesAssistants)) : this.newMessages + 1;
  }

  private getOffsetOfNotification(position: number): string {
    if(position===0) {
      if(this.handsRaised.length>0) {
          return this.raisedHandsPopup.nativeElement.offsetTop + this.raisedHandsPopup.nativeElement.offsetHeight + 10 + 'px'
      } else {
        return '5%';
      }
    } else {
      const previousPopup = this.currentPopups.toArray()[position-1];
      return previousPopup.nativeElement.offsetTop + previousPopup.nativeElement.offsetHeight + 10 + 'px';
    }
  }

  private recalculatePopupOffsets() {
    for(let i=0;i<this.currentNotifications.length;i++) {
      setTimeout(() => {
        //If we don't set a timeout the top property change is too slow for the loop and it glitches when calculating different heights
        this.currentNotifications[i].top = this.getOffsetOfNotification(i);
      });
    }
  }

  private removePopupOnTimeout() {
    setTimeout(() => {
      this.currentNotifications.shift();
      setTimeout(() => {
        this.recalculatePopupOffsets();
      }, 500);
    }, 5000);
  }

  showChatPopup(nickname: string, message: string, userAvatar: string, signal: string) {
    const chatType: string = signal === 'chat' ? 'Assistants' : 'Moderators';
    const isThatChatSelected = signal === 'chat' ? this.tabGroup.selectedIndex===0 : this.tabGroup.selectedIndex===1;
    if(nickname!==this.localUsers[0].getNickname() && (!this.menuOpened || !isThatChatSelected)) {
      this.currentNotifications.push({
        top: this.getOffsetOfNotification(this.currentNotifications.length),
        subtitle: chatType,
        nickname: nickname,
        content: message,
        userAvatar: userAvatar,
        color: 'light'
      });
      setTimeout(() => {
        this.playAudio('message');
      }, 250);
      this.removePopupOnTimeout();
    }
  }

  showConnectionPopup(nickname: string, isConnectionCreated: boolean, userAvatar: string) {
    if(nickname!==this.localUsers[0].getNickname()) {
      this.currentNotifications.push({
        top: this.getOffsetOfNotification(this.currentNotifications.length),
        subtitle: undefined,
        nickname: nickname,
        content: isConnectionCreated ? 'Joined the session' : 'Left the session',
        userAvatar: userAvatar,
        color: 'dark'
      });
      const audioName = isConnectionCreated ? 'connection' : 'disconnection';
      this.playAudio(audioName);
      this.removePopupOnTimeout();
    }
  }

  playAudio(fileName: string) {
    let audio = new Audio();
      audio.src = "../assets/sounds/" + fileName + ".mp3";
      audio.load();
      audio.play();
  }

  joinToSession() {
    this.OV = new OpenVidu();
    this.OVScreen = new OpenVidu();
    this.session = this.OV.initSession();
    this.sessionScreen = this.OVScreen.initSession();
    this.subscribeToUserChanged();
    this.subscribeToStreamCreated();
    this.subscribedToStreamDestroyed();
    this.subscribeToConnectionCreated();
    this.subscribedToConnectionDestroyed();
    this.subscribedToChat('chat', this.messageList, this.chatComponent);
    if(this.userService.isModOfRoom(this.roomName)) {
      this.subscribedToChat('chatMod', this.messageListMod, this.modChatComponent);
    }
    this.connectToSession();
  }

  exitSession() {
    if (this.sessionScreen) {
      this.sessionScreen.disconnect();
    }
    if (this.session) {
      this.session.disconnect();
    }
    if(this.OV != null) {
      if(this.localUsers[0].isHandRaised()) {
        this.roomService.lowerHand(this.roomName, this.localUsers[0].getConnectionId()).subscribe(
          (_) => {},
          error => console.error(error) 
        );
      }
      this.OV = null;
      this.OVScreen = null;
      this.session = null;
      this.sessionScreen = null;
      this.userCamDeleted = null;
      this.localUsers = [];
      this.remoteStreamers = [];
      this.openviduLayout = null;
      this.router.navigate(['']);
      this.leaveSession.emit();
      if(this.mySessionId) {
        this.openViduSrv.removeUser(this.roomName).subscribe(
          (_) => { },
          error => console.log(error)
        );
      }
    }
  }

  nicknameChanged(nickname: string): void {
    this.localUsers.forEach((user) => {
      user.setNickname(nickname);
      this.sendSignalUserChanged(user);
    });
  }

  toggleMic(): void {
    this.localUsers[0].setAudioActive(!this.localUsers[0].isAudioActive());
    (<Publisher>this.localUsers[0].getStreamManager()).publishAudio(this.localUsers[0].isAudioActive());
    this.sendSignalUserChanged(this.localUsers[0]);
  }

  toggleCam(): void {
    if (this.localUsers.length === 2) {
      // TWO USERS, STOP CAMERA
      console.log('TWO USERS - STOP CAM');
      this.stopCamera();
    } else if (this.localUsers[0].isScreen()) {
      // SCREEN USER, START CAMERA
      console.log('USER IS SCREEN - START CAM');
      if (this.userCamDeleted) {
        // Setting local connection ID to Screen User
        this.localUsers[0].setLocalConnectionId(this.session.connection.connectionId);
        this.userCamDeleted.setNickname(this.localUsers[0].getNickname());
        if (!this.userCamDeleted.getStreamManager()) {
          this.OV.initPublisherAsync(undefined, {
            publishAudio: this.localUsers[0].isAudioActive(),
            publishVideo: true,
          }).then((publisher) => {
            this.userCamDeleted.setStreamManager(publisher);
            this.publishCamSession();
          });
        } else {
          this.publishCamSession();
        }
      }
    } else {
      // CAM USER, MUTE / UNMUTE CAMERA
      console.log('USER IS CAM - MUTE / UNMUTE CAM');
      this.localUsers[0].setVideoActive(!this.localUsers[0].isVideoActive());
      (<Publisher>this.localUsers[0].getStreamManager()).publishVideo(this.localUsers[0].isVideoActive());
      this.sendSignalUserChanged(this.localUsers[0]);
    }
  }

  publishCamSession(){
    const hasAudio = this.localUsers[0].isAudioActive();
    this.setFirstUserAudio(false);
    this.localUsers.unshift(this.userCamDeleted);
    this.localUsers[0].setVideoActive(true);
    this.localUsers[0].setAudioActive(hasAudio);
    this.publishSession(this.localUsers[0]).then(() => {
      (<Publisher>this.localUsers[0].getStreamManager()).publishVideo(true);
      (<Publisher>this.localUsers[0].getStreamManager()).publishAudio(hasAudio);
      this.sendSignalUserChanged(this.localUsers[0]);
    })
      .catch((error) => console.error(error));
  }

  startScreenSharing(i: number, tokenReceived?: string) {
    console.log('STARTsCREENsHARING - ');
    this.getToken().then((tokenResponse) => {
      const token = tokenReceived ? tokenReceived : tokenResponse;
        this.sessionScreen
          .connect(token, { clientData: this.localUsers[i].getNickname() })
          .then(() => {
            this.localUsers[i].getStreamManager().once('accessAllowed', () => {
              this.localUsers[i].setConnectionId(this.sessionScreen.connection.connectionId);
              if (this.session.connection && this.session.connection.connectionId) {
                this.localUsers[i].setLocalConnectionId(this.session.connection.connectionId);
              }
              this.publishSession(this.localUsers[i]).then(() => {
                  this.localUsers[0].setScreenShareActive(true);
                  this.sendSignalUserChanged(this.localUsers[i]);
                  if (!this.localUsers[0].isVideoActive()) {
                    // REMOVE CAM STREAM
                    this.stopCamera();
                  }
                  this.joinSession.emit();
                  this.openviduLayout.updateLayout();
                })
                .catch((error) => console.error(error));
            });
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }

  stopScreenSharing(): void {
    console.log('USERS ARRAY LENGTH', this.localUsers.length);
    if (this.localUsers.length === 2) {
      // STOP SCREEN SHARE & CAM IS ENABLE
      this.sessionScreen.unpublish(<Publisher>this.localUsers.pop().getStreamManager());
      this.localUsers[0].setScreenShareActive(false);
      this.sendSignalUserChanged(this.localUsers[0]);
    } else if (this.localUsers[0].isScreen()) {
      // STOP SCREEN SHARE && CAM IS DISABLE
      // PUBLISH CAM WITH AUDIO ONLY
      this.sessionScreen.unpublish(<Publisher>this.localUsers[0].getStreamManager());
      this.localUsers.shift();
      this.localUsers.push(this.userCamDeleted);
      console.log('Users array ', this.localUsers);
      this.localUsers[0].setVideoActive(false);
      this.localUsers[0].setScreenShareActive(false);
      this.session.publish(<Publisher>this.localUsers[0].getStreamManager()).then(() => {
        (<Publisher>this.localUsers[0].getStreamManager()).publishVideo(this.localUsers[0].isVideoActive());
        this.sendSignalUserChanged(this.localUsers[0]);
      });
    }
  }

  toggleDialogExtension() {
    this.showDialogExtension = !this.showDialogExtension;
  }

  toggleDialogChooseRoom(data: { localUsers: UserModel[]; sessionId: string }) {
    this.showDialogChooseRoom = false;
    this.localUsers = data.localUsers;
    this.mySessionId = data.sessionId;
    this.initApp();
  }

  raiseHand() {
    this.localUsers[0].setHandRaised(!this.localUsers[0].isHandRaised());
    this.sendSignalUserChanged(this.localUsers[0]);
  }

  screenShareAndChangeScreen() {
    const videoSource = navigator.userAgent.indexOf('Firefox') !== -1 ? 'window' : 'screen';
    const hasAudio = this.localUsers[0].isLocal() ? false : true;
    const publisherProperties = {
      videoSource: videoSource,
      publishAudio: hasAudio,
      publishVideo: true,
      mirror: false,
    };
    this.OVScreen.initPublisherAsync(undefined, publisherProperties)
      .then((publisher: Publisher) => {
        publisher.once('accessAllowed', () => {
          // CHANGE CAMERA
          if ((this.localUsers[0].isLocal() && this.localUsers[1]) || this.localUsers[0].isScreen()) {
              const index = this.localUsers[0].isLocal() ? 1 : 0;
              this.sessionScreen.unpublish(<Publisher>this.localUsers[index].getStreamManager());
              this.localUsers[index].setStreamManager(publisher);
              this.sessionScreen.publish(publisher);
          } else {
            // ADD NEW SCREEN USER
            console.log('STREAM SHARE - ELSE: position 1');
            this.localUsers.push(this.createScreenUser(publisher));
            this.startScreenSharing(1);
          }
        });
      })
      .catch((error) => {
        if (error && error.name === 'SCREEN_EXTENSION_NOT_INSTALLED') {
          this.toggleDialogExtension();
        } else {
          this.apiSrv.handlerScreenShareError(error);
        }
      });
  }

  checkSizeComponent() {
    this.compact = document.getElementById('room-container').offsetWidth <= 790;
    this.sidenavMode = this.compact ? 'over' : 'side';
  }

  enlargeElement(event) {
    const path = event.path ? event.path : event.composedPath(); // Chrome or Firefox
    const element: HTMLElement = path.filter((e: HTMLElement) => e.className && e.className.includes('OT_root'))[0];
    if (element.className.includes(this.BIG_ELEMENT_CLASS)) {
      element.classList.remove(this.BIG_ELEMENT_CLASS);
    } else {
      element.classList.add(this.BIG_ELEMENT_CLASS);
    }
    this.openviduLayout.updateLayout();
  }

  private deleteRemoteStream(stream: Stream): void {
    const userStream = this.remoteStreamers.filter((user: UserModel) => user.getStreamManager().stream === stream)[0];
    const index = this.remoteStreamers.indexOf(userStream, 0);
    if (index > -1) {
      this.remoteStreamers.splice(index, 1);
    }
  }

  private subscribeToConnectionCreated() {
    this.session.on('connectionCreated', (event: ConnectionEvent) => {
      const connectionId = event.connection.connectionId;
      if (
        (this.localUsers[0] && this.localUsers[0].getConnectionId() !== connectionId && this.session.connection.connectionId !== connectionId &&
        (this.localUsers[1] && this.localUsers[1].getConnectionId() !== connectionId)) ||
        (this.localUsers[0] && !this.localUsers[1] && this.localUsers[0].getConnectionId() !== connectionId && this.session.connection.connectionId !== connectionId)
      ) {
        const newUser = new UserModel();
        newUser.setConnectionId(connectionId);
        const nickname = event.connection.data.split('%')[0];
        newUser.setNickname(JSON.parse(nickname).clientData);
        this.remoteUsers.push(newUser);

        this.localUsers.forEach((user) => {
          this.sendSignalUserChanged(user);
        });
      }
      if(this.assistantsComponent) {
        this.assistantsComponent.getAssistants();
      }
      this.updateModConnections();
    });
  }

  private subscribeToStreamCreated() {
    this.session.on('streamCreated', (event: StreamEvent) => {
      const connectionId = event.stream.connection.connectionId;
      if (
        (this.localUsers[0] && this.localUsers[0].getConnectionId() !== connectionId &&
        (this.localUsers[1] && this.localUsers[1].getConnectionId() !== connectionId)) ||
        (this.localUsers[0] && !this.localUsers[1] && this.localUsers[0].getConnectionId() !== connectionId)
      ) {
        const subscriber = this.session.subscribe(event.stream, undefined);
        subscriber.on('streamPlaying', (e: StreamManagerEvent) => {
          this.checkSomeoneShareScreen();
          (<HTMLElement>subscriber.videos[0].video).parentElement.classList.remove('custom-class');
        });
        const newUser = new UserModel();
        newUser.setStreamManager(subscriber);
        newUser.setConnectionId(event.stream.connection.connectionId);
        const nickname = event.stream.connection.data.split('%')[0];
        newUser.setNickname(JSON.parse(nickname).clientData);
        const type = event.stream.typeOfVideo === 'SCREEN' ? this.SCREEN_TYPE : this.REMOTE_TYPE;
        newUser.setType(type);
        this.remoteStreamers.push(newUser);

        this.localUsers.forEach((user) => {
          this.sendSignalUserChanged(user);
        });
      }
    });
  }

  private connectToSession(): void {
    if (this.tokens) { // Retrieves tokens from subcomponent or library
        this.localUsers.forEach((user, index) => {
          if (user.isLocal()) {
            this.connect(this.tokens[index]);
          } else if (user.isScreen()) {
            this.startScreenSharing(index);
          }
        });
    } else {
      this.localUsers.forEach((user, index) => {
        if (user.isScreen()) {
          this.startScreenSharing(index);
        } else {
          this.getToken().then((token) => {
              this.connect(token);
            })
            .catch((error) => {
              this.error.emit({ error: error.error, messgae: error.message, code: error.code, status: error.status });
              console.log('There was an error getting the token:', error.code, error.message);
              this.openDialogError('There was an error getting the token:', error.message);
            });
        }
      });
    }
    if (this.localUsers.length === 1 && this.localUsers[0].isScreen()) {
      // CREATING CAM USER AND SAVING LIKE USERCAMDELETED
      this.createCamConnection();
    }
  }

  private connect(token: string): void {
    this.session
      .connect(token, { clientData: this.localUsers[0].getNickname() })
      .then(() => {
        this.connectWebCam();
      })
      .catch((error) => {
        this.error.emit({ error: error.error, messgae: error.message, code: error.code, status: error.status });
        console.log('There was an error connecting to the session:', error.code, error.message);
        this.openDialogError('There was an error connecting to the session:', error.message);
      });
  }

  private connectWebCam(): void {
    this.localUsers[0].setConnectionId(this.session.connection.connectionId);
    this.localUsers[0].setLocalConnectionId(this.session.connection.connectionId);
    if (this.userService.canStream(this.mySessionId) && this.session.capabilities.publish) {
      this.publishSession(this.localUsers[0]).then(() => {
          this.sendSignalUserChanged(this.localUsers[0], true);
          this.joinSession.emit();
      })
        .catch((error) => console.error(error));
      this.localUsers[0].getStreamManager().on('streamPlaying', () => {
        this.openviduLayout.updateLayout();
        (<HTMLElement>this.localUsers[0].getStreamManager().videos[0].video).parentElement.classList.remove('custom-class');
      });
    } else {
      this.localUsers[0].setVideoActive(false);
      this.localUsers[0].setAudioActive(false);
      this.sendSignalUserChanged(this.localUsers[0], true);
    }
  }

  private subscribeToUserChanged() {
    this.session.on('signal:userChanged', (event: any) => {
      const data = JSON.parse(event.data);
      this.remoteStreamers.forEach((user: UserModel) => {
        if (user.getConnectionId() === event.from.connectionId) {
          if (data.isAudioActive !== undefined) {
            user.setAudioActive(data.isAudioActive);
          }
          if (data.isVideoActive !== undefined) {
            user.setVideoActive(data.isVideoActive);
          }
          if (data.nickname !== undefined) {
            user.setNickname(data.nickname);
          }
          if (data.isScreenShareActive !== undefined) {
            user.setScreenShareActive(data.isScreenShareActive);
          }
          if (data.avatar !== undefined) {
            user.setUserAvatar(data.avatar);
          }
          if (data.isHandRaised !== undefined) {
            user.setHandRaised(data.isHandRaised);
          }
        }
      });
      this.remoteUsers.forEach((user: UserModel) => {
        if (user.getConnectionId() === event.from.connectionId) {
          if (data.isAudioActive !== undefined) {
            user.setAudioActive(data.isAudioActive);
          }
          if (data.isVideoActive !== undefined) {
            user.setVideoActive(data.isVideoActive);
          }
          if (data.nickname !== undefined) {
            user.setNickname(data.nickname);
          }
          if (data.isScreenShareActive !== undefined) {
            user.setScreenShareActive(data.isScreenShareActive);
          }
          if (data.avatar !== undefined) {
            user.setUserAvatar(data.avatar);
          }
          if (data.isHandRaised !== undefined) {
            user.setHandRaised(data.isHandRaised);
            this.raiseOrLowerHand(user);
          }
          if (data.isFirstTime) {
            this.showConnectionPopup(user.getNickname(), true, data.avatar);
          }
        }
      });
      this.checkSomeoneShareScreen();
    });
  }

  raiseOrLowerHand(user: UserModel) {
    if(user.isHandRaised()) {
      let unupdatedUser = this.handsRaised.filter(handRaisedUser => handRaisedUser.connectionId===user.getConnectionId())[0];
      if(unupdatedUser) { //Update the user that was already raising their hand
        const index = this.handsRaised.indexOf(unupdatedUser);
        this.handsRaised[index] = {
          nickname: user.getNickname(),
          avatar: user.getAvatar(),
          connectionId: user.getConnectionId()
        }
      } else { //The user wasn't already raising their hand
        this.handsRaised.push({
          nickname: user.getNickname(),
          avatar: user.getAvatar(),
          connectionId: user.getConnectionId()
        });
        if(this.handsRaised.length==1) {
          this.playAudio('handRaise');
          this.recalculatePopupOffsets();
        }
      }
    } else {
      this.handsRaised = this.handsRaised.filter(handRaisedUser => handRaisedUser.connectionId!==user.getConnectionId());
      if(this.handsRaised.length==0) {
        setTimeout(() => {
          this.recalculatePopupOffsets();
        }, 500);
      }
    }
    this.handsRaisedMessage = (this.handsRaised.length>1 ? 'And ' + (this.handsRaised.length-1) + ' other ' + (this.handsRaised.length===2 ? 'person' : 'people') + ' are' : 'Is') + ' raising their hand'
  }

  private subscribedToStreamDestroyed() {
    this.session.on('streamDestroyed', (event: StreamEvent) => {
      this.deleteRemoteStream(event.stream);
      this.checkSomeoneShareScreen();
      event.preventDefault();
    });
  }

  private subscribedToConnectionDestroyed() {
    this.session.on('connectionDestroyed', (event: ConnectionEvent) => {
      event.callDefaultBehavior();
      if(this.assistantsComponent) {
        setTimeout(() => {
          this.assistantsComponent.getAssistants();
        }, 500);
      }
      const connection = event.connection;
      const userDisconnected = this.remoteUsers.filter((user) => user.getConnectionId() === connection.connectionId)[0];
      userDisconnected.setHandRaised(false);
      this.raiseOrLowerHand(userDisconnected);
      this.remoteUsers = this.remoteUsers.filter((user) => user.getConnectionId() !== connection.connectionId);
      this.showConnectionPopup(userDisconnected.getNickname(), false, userDisconnected.getAvatar());
      this.updateModConnections();
    });
  }

  private subscribedToChat(signal: string, msgList: { connectionId: string; nickname: string; message: string; userAvatar: string }[], component: ChatComponent) {
    this.session.on('signal:' + signal, (event: any) => {
      const data = JSON.parse(event.data);
      const messageOwner =
        this.localUsers[0].getConnectionId() === data.connectionId
          ? this.localUsers[0]
          : this.remoteUsers.filter((user) => user.getConnectionId() === data.connectionId || user.getNickname() === data.nickname)[0];
      msgList.push({
        connectionId: data.connectionId,
        nickname: data.nickname,
        message: data.message,
        userAvatar: messageOwner.getAvatar(),
      });
      this.checkNotification(signal);
      this.showChatPopup(data.nickname, data.message, messageOwner.getAvatar(), signal);
      if(component) {
        component.scrollToBottom();
      }
    });
  }

  private sendSignalUserChanged(user: UserModel, isFirstTime?: boolean): void {
    const session = user.isLocal() ? this.session : this.sessionScreen;
    const data = {
      isAudioActive: user.isAudioActive(),
      isVideoActive: user.isVideoActive(),
      isScreenShareActive: user.isScreenShareActive(),
      isHandRaised: user.isHandRaised(),
      nickname: user.getNickname(),
      avatar: user.getAvatar(),
      isFirstTime: isFirstTime,
    };
    const signalOptions: SignalOptions = {
      data: JSON.stringify(data),
      type: 'userChanged',
    };
    session.signal(signalOptions);
  }

  private openDialogError(message, messageError: string) {
    this.dialog.open(DialogErrorComponent, {
      width: '500px',
      data: { message: message, messageError: messageError },
    });
  }

  private checkSomeoneShareScreen() {
    let isScreenShared: boolean;
    // return true if at least one passes the test
    isScreenShared = this.remoteStreamers.some((user) => user.isScreenShareActive()) || this.localUsers[0].isScreenShareActive();
    this.openviduLayoutOptions.fixedRatio = isScreenShared;
    this.openviduLayout.setLayoutOptions(this.openviduLayoutOptions);
    this.openviduLayout.updateLayout();
  }

  private checkTheme() {
    this.lightTheme = this.theme === 'light';
  }

  private removeAndSaveFirstUser() {
    setTimeout(() => {
      this.localUsers[0].setVideoActive(false);
      this.userCamDeleted = this.localUsers.shift();
      this.setFirstUserAudio(this.userCamDeleted.isAudioActive());
      this.openviduLayout.updateLayout();
    }, 200);
  }

  private setFirstUserAudio(value: boolean) {
    this.localUsers[0].setAudioActive(value);
    (<Publisher>this.localUsers[0].getStreamManager()).publishAudio(value);
  }

  private stopCamera() {
    console.log('STOP CAMERA');
    (<Publisher>this.localUsers[0].getStreamManager()).publishVideo(false);
    this.session.unpublish(<Publisher>this.localUsers[0].getStreamManager());
    this.removeAndSaveFirstUser();
  }

  private createScreenUser(publisher: StreamManager): UserModel {
    const user = new UserModel();
    user.setScreenShareActive(true);
    user.setType(this.SCREEN_TYPE);
    user.setStreamManager(publisher);
    user.setNickname(this.localUsers[0].getNickname());
    user.setUserAvatar(this.localUsers[0].getAvatar());
    user.setAudioActive(false);
    return user;
  }

  private createCamConnection() {
    this.getToken().then((token) => {
        this.session.connect(token, { clientData: this.localUsers[0].getNickname() })
          .then(() => {
            const newUser = new UserModel();
            const audioActive = this.localUsers[0].isAudioActive();
            newUser.setAudioActive(audioActive);
            newUser.setUserAvatar(this.localUsers[0].getAvatar());
            newUser.setConnectionId(this.session.connection.connectionId);
            newUser.setLocalConnectionId(this.session.connection.connectionId);
            newUser.setNickname(this.localUsers[0].getNickname());
            newUser.setScreenShareActive(true);
            this.userCamDeleted = newUser;
            this.openviduLayout.updateLayout();
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }

  private getToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.openViduSrv.getToken(this.mySessionId)
        .then((token) => {
          resolve(token);
        })
        .catch((error) => reject(error));
    });
  }

  private publishSession(user: UserModel): Promise<any> {
    return new Promise((resolve, reject) => {
      const session = user.isLocal() ? this.session : this.sessionScreen;
      session.publish(<Publisher>user.getStreamManager()).then(() => {
        resolve();
      }).catch((error) => reject(error));
    });
  }

  private updateModConnections() {
    this.updatingModConnections = true;
    this.roomService.getAssistants(this.mySessionId).subscribe(
      assistants => {
        this.modConnections = [];
        for(let connection of Object.values(this.session.remoteConnections)) {
          let connectionName = (JSON.parse(connection.data.split('%/%')[0])).clientData;
          for(let moderator of assistants.moderators) {
            if(moderator.connected && moderator.name === connectionName) {
              this.modConnections.push(connection);
            }
          }
        }
        this.modConnections.push(this.session.connection);
        this.updatingModConnections = false;
      },
      error => console.log(error)
    );
  }
}
