import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

// Strategy based on http://jasonwatmore.com/post/2018/09/07/angular-6-basic-http-authentication-tutorial-example
@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        // add authorization header with basic auth credentials if available
        let user = JSON.parse(localStorage.getItem('currentUser'));

        if (user && user.authdata) {
            if (request.url.includes('ovTeachingApi')) {
                request = request.clone({
                    setHeaders: { 
                        Authorization: `Basic ${user.authdata}`
                    }
                });
            }
        }

        return next.handle(request);
    }
}