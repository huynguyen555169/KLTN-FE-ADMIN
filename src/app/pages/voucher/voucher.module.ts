import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoucherComponent } from './voucher.component';
import { VoucherCardModule } from './voucher-card/voucher-card.module';
import { VoucherRoutingModule } from './voucher-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { DialogVoucherModule } from './dialog-voucher/dialog-voucher.module';



@NgModule({
  declarations: [VoucherComponent],
  imports: [
    CommonModule,
    VoucherCardModule,
    VoucherRoutingModule,
    MatButtonModule,
    DialogVoucherModule
  ]
})
export class VoucherModule { }
