import { UserHandler, User } from '../users/user.module';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/Rx';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class RoomService {

  baseURL: string = '/ovTeachingApi';

  constructor(
    private http: HttpClient,
    private userHandler: UserHandler
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

  generateToken(roomName: string): Observable<User> {
    return this.http.put<User>(this.baseURL + '/room/' + roomName + '/token', {}).pipe(
      map(token => { return token; }),
      catchError((error) => this.handleError(error))
    );
  }

  removeUser(roomName: number) {
    return this.http.post(this.baseURL + '/room/' + roomName + '/user/', {})
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  getToken(mySessionId: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.createSession(mySessionId)
        .then((sessionId: string) => {
          this.createToken(sessionId)
            .then((token) => resolve(token))
            .catch((error) => reject(error));
        })
        .catch((error) => reject(error));
    });
  }

  createSession(roomName: string) {
    return new Promise((resolve, reject) => {
      return this.http.post<any>(this.baseURL + '/room/' + roomName + '/session', { responseType: 'text' })
        .pipe(
          catchError((error) => {
            error.status === 404 || error.status === 500 ? reject(error) : resolve(roomName);
            if(error.status === 404 || error.status === 500) {
              return throwError(error);
            }
          }),
        )
        .subscribe((response) => {
          console.log(response);
          resolve(response);
        });
    });
  }

  createToken(roomName: string): Promise<string> {
    return new Promise((resolve, reject) => {
      return this.http.get<any>(this.baseURL + '/room/' + roomName + '/token')
        .pipe(
          catchError((error) => {
            reject(error);
            return throwError(error);
          }),
        )
        .subscribe((response) => {
          console.log(response);
          resolve(response.token);
        });
    });
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }
}