import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TuteurComponent } from './pages/tuteur/tuteur.component';
import { TuteurListComponent } from './pages/tuteur/components/tuteur-list/tuteur-list.component';
import { TuteurDetailComponent } from './pages/tuteur/components/tuteur-detail/tuteur-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TuteurComponent,
    TuteurListComponent,
    TuteurDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
