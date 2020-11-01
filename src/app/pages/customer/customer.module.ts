import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { TableClassicModule } from 'src/app/common-module/table-package/table-classic/table-classic.module';
import { DialogInfoComponent } from './dialog-info/dialog-info.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SearchModule } from 'src/app/shared/search/search.module';
import { PaginationModule } from 'src/app/shared/pagination/pagination.module';



@NgModule({
  declarations: [CustomerComponent, DialogInfoComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
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
    PaginationModule

  ],
  exports: [
    CustomerComponent
  ]
})
export class CustomerModule { }
