import { Injectable } from '@angular/core';
import { HttpRequestModel, HttpRequestService } from '../../http-request-service/http-request-service';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  baseUrl = 'https://kltn-be.herokuapp.com/';
  // baseUrl = 'http://192.168.0.108:8080/';
  // baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpRequestService) { }

  getListStaff(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}product/get-all`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
  }
}
