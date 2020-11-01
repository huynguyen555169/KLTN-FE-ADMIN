import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FashionService } from 'src/app/core/services/api/fashion-service/fashion.service';
import { DialogNotificationService } from 'src/app/core/services/app-services/dialog-notification-service/dialog-notification.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request-service';
import { CustomValidator } from 'src/app/core/validate-service/custom-validator';
import { FashionModel } from 'src/app/pages/fashion/fashion.model';

@Component({
  selector: 'app-dialog-create',
  templateUrl: './dialog-create.component.html',
  styleUrls: ['./dialog-create.component.scss']
})
export class DialogCreateComponent implements OnInit {

  hide = true;
  roles;
  files;
  param = {
    title: 'キャンセル確認',
    message:
      'キャンセルを押したら、保存できません。キャンセルにも宜しいですか。',
    buttons: [
      { text: 'YES', actionValue: 1 },
      { text: 'NO', actionValue: 2 },
    ],
  };
  fashionCreate;
  createForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogCreateComponent>,
    private dialogNotification: DialogNotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fashionService: FashionService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.createForm = new FormGroup({
      product_qty: new FormControl('', [
        CustomValidator.required,
        CustomValidator.maxLength(10),
        CustomValidator.numberOnly
      ]),
      product_name: new FormControl('', [
        CustomValidator.required,
        CustomValidator.maxLength(32),

      ]),
      product_unit_price: new FormControl('', [
        CustomValidator.required,
        CustomValidator.numberOnly
      ]),
      product_description: new FormControl('', [
        CustomValidator.required,
        CustomValidator.maxLength(80),
      ]),
      product_type_fk: new FormControl('', [
        CustomValidator.required,
      ]),
      product_size_fk: new FormControl('', [
        CustomValidator.required,
      ]),
    });
  }
  handleSave(): void {
    this.fashionCreate = this.createForm.value;
    Object.assign(this.fashionCreate, { product_images: this.files });
    console.log(this.fashionCreate)
    this.fashionService.createFashion(this.fashionCreate).subscribe((res) => {
      this.fashionCreate = new FashionModel(res);
      this.dialogRef.close(this.fashionCreate);

    })
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
  }

}
