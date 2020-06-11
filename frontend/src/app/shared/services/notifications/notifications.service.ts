import { UserModel } from './../../models/user-model';
import { Notification, HandRaisedUser } from './../../types/notification-type';
import { OpenViduSessionService } from './../openvidu-session/openvidu-session.service';
import { Injectable, QueryList, ElementRef } from '@angular/core';
import { MenuService } from '../menu/menu.service';

@Injectable({
	providedIn: 'root'
})
export class NotificationsService {
	private currentPopups: QueryList<ElementRef>;
	private raisedHandsPopup: ElementRef;

	private menuToggled: boolean;

	currentNotifications: Notification[] = [];

	handRaisedUsers: HandRaisedUser[] = [];

	handsRaisedMessage: string;

	constructor(
		private menuService: MenuService,
		private openviduSessionService: OpenViduSessionService
	) {
		this.subscribeToMenuToggle();
	}

	private subscribeToMenuToggle() {
		this.menuService.toggleMenuObs.subscribe((menuToggled) => (this.menuToggled = menuToggled));
	}

	private getOffsetOfNotification(position: number): string {
		if (position === 0) {
			if (this.handRaisedUsers.length > 0) {
				return this.raisedHandsPopup.nativeElement.offsetTop + this.raisedHandsPopup.nativeElement.offsetHeight + 10 + 'px';
			} else {
				return '5%';
			}
		} else {
			const previousPopup = this.currentPopups.toArray()[position - 1];
			return previousPopup.nativeElement.offsetTop + previousPopup.nativeElement.offsetHeight + 10 + 'px';
		}
	}

	private recalculatePopupOffsets() {
		for (let i = 0; i < this.currentNotifications.length; i++) {
			setTimeout(() => {
				//If we don't set a timeout the top property change is too slow for the loop and it glitches when calculating different heights
				this.currentNotifications[i].top = this.getOffsetOfNotification(i);
			});
		}
	}

	private removePopupOnTimeout() {
		setTimeout(() => {
			this.currentNotifications.shift();
			setTimeout(() => {
				this.recalculatePopupOffsets();
			}, 500);
		}, 5000);
	}

	private playAudio(fileName: string) {
		let audio = new Audio();
		audio.src = '../assets/sounds/' + fileName + '.mp3';
		audio.load();
		audio.play();
	}

	showChatPopup(nickname: string, message: string, userAvatar: string, signal: string) {
		const chatType: string = signal === 'chat' ? 'Assistants' : 'Moderators';
		const isThatChatSelected = signal === 'chat' ? this.menuService.getTabSelected() === 0 : this.menuService.getTabSelected() === 1;
		if (nickname !== this.openviduSessionService.getScreenUserName() && (!this.menuToggled || !isThatChatSelected)) {
			this.currentNotifications.push({
				top: this.getOffsetOfNotification(this.currentNotifications.length),
				subtitle: chatType,
				nickname: nickname,
				content: message,
				userAvatar: userAvatar,
				color: 'light'
			});
			setTimeout(() => {
				this.playAudio('message');
			}, 250);
			this.removePopupOnTimeout();
		}
	}

	showConnectionPopup(nickname: string, isConnectionCreated: boolean, userAvatar: string) {
		if (nickname !== this.openviduSessionService.getScreenUserName()) {
			this.currentNotifications.push({
				top: this.getOffsetOfNotification(this.currentNotifications.length),
				subtitle: undefined,
				nickname: nickname,
				content: isConnectionCreated ? 'Joined the session' : 'Left the session',
				userAvatar: userAvatar,
				color: 'dark'
			});
			const audioName = isConnectionCreated ? 'connection' : 'disconnection';
			this.playAudio(audioName);
			this.removePopupOnTimeout();
		}
	}

	addRaisedHandUser(user: UserModel) {
		const handRaisedUser: HandRaisedUser = {
			nickname: user.getNickname(),
			avatar: user.getAvatar(),
			connectionId: user.getConnectionId(),
			username: user.getName()
		};
		this.handRaisedUsers.push(handRaisedUser);
		this.recalculatePopupOffsets();
		this.updateHandRaisedMessage();
	}

	removeHandRaisedUserByConnectionId(connectionId: string) {
		this.handRaisedUsers = this.handRaisedUsers.filter(handRaisedUser => handRaisedUser.connectionId !== connectionId);
		setTimeout(() => {
			this.recalculatePopupOffsets();
		}, 500);
		this.updateHandRaisedMessage();
	}

	setPopupsRef(currentPopups: QueryList<ElementRef>) {
		this.currentPopups = currentPopups;
	}

	setRaiseHandsPopupRef(raisedHandsPopup: ElementRef) {
		this.raisedHandsPopup = raisedHandsPopup;
	}

	updateHandRaisedMessage() {
		if(this.handRaisedUsers.length>0) {
			this.handsRaisedMessage = (this.handRaisedUsers.length>1 ? 'And ' + (this.handRaisedUsers.length-1) + ' other ' + (this.handRaisedUsers.length===2 ? 'person' : 'people') + ' are' : 'Is') + ' raising their hand';
		}
	}
}
