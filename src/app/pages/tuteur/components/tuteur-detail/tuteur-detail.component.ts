import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Tuteur} from "../../models/tuteur.dto";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tuteur-detail',
  templateUrl: './tuteur-detail.component.html',
  styleUrls: ['./tuteur-detail.component.css']
})
export class TuteurDetailComponent implements OnInit {
  private getOne$: Observable<Tuteur> | null = null;
  private _tuteur: Tuteur | null = null;

  localUrl = "http://localhost:8080"
  remoteUrl = "https://exo-nursery.herokuapp.com"

  token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhIiwicm9sZXMiOlsiUk9MRV9QRVJTT05ORUwiXSwiZXhwIjoxNjYxMzc5MDE2fQ.VGA_voBmgjNjpoGNetPsmfium60vxzR9ftbrArafl-spqH07MNGDr36ZIt9NmPpMOuqcPSVSXwGAF-JcxqT72g"
  params = new HttpHeaders()
    .append("Authorization", this.token)

  get tuteur(): Tuteur | null {
    return this._tuteur;
  }

  constructor(private _http: HttpClient, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe(map => {  // paramMap, subscribe ???????????

      this.getOne$ = this._http.get<Tuteur>(`${this.localUrl}/tuteur/${map.get("id")}`, {headers: this.params})
      this.getOne$.subscribe(tuteur => this._tuteur = tuteur);
    })
  }

  ngOnInit(): void {
  }

}
