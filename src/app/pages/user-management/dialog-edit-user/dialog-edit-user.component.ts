import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CSpinnerService } from 'src/app/common-module/c-spinner/c-spinner.service';
import { UserService } from 'src/app/core/services/api/user-service/user.service';
import { DialogNotificationService } from 'src/app/core/services/app-services/dialog-notification-service/dialog-notification.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request-service';
import { CustomValidator } from 'src/app/core/validate-service/custom-validator';

import { dataRole } from '../mockData';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss'],
})
export class DialogEditUserComponent implements OnInit {
  hide = true;
  roles = dataRole;

  param = {
    title: 'Thông báo',
    message:
      'Bạn có muốn thay đổi thông tin không',
    buttons: [
      { text: 'YES', actionValue: 1 },
      { text: 'NO', actionValue: 2 },
    ],
  };

  editUserForm: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogEditUserComponent>,
    private dialogNotification: DialogNotificationService,
    private userService: UserService,
    private spinner: CSpinnerService
  ) { }

  ngOnInit(): void {
    this.initForm();
    console.log(this.data)
  }

  initForm(): void {
    this.editUserForm = new FormGroup({
      employee_userName: new FormControl(this.data.data.employee_userName, [
        CustomValidator.required,
        CustomValidator.maxLength(32),
      ]),
      employee_password: new FormControl('', [
        CustomValidator.required,
        CustomValidator.rangeLength(8, 16),
      ]),
      employee_fullName: new FormControl(this.data.data.employee_fullName, [
        CustomValidator.required,
        CustomValidator.maxLength(64),
      ]),
      employee_phone: new FormControl(this.data.data.employee_phone, [
        CustomValidator.required,
        CustomValidator.rangeLength(10, 12),
      ]),
      employee_status: new FormControl(this.data.data.employee_status),
      employee_role: new FormControl(this.data.data.employee_role),
    });
  }
  handleEdit(): void {
    this.spinner.show()
    let user = this.editUserForm.value;
    const dataEditUser = new HttpRequestModel()
    dataEditUser.body = { user }
    this.userService.updateUser(dataEditUser).subscribe(
      (res) => {
        this.spinner.hide()
        this.dialogRef.close(res);
      },
      (error) => {
        console.log('error');
      }
    );
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
