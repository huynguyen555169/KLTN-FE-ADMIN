import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { data, sizeData, typeData } from 'src/app/pages/fashion/mockData';
import { HttpRequestModel } from '../../http-request-service/http-request-service';

@Injectable({
  providedIn: 'root'
})
export class FashionService {
  baseUrl = "http://192.168.50.42:8080/";
  constructor() { }
  getListFashion(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}course/popularCourse`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    // return this.http.get(apiUrl, params, body, headers);
    return of(data);
  }
  createFashion(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}course/popularCourse`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    // return this.http.get(apiUrl, params, body, headers);
    return of(parram);
  }
  updateFashion(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}course/popularCourse`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    // return this.http.get(apiUrl, params, body, headers);
    return of(parram);
  }
  getListType(): Observable<any> {
    return of(typeData)
  }
  getListSize(): Observable<any> {
    return of(sizeData)
  }
}
