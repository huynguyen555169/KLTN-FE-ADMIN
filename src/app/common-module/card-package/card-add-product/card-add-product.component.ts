import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-card-add-product',
  templateUrl: './card-add-product.component.html',
  styleUrls: ['./card-add-product.component.scss']
})
export class CardAddProductComponent implements OnInit {
  product_image = [];
  product_name = '';
  product_price = '';
  product_qty = 1;
  constructor(private dialogRef: MatDialogRef<CardAddProductComponent>) { }

  ngOnInit(): void {
  }
  handleCancel() {
    this.dialogRef.close()
  }
  handleClick(e) {
    this.product_image.push(...e);
  }
  handleSave() {
    console.log(this.product_image)
    console.log(this.product_name)
    console.log(this.product_price)
    console.log(this.product_qty)
  }

}
