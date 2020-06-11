import { RemoteUsersService } from './../remote-users/remote-users.service';
import { NotificationsService } from './../notifications/notifications.service';
import { OpenViduSessionService } from './../openvidu-session/openvidu-session.service';
import { HandRaisedUser } from './../../types/notification-type';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user/user.service';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserModel } from '../../models/user-model';

@Injectable({
	providedIn: 'root'
})
export class RaiseHandService {
	private baseURL: string = '/ovTeachingApi';

	constructor(
		private http: HttpClient,
		private userService: UserService,
		private oVSessionService: OpenViduSessionService,
		private notificationsService: NotificationsService,
		private remoteUsersService: RemoteUsersService
	) {}

	raiseHand(roomName: string, user: UserModel) {
		this.raiseHandRequest(roomName, user).subscribe((position) => {
			user.setPositionInHandRaiseQueue(position);
			this.sendRaiseHandSignal(true);
		});
	}

	lowerHand(roomName: string, user: UserModel) {
		this.lowerHandRequest(roomName, user.getConnectionId()).subscribe(() => {
			user.setPositionInHandRaiseQueue(0);
			this.sendRaiseHandSignal(false);
		});
	}

	subscribeToHandRaiseSignal() {
		const session = this.oVSessionService.getWebcamSession();
		session.on('signal:raiseHand', (event: any) => {
			const connectionId = event.from.connectionId;
			const raiseOrLower = JSON.parse(event.data);
			const isMyOwnConnection = this.oVSessionService.isMyOwnConnection(connectionId);
			if (isMyOwnConnection) {
				return;
			}
			const user: UserModel = this.remoteUsersService.getRemoteUserByConnectionId(connectionId);
			if (raiseOrLower) {
				this.notificationsService.addRaisedHandUser(user);
			} else {
				this.notificationsService.removeHandRaisedUserByConnectionId(connectionId);
			}
		});
	}

	updateHandRaisedUsers() {
		this.getHandRaisedUsersRequest(this.oVSessionService.getSessionId()).subscribe((users) => {
			this.notificationsService.handRaisedUsers = users;
			this.notificationsService.updateHandRaisedMessage();
		});
	}

	private sendRaiseHandSignal(raiseOrLower: boolean) {
		const sessionAvailable = this.oVSessionService.getConnectedUserSession();
		sessionAvailable.signal({
			data: JSON.stringify(raiseOrLower),
			type: 'raiseHand'
		});
	}

	private raiseHandRequest(roomName: string, user: UserModel): Observable<number> {
		let body: HandRaisedUser = {
			nickname: user.getNickname(),
			avatar: user.getAvatar(),
			connectionId: user.getConnectionId(),
			username: user.getName()
		};
		return this.http.post<any>(this.baseURL + '/room/' + roomName + '/raiseHand', body).pipe(
			map((users) => {
				return users;
			}),
			catchError((error) => this.handleError(error))
		);
	}

	private lowerHandRequest(roomName: string, connectionId: string): Observable<any> {
		let body = {
			connectionId: connectionId
		};
		return this.http
			.request<any>('delete', this.baseURL + '/room/' + roomName + '/raiseHand', { body: body })
			.pipe(
				map((response) => {
					return response;
				}),
				catchError((error) => this.handleError(error))
			);
	}

	private syncLowerHand(roomName: string, connectionId: string) {
		if (this.userService.isLogged && !!roomName) {
			let body = {
				connectionId: connectionId
			};
			let headers = new Headers();
			headers.set('Authorization', `Basic ${this.userService.user.authdata}`);
			fetch(this.baseURL + '/room/' + roomName + '/raiseHand', {
				method: 'DELETE',
				body: JSON.stringify(body),
				headers: headers,
				keepalive: true
			});
		}
	}

	private getHandRaisedUsersRequest(roomName: string): Observable<HandRaisedUser[]> {
		return this.http.get<any>(this.baseURL + '/room/' + roomName + '/raiseHand').pipe(
			map((users) => {
				return users;
			}),
			catchError((error) => this.handleError(error))
		);
	}

	private handleError(error: any) {
		console.error(error);
		return throwError('Server error (' + error.status + '): ' + error.message);
	}
}
