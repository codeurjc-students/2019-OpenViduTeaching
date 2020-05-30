import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ChatMessage } from '../../types/chat-type';

@Injectable()
export class ChatServiceMock {
	messagesObs: Observable<ChatMessage[]>;
	private _messageList = <BehaviorSubject<ChatMessage[]>>new BehaviorSubject([]);

	constructor() {
		this.messagesObs = this._messageList.asObservable();
	}

	subscribeToChat() {
	}

	sendMessage(message: string) {

	}
}
