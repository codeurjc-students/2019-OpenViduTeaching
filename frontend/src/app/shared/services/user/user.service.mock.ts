import { User } from './user.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserServiceMock {
	constructor() {	}

	logIn(user: string, pass: string) {
		let newUser: User = {
			name: user,
			roles: ["ROLE_USER", "ROLE_ADMIN"],
			authdata: window.btoa(user + ":" + pass),
			moddedRooms: [{ name: "roomA" }, { name: "roomB" }],
			presentedRooms: [],
			participatedRooms: []
		};
		return of(newUser);
	}

	logOut() {
		return of(true);
	}

	register(userName: string, pass: string) {
		let newUser: User = {
			name: userName,
			roles: ["ROLE_USER", "ROLE_ADMIN"],
			authdata: window.btoa(userName + ":" + pass),
			moddedRooms: [{ name: "roomA" }, { name: "roomB" }],
			presentedRooms: [],
			participatedRooms: []
		};
		return of(newUser);
	}

	checkUserName(userName: string): Observable<string> {
        return Observable.throw("Server error (" + 404 + ")");
    }

    getRoomsForUser() {
		return of([{ name: "roomA" }, { name: "roomB" }]);
	}
	
    isModOfRoom(roomName: string): boolean {
        return true;
    }

    canStream(roomName: string): boolean {
        return true;
    }

    isInRoom(roomName: string): boolean {
        return true;
    }
}