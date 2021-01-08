import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpRequestModel, HttpRequestService } from '../../http-request-service/http-request-service';

@Injectable({
  providedIn: 'root'
})
export class FashionService {
  baseUrl = 'https://kltn-be.herokuapp.com/';
  // baseUrl = 'http://192.168.0.108:8080/';
  // baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpRequestService) { }
  getListFashion(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}product/get-all`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
  }
  createFashion(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}product/create`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.post(apiUrl, params, body, headers);
  }
  updateFashion(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}product/update-product`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.put(apiUrl, params, body, headers);
  }
  getListType(parram: HttpRequestModel): Observable<any> {
    const apiUrl = `${this.baseUrl}product-type/get-all`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
  }
  getListSize(parram: HttpRequestModel): Observable<any> {
    const apiUrl = `${this.baseUrl}product-size/get-by-product-type`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
  }
}
