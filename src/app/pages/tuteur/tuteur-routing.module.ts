import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TuteurComponent} from "./tuteur.component";
import {TuteurDetailComponent} from "./components/tuteur-detail/tuteur-detail.component";

const routes: Routes = [
  {path:'', component: TuteurComponent, children:[
      {path:':id',component:TuteurDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TuteurRoutingModule { }
