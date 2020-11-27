import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FashionService } from 'src/app/core/services/api/fashion-service/fashion.service';
import { DialogNotificationService } from 'src/app/core/services/app-services/dialog-notification-service/dialog-notification.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request-service';
import { CustomValidator } from 'src/app/core/validate-service/custom-validator';
import { FashionModel } from 'src/app/pages/fashion/fashion.model';
import { CSpinnerService } from '../../c-spinner/c-spinner.service';

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
    title: 'Thông báo',
    message:
      'Bạn có muốn lưu',
    buttons: [
      { text: 'YES', actionValue: 1 },
      { text: 'NO', actionValue: 2 },
    ],
  };
  createForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<CardEditComponent>,
    private dialogNotification: DialogNotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fashionService: FashionService, private spinner: CSpinnerService) {
  }

  ngOnInit(): void {
    this.initForm()
  }
  initForm(): void {
    this.createForm = new FormGroup({
      product_id: new FormControl(this.data.data.product_id),
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
    this.spinner.show()
    let fashionEdit = this.createForm.value;
    Object.assign(fashionEdit, { product_images: this.data.data.product_images });
    const dataFashionEdit = new HttpRequestModel();
    dataFashionEdit.body = { fashionEdit }
    this.fashionService.updateFashion(dataFashionEdit).subscribe((res) => {
      this.spinner.hide()
      fashionEdit = res;
      // this.dialogRef.close(fashionEdit.body.fashionEdit);
      this.dialogRef.close(fashionEdit);
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
