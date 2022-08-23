import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Tuteur} from "../../models/tuteur.dto";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-tuteur-list',
  templateUrl: './tuteur-list.component.html',
  styleUrls: ['./tuteur-list.component.css']
})
export class TuteurListComponent implements OnInit {
  private getAll$: Observable<any[]> // observable ??????????????
  private _tuteurs: Tuteur[] = [];

  get tuteurs(): Tuteur[] {
    return this._tuteurs;
  }

  constructor(private _http: HttpClient) {
    this.getAll$ = this._http.get<Tuteur[]>("https://exo-nursery.herokuapp.com/tuteur/all");
  }

  ngOnInit(): void {
    this.getAll$.subscribe(data => {
      this._tuteurs = [...data]
      console.log(data);
    });

  }

}
