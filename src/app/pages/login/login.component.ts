import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Tuteur} from "../tuteur/models/tuteur.dto";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private getToken$: Observable<any> // observable ??????????????
  localUrl = "http://localhost:8080"
  remoteUrl = "https://exo-nursery.herokuapp.com"

  constructor(private _http: HttpClient) {
    this.getToken$ = this._http.post<String>(`${this.remoteUrl}/user/login`, {"username": "a" , "password":"a"});
  }

  ngOnInit(): void {
    this.getToken$.subscribe(data => {
      localStorage.setItem("token",data.token)
      console.log(data);
    });
  }

}
