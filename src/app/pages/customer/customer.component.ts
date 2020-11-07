import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from 'src/app/core/services/api/customer-service/customer.service';
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
  placeholder = 'Nhập tên bạn muốn tìm kiếm'
  constructor(public dialog: MatDialog, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getData()
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
  getData(text?, currentPage?, sort?, type?): void {
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
    this.customerService.getListCustomer(dataGetListCustomer).subscribe((item) => {
      this.data = item.map(e => new CustomerModel(e))
      console.log(this.data)
    })
    this.keyword = text ? text : '';
    this.currentPage = currentPage ? currentPage : 1;
  }

}
