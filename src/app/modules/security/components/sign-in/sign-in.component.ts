import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor(
    private _auth: AuthService,
    private _session: SessionService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.username, this.password);
    this._auth.login(this.username, this.password).subscribe(data => {
      console.log(data.token);
      this._session.login(data.token);
      this._router.navigate(["/tuteur"]).then(res => console.log("Has changed"));
    })
  }


}
