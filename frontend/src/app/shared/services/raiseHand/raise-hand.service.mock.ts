import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { Observable, of } from 'rxjs';
import { HandRaisedUser } from '../../types/notification-type';

@Injectable()
export class RaiseHandServiceMock {
	constructor() {}

	raiseHand(roomName: string, user: UserModel) {}

	lowerHand(roomName: string, user: UserModel) {}

	getHandRaisedUsers(roomName: string): Observable<HandRaisedUser[]> {
		return of([{
			nickname: "teacher",
			avatar: "avatar",
			connectionId: "con_test",
			username: "teacher"
		}]);
	}
}
