import { Room } from './../models/room-model';
import { Injectable } from "@angular/core";

export interface User {
    name: string;
    roles: string[];
    authdata: string;
    moddedRooms: Room[];
    participatedRooms: Room[];
}

@Injectable({
    providedIn: 'root'
})
export class UserHandler {
    isLogged = false;
    isAdmin = false;
    user: User;
    auth: string;

    constructor() {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            this.setCurrentUser(user);
        }
    }

    public saveUser(user: User, auth: string) {
        if (user) {
            this.setCurrentUser(user);
            user.authdata = auth;
            localStorage.setItem('currentUser', JSON.stringify(user));
        }
    }

    public setCurrentUser(user: User) {
        this.isLogged = true;
        this.user = user;
        this.isAdmin = this.user.roles.indexOf('ROLE_ADMIN') !== -1;
        console.log(user);
    }

    public removeCurrentUser() {
        localStorage.removeItem('currentUser');
        this.isLogged = false;
        this.isAdmin = false;
    }

    public isModOfRoom(roomName: string): boolean {
        return this.isLogged && this.user.moddedRooms.some((room) => room.name === roomName);
    }
}