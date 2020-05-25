import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Room } from '../../models/room-model';
import { User } from '../user/user.service';

@Injectable()
export class RoomServiceMock {
	constructor() {	}

	createRoom(roomName: string): Observable<Room> {
		return of({ name: "newRoom" });
	}

	getRoomCode(roomName: string, role: string): Observable<string> {
		return of("code");
	}

	checkRoom(codeOrName: string): Observable<string> {
		return of("roomA");
	}
	
	enterRoom(code: string): Observable<User> {
		let newUser: User = {
			name: "teacher",
			roles: ["ROLE_USER", "ROLE_ADMIN"],
			authdata: window.btoa("teacher:pass"),
			moddedRooms: [{ name: "roomA" }, { name: "roomB" }],
			presentedRooms: [],
			participatedRooms: []
		};
		return of(newUser);
	}

	getAssistants(roomName: string): Observable<any> {
		return of({
			"presenters": [],
			"moderators": [
				{
					"connected": false,
					"name": "teacher"
				}
			],
			"participants": [
				{
					"connected": false,
					"name": "user"
				},
				{
					"connected": false,
					"name": "student1"
				}
			]
		});
	}

	getHandRaisedUsers(roomName: string): Observable<any> {
		return of([
			{
				"nickname": "teacher",
				"connectionId": "con_TEOOVm9ur1",
				"avatar": "https://openvidu.io/img/logos/openvidu_globe_bg_transp_cropped.png",
				"username": "teacher"
			},
			{
				"nickname": "student1",
				"connectionId": "con_BukCBHZJp3",
				"avatar": "https://openvidu.io/img/logos/openvidu_globe_bg_transp_cropped.png",
				"username": "student1"
			}
		]);
	}

	raiseHand(roomName: string, nickname: string, avatar: string, connectionId: string): Observable<number> {
		return of(1);
	}

	lowerHand(roomName: string, connectionId: string): Observable<any> {
		return of();
	}

	syncLowerHand(roomName: string, connectionId: string) {}
}
