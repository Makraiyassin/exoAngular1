import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Tuteur} from "../../models/tuteur.dto";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tuteur-detail',
  templateUrl: './tuteur-detail.component.html',
  styleUrls: ['./tuteur-detail.component.css']
})
export class TuteurDetailComponent implements OnInit {
  private getOne$: Observable<Tuteur> | null = null;
  private _tuteur: Tuteur | null = null;

  get tuteur(): Tuteur | null {
    return this._tuteur;
  }

  constructor(private _http: HttpClient, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe(map => {  // paramMap, subscribe ???????????
      this.getOne$ = this._http.get<Tuteur>(`https://exo-nursery.herokuapp.com//tuteur/${map.get("id")}`)
      this.getOne$.subscribe(tuteur => this._tuteur = tuteur);
    })
  }

  ngOnInit(): void {
  }

}
