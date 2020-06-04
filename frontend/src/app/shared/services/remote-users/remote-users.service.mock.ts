
import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { ConnectionEvent } from 'openvidu-browser';

@Injectable({
	providedIn: 'root'
})
export class RemoteUsersServiceMock {
	constructor() {}

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