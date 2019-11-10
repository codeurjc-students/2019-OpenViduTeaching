import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { UserModel } from "../models/user-model";

@Injectable()
export class OpenViduService {
    isLogged = false;
    isAdmin = false;
    user: UserModel;
    auth: string;

    constructor(private http: HttpClient) {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            this.setCurrentUser(user);
        }
    }

    logIn(user: string, pass: string) {

        let auth = window.btoa(user + ':' + pass);

        const headers = new HttpHeaders({
            Authorization: 'Basic ' + auth,
            'X-Requested-With': 'XMLHttpRequest',
        });

        return this.http.get<UserModel>('/api/logIn', { headers })
            .pipe(map(user => {

                if (user) {
                    this.setCurrentUser(user);
                    user.authdata = auth;
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logOut() {
        return this.http.get(URL + '/logOut').pipe(
            map(response => {
                this.removeCurrentUser();
                return response;
            }),
        );
    }

    private setCurrentUser(user: UserModel) {
        this.isLogged = true;
        this.user = user;
        this.isAdmin = this.user.roles.indexOf('ROLE_ADMIN') !== -1;
    }

    removeCurrentUser() {
        localStorage.removeItem('currentUser');
        this.isLogged = false;
        this.isAdmin = false;
    }
}