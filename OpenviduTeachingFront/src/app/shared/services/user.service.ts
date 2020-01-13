import { OpenViduService } from './open-vidu.service';
import { Room } from '../models/room-model';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

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

    baseURL: string = '/ovTeachingApi';

    constructor(
        private openviduSrv: OpenViduService,
        private http: HttpClient
    ) {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            this.setCurrentUser(user);
        }
    }

    logIn(user: string, pass: string) {

        let auth = window.btoa(user + ':' + pass);

        const headers = new HttpHeaders({
            Authorization: 'Basic ' + auth,
            'X-Requested-With': 'XMLHttpRequest',
        });

        return this.http.get<User>(this.baseURL + '/logIn', { headers }).pipe(
            map(user => {
                this.saveUser(user, auth);
                return user;
            })
        );
    }

    logOut() {
        return this.http.get(this.baseURL + '/logOut').pipe(
            map(response => {
                this.removeCurrentUser();
                return response;
            }),
        );
    }

    checkUserName(userName: string): Observable<string> {
        return this.http.get(this.baseURL + '/user/' + userName, { responseType: 'text' }).pipe(
            map(userName => { return userName }),
            catchError((error) => this.handleError(error))
        );
    }

    getRoomsForUser(): Observable<any> {
        return this.http.get<any>(this.baseURL + '/user/rooms').pipe(
            map(rooms => { return rooms }),
            catchError((error) => this.handleError(error))
        );
    }

    private handleError(error: any) {
        return Observable.throw("Server error (" + error.status + "): " + error.text())
    }

    public saveUser(user: User, auth: string) {
        if (user) {
            this.setCurrentUser(user);
            user.authdata = auth;
            localStorage.setItem('currentUser', JSON.stringify(user));
        }
    }

    public setCurrentUser(user: User) {
        this.isLogged = true;
        this.user = user;
        this.isAdmin = this.user.roles.indexOf('ROLE_ADMIN') !== -1;
        console.log(user);
    }

    public removeCurrentUser(sessionId?: string) {
        if (sessionId) {
            this.openviduSrv.removeUser(sessionId).subscribe(
                (_) => {
                    localStorage.removeItem('currentUser');
                    this.isLogged = false;
                    this.isAdmin = false;
                },
                error => console.log(error)
            );
        } else {
            localStorage.removeItem('currentUser');
            this.isLogged = false;
            this.isAdmin = false;
        }
    }

    public isModOfRoom(roomName: string): boolean {
        return this.isLogged && (this.user.moddedRooms.some((room) => room.name === roomName));
    }

    public canStream(roomName: string): boolean {
        return this.isLogged && (this.user.moddedRooms.some((room) => room.name === roomName) || this.user.presentedRooms.some((room) => room.name === roomName));
    }
}