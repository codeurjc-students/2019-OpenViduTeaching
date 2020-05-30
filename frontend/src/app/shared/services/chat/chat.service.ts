import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ChatMessage } from '../../types/chat-type';
import { OpenViduSessionService } from '../openvidu-session/openvidu-session.service';
import { RemoteUsersService } from '../remote-users/remote-users.service';
import { MenuService } from '../menu/menu.service';

@Injectable({
	providedIn: 'root'
})
export class ChatService {
	messagesObs: Observable<ChatMessage[]>;

	private _messageList = <BehaviorSubject<ChatMessage[]>>new BehaviorSubject([]);

	private messageList: ChatMessage[] = [];

	constructor(
		private menuService: MenuService,
		private oVSessionService: OpenViduSessionService,
		private remoteUsersService: RemoteUsersService
	) {
		this.messagesObs = this._messageList.asObservable();
	}

	subscribeToChat() {
		const session = this.oVSessionService.getWebcamSession();
		session.on('signal:chat', (event: any) => {
			const connectionId = event.from.connectionId;
			const data = JSON.parse(event.data);
			const isMyOwnConnection = this.oVSessionService.isMyOwnConnection(connectionId);
			this.messageList.push({
				isLocal: isMyOwnConnection,
				nickname: data.nickname,
				message: data.message,
				userAvatar: isMyOwnConnection
					? this.oVSessionService.getWebCamAvatar()
					: this.remoteUsersService.getUserAvatar(connectionId)
			});
			this.menuService.newMessage();
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
				type: 'chat'
			});
		}
	}
}
