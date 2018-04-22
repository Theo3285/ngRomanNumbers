import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RomannumbersComponent } from './romannumbers/romannumbers.component';


@NgModule({
  declarations: [
    AppComponent,
    RomannumbersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
