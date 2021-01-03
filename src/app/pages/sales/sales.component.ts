import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SalesService } from 'src/app/core/services/api/sales-service/sales.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request-service';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { data, dataConfig } from './mockData';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  data: any;
  clearSort = false;
  dataConfig = dataConfig
  placeholder = 'Nhập tên bạn muốn tìm kiếm'
  keyword: string;
  currentPage = 1;
  sort;
  totalPage: any;
  constructor(public dialog: MatDialog, private router: Router, private saleService: SalesService) { }

  ngOnInit(): void {
    this.getData()
  }
  handleEdit(e) {
    const dialogRef = this.dialog.open(EditOrderComponent, {
      data: e
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getData()
    });
  }
  handleValueSearch(e) {

  }
  handlePageChange(e) {

  }
  handleView(e) {
    this.router.navigate(['/detail-order'], { queryParams: { id: e.order_id } })
  }
  getData(text?, currentPage?, sort?): void {
    const token = JSON.parse(localStorage.getItem('currentUser')).accessToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };

    this.saleService.getListOrder(httpOptions).subscribe((res) => {
      this.totalPage = res.countPage;
      this.data = res.data;

    });
    this.keyword = text ? text : '';
    this.currentPage = currentPage ? currentPage : 1;
  }

}
