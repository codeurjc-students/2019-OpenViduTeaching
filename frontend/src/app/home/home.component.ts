import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
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
export class HomeComponent implements OnInit {
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

	@ViewChild('addRoomDialog') addRoomDialog: TemplateRef<any>;
	dialogRef: MatDialogRef<any, any>;
	@ViewChild('videosDrawer') videosDrawer: MatDrawer;

	constructor(
		private router: Router,
		private userSrv: UserService,
		private roomSrv: RoomService,
		private recordingSrv: RecordingService,
		private urlSnackBar: MatSnackBar,
		public dialog: MatDialog
	) {}

	ngOnInit() {
		this.loggedIn();
	}

	loggedIn() {
		if (this.userSrv.isLogged) {
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
					if(a.createdAt < b.createdAt) {
						return -1;
					}
					if(a.createdAt > b.createdAt) {
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
		this.dialogRef = this.dialog.open(this.addRoomDialog, {
			width: '50%',
			height: '60%'
		});
	}

	eventKeyPress(event: any) {
		if (event && event.keyCode === 13) {
			// Press Enter
			this.createRoom();
		}
	}

	createRoom() {
		this.roomSrv.createRoom(this.newRoom).subscribe(
			(room) => {
				this.dialogRef.close('Room created');
				this.userSrv.user.moddedRooms.push(room);
				this.goToRoom(room.name);
			},
			(error) => console.error(error)
		);
		this.newRoom;
	}

	isLogged(): boolean {
		return this.userSrv.isLogged;
	}

	isAdmin(): boolean {
		return this.userSrv.isAdmin;
	}
}
