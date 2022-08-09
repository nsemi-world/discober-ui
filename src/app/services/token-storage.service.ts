import { Injectable } from '@angular/core';

const ACCESS_TOKEN_KEY  = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const USER_KEY          = 'auth-user';
 
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
 
  constructor() { }
 
 
  public saveTokens(accessToken: string, refreshToken: string): void {
    this.saveToken(ACCESS_TOKEN_KEY, accessToken);
    this.saveToken(REFRESH_TOKEN_KEY, refreshToken);
  }

  public saveToken(tokenKey: string, token: string) {
    window.sessionStorage.removeItem(tokenKey);
    window.sessionStorage.setItem(tokenKey, token);
  }
 
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

 
  public getAccessToken(): string {
    return window.sessionStorage.getItem(ACCESS_TOKEN_KEY)!;
  }

  public getRefreshToken(): string {
    return window.sessionStorage.getItem(REFRESH_TOKEN_KEY)!;
  }

  public getUser(): any {
    return JSON.parse(window.sessionStorage.getItem(USER_KEY)!);
  }

  signOut(): void {
    window.sessionStorage.clear();
    window.location.href = "/bridges";
  }

  hasLoggedInUser(): boolean {
    if(window.sessionStorage.getItem(ACCESS_TOKEN_KEY)) {
      return true;
    }
    else {
      return false;
    }
  }

}