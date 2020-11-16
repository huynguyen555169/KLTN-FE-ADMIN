import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogVoucherComponent } from './dialog-voucher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DialogNotificationModule } from 'src/app/core/services/app-services/dialog-notification-service/dialog-notification.module';
import { CDiscussionAttach0Component } from './c-discussion-attach0/c-discussion-attach0.component';



@NgModule({
  declarations: [DialogVoucherComponent, CDiscussionAttach0Component],
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
    MatBadgeModule,
    MatButtonModule
  ],
  exports: [
    DialogVoucherComponent
  ]
})
export class DialogVoucherModule { }
