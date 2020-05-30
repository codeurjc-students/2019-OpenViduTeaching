import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable()
export class MenuServiceMock {
	messagesUnreadObs: Observable<number>;
	toggleMenuObs: Observable<boolean>;
	private _toggleMenu = <BehaviorSubject<boolean>>new BehaviorSubject(false);


	private _messagesUnread = <BehaviorSubject<number>>new BehaviorSubject(0);

	constructor() {
		this.toggleMenuObs = this._toggleMenu.asObservable();
		this.messagesUnreadObs = this._messagesUnread.asObservable();
	}

	setMenuComponent(menuSidenav: MatSidenav) {
	}

	toggleMenu() {

	}

	private isMenuOpened(): boolean {
		return false;
	}

	private addMessageUnread() {

	}
}
