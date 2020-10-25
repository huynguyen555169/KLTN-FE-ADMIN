import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss']
})
export class CardEditComponent implements OnInit {
  editUserForm: FormGroup;
  statusArr = [
    { value: true, viewValue: 'Enable' },
    { value: false, viewValue: 'Disable' },
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CardEditComponent>) {
  }

  ngOnInit(): void {
    this.initForm()
  }
  initForm(): void {
    this.editUserForm = new FormGroup({
      name: new FormControl(this.data.product_name),
      price: new FormControl(this.data.product_unit_price),
      total: new FormControl(this.data.product_qty),
      status: new FormControl(this.data.product_status)
    });
  }

  handleEdit() {
    console.log(this.editUserForm.value)
  }
  handleCancel() {
    this.dialogRef.close();
  }

}
