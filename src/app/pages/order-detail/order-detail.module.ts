import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailComponent } from './order-detail.component';
import { OrderDetailRoutingModule } from './order-detail-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { TableInfoModule } from './table-info/table-info.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [OrderDetailComponent],
  imports: [
    CommonModule,
    OrderDetailRoutingModule,
    MatTabsModule,
    TableInfoModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    OrderDetailComponent
  ]
})
export class OrderDetailModule { }
