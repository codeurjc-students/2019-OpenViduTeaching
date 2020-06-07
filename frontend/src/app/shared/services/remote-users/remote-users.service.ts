import { ConnectionEvent } from 'openvidu-browser';
import { Injectable } from '@angular/core';
import { ILogger } from '../../types/logger-type';
import { UserModel } from '../../models/user-model';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoggerService } from '../logger/logger.service';

@Injectable({
	providedIn: 'root'
})
export class RemoteUsersService {
	private log: ILogger;

	private users: UserModel[] = [];
	private _remoteUsers = <BehaviorSubject<UserModel[]>>new BehaviorSubject([]);
	remoteUsersObs: Observable<UserModel[]>;

	constructor(private loggerSrv: LoggerService) {
		this.log = this.loggerSrv.get('RemoteUsersService');
		this.remoteUsersObs = this._remoteUsers.asObservable();
	}

	updateUsers() {
		this._remoteUsers.next(this.users);
	}

	add(event: ConnectionEvent) {
		let nickname = '';
		let avatar = '';
		let name = '';
		const connectionId = event.connection.connectionId;
		try {
			const data = JSON.parse(event.connection.data.split('%/%')[0]);
			nickname = data?.clientData;
			avatar = data?.avatar;
			name = event.connection.data.split('%/%SERVER=')[1];
		} catch (error) {
			nickname = 'Unknown';
		}
		const newUser = new UserModel(connectionId, undefined, nickname, name);
		if (!this.users.some((user) => user.nickname == nickname.substr(0, nickname.lastIndexOf('_SCREEN')))) {
			this.users.filter((user) => user.nickname !== `${nickname}_SCREEN`);
			newUser.setUserAvatar(avatar);
			this.users.push(newUser);
			this.updateUsers();
		}
	}

	removeUserByConnectionId(connectionId: string) {
		this.log.w('Deleting user: ', connectionId);
		const user = this.getRemoteUserByConnectionId(connectionId);
		const index = this.users.indexOf(user, 0);
		if (index > -1) {
			this.users.splice(index, 1);
			this.updateUsers();
		}
	}

	getRemoteUserByConnectionId(connectionId: string): UserModel {
		return this.users.find((u) => u.getConnectionId() === connectionId);
	}

	updateNickname(connectionId: any, nickname: any) {
		const user = this.getRemoteUserByConnectionId(connectionId);
		user?.setNickname(nickname);
		this._remoteUsers.next(this.users);
	}

	clean() {
		this._remoteUsers = <BehaviorSubject<UserModel[]>>new BehaviorSubject([]);
		this.remoteUsersObs = this._remoteUsers.asObservable();
		this.users = [];
	}

	getUserAvatar(connectionId: string): string {
		return this.getRemoteUserByConnectionId(connectionId).getAvatar();
	}
}
