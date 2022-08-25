import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Enfant} from "../../tuteur/models/tuteur.dto";
import {SessionService} from "../../../modules/security/services/session.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-enfant-list',
  templateUrl: './enfant-list.component.html',
  styleUrls: ['./enfant-list.component.css']
})
export class EnfantListComponent implements OnInit {

  localUrl = "http://localhost:8080"
  remoteUrl = "https://exo-nursery.herokuapp.com"
  jsonServer = "http://localhost:3000"
  token = "";

  private _enfants : Enfant[] = [];
  private headers: HttpHeaders | null = null;

  get enfants(): Enfant[] {
    return this._enfants;
  }

  pageEvent: PageEvent | any = {
    pageSize:this.enfants.length,
    pageIndex:0
  };

  constructor(
    private _http : HttpClient,
    private _session: SessionService
  ) {
    this._session.Token$.subscribe(token => this.token = `Bearer ${token}`)
  }

  ngOnInit(): void {
    this.headers = new HttpHeaders().append("Authorization", this.token);
    this._http.get<Enfant[]>(
      `https://exo-nursery.herokuapp.com/enfant/all`,
      {headers: this.headers}
    ).subscribe(
      data => {
        this._enfants = [...data];

        this.pageEvent = {
          pageSize:this.enfants.length,
          pageIndex:0
        }

        console.log(data);
      }
    )
  }

  pagination(e: PageEvent) {
    console.log("EMIT");
    this.pageEvent = e;
    console.log(e);
  }
}
