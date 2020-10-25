import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoesComponent } from './shoes.component';
import { CardAddProductModule } from 'src/app/common-module/card-package/card-add-product/card-add-product.module';
import { TableOneModule } from 'src/app/common-module/table-package/table-one/table-one.module';
import { ShoesRoutingModule } from './shoes-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ShoesComponent],
  imports: [
    CommonModule,
    TableOneModule,
    MatDialogModule,
    MatButtonModule,
    ShoesRoutingModule,
    CardAddProductModule,


  ],
  exports: [
    ShoesComponent
  ]
})
export class ShoesModule { }
