import { Injectable } from '@angular/core';
import { HttpRequestModel, HttpRequestService } from '../../http-request-service/http-request-service';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  baseUrl = 'https://kltn-be.herokuapp.com/';
  // baseUrl = 'http://192.168.0.108:8080/';
  // baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpRequestService) { }
  getListOrder(parram: HttpRequestModel, token: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}order/get-all`;
    const params = parram.params;
    const body = parram.body;
    const headers = token.headers;
    return this.http.get(apiUrl, params, body, headers);
  }
  getOrderId(parram: HttpRequestModel, token: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}order/get-by-id`;
    const params = parram.params;
    const body = parram.body;
    const headers = token.headers;
    return this.http.get(apiUrl, params, body, headers);
  }

  editOrderId(parram: HttpRequestModel, token: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}order/change-order-status`;
    const params = parram.params;
    const body = parram.body;
    const headers = token.headers;
    return this.http.post(apiUrl, params, body, headers);
  }
}
