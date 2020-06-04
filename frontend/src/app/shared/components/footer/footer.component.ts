import { Component, OnInit, Input, HostListener } from '@angular/core';
import { UserModel } from '../../models/user-model';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
	@Input() lightTheme: boolean;

	assistantsNames: string[] = [];

	constructor() {}

	@HostListener('window:resize', ['$event'])
	sizeChange(event) {}

	ngOnInit() {}

	@Input()
	set assistants(assistants: UserModel[]) {
		this.assistantsNames = [];
		assistants.forEach((user) => {
			const nickname = user.getNickname();
			if (user.isCamera() && !this.assistantsNames.includes(nickname.substr(0, nickname.lastIndexOf("_SCREEN")))) {
				this.assistantsNames.splice(this.assistantsNames.indexOf(`${nickname}_SCREEN`), 1);
				this.assistantsNames.push(user.getNickname());
			}
		});
		this.assistantsNames = [...this.assistantsNames];
	}
}
