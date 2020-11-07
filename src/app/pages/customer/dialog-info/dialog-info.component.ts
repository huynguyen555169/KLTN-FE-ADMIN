import { Component, Inject, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogNotificationService } from 'src/app/core/services/app-services/dialog-notification-service/dialog-notification.service';
import { dataStatus } from '../mockData';

@Component({
  selector: 'app-dialog-info',
  templateUrl: './dialog-info.component.html',
  styleUrls: ['./dialog-info.component.scss']
})
export class DialogInfoComponent implements OnInit {

  hide = true;
  status = dataStatus;
  param = {
    title: 'Thông báo',
    message:
      'Đã có thông tin thay đổi, bạn thực sự muốn huỷ?',
    buttons: [
      { text: 'YES', actionValue: 1 },
      { text: 'NO', actionValue: 2 },
    ],
  };
  /**
   * Login form
   */
  editUserForm: FormGroup;
  constructor(
    private dialogNotification: DialogNotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogInfoComponent>
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.editUserForm = new FormGroup({
      name: new FormControl(this.data.customer_fullname, [
      ]),
      birthday: new FormControl(this.data.customer_birthday, [
      ]),
      phone: new FormControl(this.data.customer_phone, [
      ]),
      gender: new FormControl(this.data.customer_gender, [
      ]),

      status: new FormControl(this.data.customer_status),
    });
  }
  handleSave(): void {
    console.log(this.editUserForm.value);
  }
  handleCancel(): void {
    if (this.editUserForm.dirty) {
      this.dialogNotification.confirm(this.param).subscribe((res) => {
        if (res === 1) {
          this.dialogRef.close();
        }
      });
    } else {
      this.dialogRef.close();
    }
  }


}
