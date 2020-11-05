import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RobModule } from './../../projects/rob/src/lib/rob.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RobModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
