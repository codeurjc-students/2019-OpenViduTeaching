import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { OvSettings } from '../models/ov-settings';
import { Observable, throwError } from 'rxjs';
import { User, UserService } from './user.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OpenViduService {
  private URL_OV = 'https://' + location.hostname + ':4443';
  private SETTINGS_FILE_NAME = 'ov-settings.json';

  baseURL: string = '/ovTeachingApi';
  ovSettings: OvSettings;

  constructor(
    private http: HttpClient,
    private userSrv: UserService  
  ) {}

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
    fetch(this.baseURL + '/room/' + roomName + '/user', {
      method: 'DELETE',
      keepalive: true
    });
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

  sendSignal(roomName: string, type: string, to: string[], data: any) {
    const body = {
      to: to,
      data: data
    }
    return this.http.post(this.baseURL + '/room/' + roomName + '/signal/' + type, body)
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw("Server error (" + error.status + "): " + error.message)
  }

  private getLocalOVSettings(roomName: string) {
    return {
      chat: true,
      autopublish: false,
      toolbarButtons: {
        video: this.userSrv.canStream(roomName),
        audio: this.userSrv.canStream(roomName),
        fullscreen: true,
        screenShare: this.userSrv.canStream(roomName),
        exit: true,
      },
    };
  }

  getOvSettingsData(roomName: string): Promise<OvSettings> {
    return new Promise((resolve) => {
      this.http.get(this.SETTINGS_FILE_NAME).subscribe(
        (data: any) => {
          console.log('FILE', data);
          console.log(data.openviduSettings);
          this.ovSettings = data.openviduSettings ? data.openviduSettings : this.getLocalOVSettings(roomName);
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
          resolve(this.getLocalOVSettings(roomName));
        },
      );
    });
  }
}
