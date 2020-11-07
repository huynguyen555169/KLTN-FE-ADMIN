import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FashionService } from 'src/app/core/services/api/fashion-service/fashion.service';
import { DialogNotificationService } from 'src/app/core/services/app-services/dialog-notification-service/dialog-notification.service';
import { CustomValidator } from 'src/app/core/validate-service/custom-validator';
import { FashionModel } from 'src/app/pages/fashion/fashion.model';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss']
})
export class CardEditComponent implements OnInit {
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
  fashionEdit;
  createForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<CardEditComponent>,
    private dialogNotification: DialogNotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fashionService: FashionService) {
  }

  ngOnInit(): void {
    console.log(this.data)
    this.initForm()
  }
  initForm(): void {
    this.createForm = new FormGroup({
      product_qty: new FormControl(this.data.data.product_qty, [
        CustomValidator.required,
        CustomValidator.maxLength(10),
        CustomValidator.numberOnly
      ]),
      product_name: new FormControl(this.data.data.product_name, [
        CustomValidator.required,
        CustomValidator.maxLength(32),

      ]),
      product_unit_price: new FormControl(this.data.data.product_unit_price, [
        CustomValidator.required,
        CustomValidator.numberOnly
      ]),
      product_description: new FormControl(this.data.data.product_description, [
        CustomValidator.required,
        CustomValidator.maxLength(80),
      ]),
      product_type_fk: new FormControl(this.data.data.product_type_fk, [
        CustomValidator.required,
      ]),
      product_size_fk: new FormControl(this.data.data.product_size_fk, [
        CustomValidator.required,
      ]),
      product_status: new FormControl(this.data.data.product_status),
    });
  }
  handleSave(): void {
    this.fashionEdit = this.createForm.value;
    Object.assign(this.fashionEdit, { product_images: this.data.data.product_images });
    console.log(this.fashionEdit)
    this.fashionService.updateFashion(this.fashionEdit).subscribe((res) => {
      this.fashionEdit = new FashionModel(res);
      this.dialogRef.close(this.fashionEdit);
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
