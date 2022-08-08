import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../adts/app-constants';
import { User } from '../adts/user';
 
const httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
 
 
@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!: User;
 
  constructor(private http: HttpClient) { }

  getCurrentUser(): User {
    return this.user;
  }
 
  
}