import { UserModel } from './../user.model';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogNotificationService } from 'src/app/core/services/app-services/dialog-notification-service/dialog-notification.service';
import { UserService } from 'src/app/core/services/api/user-service/user.service';
import { CustomValidator } from 'src/app/core/validate-service/custom-validator';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request-service';
import { CSpinnerService } from 'src/app/common-module/c-spinner/c-spinner.service';


@Component({
  selector: 'app-dialog-create-user',
  templateUrl: './dialog-create-user.component.html',
  styleUrls: ['./dialog-create-user.component.scss'],
})
export class DialogCreateUserComponent implements OnInit {
  hide = true;
  roles;
  gender = [
    { value: 'Nam', viewValue: 'Nam' },
    { value: 'Nữ', viewValue: 'Nữ' }
  ];
  param = {
    title: 'キャンセル確認',
    message:
      'キャンセルを押したら、保存できません。キャンセルにも宜しいですか。',
    buttons: [
      { text: 'YES', actionValue: 1 },
      { text: 'NO', actionValue: 2 },
    ],
  };
  createUserForm: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogCreateUserComponent>,
    private dialogNotification: DialogNotificationService,
    private userService: UserService,
    private spinner: CSpinnerService
  ) { }

  ngOnInit(): void {
    this.roles = this.data.roles;
    this.initForm();
  }
  initForm(): void {
    this.createUserForm = new FormGroup({
      employee_userName: new FormControl('', [
        CustomValidator.required,
        CustomValidator.maxLength(10),
      ]),
      employee_fullName: new FormControl('', [
        CustomValidator.required,
        CustomValidator.maxLength(32),
      ]),

      employee_password: new FormControl('', [
        CustomValidator.required,
        CustomValidator.rangeLength(8, 16),
      ]),
      employee_phone: new FormControl('', [
        CustomValidator.required,
        CustomValidator.rangeLength(10, 12),
      ]),
      employee_role: new FormControl(this.roles[0]),
      employee_gender: new FormControl('')
    });
  }
  handleSave(): void {
    this.spinner.show()
    let user = this.createUserForm.value;
    const dataCreateUser = new HttpRequestModel()
    dataCreateUser.body = { user }
    this.userService.createUser(dataCreateUser).subscribe(
      (res) => {
        // user = new UserModel(res.body.user);
        this.spinner.hide()
        this.dialogRef.close(res);
      },
      (error) => {
      }
    );
  }
  handleCancel(): void {
    if (this.createUserForm.dirty) {
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
