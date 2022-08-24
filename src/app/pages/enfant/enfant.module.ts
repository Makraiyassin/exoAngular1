import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnfantRoutingModule } from './enfant-routing.module';
import { EnfantComponent } from './enfant.component';
import { EnfantListComponent } from './enfant-list/enfant-list.component';


@NgModule({
  declarations: [
    EnfantComponent,
    EnfantListComponent
  ],
  imports: [
    CommonModule,
    EnfantRoutingModule
  ]
})
export class EnfantModule { }
