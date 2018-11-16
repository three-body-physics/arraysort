import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ArrayInputComponent } from './array-input/array-input.component';


@NgModule({
  declarations: [
    AppComponent,
    ArrayInputComponent,
    
  ],

  imports: [
    BrowserModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
