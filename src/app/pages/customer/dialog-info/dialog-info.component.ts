import { Component, Inject, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerService } from 'src/app/core/services/api/customer-service/customer.service';
import { DialogNotificationService } from 'src/app/core/services/app-services/dialog-notification-service/dialog-notification.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request-service';
import { CustomerModel } from '../customer.model';
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
    private customerService: CustomerService,
    private dialogNotification: DialogNotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogInfoComponent>
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.editUserForm = new FormGroup({
      customer_fullName: new FormControl(this.data.customer_fullName, [
      ]),
      customer_birthday: new FormControl(this.data.customer_birthday, [
      ]),
      customer_phone: new FormControl(this.data.customer_phone, [
      ]),
      customer_gender: new FormControl(this.data.customer_gender, [
      ]),

      customer_status: new FormControl(this.data.customer_status),
    });
  }
  handleSave(): void {
    let customerEdit = this.editUserForm.value;
    const dataEditUser = new HttpRequestModel();
    dataEditUser.body = { customerEdit };
    this.customerService.updateUser(dataEditUser).subscribe((res) => {
      console.log(res.body.customerEdit)
      customerEdit = new CustomerModel(res.body.customerEdit);
      this.dialogRef.close(customerEdit);
    })
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
