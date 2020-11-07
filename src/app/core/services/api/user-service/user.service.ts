import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { data, dataRole } from 'src/app/pages/user-management/mockData';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getListUser(parram: any): Observable<any> {
    return of(data);
  }
  createUser(user: any): Observable<any> {
    return of(user);
  }
  updateUser(user: any): Observable<any> {
    return of(user);
  }
  getRole(): Observable<any> {
    return of(dataRole);
  }

}
