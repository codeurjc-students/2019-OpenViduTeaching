import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Room } from '../../models/room-model';

export interface User {
	name: string;
	roles: string[];
	authdata: string;
	moddedRooms: Room[];
	presentedRooms: Room[];
	participatedRooms: Room[];
}

@Injectable({
	providedIn: 'root'
})
export class UserService {
	isLogged = false;
	isAdmin = false;
	user: User;
	auth: string;

	private baseURL: string = '/ovTeachingApi';

	recorderName: string;

	constructor(private http: HttpClient) {
		let user = JSON.parse(localStorage.getItem('currentUser'));
		if (user) {
			this.setCurrentUser(user);
		}
	}

	logIn(userName: string, pass: string) {
		let auth = window.btoa(userName + ':' + pass);

		const headers = new HttpHeaders({
			Authorization: 'Basic ' + auth,
			'X-Requested-With': 'XMLHttpRequest'
		});

		return this.http
			.get<User>(this.baseURL + '/logIn', { headers })
			.pipe(
				map((user) => {
					this.saveUser(user, auth);
					return user;
				})
			);
	}

	logOut() {
		return this.http.get(this.baseURL + '/logOut').pipe(
			map((response) => {
				this.removeCurrentUser();
				return response;
			})
		);
	}

	register(userName: string, pass: string) {
		return this.http.get<User>(this.baseURL + '/register/' + userName + '/' + pass, {}).pipe(
			map((user) => {
				let auth = window.btoa(userName + ':' + pass);
				this.saveUser(user, auth);
				return user;
			})
		);
	}

	checkUserName(userName: string): Observable<string> {
		return this.http.get(this.baseURL + '/user/' + userName, { responseType: 'text' }).pipe(
			map((userName) => {
				return userName;
			}),
			catchError((error) => this.handleError(error))
		);
	}

	getRoomsForUser(): Observable<any> {
		return this.http.get<any>(this.baseURL + '/user/rooms').pipe(
			map((rooms) => {
				return rooms;
			}),
			catchError((error) => this.handleError(error))
		);
	}

	getRecorderName(): Observable<string> {
		return this.http.get(this.baseURL + '/recorderName', { responseType: 'text' }).pipe(
			map((recorderName) => {
				return recorderName;
			}),
			catchError((error) => this.handleError(error))
		);
	}

	setRecorderName(name: string) {
		this.recorderName = name;
	}

	isRecorder(): boolean {
		return !!this.user && !!this.recorderName && this.user?.name == this.recorderName;
	}

	private handleError(error: any) {
		return throwError('Server error (' + error.status + '): ' + error.message);
	}

	saveUser(user: User, auth?: string) {
		if (user) {
			let oldAuth: string;
			if (this.user) {
				oldAuth = this.user.authdata;
			}
			this.setCurrentUser(user);
			if (auth) {
				user.authdata = auth;
			} else {
				user.authdata = oldAuth;
			}
			localStorage.setItem('currentUser', JSON.stringify(user));
		}
	}

	setCurrentUser(user: User) {
		this.isLogged = true;
		this.user = user;
		this.isAdmin = this.user.roles.indexOf('ROLE_ADMIN') !== -1;
		console.log(user);
	}

	removeCurrentUser() {
		localStorage.removeItem('currentUser');
		this.isLogged = false;
		this.isAdmin = false;
	}

	isModOfRoom(roomName: string): boolean {
		return this.isLogged && this.user.moddedRooms != null && this.user.moddedRooms.some((room) => room.name === roomName);
	}

	canStream(roomName: string): boolean {
		return (
			this.isLogged &&
			((this.user.moddedRooms != null && this.user.moddedRooms.some((room) => room.name === roomName)) ||
				(this.user.presentedRooms != null && this.user.presentedRooms.some((room) => room.name === roomName)))
		);
	}

	isInRoom(roomName: string): boolean {
		return (
			this.isLogged &&
			((this.user.moddedRooms != null && this.user.moddedRooms.some((room) => room.name === roomName)) ||
				(this.user.presentedRooms != null && this.user.presentedRooms.some((room) => room.name === roomName)) ||
				(this.user.participatedRooms != null && this.user.participatedRooms.some((room) => room.name === roomName)))
		);
	}
}
