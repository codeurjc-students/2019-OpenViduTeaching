import { RemoteUsersService } from './../../../../services/remote-users/remote-users.service';
import { MenuService } from 'src/app/shared/services/menu/menu.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user-model';

@Component({
  selector: 'app-assistants',
  templateUrl: './assistants.component.html',
  styleUrls: ['./assistants.component.css']
})
export class AssistantsComponent implements OnInit {

  userName: string;

  loading: boolean;

  constructor(
    private userService: UserService,
    private menuService: MenuService,
    private remoteUsersService: RemoteUsersService
  ) { }

  moderatorsConnected: string[] = [];
  participantsConnected: string[] = [];
  presentersConnected: string[] = [];
  assistantsConnectedCount: Number;

  moderatorsDisconnected: string[] = [];
  participantsDisconnected: string[] = [];
  presentersDisconnected: string[] = [];
  assistantsDisconnectedCount: Number;

  private remoteUsers: UserModel[] = [];

  ngOnInit() {
    this.userName = this.userService.user.name;
    this.subscribeToAssistants();
    this.subscribeToRemoteUsers();
  }

  subscribeToAssistants() {
    this.menuService.updateAssistants();
    this.loading = true;
    this.menuService.assistantsObs.subscribe(
      assistants => {
        this.moderatorsConnected = [];
        this.participantsConnected = [];
        this.presentersConnected = [];

        this.moderatorsDisconnected = [];
        this.participantsDisconnected = [];
        this.presentersDisconnected = [];

        for(let moderator of assistants.moderators) {
          if(moderator.name===this.userService.user.name || (moderator.connected && this.remoteUsers.some((user) => user.name === moderator.name))) {
            this.moderatorsConnected.push(moderator.name);
          } else {
            this.moderatorsDisconnected.push(moderator.name);
          }
        }

        for(let participant of assistants.participants) {
          if(participant.name===this.userService.user.name || (participant.connected && this.remoteUsers.some((user) => user.name === participant.name))) {
            this.participantsConnected.push(participant.name);
          } else {
            this.participantsDisconnected.push(participant.name);
          }
        }

        for(let presenter of assistants.presenters) {
          if(presenter.name===this.userService.user.name || (presenter.connected && this.remoteUsers.some((user) => user.name === presenter.name))) {
            this.presentersConnected.push(presenter.name);
          } else {
            this.presentersDisconnected.push(presenter.name);
          }
        }

        this.assistantsConnectedCount = this.moderatorsConnected.length + this.participantsConnected.length + this.presentersConnected.length;
        this.assistantsDisconnectedCount = this.moderatorsDisconnected.length + this.participantsDisconnected.length + this.presentersDisconnected.length;

        this.loading = false;
      },
      error => console.log(error)
    );
  }

  subscribeToRemoteUsers() {
    this.remoteUsersService.remoteUsersObs.subscribe((users) => {
      this.remoteUsers = users;
    });
  }
}
