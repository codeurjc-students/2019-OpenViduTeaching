import { OpenViduSessionService } from './../../../../services/openvidu-session/openvidu-session.service';
import { UserService } from './../../../../services/user/user.service';
import { Component, ElementRef, Input, OnInit, ViewChild, HostListener, OnDestroy, Injector } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ChatMessage } from 'src/app/shared/types/chat-type';
import { MenuService } from 'src/app/shared/services/menu/menu.service';
import { ChatService } from 'src/app/shared/services/chat/chat.service';

@Component({
	selector: 'chat-component',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
	@ViewChild('chatScroll') chatScroll: ElementRef;
	@ViewChild('chatInput') chatInput: ElementRef;

	@Input() lightTheme: boolean;
	@Input() type: string;

	chatService: ChatService;

	message: string;
	messageList: ChatMessage[] = [];
	menuOpened: boolean;
	roomName: string;

	private chatMessageSubscription: Subscription;
	private menuToggleSubscription: Subscription;

	constructor(
		private menuService: MenuService,
		public userService: UserService,
		private openviduSessionService: OpenViduSessionService,
		private injector: Injector
	) {}

	@HostListener('document:keydown.escape', ['$event'])
	onKeydownHandler(event: KeyboardEvent) {
		console.log(event);
		if (this.menuOpened) {
			this.close();
		}
	}

	ngOnInit() {
		if(this.type == 'moderators') {
			this.chatService = this.injector.get('moderatorsChatService');
		} else if(this.type == 'assistants') {
			this.chatService = this.injector.get('assistantsChatService');
		}
		this.roomName = this.openviduSessionService.getSessionId();
		this.subscribeToMessages();
		this.subscribeToToggleMenu();
	}

	ngOnDestroy(): void {
		if (this.chatMessageSubscription) {
			this.chatMessageSubscription.unsubscribe();
		}
		if (this.menuToggleSubscription) {
			this.menuToggleSubscription.unsubscribe();
		}
	}

	eventKeyPress(event) {
		// Pressed 'Enter' key
		if (event && event.keyCode === 13) {
			this.sendMessage();
		}
	}

	sendMessage(): void {
		this.chatService.sendMessage(this.message);
		this.message = '';
	}

	scrollToBottom(): void {
		setTimeout(() => {
			try {
				this.chatScroll.nativeElement.scrollTop = this.chatScroll.nativeElement.scrollHeight;
			} catch (err) {}
		}, 20);
	}

	close() {
		this.menuService.toggleMenu();
	}

	private subscribeToMessages() {
		this.chatMessageSubscription = this.chatService.messagesObs.subscribe((messages: ChatMessage[]) => {
			this.messageList = messages;
			if(this.userService.isRecorder()) {
				this.scrollToBottom();
			}
		});
	}

	private subscribeToToggleMenu() {
		this.menuToggleSubscription = this.menuService.toggleMenuObs.subscribe((opened) => {
			this.menuOpened = opened;
			if (this.menuOpened) {
				this.scrollToBottom();
				setTimeout(() => {
					this.chatInput.nativeElement.focus();
				});
			}
		});
	}
}
