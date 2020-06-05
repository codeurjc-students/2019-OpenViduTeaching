import { UserService } from './../user/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoggerService } from '../logger/logger.service';
import { ILogger } from '../../types/logger-type';

@Injectable({
	providedIn: 'root'
})
export class NetworkService {
	private log: ILogger;
	private baseHref: string;

	constructor(
		private http: HttpClient,
		private loggerSrv: LoggerService,
		private userService: UserService,
	) {
		this.log = this.loggerSrv.get('NetworkService');
		this.baseHref = '/' + (!!window.location.pathname.split('/')[1] ? window.location.pathname.split('/')[1] + '/' : '') + 'ovTeachingApi';
	}

	async getToken(sessionId: string): Promise<string> {
		try {
			this.log.d('Getting token from backend');
			return await this.http.get<any>(this.baseHref + `/room/${sessionId}/token`).toPromise();
		} catch (error) {
			if (error.status === 404) {
				throw { status: error.status, message: 'Cannot connect with backend. ' + error.url + ' not found' };
			}
			throw error;
		}
	}

	removeUser(roomName?: string) {
		if(!!roomName) {
			return this.http.delete(this.baseHref + '/room/' + roomName + '/user', {}).pipe(
				catchError((error) => this.handleError(error))
			);
		}
	}

	keepaliveRemoveUser(roomName?: string) {
		if(this.userService.isLogged && !!roomName) {
			fetch(this.baseHref + '/room/' + roomName + '/user', {
				method: 'DELETE',
				keepalive: true
			});
		}
	}

	private handleError(error: any) {
		console.error(error);
		return Observable.throw('Server error (' + error.status + '): ' + error.message);
	}
}
