import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject, Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);
    private userName: string;

    constructor(private tokenService: TokenService) {
        this.tokenService.hasToken()
            && this.decodeAndNotify();
    }

    setToken(token: string): void {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser(): Observable<User> {
        return this.userSubject.asObservable();
    }

    decodeAndNotify(): void {
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as User;

        this.userName = user.name;
        this.userSubject.next(user);
    }

    logout(): void {
        this.tokenService.removeToken();
        this.userSubject.next(null);
        this.userName = null;
    }

    isLogged(): boolean {
        return this.tokenService.hasToken();
    }

    getUserName(): string {
        return this.userName;
    }
}