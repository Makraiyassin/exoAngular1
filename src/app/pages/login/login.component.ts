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

  token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhIiwicm9sZXMiOlsiUk9MRV9QRVJTT05ORUwiXSwiZXhwIjoxNjYxMzc5MDE2fQ.VGA_voBmgjNjpoGNetPsmfium60vxzR9ftbrArafl-spqH07MNGDr36ZIt9NmPpMOuqcPSVSXwGAF-JcxqT72g"
  params = new HttpHeaders()
    .append("Authorization", this.token)

  constructor(private _http: HttpClient) {
    this.getToken$ = this._http.post<String>(`${this.remoteUrl}/user/login`, {"username": "a" , "password":"a"});
  }

  ngOnInit(): void {
    this.getToken$.subscribe(token => {
      localStorage.setItem("token",token.token)
      console.log(token);
    });
  }

}
