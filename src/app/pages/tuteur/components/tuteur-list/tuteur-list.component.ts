import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Tuteur} from "../../models/tuteur.dto";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-tuteur-list',
  templateUrl: './tuteur-list.component.html',
  styleUrls: ['./tuteur-list.component.css']
})
export class TuteurListComponent implements OnInit {
  private getAll$: Observable<any[]> // observable ??????????????
  private _tuteurs: Tuteur[] = [];

  localUrl = "http://localhost:8080"
  remoteUrl = "https://exo-nursery.herokuapp.com"
  jsonServer = "http://localhost:3000"

  token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhIiwicm9sZXMiOlsiUk9MRV9QRVJTT05ORUwiXSwiZXhwIjoxNjYxMzc5MDE2fQ.VGA_voBmgjNjpoGNetPsmfium60vxzR9ftbrArafl-spqH07MNGDr36ZIt9NmPpMOuqcPSVSXwGAF-JcxqT72g"
  params = new HttpHeaders()
    // .append("Authorization", this.token)
    .append("Authorization", localStorage.getItem("token")!)

  get tuteurs(): Tuteur[] {
    return this._tuteurs;
  }

  constructor(private _http: HttpClient) {
    this.getAll$ = this._http.get<Tuteur[]>(`${this.remoteUrl}/tuteur`, {headers: this.params});
  }

  ngOnInit(): void {
    this.getAll$.subscribe(data => {
      this._tuteurs = [...data]
      console.log(data);
    });

  }

}
