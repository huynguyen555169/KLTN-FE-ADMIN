import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { TableClassicModule } from 'src/app/common-module/table-package/table-classic/table-classic.module';



@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    TableClassicModule
  ],
  exports: [
    CustomerComponent
  ]
})
export class CustomerModule { }
