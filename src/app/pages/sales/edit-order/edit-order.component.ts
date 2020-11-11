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
    console.log(this.data)
  }
  initForm(): void {
    this.editForm = new FormGroup({
      name: new FormControl(this.data.name, [
        CustomValidator.required,
        CustomValidator.maxLength(10),
        CustomValidator.numberOnly
      ]),
      status: new FormControl(this.data.status, [
        CustomValidator.required,
        CustomValidator.maxLength(32),

      ]),
      code: new FormControl(this.data.code, [
        CustomValidator.required,
        CustomValidator.numberOnly
      ]),
      date: new FormControl(this.data.date, [
        CustomValidator.required,
        CustomValidator.maxLength(80),
      ]),
      product: new FormControl(this.data.product, [
        CustomValidator.required,
      ]),
      price: new FormControl(this.data.price, [
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
