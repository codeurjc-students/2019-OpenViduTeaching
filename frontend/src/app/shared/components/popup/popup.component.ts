import { RaiseHandService } from './../../services/raiseHand/raise-hand.service';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
	selector: 'popup-component',
	templateUrl: './popup.component.html',
	styleUrls: ['./popup.component.css']
})

export class PopupComponent {
	@Input() subtitle: string;
	@Input() userName: string;
	@Input() userAvatar: string;
	@Input() content: string;
	@Input() color: string;
	@Input() isRaiseHand: boolean;
	@Input() roomName: string;
	@Input() connectionId: string;
	@Input() lightTheme: boolean;

	backgroundColor: string;
	letterColor: string;

	constructor(
		public userService: UserService,
		private raiseHandService: RaiseHandService
	) {}

	sendSignalLowerHand() {
		this.raiseHandService.sendSignalLowerYourHand(this.connectionId);
	}
}
