import { RemoteUsersService } from './../remote-users/remote-users.service';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ChatMessage } from '../../types/chat-type';
import { MenuService } from '../menu/menu.service';
import { OpenViduSessionService } from '../openvidu-session/openvidu-session.service';

@Injectable()
export class ChatServiceMock {
	messagesObs: Observable<ChatMessage[]>;
	private _messageList = <BehaviorSubject<ChatMessage[]>>new BehaviorSubject([]);
	private messageList: ChatMessage[] = [];
	private signal: string;

	constructor(
		private menuService: MenuService,
		private oVSessionService: OpenViduSessionService,
		private remoteUsersService: RemoteUsersService
	) {
		this.messagesObs = this._messageList.asObservable();
	}

	subscribeToChat() {
	}

	sendMessage(message: string) {

	}
}
