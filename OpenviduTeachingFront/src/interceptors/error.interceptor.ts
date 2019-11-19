import { UserHandler } from '../app/shared/users/user.module';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
 
    constructor(private userHandler: UserHandler) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.userHandler.removeCurrentUser();
            }
            
            return throwError(err);
        }))
    }
}