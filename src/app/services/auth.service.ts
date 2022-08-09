import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    //alert("Will login");
    let data = {username: credentials.username, password: credentials.password};

    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('username', data.username);
    body = body.set('password', data.password);
    return this.http.post(AppConstants.LOGIN_URL, body, { headers: myheader});
  }


  register(user: any): Observable<any> {
    //alert("Will register");
    let data = { 
      name: user.displayName,
      email: user.email,
      username: user.email,
      password: user.password,
      matchingPassword: user.matchingPassword
    };
    return this.http.post(AppConstants.REGISTER_URL, data);
  }

  logout(): Observable<any> {
    //alert("Will logout...");

    return this.http.get(AppConstants.LOGOUT_URL, {});
  }

}