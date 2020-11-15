import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  constructor(public dialog: MatDialog, private router: Router) { }

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
  handleView(e) {
    this.router.navigate(['/detail-order'])
  }

}
