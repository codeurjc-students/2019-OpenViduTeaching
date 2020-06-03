import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserModel } from '../../models/user-model';
import { StreamEvent, Subscriber } from 'openvidu-browser';
import { LoggerService } from '../logger/logger.service';
import { ILogger } from '../../types/logger-type';

@Injectable({
	providedIn: 'root'
})
export class RemoteStreamersService {

	private log: ILogger;

	private streamers: UserModel[] = [];
	private _remoteStreamers = <BehaviorSubject<UserModel[]>>new BehaviorSubject([]);
	remoteStreamersObs: Observable<UserModel[]>;	

	constructor(private loggerSrv: LoggerService) {
		this.log = this.loggerSrv.get('RemoteStreamersService');
		this.remoteStreamersObs = this._remoteStreamers.asObservable();
	}

	updateStreamers() {
		this._remoteStreamers.next(this.streamers);
	}

	add(event: StreamEvent, subscriber: Subscriber) {
		let nickname = '';
		let avatar = '';
		const connectionId = event.stream.connection.connectionId;
		try {
			const data = JSON.parse(event.stream.connection.data.split("%/%")[0]);
			nickname = data?.clientData;
			avatar = data?.avatar;
		} catch (error) {
			nickname = 'Unknown';
		}
		const newUser = new UserModel(connectionId, subscriber, nickname);
		newUser.setUserAvatar(avatar);
		this.streamers.push(newUser);
		this.updateStreamers();
	}

	removeStreamerByConnectionId(connectionId: string) {
		this.log.w('Deleting streamer: ', connectionId);
		const user = this.getRemoteStreamerByConnectionId(connectionId);
		const index = this.streamers.indexOf(user, 0);
		if (index > -1) {
			this.streamers.splice(index, 1);
			this.updateStreamers();
		}
	}

	someoneIsSharingScreen(): boolean {
		return this.streamers.some(user => user.isScreen());
	}

	toggleUserZoom(connectionId: string) {
		const user = this.getRemoteStreamerByConnectionId(connectionId);
		user.setVideoSizeBig(!user.isVideoSizeBig());
	}

	resetUsersZoom() {
		this.streamers.forEach(u => u.setVideoSizeBig(false));
	}

	setUserZoom(connectionId: string, zoom: boolean) {
		this.getRemoteStreamerByConnectionId(connectionId)?.setVideoSizeBig(zoom);
	}

	getRemoteStreamerByConnectionId(connectionId: string): UserModel {
		return this.streamers.find(u => u.getConnectionId() === connectionId);
	}

	updateNickname(connectionId: any, nickname: any) {
		const user = this.getRemoteStreamerByConnectionId(connectionId);
		user?.setNickname(nickname);
		this._remoteStreamers.next(this.streamers);
	}

	clean() {
		this._remoteStreamers = <BehaviorSubject<UserModel[]>>new BehaviorSubject([]);
		this.remoteStreamersObs = this._remoteStreamers.asObservable();
		this.streamers = [];
	}
}
