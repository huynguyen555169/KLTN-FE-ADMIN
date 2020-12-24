import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesService } from 'src/app/core/services/api/sales-service/sales.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request-service';
import { dataList, dataPayment, dataProduct, dataProductTotal, dataStatus, header1s, header2s, header3s, header4s, headers } from './mockData';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  data;

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
  constructor(private router: Router, private route: ActivatedRoute, private saleService: SalesService) { }

  ngOnInit(): void {
    const token = JSON.parse(localStorage.getItem('currentUser')).accessToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    this.route.queryParams.subscribe((parrams) => {
      console.log(parrams)
      const getItem = new HttpRequestModel();
      getItem.params = { id: parrams.id }
      this.saleService.getOrderId(getItem, httpOptions).subscribe((res) => {
        console.log(res)
        this.data = res.data[0]

      })
    })
  }
  goBackOrder() {
    this.router.navigate(['/sale'])
  }

}
