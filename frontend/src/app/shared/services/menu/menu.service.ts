import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, BehaviorSubject } from 'rxjs';
import { ILogger } from '../../types/logger-type';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuComponent: MatSidenav;
  
	private menuOpened: boolean;
  private _toggleMenu = <BehaviorSubject<boolean>>new BehaviorSubject(false);
  private log: ILogger;

  private messagesUnread = 0;
  private _messagesUnread = <BehaviorSubject<number>>new BehaviorSubject(0);
  
  toggleMenuObs: Observable<boolean>;
  messagesUnreadObs: Observable<number>;

  constructor(private loggerSrv: LoggerService) {
    this.toggleMenuObs = this._toggleMenu.asObservable();
    this.log = this.loggerSrv.get('MenuService');
		this.messagesUnreadObs = this._messagesUnread.asObservable();
  }

  setMenuComponent(menuSidenav: MatSidenav) {
		this.menuComponent = menuSidenav;
  }
  
  toggleMenu() {
		this.log.d('Toggling menu');
		this.menuComponent.toggle().then(() => {
			this.menuOpened = this.menuComponent.opened;
			this._toggleMenu.next(this.menuOpened);
			if (this.menuOpened) {
				this.messagesUnread = 0;
				this._messagesUnread.next(this.messagesUnread);
			}
		});
  }
  
  private isMenuOpened(): boolean {
		return this.menuOpened;
	}

	private addMessageUnread() {
		this.messagesUnread++;
		this._messagesUnread.next(this.messagesUnread);
  }
  
  newMessage() {
    if (!this.isMenuOpened()) {
      this.addMessageUnread();
    }
  }
}
