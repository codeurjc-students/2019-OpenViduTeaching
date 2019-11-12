import { UserHandler, User } from './../users/userHandler';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable()
export class RoomService {

    constructor(private http: HttpClient, private userHandler: UserHandler) {
        
    }

    checkRoom(code: string):Observable<string> {
        return this.http.get<string>("/api/room/" + code).pipe(
            map(roomName => {return roomName}),
            catchError((error) => this.handleError(error))
        );
    }
    
    enterRoom(code: string, userName: string):Observable<User> {

        let auth = window.btoa(userName + ':pass'); //TODO change pass

        return this.http.put<User>("/api/room/" + code + '/user/' + userName, {}).pipe(
            map(user => {
                this.userHandler.saveUser(user,auth);
                return user;
            }),
            catchError((error) => this.handleError(error))
        );
    }

    private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}
}