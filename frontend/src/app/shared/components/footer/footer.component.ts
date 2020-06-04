import { Component, OnInit, Input, HostListener } from '@angular/core';
import { UserModel } from '../../models/user-model';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
	@Input() lightTheme: boolean;

	participantsNames: string[] = [];

	constructor() {}

	@HostListener('window:resize', ['$event'])
	sizeChange(event) {}

	ngOnInit() {}

	@Input()
	set participants(participants: UserModel[]) {
		this.participantsNames = [];
		participants.forEach((user) => {
			const nickname = user.getNickname();
			if (user.isCamera() && !this.participantsNames.includes(nickname.substr(0, nickname.lastIndexOf("_SCREEN")))) {
				this.participantsNames.splice(this.participantsNames.indexOf(`${nickname}_SCREEN`), 1);
				this.participantsNames.push(user.getNickname());
			}
		});
		this.participantsNames = [...this.participantsNames];
	}
}
