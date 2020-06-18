import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SignalService {
	baseURL: string = '/ovTeachingApi';

	constructor(private http: HttpClient) {}

	sendSignal(roomName: string, type: string, to: string[], data: any) {
		const body = {
			to: to,
			data: data
		};
		return this.http
			.post(this.baseURL + '/room/' + roomName + '/signal/' + type, body)
			.pipe(catchError((error) => this.handleError(error)));
	}

	private handleError(error: any) {
		console.error(error);
		return Observable.throw('Server error (' + error.status + '): ' + error.message);
	}
}
