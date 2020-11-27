import { Injectable } from '@angular/core';
import { HttpRequestModel, HttpRequestService } from '../../http-request-service/http-request-service';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  baseUrl = 'http://192.168.0.108:8080/';
  constructor(private http: HttpRequestService) { }
  getListOrder(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}order/get-all`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
    // return of(data);
  }
}
