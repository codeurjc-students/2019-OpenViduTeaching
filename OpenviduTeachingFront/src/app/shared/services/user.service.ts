import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  baseURL: string = '/ovTeachingApi';

  constructor(
    private http: HttpClient
  ) { }

  checkUserName(userName: string): Observable<string> {
    return this.http.get(this.baseURL + '/user/' + userName, { responseType: 'text' }).pipe(
      map(userName => { return userName }),
      catchError((error) => this.handleError(error))
    );
  }

  private handleError(error: any) {
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }
}
