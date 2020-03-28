import { Room } from './../models/room-model';
import { UserService, User } from './user.service';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
    private userService: UserService
  ) { }

  createRoom(roomName: string): Observable<Room> {
    return this.http.post<Room>(this.baseURL + '/room/' + roomName, {}).pipe(
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

  enterRoom(code: string): Observable<User> {
    return this.http.put<User>(this.baseURL + '/room/' + code + '/user', {}).pipe(
      map(user => { return user; }),
      catchError((error) => this.handleError(error))
    );
  }

  getAssistants(roomName: string): Observable<any> {
    return this.http.get<any>(this.baseURL + '/room/' + roomName + '/assistants').pipe(
      map(users => { return users }),
      catchError((error) => this.handleError(error))
    );
  }

  getHandRaisedUsers(roomName: string): Observable<any> {
    return this.http.get<any>(this.baseURL + '/room/' + roomName + '/raiseHand').pipe(
      map(users => { return users }),
      catchError((error) => this.handleError(error))
    );
  }

  raiseHand(roomName: string, nickname: string, avatar: string, connectionId: string): Observable<number> {
    let body = {
      "nickname": nickname,
      "avatar": avatar,
      "connectionId": connectionId
    };
    return this.http.post<any>(this.baseURL + '/room/' + roomName + '/raiseHand', body).pipe(
      map(users => { return users }),
      catchError((error) => this.handleError(error))
    );
  }

  lowerHand(roomName: string, connectionId: string): Observable<any> {
    let body = {
      "connectionId": connectionId
    };
    return this.http.request<any>('delete', this.baseURL + '/room/' + roomName + '/raiseHand', { body: body }).pipe(
      map(response => { return response }),
      catchError((error) => this.handleError(error))
    );
  }

  syncLowerHand(roomName: string, connectionId: string) {
    let body = {
      "connectionId": connectionId
    };
    fetch(this.baseURL + '/room/' + roomName + '/raiseHand', {
      method: 'DELETE',
      body: JSON.stringify(body),
      keepalive: true
    });
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw("Server error (" + error.status + "): " + error.message)
  }
}