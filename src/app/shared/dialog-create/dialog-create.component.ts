import { HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CSpinnerService } from 'src/app/common-module/c-spinner/c-spinner.service';
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
    title: 'Thông báo',
    message:
      'Đã có thông tin thay đổi, bạn thực sự muốn huỷ?',
    buttons: [
      { text: 'YES', actionValue: 1 },
      { text: 'NO', actionValue: 2 },
    ],
  };
  listSize;
  createForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogCreateComponent>,
    private dialogNotification: DialogNotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fashionService: FashionService,
    private spinner: CSpinnerService
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
        CustomValidator.maxLength(500),

      ]),
      product_unit_price: new FormControl('', [
        CustomValidator.required,
        CustomValidator.numberOnly
      ]),
      product_description: new FormControl('', [
        CustomValidator.required,
        CustomValidator.maxLength(300),
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
    this.spinner.show()
    let fashionCreate = this.createForm.value;
    Object.assign(fashionCreate, { product_images: this.files });
    const dataFashionCreate = new HttpRequestModel();
    dataFashionCreate.body = { fashionCreate }
    // dataFashionCreate.headers = new HttpHeaders({ 'contentType': 'multipart/form-data' })
    this.fashionService.createFashion(dataFashionCreate).subscribe((res) => {
      this.spinner.hide()
      // fashionCreate = new FashionModel(res);
      fashionCreate = res;
      // this.dialogRef.close(fashionCreate.body.fashionCreate);
      this.dialogRef.close(fashionCreate);

    })
  }
  handleSelect(e): void {
    const dataFashionEdit = new HttpRequestModel();
    dataFashionEdit.params = { product_type: e.value }
    this.fashionService.getListSize(dataFashionEdit).subscribe((res) => {
      this.spinner.hide()
      this.listSize = res

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
