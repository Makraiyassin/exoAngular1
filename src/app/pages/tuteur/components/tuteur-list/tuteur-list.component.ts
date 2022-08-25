import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Tuteur} from "../../models/tuteur.dto";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {SessionService} from "../../../../modules/security/services/session.service";

@Component({
  selector: 'app-tuteur-list',
  templateUrl: './tuteur-list.component.html',
  styleUrls: ['./tuteur-list.component.css']
})
export class TuteurListComponent implements OnInit {

  localUrl = "http://localhost:8080"
  remoteUrl = "https://exo-nursery.herokuapp.com"
  jsonServer = "http://localhost:3000"
  token = "";

  private _tuteurs: Tuteur[] = [];
  private headers: HttpHeaders | null = null;

  get tuteurs(): Tuteur[] {
    return this._tuteurs;
  }

  constructor(
    private _http: HttpClient,
    private _session: SessionService
  ) {
    this._session.Token$.subscribe(token => this.token = `Bearer ${token}`)
  }

  ngOnInit(): void {
    this.headers = new HttpHeaders().append("Authorization", this.token);
    this._http.get<Tuteur[]>(
      `${this.remoteUrl}/tuteur`,
      {headers: this.headers}
    ).subscribe(data => {
      this._tuteurs = [...data]
      console.log(data);
    });

  }

}
