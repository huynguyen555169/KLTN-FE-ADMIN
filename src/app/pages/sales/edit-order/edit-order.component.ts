import { HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CSpinnerService } from 'src/app/common-module/c-spinner/c-spinner.service';
import { SalesService } from 'src/app/core/services/api/sales-service/sales.service';
import { DialogNotificationService } from 'src/app/core/services/app-services/dialog-notification-service/dialog-notification.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request-service';
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
      value: 'Chờ xác nhận'
    },
    {
      key: 2,
      value: 'Chờ lấy hàng'
    },
    {
      key: 3,
      value: 'Đang giao'
    },
    {
      key: 4,
      value: 'Đã giao'
    },
    {
      key: 5,
      value: 'Đã huỷ'
    }
  ]

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EditOrderComponent>, private dialogNotification: DialogNotificationService, private saleService: SalesService, private sppner: CSpinnerService) { }

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
    this.sppner.show()
    const token = JSON.parse(localStorage.getItem('currentUser')).accessToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    const getItem = new HttpRequestModel();
    getItem.body = { id: this.data.order_id, status: this.editForm.value.order_status }
    this.saleService.editOrderId(getItem, httpOptions).subscribe((res) => {
      this.sppner.hide()
      this.dialogRef.close();
    })

  }
  handleCancel() {
    this.dialogRef.close();
  }
}
