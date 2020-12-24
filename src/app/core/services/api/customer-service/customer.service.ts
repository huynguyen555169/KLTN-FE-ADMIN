import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { data } from 'src/app/pages/customer/mockData';
import { HttpRequestModel, HttpRequestService } from '../../http-request-service/http-request-service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = 'https://kltn-be.herokuapp.com/';
  // baseUrl = 'http://192.168.0.108:8080/';
  // baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpRequestService) { }
  getListCustomer(parram: any, token: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}customer/find-all`;
    const params = parram.params;
    const body = parram.body;
    const headers = token.headers;
    return this.http.get(apiUrl, params, body, headers);
    // return of(data);
  }
  updateUser(parram: any): Observable<any> {
    return of(parram);
  }
}
