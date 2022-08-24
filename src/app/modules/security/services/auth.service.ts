import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    // const params = new HttpParams({fromObject: {username, password}});
    return this._http.post("https://exo-nursery.herokuapp.com/user/login", {"username":username,"password":password});
  }
}

