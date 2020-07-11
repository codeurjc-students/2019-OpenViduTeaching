import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { StreamEvent, Subscriber } from 'openvidu-browser';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RemoteStreamersServiceMock {
	private _remoteStreamers = <BehaviorSubject<UserModel[]>>new BehaviorSubject([]);
	remoteStreamersObs: Observable<UserModel[]>;
	
	constructor() {
		this.remoteStreamersObs = this._remoteStreamers.asObservable();
	}

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
}
