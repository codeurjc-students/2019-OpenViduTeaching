import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class NetworkServiceMock {
	constructor() {}

	async getToken(sessionId: string, openviduServerUrl: string, openviduSecret: string): Promise<string> {
		return 'token';
	}

	removeUser(roomName: string) {
		return of();
	}

	keepaliveRemoveUser(roomName: string) {}
}
