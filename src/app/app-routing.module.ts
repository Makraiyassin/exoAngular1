import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";

const routes: Routes = [
  { path: 'tuteur', loadChildren: () => import('./pages/tuteur/tuteur.module').then(m => m.TuteurModule) }, // loadchildren, lazy ?????????
  { path: 'login', component: LoginComponent},
  { path: 'enfants', loadChildren: () => import('./pages/enfant/enfant.module').then(m => m.EnfantModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
