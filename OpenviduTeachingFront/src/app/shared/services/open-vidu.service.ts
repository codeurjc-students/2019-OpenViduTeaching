import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { OvSettings } from '../models/ov-settings';
import { Observable, throwError } from 'rxjs';
import { User } from './user.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OpenViduService {
  private URL_OV = 'https://' + location.hostname + ':4443';
  private SETTINGS_FILE_NAME = 'ov-settings.json';

  baseURL: string = '/ovTeachingApi';

  private ovSettings: OvSettings = {
    chat: true,
    autopublish: false,
    toolbarButtons: {
      video: true,
      audio: true,
      fullscreen: true,
      screenShare: true,
      exit: true,
    },
  };

  constructor(private http: HttpClient) {}

  generateToken(roomName: string): Observable<User> {
    return this.http.put<any>(this.baseURL + '/room/' + roomName + '/token', {}).pipe(
      map(token => { return token; }),
      catchError((error) => this.handleError(error))
    );
  }

  removeUser(roomName: string) {
    return this.http.delete(this.baseURL + '/room/' + roomName + '/user', {})
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  syncRemoveUser(roomName: string) {
    let xhr = new XMLHttpRequest()
    xhr.open("DELETE",this.baseURL + '/room/' + roomName + '/user',false);
    xhr.send();
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
    return Observable.throw("Server error (" + error.status + "): " + error.message)
  }

  getOvSettingsData(): Promise<OvSettings> {
    return new Promise((resolve) => {
      this.http.get(this.SETTINGS_FILE_NAME).subscribe(
        (data: any) => {
          console.log('FILE', data);
          console.log(data.openviduSettings);
          this.ovSettings = data.openviduSettings ? data.openviduSettings : this.ovSettings;
          if (data.openviduCredentials) {
            this.URL_OV = data.openviduCredentials.openvidu_url ? data.openviduCredentials.openvidu_url : this.URL_OV;
          }
          console.log('URL Environment', this.URL_OV);
          resolve(data.openviduSettings);
        },
        (error) => {
          console.warn('Credentials file not found ');
          if (environment.openvidu_url) {
            console.warn('Getting from environment ');
            this.URL_OV = environment.openvidu_url;
          }
          console.log('URL Environment', this.URL_OV);
          resolve(this.ovSettings);
        },
      );
    });
  }
}
