import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableInfoComponent } from './table-info.component';



@NgModule({
  declarations: [TableInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TableInfoComponent
  ]
})
export class TableInfoModule { }
