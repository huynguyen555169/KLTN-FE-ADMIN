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

  dataList =
    {
      name: 'Huy Nguyễn',
      phone: '0982240061',
      email: 'huynguyen@gmail.com',
      gender: 'Nam',
      address: 'Phú Yên'
    };
  headers = headers

  header1s = header1s;
  dataList1 = {
    status: 'Preparing',
    update: '0982240061',

  }

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
      const getItem = new HttpRequestModel();
      getItem.params = { id: parrams.id }
      this.saleService.getOrderId(getItem, httpOptions).subscribe((res) => {
        this.data = res.data[0]
        this.codeOrder = this.data.order_id
        this.dataList.name = this.data.order_customer_name
        this.dataList.phone = this.data.order_customer_phone
        this.dataList.address = this.data.order_customer_address

        this.dataList1.status = this.data.order_status.order_status_title_vn
        this.dataList1.update = this.data.createdAt

        this.dataPayment.id = this.data.order_is_cod
        this.dataPayment.date = this.data.createdAt
        this.dataPayment.amount = this.data.total
        if (this.data.order_is_cod === 1) {
          this.dataPayment.method = "Thanh toán khi nhận hàng"
        } else {
          this.dataPayment.method = "Thanh toán MoMo"
        }


      })
    })
  }
  goBackOrder() {
    this.router.navigate(['/sale'])
  }

}
