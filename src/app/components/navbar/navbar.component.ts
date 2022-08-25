import {Component, Input, OnInit} from '@angular/core';
import {SessionService} from "../../modules/security/services/session.service";
import {Router} from "@angular/router";
import {AuthService} from "../../modules/security/services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string = "";
  password: string = "";

  @Input() token: String;
  constructor(
    private _auth: AuthService,
    private _session: SessionService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    console.log(this.token)
  }

  logout() {
    this._session.logout();
    this._router.navigate(["/"]).then(res => console.log("retour à l'accueil"));
  }

  login() {
    console.log(this.username, this.password);
    this._auth.login(this.username, this.password).subscribe(data => {
      console.log(data.token);
      this._session.login(data.token);
      this._router.navigate(["/enfant"]).then(res => console.log("Has changed"));
    })
  }

}
