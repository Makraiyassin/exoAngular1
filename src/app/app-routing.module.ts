import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {SignInComponent} from "./modules/security/components/sign-in/sign-in.component";
import {RegisterComponent} from "./modules/security/components/register/register.component";

const routes: Routes = [
  { path: 'tuteur', loadChildren: () => import('./pages/tuteur/tuteur.module').then(m => m.TuteurModule) }, // loadchildren, lazy ?????????
  { path: 'login', component: LoginComponent},
  { path: 'enfant', loadChildren: () => import('./pages/enfant/enfant.module').then(m => m.EnfantModule) },
  {path:'sign-in',component:SignInComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
