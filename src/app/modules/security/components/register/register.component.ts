import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { AuthService } from '../../services/auth.service';
import {SessionService} from "../../services/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)]),
    address: new FormControl("rue example 77", [])
  })
  constructor(
    private _auth: AuthService,
    private _session:SessionService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm.valid);
    console.log(this.registerForm.value);
    this._auth.register(this.registerForm.value).subscribe(data=>{
      console.log(data)
      this._router.navigate(["/sign-in"])
    })
  }


}
