import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { OvSettings } from '../models/ov-settings';

@Injectable({
  providedIn: 'root',
})
export class OpenViduService {
  private URL_OV = 'https://' + location.hostname + ':4443';
  private SETTINGS_FILE_NAME = 'ov-settings.json';

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
