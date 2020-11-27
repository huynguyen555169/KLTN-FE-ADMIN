import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { dataRole } from 'src/app/pages/user-management/mockData';
import { HttpRequestModel, HttpRequestService } from '../../http-request-service/http-request-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://192.168.0.108:8080/';
  constructor(private http: HttpRequestService) { }
  getListUser(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}employee/get-all`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
    // return of(data);
  }
  createUser(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}employee/create`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.post(apiUrl, params, body, headers);
    // return of(user);
  }
  updateUser(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}employee/update-profile`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.put(apiUrl, params, body, headers);
    // return of(user);
  }
  getRole(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}role/get-all`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
    // return of(dataRole);
  }

}
