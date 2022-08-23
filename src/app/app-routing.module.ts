import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tuteur', loadChildren: () => import('./pages/tuteur/tuteur.module').then(m => m.TuteurModule) } // loadchildren, lazy ?????????
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
