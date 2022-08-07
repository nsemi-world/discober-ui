import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../adts/app-constants';
import { EmailValidator } from '@angular/forms';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
 
  login(credentials: any): Observable<any> {
    return this.http.post(AppConstants.AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }
 
  register(user: any): Observable<any> {
    return this.http.post(AppConstants.AUTH_API + 'signup', {
      displayName: user.displayName,
      email: user.email,
      username: user.email,
      password: user.password,
      matchingPassword: user.matchingPassword,    
      socialProvider: 'LOCAL'
    }, httpOptions);
  }
}