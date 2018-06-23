import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FCompComponent } from './fcomp/fcomp.component';
import { SCompComponent } from './scomp/scomp.component';

@NgModule({
  declarations: [
    AppComponent,
    FCompComponent,
    SCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
