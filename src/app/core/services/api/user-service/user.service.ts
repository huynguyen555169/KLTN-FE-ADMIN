import { Injectable } from '@angular/core';
import { HttpRequestModel, HttpRequestService } from '../../http-request-service/http-request-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'https://kltn-be.herokuapp.com/';
  // baseUrl = 'http://192.168.0.108:8080/';
  // baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpRequestService) { }
  getListUser(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}employee/get-all`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
  }
  createUser(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}employee/create`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.post(apiUrl, params, body, headers);
  }
  updateUser(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}employee/update-profile`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.put(apiUrl, params, body, headers);
  }
  getRole(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}role/get-all`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
  }

}
