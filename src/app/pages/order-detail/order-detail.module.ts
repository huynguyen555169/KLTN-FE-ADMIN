import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailComponent } from './order-detail.component';



@NgModule({
  declarations: [OrderDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OrderDetailComponent
  ]
})
export class OrderDetailModule { }
