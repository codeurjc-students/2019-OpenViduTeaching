import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Recording } from '../../models/recording-model';

@Injectable({
  providedIn: 'root'
})
export class RecordingService {

  constructor(
    private http: HttpClient
  ) { }

  baseURL: string = '/ovTeachingApi';

  startRecording(roomName: string) {
    return this.http.post(this.baseURL + '/room/' + roomName + '/recording/start', { responseType: 'text' })
      .pipe(
        map(recordingId => { return recordingId }),
        catchError((error) => this.handleError(error))
      );
  }

  stopRecording(roomName: string) {
    return this.http.post(this.baseURL + '/room/' + roomName + '/recording/stop', { responseType: 'text' })
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  isBeingRecorded(roomName: string): Observable<boolean> {
    return this.http.get<boolean>(this.baseURL + '/room/' + roomName + '/recording/isBeingRecorded', {})
      .pipe(
        map(isBeingRecorded => { return isBeingRecorded }),
        catchError((error) => this.handleError(error))  
      );
  }

  isRecordingEnabled(): Observable<boolean> {
    return this.http.get<boolean>(this.baseURL + '/isRecordingEnabled', {})
      .pipe(
        map(isRecordingEnabled => { return isRecordingEnabled }),
        catchError((error) => this.handleError(error))  
      );
  }

  getRecordings(roomName: string): Observable<Recording[]> {
    return this.http.get<Recording[]> (this.baseURL + '/room/' + roomName + '/recordings')
      .pipe(
        map(recordings => { return recordings }),
        catchError((error) => this.handleError(error))
      );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError("Server error (" + error.status + "): " + error.message)
  }
}
