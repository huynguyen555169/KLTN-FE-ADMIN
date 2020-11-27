import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { data } from 'src/app/pages/customer/mockData';
import { HttpRequestService } from '../../http-request-service/http-request-service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = 'http://192.168.0.108:8080/';
  constructor(private http: HttpRequestService) { }
  getListCustomer(parram: any): Observable<any> {
    const apiUrl = `${this.baseUrl}customer/find-all`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
    // return of(data);
  }
  updateUser(parram: any): Observable<any> {
    return of(parram);
  }
}
