import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogNotificationService } from 'src/app/core/services/app-services/dialog-notification-service/dialog-notification.service';
import { CustomValidator } from 'src/app/core/validate-service/custom-validator';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {
  editForm: FormGroup;
  param = {
    title: 'Thông báo',
    message:
      'Bạn có muốn lưu',
    buttons: [
      { text: 'YES', actionValue: 1 },
      { text: 'NO', actionValue: 2 },
    ],
  };
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EditOrderComponent>, private dialogNotification: DialogNotificationService) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm(): void {
    this.editForm = new FormGroup({
      order_customer_name: new FormControl(this.data.order_customer_name, [
        CustomValidator.required,
        CustomValidator.maxLength(10),
        CustomValidator.numberOnly
      ]),
      order_status: new FormControl(this.data.order_status, [
        CustomValidator.required,
        CustomValidator.maxLength(32),

      ]),
      order_id: new FormControl(this.data.order_id, [
        CustomValidator.required,
        CustomValidator.numberOnly
      ]),
      createdAt: new FormControl(this.data.createdAt, [
        CustomValidator.required,
        CustomValidator.maxLength(80),
      ]),
      order_customer_phone: new FormControl(this.data.order_customer_phone, [
        CustomValidator.required,
      ]),
      order_customer_address: new FormControl(this.data.order_customer_address, [
        CustomValidator.required,
      ])
    });
  }
  handleSave() {

  }
  handleCancel() {
    if (this.editForm.dirty) {
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
