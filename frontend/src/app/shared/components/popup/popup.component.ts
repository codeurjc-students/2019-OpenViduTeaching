import { RaiseHandService } from './../../services/raiseHand/raise-hand.service';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
	selector: 'popup-component',
	templateUrl: './popup.component.html',
	styleUrls: ['./popup.component.css']
})

export class PopupComponent implements OnInit {
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

	ngOnInit() {
		if (this.color === 'dark') {
			if (this.lightTheme) {
				this.backgroundColor = '#b8b8b8';
				this.letterColor = '#3d3d3d';
			} else {
				this.backgroundColor = '#333333';
				this.letterColor = '#ffffff';
			}
		} else if (this.color === 'light') {
			this.backgroundColor = '#ffffff';
			this.letterColor = 'rgba(0, 0, 0, 0.87)';
		} else if (this.color === 'accent') {
			this.backgroundColor = 'rgb(255, 193, 7)';
			this.letterColor = 'rgb(0, 0, 0)';
		}
	}

	sendSignalLowerHand() {
		this.raiseHandService.sendSignalLowerYourHand(this.connectionId);
	}
}
