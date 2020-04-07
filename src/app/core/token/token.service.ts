import { Injectable } from '@angular/core';

const TOKEN_KEY = "auth_token";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  hasToken(): boolean {
    return !!this.getToken();
  }

  setToken(token: string): void {
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): string {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  removeToken(): void {
    window.localStorage.removeItem(TOKEN_KEY);
  }
}
