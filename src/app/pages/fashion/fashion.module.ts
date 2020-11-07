import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashionComponent } from './fashion.component';
import { FashionRoutingModule } from './fashion-routing.module';
import { TableOneModule } from 'src/app/common-module/table-package/table-one/table-one.module';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from "@angular/material/button";
import { PaginationModule } from 'src/app/shared/pagination/pagination.module';
import { SearchModule } from 'src/app/shared/search/search.module';
import { DialogCreateModule } from 'src/app/shared/dialog-create/dialog-create.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [FashionComponent],
  imports: [
    CommonModule,
    FashionRoutingModule,
    TableOneModule,
    MatDialogModule,
    MatButtonModule,
    DialogCreateModule,
    PaginationModule,
    SearchModule,
    MatIconModule
  ],
  exports: [
    FashionComponent
  ]
})
export class FashionModule { }
