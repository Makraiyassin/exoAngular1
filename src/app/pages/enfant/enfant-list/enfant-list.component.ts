import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Enfant} from "../../tuteur/models/tuteur.dto";
import {Observable} from "rxjs";

@Component({
  selector: 'app-enfant-list',
  templateUrl: './enfant-list.component.html',
  styleUrls: ['./enfant-list.component.css']
})
export class EnfantListComponent implements OnInit {
  remoteUrl = "https://exo-nursery.herokuapp.com"
  token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhIiwicm9sZXMiOlsiUk9MRV9QRVJTT05ORUwiXSwiZXhwIjoxNjYxMzc5MDE2fQ.VGA_voBmgjNjpoGNetPsmfium60vxzR9ftbrArafl-spqH07MNGDr36ZIt9NmPpMOuqcPSVSXwGAF-JcxqT72g"
  params = new HttpHeaders()
    // .append("Authorization", this.token)
    .append("Authorization", localStorage.getItem("token")!)

  private _enfants : Enfant[] = [];


  get enfants(): Enfant[] {
    return this._enfants;
  }

  constructor(private _http : HttpClient) {}

  ngOnInit(): void {
    this._http.get<Enfant[]>(
      `${this.remoteUrl}/enfant`,
      {headers: this.params}
    ).subscribe(
      data => {
        this._enfants = [...data];
        console.log(data);
      }
    )
  }

}
