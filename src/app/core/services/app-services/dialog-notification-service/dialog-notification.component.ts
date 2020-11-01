import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-notification-service',
  templateUrl: './dialog-notification.component.html',
  styleUrls: ['./dialog-notification.component.scss']
})
export class DialogNotificationComponent {
  type: string;
  title: string;
  message: string;
  buttons: ButtonActionModel[];

  constructor(
    public dialogRef: MatDialogRef<DialogNotificationComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.type = data.type;
    this.title = data.title;
    this.message = data.message;
    this.buttons = data.buttons || [{ text: 'OK', actionValue: true }];
  }
}

export class ButtonActionModel {
  text: string; // show in button
  actionValue: boolean | string;

  constructor(button: any) {
    this.text = button.text;
    this.actionValue = button.actionValue;
  }
}

export class DialogDataModel {
  title: string;
  message: string;
  buttons: ButtonActionModel[];
  constructor(data: any) {
    this.title = data.title;
    this.message = data.message;
    this.buttons = data.buttons || [{ text: 'OK', acticonValue: true }];
  }
}
