import { Component, Inject, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dataStatus } from '../mockData';

@Component({
  selector: 'app-dialog-info',
  templateUrl: './dialog-info.component.html',
  styleUrls: ['./dialog-info.component.scss']
})
export class DialogInfoComponent implements OnInit {

  hide = true;
  status = dataStatus;

  /**
   * Login form
   */
  editUserForm: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogInfoComponent>
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.editUserForm = new FormGroup({
      name: new FormControl(this.data.customer_fullname, [
      ]),
      birthday: new FormControl(this.data.customer_birthday, [
      ]),
      phone: new FormControl(this.data.customer_phone, [
      ]),
      gender: new FormControl(this.data.customer_gender, [
      ]),

      status: new FormControl(this.data.customer_status),
    });
  }
  handleEdit(): void {
    console.log(this.editUserForm.value);
  }
  handleCancel(): void {
    this.dialogRef.close();
  }


}
