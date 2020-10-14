import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardAddProductComponent } from 'src/app/common-module/card-package/card-add-product/card-add-product.component';
import { data } from './mockData';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.scss']
})
export class FashionComponent implements OnInit {

  data = data;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  openDialog() {
    const dialogRef = this.dialog.open(CardAddProductComponent);
  }
}
