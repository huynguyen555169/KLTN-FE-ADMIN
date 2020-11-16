import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoucherCardComponent } from './voucher-card.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [VoucherCardComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    VoucherCardComponent
  ]
})
export class VoucherCardModule { }
