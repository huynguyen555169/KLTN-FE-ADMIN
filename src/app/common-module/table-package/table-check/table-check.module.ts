import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableCheckComponent } from './table-check.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TableCheckComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [TableCheckComponent]
})
export class TableCheckModule {}
