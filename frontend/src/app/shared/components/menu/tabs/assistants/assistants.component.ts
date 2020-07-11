import { OpenViduSessionService } from './../../../../services/openvidu-session/openvidu-session.service';
import { MenuService } from 'src/app/shared/services/menu/menu.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user-model';
import { RemoteUsersService } from 'src/app/shared/services/remote-users/remote-users.service';

@Component({
	selector: 'app-assistants',
	templateUrl: './assistants.component.html',
	styleUrls: ['./assistants.component.css']
})
export class AssistantsComponent implements OnInit {
	loading: boolean;

	moderatorsConnected: UserModel[] = [];
	presentersConnected: UserModel[] = [];
	participantsConnected: string[] = [];
	assistantsConnectedCount: Number;

	moderatorsDisconnected: string[] = [];
	presentersDisconnected: string[] = [];
	participantsDisconnected: string[] = [];
	assistantsDisconnectedCount: Number;

	private remoteUsers: UserModel[] = [];
	localUser: UserModel;

	constructor(
		private userService: UserService,
		private menuService: MenuService,
		private remoteUsersService: RemoteUsersService,
		private ovSessionService: OpenViduSessionService
	) {}

	ngOnInit() {
		this.subscribeToAssistants();
		this.subscribeToUsers();
	}

	subscribeToAssistants() {
		this.menuService.updateAssistants();
		this.loading = true;
		this.menuService.assistantsObs.subscribe(
			(assistants) => {
				this.moderatorsConnected = [];
				this.presentersConnected = [];
				this.participantsConnected = [];

				this.moderatorsDisconnected = [];
				this.presentersDisconnected = [];
				this.participantsDisconnected = [];

				for (let moderator of assistants.moderators) {
					const mod = this.remoteUsers.find((user) => user.name === moderator.name);
					if (moderator.name === this.userService.user.name) {
						this.moderatorsConnected.push(this.localUser);
					} else if (moderator.connected && !!mod) {
						this.moderatorsConnected.push(mod);
					} else {
						this.moderatorsDisconnected.push(moderator.name);
					}
				}

				for (let presenter of assistants.presenters) {
					const pres = this.remoteUsers.find((user) => user.name === presenter.name);
					if (presenter.name === this.userService.user.name) {
						this.presentersConnected.push(this.localUser);
					} else if (presenter.name === this.userService.user.name || (presenter.connected && !!pres)) {
						this.presentersConnected.push(pres);
					} else {
						this.presentersDisconnected.push(presenter.name);
					}
				}

				for (let participant of assistants.participants) {
					if (
						participant.name === this.userService.user.name ||
						(participant.connected && !!this.remoteUsers.some((user) => user.name === participant.name))
					) {
						this.participantsConnected.push(participant.name);
					} else {
						this.participantsDisconnected.push(participant.name);
					}
				}

				this.assistantsConnectedCount =
					this.moderatorsConnected.length + this.participantsConnected.length + this.presentersConnected.length;
				this.assistantsDisconnectedCount =
					this.moderatorsDisconnected.length + this.participantsDisconnected.length + this.presentersDisconnected.length;

				this.loading = false;
			},
			(error) => console.log(error)
		);
	}

	subscribeToUsers() {
		this.remoteUsersService.remoteUsersObs.subscribe((streamers) => {
			this.remoteUsers = streamers;
		});
		this.ovSessionService.OVUsers.subscribe((users) => {
			this.localUser = users[0];
		});
	}
}
