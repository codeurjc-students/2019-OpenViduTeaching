import { UserService, User } from './user.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class RoomService {

  baseURL: string = '/ovTeachingApi';

  constructor(
    private http: HttpClient,
    private userHandler: UserService
  ) { }

  createRoom(roomName: string): Observable<string> {
    return this.http.post<string>(this.baseURL + '/room/' + roomName, {}).pipe(
      map(roomName => { return roomName }),
      catchError((error) => this.handleError(error))
    );
  }

  getRoomCode(roomName: string, role: string): Observable<string> {
    return this.http.get(this.baseURL + '/room/' + roomName + '/inviteCode/' + role, { responseType: 'text' }).pipe(
      map(code => { return code }),
      catchError((error) => this.handleError(error))
    );
  }

  checkRoom(codeOrName: string): Observable<string> {
    return this.http.get(this.baseURL + '/room/' + codeOrName, { responseType: 'text' }).pipe(
      map(roomName => { return roomName }),
      catchError((error) => this.handleError(error))
    );
  }

  enterRoom(code: string, userName: string): Observable<User> {
    return this.http.put<User>(this.baseURL + '/room/' + code + '/user/' + userName, {}).pipe(
      map(user => {
        let auth = window.btoa(userName + ':pass'); //TODO change pass
        this.userHandler.saveUser(user, auth);
        return user;
      }),
      catchError((error) => this.handleError(error))
    );
  }

  getAssistants(roomName: string): Observable<any> {
    return this.http.get<any>(this.baseURL + '/room/' + roomName + '/assistants').pipe(
      map(users => { return users }),
      catchError((error) => this.handleError(error))
    );
  }

  removeUser(roomName: string) {
    return this.http.delete<any>(this.baseURL + '/room/' + roomName + '/user/session').pipe(
      map((_) => {}),
      catchError((error) => this.handleError(error))
    );
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }
}