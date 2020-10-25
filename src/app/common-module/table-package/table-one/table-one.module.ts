import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableOneComponent } from './table-one.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { CardEditModule } from '../../card-package/card-edit/card-edit.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [TableOneComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    CardEditModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [
    TableOneComponent
  ]
})
export class TableOneModule { }
