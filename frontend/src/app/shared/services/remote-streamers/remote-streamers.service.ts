import { OpenViduSessionService } from 'src/app/shared/services/openvidu-session/openvidu-session.service';
import { RoomService } from 'src/app/shared/services/room/room.service';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserModel } from '../../models/user-model';
import { StreamEvent, Subscriber, Connection } from 'openvidu-browser';
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

	private moderatorConnections: Connection[] = [];
	private _moderatorConnections = <BehaviorSubject<Connection[]>>new BehaviorSubject([]);
	moderatorConnectionsObs: Observable<Connection[]>;

	constructor(
		private loggerSrv: LoggerService,
		private roomService: RoomService,
		private openviduSessionService: OpenViduSessionService
	) {
		this.log = this.loggerSrv.get('RemoteStreamersService');
		this.remoteStreamersObs = this._remoteStreamers.asObservable();
		this.moderatorConnectionsObs = this._moderatorConnections.asObservable();
	}

	updateStreamers() {
		this._remoteStreamers.next(this.streamers);
	}

	add(event: StreamEvent, subscriber: Subscriber) {
		let nickname = '';
		let avatar = '';
		let name = '';
		const connectionId = event.stream.connection.connectionId;
		try {
			const data = JSON.parse(event.stream.connection.data.split("%/%")[0]);
			nickname = data?.clientData;
			avatar = data?.avatar;
			name = event.stream.connection.data.split("%/%SERVER=")[1];
		} catch (error) {
			nickname = 'Unknown';
		}
		const newUser = new UserModel(connectionId, subscriber, nickname, name);
		newUser.setUserAvatar(avatar);
		this.streamers.push(newUser);
		this.updateStreamers();
		this.addModConnection(event.stream.connection, name);
	}

	removeStreamerByConnectionId(connectionId: string) {
		this.log.w('Deleting streamer: ', connectionId);
		const user = this.getRemoteStreamerByConnectionId(connectionId);
		const index = this.streamers.indexOf(user, 0);
		if (index > -1) {
			this.streamers.splice(index, 1);
			this.updateStreamers();
			this.removeModConnectionByConnectionId(connectionId);
			this._moderatorConnections.next(this.moderatorConnections);
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

	addModConnection(connection: Connection, name: string) {
		this.roomService.getAssistants(this.openviduSessionService.getSessionId()).subscribe(
			assistants => {
				for(let moderator of assistants.moderators) {
					if(moderator.connected && moderator.name === name) {
						this.moderatorConnections.push(connection);
						this._moderatorConnections.next(this.moderatorConnections);
						return;
					}
				}
			},
			error => console.error(error)
		);
	}

	removeModConnectionByConnectionId(connectionId: string) {
		this.moderatorConnections = this.moderatorConnections.filter((con) => con.connectionId !== connectionId);
		this._moderatorConnections.next(this.moderatorConnections);
	}
}
