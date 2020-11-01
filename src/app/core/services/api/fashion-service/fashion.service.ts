import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { data, sizeData, typeData } from 'src/app/pages/fashion/mockData';

@Injectable({
  providedIn: 'root'
})
export class FashionService {

  constructor() { }
  getListFashion(parram: any): Observable<any> {
    return of(data);
  }
  createFashion(user: any): Observable<any> {
    return of(user);
  }
  updateFashion(user: any): Observable<any> {
    return of(user);
  }
  getListType(): Observable<any> {
    return of(typeData)
  }
  getListSize(): Observable<any> {
    return of(sizeData)
  }
}
