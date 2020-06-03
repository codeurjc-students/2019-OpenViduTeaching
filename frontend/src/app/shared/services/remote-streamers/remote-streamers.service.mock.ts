import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { StreamEvent, Subscriber } from 'openvidu-browser';

@Injectable({
	providedIn: 'root'
})
export class RemoteStreamersServiceMock {
	constructor() {}

	updateStreamers() {}

	add(event: StreamEvent, subscriber: Subscriber) {}

	removeStreamerByConnectionId(connectionId: string) {}

	someoneIsSharingScreen(): boolean {
		return false;
	}

	toggleStreamerZoom(connectionId: string) {}

	resetUsersZoom() {}

	setUserZoom(connectionId: string, zoom: boolean) {}

	getRemoteStreamerByConnectionId(connectionId: string): UserModel {
		return null;
	}

	updateNickname(connectionId: any, nickname: any) {}

	clean() {}

	getUserAvatar(connectionId: string): string {
		return 'avatar';
	}
}
