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
  data1 = [
    {
      key: 1,
      value: 'Xác nhận'
    },
    {
      key: 2,
      value: 'Đang giao'
    },
    {
      key: 3,
      value: 'Huỷ đơn'
    },
    {
      key: 4,
      value: 'Hoàn tất'
    }
  ]

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EditOrderComponent>, private dialogNotification: DialogNotificationService) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm(): void {
    this.editForm = new FormGroup({
      order_status: new FormControl('', [
        CustomValidator.required,
      ])
    });
  }

  handleSave() {

  }
  handleCancel() {

  }
}
