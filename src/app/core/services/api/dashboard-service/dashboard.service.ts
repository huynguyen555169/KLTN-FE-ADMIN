import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpRequestModel, HttpRequestService } from '../../http-request-service/http-request-service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl = environment.baseUrl
  constructor(private http: HttpRequestService) { }

  getCountAll(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}report/count-all`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
  }

  getYearAll(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}report/revenue-yearly`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
  }

  getCustomer(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}report/customer-orderd`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
  }

  getTypeProduct(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}report/type-product-ordered`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
  }



}
