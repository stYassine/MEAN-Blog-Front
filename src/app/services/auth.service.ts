import { Injectable } from '@angular/core';

import { User } from './../models/user';

import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {

  constructor(
    private http: Http
  ) { }


  BASE_URL ="http://localhost:8080/";
  headers =new Headers();
  TOKEN;
  USER;
  USER_LOGGED_IN =true;

  setTokenAndUser(user){
    this.TOKEN =user.token;
    this.USER =JSON.stringify(user);
    localStorage.setItem('token', user.token);
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  getTokenAndUser(){
    let stored_user =localStorage.getItem('user');
    return JSON.parse(stored_user);
  }


  loadToken(){
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('token', this.TOKEN);
  }

  /// login
  userLogin(user: User):Observable<any>{
    return this.http.post(this.BASE_URL+`login`, user)
          .map(response => {
            this.setTokenAndUser(response.json().user);
          })
          .catch(this.handleError);
  }

  /// register
  userRegister(user: User): Observable<User>{
    return this.http.post(this.BASE_URL+`register`, user)
          .map(response => response.json())
          .catch(this.handleError); 
  }

  /// is logged in
  isUsedLoggedIn(){
    if(this.USER_LOGGED_IN){
      return true;
    }else{
      return false;
    }
  }


  /// logout
  userLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }


  /// handle error
  handleError(response: Response): Observable<any>{
    let err_message =`${response.status} - ${response.statusText}`;
    return Observable.throw(err_message);
  }
  


}
