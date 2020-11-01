import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogNotificationComponent } from './dialog-notification.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [DialogNotificationComponent],
  imports: [CommonModule, MatDialogModule],
  exports: [DialogNotificationComponent]
})
export class DialogNotificationModule {}
