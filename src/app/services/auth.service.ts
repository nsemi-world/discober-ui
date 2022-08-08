import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../adts/app-constants';
import { EmailValidator } from '@angular/forms';
 
/*const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};*/
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
 
  login(credentials: any): Observable<any> {
    alert("Will login");
    let data = {username: credentials.username, password: credentials.password};
    return this.http.post(AppConstants.LOGIN_URL + 'login', data);
  }
 
  register(user: any): Observable<any> {
    alert("Will register");
    let data = { 
      name: user.displayName,
      email: user.email,
      username: user.email,
      password: user.password,
      matchingPassword: user.matchingPassword
    };
    return this.http.post(AppConstants.REGISTER_URL, data);
  }

}