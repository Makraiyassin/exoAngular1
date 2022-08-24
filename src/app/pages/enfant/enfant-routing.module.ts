import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnfantComponent } from './enfant.component';

const routes: Routes = [
  { path: '', component: EnfantComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnfantRoutingModule { }
