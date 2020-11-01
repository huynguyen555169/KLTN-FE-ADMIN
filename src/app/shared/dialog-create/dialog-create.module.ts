import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogCreateComponent } from './dialog-create.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DialogNotificationModule } from 'src/app/core/services/app-services/dialog-notification-service/dialog-notification.module';
import { CDiscussionAttachComponent } from './c-discussion-attach/c-discussion-attach.component';



@NgModule({
  declarations: [DialogCreateComponent, CDiscussionAttachComponent],
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

  ]
})
export class DialogCreateModule { }
