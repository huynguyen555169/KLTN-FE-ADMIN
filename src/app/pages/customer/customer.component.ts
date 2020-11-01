import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from './dialog-info/dialog-info.component';
import { data } from './mockData';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  data = data;
  placeholder = 'Nhập tên bạn muốn tìm kiếm'
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  handleEdit(e) {
    this.dialog.open(DialogInfoComponent, {
      data: e
    });
  }
  handleValueSearch(e) {

  }
  handlePageChange(e) {

  }

}
