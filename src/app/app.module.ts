import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableOneModule } from './common-module/table-package/table-one/table-one.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableOneModule

  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
