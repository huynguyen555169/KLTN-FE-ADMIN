import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from 'src/app/core/services/api/customer-service/customer.service';
import { SpinnerService } from 'src/app/core/services/app-services/spinner-service/spinner.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request-service';
import { CustomerModel } from './customer.model';
import { DialogInfoComponent } from './dialog-info/dialog-info.component';
import { dataConfig } from './mockData';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  clearSort = false;
  data;
  keyword: string;
  sort;
  currentPage = 1;
  dataConfig = dataConfig;
  totalPage: any;
  placeholder = 'Nhập tên bạn muốn tìm kiếm'
  token;
  httpOptions;

  constructor(public dialog: MatDialog, private customerService: CustomerService, private spinner: SpinnerService) { }

  ngOnInit(): void {
    this.token = JSON.parse(localStorage.getItem('currentUser')).accessToken;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.token
      })
    };
    this.getData()

  }

  handleEdit(e) {
    const dialogRef = this.dialog.open(DialogInfoComponent, {
      data: e
    });
    dialogRef.afterClosed().subscribe(result => {
      const index = this.data.indexOf(result)
      this.data = [...this.data]
      if (result) {
        this.data.splice(index, 1);
        this.data.unshift(result);
      }
    });
  }
  handleValueSearch(e) {
    const dataGetListCustomer = new HttpRequestModel();
    dataGetListCustomer.params = { search: e };
    this.customerService.getListCustomer(dataGetListCustomer, this.httpOptions).subscribe((item) => {
      this.data = item.data
    }, (error) => {
    })
    // this.getData(e);
  }
  handlePageChange(e) {
    const dataGetListCustomer = new HttpRequestModel();
    dataGetListCustomer.params = { currentPage: e };
    this.customerService.getListCustomer(dataGetListCustomer, this.httpOptions).subscribe((item) => {
      this.data = item
    }, (error) => {
    })
    // this.getData(e)

  }
  getData(text?, currentPage?, sort?, type?): void {
    this.spinner.show()

    const dataGetListCustomer = new HttpRequestModel();
    dataGetListCustomer.params = {};
    if (currentPage) {
      Object.assign(dataGetListCustomer.params, { page: currentPage });
    }
    if (text) {
      Object.assign(dataGetListCustomer.params, { keyword: text });
    }
    if (sort && sort.active && sort.direction) {
      Object.assign(dataGetListCustomer.params, {
        sort: sort.active,
        sortType: sort.direction,
      });
      this.sort = sort;
      if (type) {
        Object.assign(dataGetListCustomer.params, { type: type });
      }
    }

    this.customerService.getListCustomer(dataGetListCustomer, this.httpOptions).subscribe((item) => {
      this.totalPage = item.countPage
      this.data = item.data
    })
    this.keyword = text ? text : '';
    this.currentPage = currentPage ? currentPage : 1;
  }

}
