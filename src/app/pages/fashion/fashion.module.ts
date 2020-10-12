import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashionComponent } from './fashion.component';
import { FashionRoutingModule } from './fashion-routing.module';
import { TableOneModule } from 'src/app/common-module/table-package/table-one/table-one.module';



@NgModule({
  declarations: [FashionComponent],
  imports: [
    CommonModule,
    FashionRoutingModule,
    TableOneModule
  ],
  exports: [
    FashionComponent
  ]
})
export class FashionModule { }
