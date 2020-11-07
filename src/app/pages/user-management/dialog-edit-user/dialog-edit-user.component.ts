import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/core/services/api/user-service/user.service';
import { DialogNotificationService } from 'src/app/core/services/app-services/dialog-notification-service/dialog-notification.service';
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
  user;

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
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.editUserForm = new FormGroup({
      userId: new FormControl(this.data.userId),
      userName: new FormControl(this.data.userName, [
        CustomValidator.required,
        CustomValidator.maxLength(32),
      ]),
      password: new FormControl('', [
        CustomValidator.required,
        CustomValidator.rangeLength(8, 16),
      ]),
      email: new FormControl(this.data.email, [
        CustomValidator.email,
        CustomValidator.required,
        CustomValidator.maxLength(64),
      ]),
      phone: new FormControl(this.data.phone, [
        CustomValidator.required,
        CustomValidator.rangeLength(10, 12),
      ]),
      isDelete: new FormControl(this.data.isDelete),
      roleId: new FormControl(this.data.roleId),
    });
  }
  handleEdit(): void {
    this.user = this.editUserForm.value;
    this.userService.updateUser(this.user).subscribe(
      (res) => {
        console.log(res);
        this.user = new UserModel(res);
        this.dialogRef.close(this.user);
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
