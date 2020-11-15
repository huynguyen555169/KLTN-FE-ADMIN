import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableOneModule } from './common-module/table-package/table-one/table-one.module';
import { MenuTwoModule } from './common-module/menu-package/menu-two/menu-two.module';
import { MenuThreeModule } from './common-module/menu-package/menu-three/menu-three.module';
import { HttpClientModule } from '@angular/common/http';
import { CSpinnerModule } from './common-module/c-spinner/c-spinner.module';



@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableOneModule,
    MenuTwoModule,
    MenuThreeModule,
    HttpClientModule,
    CSpinnerModule,

  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
