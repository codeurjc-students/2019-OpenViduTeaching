import { NotificationsService } from './../notifications/notifications.service';
import { RemoteUsersService } from './../remote-users/remote-users.service';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ChatMessage } from '../../types/chat-type';
import { OpenViduSessionService } from '../openvidu-session/openvidu-session.service';
import { MenuService } from '../menu/menu.service';
import { Connection } from 'openvidu-browser';

@Injectable({
	providedIn: 'root'
})
export class ChatService {
	
	private messageList: ChatMessage[] = [];
	private _messageList = <BehaviorSubject<ChatMessage[]>>new BehaviorSubject([]);
	messagesObs: Observable<ChatMessage[]>;
	
	private signal: string;
	private to: Connection[] = [];

	constructor(
		private menuService: MenuService,
		private notificationService: NotificationsService,
		private oVSessionService: OpenViduSessionService,
		private remoteUsersService: RemoteUsersService
	) {
		this.messagesObs = this._messageList.asObservable();
	}

	subscribeToChat(signal: string) {
		this.signal = signal;
		const session = this.oVSessionService.getWebcamSession();
		session.on(`signal:${this.signal}`, (event: any) => {
			const connectionId = event.from.connectionId;
			const data = JSON.parse(event.data);
			const isMyOwnConnection = this.oVSessionService.isMyOwnConnection(connectionId);
			const avatar = isMyOwnConnection
			? this.oVSessionService.getWebCamAvatar()
			: this.remoteUsersService.getUserAvatar(connectionId);
			this.messageList.push({
				isLocal: isMyOwnConnection,
				nickname: data.nickname,
				message: data.message,
				userAvatar: avatar
			});
			this.notificationService.showChatPopup(data.nickname, data.message, avatar, this.signal);
			this.menuService.newMessage(this.signal);
			this._messageList.next(this.messageList);
		});
	}

	sendMessage(message: string) {
		message = message.replace(/ +(?= )/g, '');
		if (message !== '' && message !== ' ') {
			const data = {
				message: message,
				nickname: this.oVSessionService.getWebcamUserName()
			};
			const sessionAvailable = this.oVSessionService.getConnectedUserSession();
			sessionAvailable.signal({
				data: JSON.stringify(data),
				to: this.to,
				type: this.signal
			});
		}
	}

	setToConnections(to: Connection[]) {
		this.to = to;
	}
}
