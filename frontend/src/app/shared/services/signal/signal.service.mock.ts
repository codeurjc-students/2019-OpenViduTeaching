import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class SignalServiceMock {
	constructor() {	}

	sendSignal(roomName: string, type: string, to: string[], data: any) {
		return of();
	}
}