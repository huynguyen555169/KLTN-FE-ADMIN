import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dataList, dataPayment, dataProduct, dataProductTotal, dataStatus, header1s, header2s, header3s, header4s, headers } from './mockData';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  dataList = dataList;
  headers = headers

  header1s = header1s;
  dataList1 = dataStatus

  header2s = header2s;
  dataPayment = dataPayment

  header3s = header3s;
  dataProduct = dataProduct;

  header4s = header4s;
  dataProductTotal = dataProductTotal;

  codeOrder = 5;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goBackOrder() {
    this.router.navigate(['/sale'])
  }

}
