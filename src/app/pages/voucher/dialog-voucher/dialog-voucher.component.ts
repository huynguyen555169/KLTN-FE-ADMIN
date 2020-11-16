import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CSpinnerService } from 'src/app/common-module/c-spinner/c-spinner.service';
import { DialogNotificationService } from 'src/app/core/services/app-services/dialog-notification-service/dialog-notification.service';
import { CustomValidator } from 'src/app/core/validate-service/custom-validator';

@Component({
  selector: 'app-dialog-voucher',
  templateUrl: './dialog-voucher.component.html',
  styleUrls: ['./dialog-voucher.component.scss']
})
export class DialogVoucherComponent implements OnInit {
  hide = true;
  roles;
  files;
  param = {
    title: 'Thông báo',
    message:
      'Đã có thông tin thay đổi, bạn thực sự muốn huỷ?',
    buttons: [
      { text: 'YES', actionValue: 1 },
      { text: 'NO', actionValue: 2 },
    ],
  };
  createForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<DialogVoucherComponent>,
    private dialogNotification: DialogNotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private spinner: CSpinnerService) { }

  ngOnInit(): void {
    this.initForm();

  }
  initForm(): void {
    this.createForm = new FormGroup({
      voucher_title: new FormControl('', [
        CustomValidator.required,
        CustomValidator.maxLength(10),
        CustomValidator.numberOnly
      ]),
      voucher_value: new FormControl('', [
        CustomValidator.required,
        CustomValidator.maxLength(32),

      ]),
      voucher_des: new FormControl('', [
        CustomValidator.required,
        CustomValidator.numberOnly
      ]),
      voucher_qty: new FormControl('', [
        CustomValidator.required,
        CustomValidator.maxLength(80),
      ])
    });
  }
  handleSave(): void {

  }
  handleSelect(e): void {
    console.log(e.value)
  }
  handleCancel(): void {
    if (this.createForm.dirty) {
      this.dialogNotification.confirm(this.param).subscribe((res) => {
        if (res === 1) {
          this.dialogRef.close();
        }
      });
    } else {
      this.dialogRef.close();
    }
  }
  handleFile(e) {
    this.files = e;
    console.log(this.files)
  }
}
