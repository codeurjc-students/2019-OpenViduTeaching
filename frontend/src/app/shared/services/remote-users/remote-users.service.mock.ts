
import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { ConnectionEvent } from 'openvidu-browser';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RemoteUsersServiceMock {

	private _remoteUsers = <BehaviorSubject<UserModel[]>>new BehaviorSubject([]);
	remoteUsersObs: Observable<UserModel[]>;

	constructor() {
		this.remoteUsersObs = this._remoteUsers.asObservable();
	}

	updateUsers() {}

	add(event: ConnectionEvent) {}

	removeUserByConnectionId(connectionId: string) {}

	getRemoteUserByConnectionId(connectionId: string): UserModel {
		return null;
	}

	updateNickname(connectionId: any, nickname: any) {}

	clean() {}

	getUserAvatar(connectionId: string): string {
		return 'avatar';
	}
}