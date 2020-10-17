import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAddProductComponent } from './card-add-product.component';

import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CDiscussionAttachComponent } from './c-discussion-attach/c-discussion-attach.component';





@NgModule({
  declarations: [CardAddProductComponent, CDiscussionAttachComponent],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    CardAddProductComponent
  ]
})
export class CardAddProductModule { }
