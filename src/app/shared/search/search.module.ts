import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, FormsModule, MatButtonModule],
  exports: [SearchComponent],
})
export class SearchModule {}
