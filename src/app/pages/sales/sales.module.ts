import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales.component';
import { SalesRoutingModule } from './sales-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TableClassicModule } from 'src/app/common-module/table-package/table-classic/table-classic.module';
import { PaginationModule } from 'src/app/shared/pagination/pagination.module';
import { SearchModule } from 'src/app/shared/search/search.module';
import { TableCheckModule } from 'src/app/common-module/table-package/table-check/table-check.module';
import { EditOrderComponent } from './edit-order/edit-order.component';




@NgModule({
  declarations: [SalesComponent, EditOrderComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    TableClassicModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    SearchModule,
    PaginationModule,
    TableCheckModule,

  ],
  exports: [
    SalesComponent

  ]
})
export class SalesModule { }
