import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardAddProductComponent } from 'src/app/common-module/card-package/card-add-product/card-add-product.component';
import { data } from './mockData';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent implements OnInit {
  data = data;
  constructor(public dialog1: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog1.open(CardAddProductComponent);
  }
  handleItemDelete(e) {
    console.log(e)
  }

}
