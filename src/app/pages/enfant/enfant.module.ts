import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnfantRoutingModule } from './enfant-routing.module';
import { EnfantComponent } from './enfant.component';
import { EnfantListComponent } from './enfant-list/enfant-list.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { PaginationComponent } from './enfant-list/pagination/pagination.component';


@NgModule({
  declarations: [
    EnfantComponent,
    EnfantListComponent,
    PaginationComponent
  ],
    imports: [
        CommonModule,
        EnfantRoutingModule,
        MatPaginatorModule
    ]
})
export class EnfantModule { }
