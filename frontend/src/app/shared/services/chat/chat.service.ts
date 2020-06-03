import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ChatMessage } from '../../types/chat-type';
import { OpenViduSessionService } from '../openvidu-session/openvidu-session.service';
import { RemoteStreamersService } from '../remote-streamers/remote-streamers.service';
import { MenuService } from '../menu/menu.service';

@Injectable({
	providedIn: 'root'
})
export class ChatService {
	messagesObs: Observable<ChatMessage[]>;

	private _messageList = <BehaviorSubject<ChatMessage[]>>new BehaviorSubject([]);

	private messageList: ChatMessage[] = [];

	private signal: string;

	constructor(
		private menuService: MenuService,
		private oVSessionService: OpenViduSessionService,
		private remoteStreamersService: RemoteStreamersService
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
			this.messageList.push({
				isLocal: isMyOwnConnection,
				nickname: data.nickname,
				message: data.message,
				userAvatar: isMyOwnConnection
					? this.oVSessionService.getWebCamAvatar()
					: this.remoteStreamersService.getUserAvatar(connectionId)
			});
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
				type: this.signal
			});
		}
	}
}
