import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashionComponent } from './fashion.component';
import { FashionRoutingModule } from './fashion-routing.module';
import { TableOneModule } from 'src/app/common-module/table-package/table-one/table-one.module';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from "@angular/material/button";
import { CardAddProductModule } from 'src/app/common-module/card-package/card-add-product/card-add-product.module';



@NgModule({
  declarations: [FashionComponent],
  imports: [
    CommonModule,
    FashionRoutingModule,
    TableOneModule,
    MatDialogModule,
    MatButtonModule,
    CardAddProductModule
  ],
  exports: [
    FashionComponent
  ]
})
export class FashionModule { }
