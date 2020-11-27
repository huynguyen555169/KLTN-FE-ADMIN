import { Injectable } from '@angular/core';
import { HttpRequestModel, HttpRequestService } from '../../http-request-service/http-request-service';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  baseUrl = 'https://kltn-be.herokuapp.com/';
  constructor(private http: HttpRequestService) { }

  getListStaff(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}product/get-all`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
    // return of(data);
  }
}
