import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-card-add-product',
  templateUrl: './card-add-product.component.html',
  styleUrls: ['./card-add-product.component.scss']
})
export class CardAddProductComponent implements OnInit {
  product_name = '';
  product_price = '';
  product_qty = 1;
  constructor() { }

  ngOnInit(): void {
  }
  handleCancel() {

  }
  handleSave() {
    console.log(this.product_name)
  }
}
