import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTabGroup } from '@angular/material/tabs';
import { AssistantGroup } from './menu.service';

@Injectable()
export class MenuServiceMock {
	private menuOpened: boolean;
	private _toggleMenu = <BehaviorSubject<boolean>>new BehaviorSubject(false);
	toggleMenuObs: Observable<boolean>;

	private assistantMessagesUnread = 0;
	private _assistantMessagesUnread = <BehaviorSubject<number>>new BehaviorSubject(0);
	assistantMessagesUnreadObs: Observable<number>;

	private moderatorMessagesUnread = 0;
	private _moderatorMessagesUnread = <BehaviorSubject<number>>new BehaviorSubject(0);
	moderatorMessagesUnreadObs: Observable<number>;

	private _totalMessagesUnread = <BehaviorSubject<number>>new BehaviorSubject(0);
	totalMessagesUnreadObs: Observable<number>;

	private assistants: AssistantGroup = { moderators: [], participants: [], presenters: [] };
	private _assistants = <BehaviorSubject<AssistantGroup>>new BehaviorSubject({ moderators: [], participants: [], presenters: [] });
	assistantsObs: Observable<AssistantGroup>;

	constructor() {
		this.toggleMenuObs = this._toggleMenu.asObservable();
		this.totalMessagesUnreadObs = this._totalMessagesUnread.asObservable();
		this.assistantMessagesUnreadObs = this._assistantMessagesUnread.asObservable();
		this.moderatorMessagesUnreadObs = this._moderatorMessagesUnread.asObservable();
		this.assistantsObs = this._assistants.asObservable();
	}

	setMenuComponent(menuSidenav: MatSidenav) {}

	setMenuTabGroup(menuTabGroup: MatTabGroup) {}

	toggleMenu() {}

	updateAssistants() {}

	subscribedToChangeRecordingStatus() {}
}
