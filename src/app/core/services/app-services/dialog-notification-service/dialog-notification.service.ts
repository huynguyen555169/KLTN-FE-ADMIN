import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogNotificationComponent } from './dialog-notification.component';
import { DialogNotificationModule } from './dialog-notification.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: DialogNotificationModule
})
export class DialogNotificationService {
  constructor(private dialog: MatDialog) {}

  confirm(params): Observable<any> {
    params.type = 'confirm';
    return this.open(params);
  }

  info(params): Observable<any> {
    params.type = 'info';
    return this.open(params);
  }

  success(params): Observable<any> {
    params.type = 'success';
    return this.open(params);
  }

  error(params): Observable<any> {
    params.type = 'error';
    /**
     * Only show one error popup
     */
    const element = document.getElementById('error');
    return !element && this.open(params);
  }

  // ConfirmWithWarning have icon warning in title
  warning(params): Observable<any> {
    params.type = 'warning';
    return this.open(params);
  }

  private open(params): Observable<any> {
    const dialogRef = this.dialog.open(DialogNotificationComponent, {
      disableClose: true,
      data: params,
      id: params.type,
      minWidth: '400px',
      panelClass: 'dialog-notification-service-container'
    });
    return dialogRef.afterClosed();
  }
}
