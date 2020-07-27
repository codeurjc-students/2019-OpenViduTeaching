import { ColorService } from './../shared/services/color/color.service';
import { Component, OnInit, TemplateRef, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Room } from '../shared/models/room-model';
import { UserService } from '../shared/services/user/user.service';
import { RoomService } from '../shared/services/room/room.service';
import { InviteLinkComponent } from '../invite/invite-link/invite-link.component';
import { RecordingService } from '../shared/services/recording/recording.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
	public version = require('../../../package.json').version;

	moddedRooms: Room[] = [];
	presentedRooms: Room[] = [];
	participatedRooms: Room[] = [];

	private isRecordingEnabled: boolean = false;
	currentVideos: { id: string; name: string; createdAt: Date }[] = [];
	currentRoomOfVideos: string;

	loading: boolean;
	private roomInputOpen: boolean;
	private newRoom: string;

	private lightTheme: boolean;

	@ViewChild('addRoomDialog') addRoomDialog: TemplateRef<any>;
	dialogRef: MatDialogRef<any, any>;
	@ViewChild('videosDrawer') videosDrawer: MatDrawer;

	constructor(
		private router: Router,
		private userSrv: UserService,
		private roomSrv: RoomService,
		private recordingSrv: RecordingService,
		private colorService: ColorService,
		private elementRef: ElementRef,
		private urlSnackBar: MatSnackBar,
		public dialog: MatDialog
	) {}

	ngOnInit() {
		this.loggedIn();
	}

	ngAfterViewInit() {
		this.colorService.getTheme().subscribe((theme) => {
			this.lightTheme = theme.lightTheme;
			let cardColor: string;
			let letterColor: string;
			if (this.lightTheme) {
				cardColor = 'rgba(221, 221, 221, 0.856)';
				letterColor = '#000000'
			} else {
				cardColor = 'rgba(73, 73, 73, 0.856)'
				letterColor = '#dfdfdf'
			}
			this.elementRef.nativeElement.style.setProperty('--card-color', cardColor);
			this.elementRef.nativeElement.style.setProperty('--letter-color', letterColor);

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

	loggedIn() {
		if (this.userSrv.isLogged && !this.userSrv.user.isTemporary) {
			this.getRooms();
			this.checkIsRecordingEnabled();
		}
	}

	getRooms() {
		this.loading = true;
		this.userSrv.getRoomsForUser().subscribe(
			(rooms) => {
				this.moddedRooms = rooms.modded;
				this.presentedRooms = rooms.presented;
				this.participatedRooms = rooms.participated;
				this.loading = false;
			},
			(error) => console.log(error)
		);
	}

	goToRoom(roomName: string) {
		this.router.navigate(['/', roomName]).then(() => {
			window.location.reload();
		});
	}

	private checkIsRecordingEnabled() {
		this.recordingSrv.isRecordingEnabled().subscribe(
			(isRecordingEnabled) => {
				this.isRecordingEnabled = isRecordingEnabled;
			},
			(error) => console.error(error)
		);
	}

	openVideos(roomName: string) {
		this.currentVideos = [];
		this.recordingSrv.getRecordings(roomName).subscribe(
			(recordings) => {
				this.currentRoomOfVideos = roomName;
				for (let recording of recordings) {
					if (recording.status == 'ready') {
						this.currentVideos.push({
							id: recording.id,
							name: recording.name,
							createdAt: new Date(recording.createdAt)
						});
					}
				}
				this.currentVideos.sort((a, b) => {
					if (a.createdAt < b.createdAt) {
						return -1;
					}
					if (a.createdAt > b.createdAt) {
						return 1;
					}
					return 0;
				});
				this.videosDrawer.open();
			},
			(error) => console.log(error)
		);
	}

	getInviteURL(roomName: string, role: string) {
		this.urlSnackBar.openFromComponent(InviteLinkComponent, {
			data: {
				roomName: roomName,
				role: role,
				dismiss: () => {
					this.urlSnackBar.dismiss();
				}
			}
		});
	}

	openAddRoomDialog() {
		this.dialogRef = this.dialog.open(this.addRoomDialog);
	}

	eventKeyPress(event: any) {
		if (event && event.keyCode === 13) {
			// Press Enter
			this.createRoom();
		}
	}

	createRoom() {
		if (!!this.newRoom) {
			this.roomSrv.createRoom(this.newRoom).subscribe(
				(room) => {
					this.dialogRef.close('Room created');
					const user = this.userSrv.user;
					user.moddedRooms.push(room);
					this.userSrv.saveUser(user);
					this.goToRoom(room.name);
				},
				(error) => console.error(error)
			);
		}
	}

	isLogged(): boolean {
		return this.userSrv.isLogged;
	}

	isAdmin(): boolean {
		return this.userSrv.isAdmin;
	}
}
