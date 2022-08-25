import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SessionService} from "./modules/security/services/session.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exoAngular1';
  token : any | null = null;

  constructor(
    private _http: HttpClient,
    private _session: SessionService
  ) {
  }

  logout() {
    this._session.logout();
  }

  ngOnInit() {
    this._session.Token$.subscribe(token => this.token = token);
  }
}
