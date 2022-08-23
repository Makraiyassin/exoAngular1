import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TuteurRoutingModule} from "./tuteur-routing.module";
import {TuteurComponent} from "./tuteur.component";
import {TuteurDetailComponent} from "./components/tuteur-detail/tuteur-detail.component";
import {TuteurListComponent} from "./components/tuteur-list/tuteur-list.component";



@NgModule({
  declarations: [
    TuteurComponent,
    TuteurDetailComponent,
    TuteurListComponent
  ],
  imports: [
    CommonModule,
    TuteurRoutingModule
  ]
})
export class TuteurModule { }
