import { HandRaisedUser } from './../../types/notification-type';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user/user.service';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserModel } from '../../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class RaiseHandService {

  private baseURL: string = '/ovTeachingApi';

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  getHandRaisedUsers(roomName: string): Observable<HandRaisedUser[]> {
    return this.http.get<any>(this.baseURL + '/room/' + roomName + '/raiseHand').pipe(
      map(users => { return users }),
      catchError((error) => this.handleError(error))
    );
  }

  private raiseHandRequest(roomName: string, user: UserModel): Observable<number> {
    let body: HandRaisedUser = {
      "nickname": user.getNickname(),
      "avatar": user.getAvatar(),
      "connectionId": user.getConnectionId(),
      "username": user.getName()
    };
    return this.http.post<any>(this.baseURL + '/room/' + roomName + '/raiseHand', body).pipe(
      map(users => { return users }),
      catchError((error) => this.handleError(error))
    );
  }

  private lowerHandRequest(roomName: string, connectionId: string): Observable<any> {
    let body = {
      "connectionId": connectionId
    };
    return this.http.request<any>('delete', this.baseURL + '/room/' + roomName + '/raiseHand', { body: body }).pipe(
      map(response => { return response }),
      catchError((error) => this.handleError(error))
    );
  }

  private syncLowerHand(roomName: string, connectionId: string) {
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
    return throwError("Server error (" + error.status + "): " + error.message)
  }
}
