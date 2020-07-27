import { ColorService } from './../shared/services/color/color.service';
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../shared/services/room/room.service';
import { UserService } from '../shared/services/user/user.service';

@Component({
	selector: 'app-invite',
	templateUrl: './invite.component.html',
	styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit, AfterViewInit {
	code: string;
	roomName: string;
	userName: string;
	nameTaken: boolean = false;
	userErrorMsg: string;
	loading: boolean = false;

	private lightTheme: boolean;

	constructor(
		private roomSrv: RoomService,
		private userSrv: UserService,
		private colorService: ColorService,
		private elementRef: ElementRef,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit() {
		this.route.paramMap.subscribe((params) => {
			this.code = params.get('code');
		});
		this.checkRoom();
	}

	ngAfterViewInit() {
		this.colorService.getTheme().subscribe((theme) => {
			this.lightTheme = theme.lightTheme;
			let backgroundColor: string;
			let letterColor: string;
			let roomNameBackgroundColor: string;
			let roomNameLetterColor: string;
			if (this.lightTheme) {
				backgroundColor = '#dfdfdf';
				letterColor = '#494949';
				roomNameBackgroundColor = '#333333';
				roomNameLetterColor = '#b8b8b8';
			} else {
				backgroundColor = '#494949';
				letterColor = '#dfdfdf';
				roomNameBackgroundColor = '#b8b8b8';
				roomNameLetterColor = '#333333';
			}
			this.elementRef.nativeElement.style.setProperty('--background-color', backgroundColor);
			this.elementRef.nativeElement.style.setProperty('--letter-color', letterColor);
			this.elementRef.nativeElement.style.setProperty('--roomname-background-color', roomNameBackgroundColor);
			this.elementRef.nativeElement.style.setProperty('--roomname-letter-color', roomNameLetterColor);

			this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--primary-r', theme.primary_r);
			this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--primary-g', theme.primary_g);
			this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--primary-b', theme.primary_b);

			this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--accent-r', theme.accent_r);
			this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--accent-g', theme.accent_g);
			this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--accent-b', theme.accent_b);

			this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--warn-r', theme.warn_r);
			this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--warn-g', theme.warn_g);
			this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--warn-b', theme.warn_b);

			this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--primary-color', 'rgb(var(--primary-r), var(--primary-g), var(--primary-b))');
			this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--accent-color', 'rgb(var(--accent-r), var(--accent-g), var(--accent-b))');
			this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--warn-color', 'rgb(var(--warn-r), var(--warn-g), var(--warn-b))');
		});
	}

	enterRoom() {
		if (this.userSrv.isLogged) {
			//User is logged
			this.loading = true;
			this.userName = this.userSrv.user.name;
			this.roomSrv.enterRoom(this.code).subscribe(
				//Update user in case the role changed
				(user) => {
					this.userSrv.saveUser(user);
					this.navigate();
				},
				(error) => {
					this.loading = false;
					console.error(error);
				}
			);
		} else {
			//User is not logged
			if (this.userName == null || this.userName == '') {
				this.userErrorMsg = 'You must enter a username';
			} else {
				this.loading = true;
				const password = Array(10)
					.fill('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz')
					.map((x) => x[Math.floor(Math.random() * x.length)])
					.join('');
				console.error(password);
				this.userSrv.register(this.userName, password).subscribe(
					(_) => {
						this.roomSrv.enterRoom(this.code).subscribe(
							(user) => {
								let auth = window.btoa(this.userName + ':' + password);
								this.userSrv.saveUser(user, auth);
								this.navigate();
							},
							(error) => {
								this.loading = false;
								console.error(error);
							}
						);
					},
					(error) => {
						this.loading = false;
						this.userErrorMsg = 'Username already taken';
					}
				);
			}
		}
	}

	navigate() {
		this.router.navigate(['/', this.roomName]).then(() => {
			this.userSrv.mustRemoveTempUser = false;
			window.location.reload();
		});
	}

	checkRoom() {
		this.roomSrv.checkRoom(this.code).subscribe(
			(roomName) => {
				this.roomName = roomName;
			},
			(error) => {
				this.router.navigate(['/']);
				console.error(error);
			}
		);
	}

	eventKeyPress(event) {
		if (event && event.keyCode === 13) {
			// Press Enter
			this.enterRoom();
		}
	}

	isLogged(): boolean {
		return this.userSrv.isLogged;
	}
}
