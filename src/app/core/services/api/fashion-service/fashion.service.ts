import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { data, sizeData, typeData } from 'src/app/pages/fashion/mockData';
import { HttpRequestModel, HttpRequestService } from '../../http-request-service/http-request-service';

@Injectable({
  providedIn: 'root'
})
export class FashionService {
  baseUrl = 'https://kltn-be.herokuapp.com/';
  constructor(private http: HttpRequestService) { }
  getListFashion(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}product/get-all`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
    // return of(data);
  }
  createFashion(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}product/create`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.post(apiUrl, params, body, headers);
    // return of(parram);
  }
  updateFashion(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}product/update-product`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.put(apiUrl, params, body, headers);
    // return of(parram);
  }
  getListType(parram: HttpRequestModel): Observable<any> {
    const apiUrl = `${this.baseUrl}product-type/get-all`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
    // return of(typeData)
  }
  getListSize(parram: HttpRequestModel): Observable<any> {
    const apiUrl = `${this.baseUrl}product-size/get-all`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
    // return of(sizeData)
  }
}
