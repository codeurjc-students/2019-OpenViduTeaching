import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, BehaviorSubject } from 'rxjs';
import { ILogger } from '../../types/logger-type';
import { LoggerService } from '../logger/logger.service';
import { MatTabGroup } from '@angular/material/tabs';

@Injectable({
	providedIn: 'root'
})
export class MenuService {
	private menuSidenav: MatSidenav;
	private menuTabGroup: MatTabGroup;

	private log: ILogger;

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

	constructor(private loggerSrv: LoggerService) {
		this.log = this.loggerSrv.get('MenuService');
		this.toggleMenuObs = this._toggleMenu.asObservable();
		this.totalMessagesUnreadObs = this._totalMessagesUnread.asObservable();
		this.assistantMessagesUnreadObs = this._assistantMessagesUnread.asObservable();
		this.moderatorMessagesUnreadObs = this._moderatorMessagesUnread.asObservable();
	}

	setMenuSidenav(menuSidenav: MatSidenav) {
		this.menuSidenav = menuSidenav;
	}

	setMenuTabGroup(menuTabGroup: MatTabGroup) {
    this.menuTabGroup = menuTabGroup;
    this.subscribeToTabChange();
	}

	toggleMenu() {
		this.log.d('Toggling menu');
		this.menuSidenav.toggle().then(() => {
			this.menuOpened = this.menuSidenav.opened;
			this._toggleMenu.next(this.menuOpened);
			if (this.menuOpened) {
				if (this.menuTabGroup.selectedIndex == 0) {
					this.assistantMessagesUnread = 0;
					this._assistantMessagesUnread.next(this.assistantMessagesUnread);
				}
				if (this.menuTabGroup.selectedIndex == 1) {
					this.moderatorMessagesUnread = 0;
					this._moderatorMessagesUnread.next(this.moderatorMessagesUnread);
				}
				this._totalMessagesUnread.next(this.assistantMessagesUnread + this.moderatorMessagesUnread);
			}
		});
	}

	newMessage(signal: string) {
    console.warn(signal);
		if (signal == 'chat') {
      if (!this.menuOpened || this.menuTabGroup.selectedIndex!=0) {
        this.assistantMessagesUnread++;
        this._assistantMessagesUnread.next(this.assistantMessagesUnread);
      }
		} else if (signal == 'chatMod') {
      if (!this.menuOpened|| this.menuTabGroup.selectedIndex!=1) {
        this.moderatorMessagesUnread++;
        this._moderatorMessagesUnread.next(this.moderatorMessagesUnread);
      }
    }
    this._totalMessagesUnread.next(this.assistantMessagesUnread + this.moderatorMessagesUnread);
	}

	subscribeToTabChange() {
		this.menuTabGroup.selectedIndexChange.subscribe(() => {
			if (this.menuTabGroup.selectedIndex == 0) {
				this.assistantMessagesUnread = 0;
				this._assistantMessagesUnread.next(this.assistantMessagesUnread);
			}
			if (this.menuTabGroup.selectedIndex == 1) {
				this.moderatorMessagesUnread = 0;
				this._moderatorMessagesUnread.next(this.moderatorMessagesUnread);
      }
      this._totalMessagesUnread.next(this.assistantMessagesUnread + this.moderatorMessagesUnread);
		});
	}
}
