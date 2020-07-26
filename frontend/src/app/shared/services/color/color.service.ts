import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private baseURL: string = '/ovTeachingApi';

  constructor(
    private http: HttpClient
  ) { }

  getTheme(): Observable<any> {
    return this.http.get<any>(this.baseURL + '/theme').pipe(
      map(theme => { return theme }),
      catchError((error) => this.handleError(error))
    );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError("Server error (" + error.status + "): " + error.message)
  }
}
