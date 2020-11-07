import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardEditComponent } from './card-edit.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DialogNotificationModule } from 'src/app/core/services/app-services/dialog-notification-service/dialog-notification.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CDiscussionAttach1Component } from './c-discussion-attach1/c-discussion-attach1.component';
import { MatBadgeModule } from '@angular/material/badge';



@NgModule({
  declarations: [CardEditComponent, CDiscussionAttach1Component],
  imports: [
    CommonModule,
    DialogNotificationModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatButtonModule, MatBadgeModule,

  ],
  exports: [
    CardEditComponent
  ]
})
export class CardEditModule { }
