import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { data } from 'src/app/pages/customer/mockData';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  getListCustomer(parram: any): Observable<any> {
    return of(data);
  }
}
