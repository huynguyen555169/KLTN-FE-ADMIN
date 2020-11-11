import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { data, dataConfig } from './mockData';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  data = data;
  clearSort = false;
  dataConfig = dataConfig
  placeholder = 'Nhập tên bạn muốn tìm kiếm'
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  handleEdit(e) {
    this.dialog.open(EditOrderComponent, {
      data: e
    });
  }
  handleValueSearch(e) {

  }
  handlePageChange(e) {

  }

}
