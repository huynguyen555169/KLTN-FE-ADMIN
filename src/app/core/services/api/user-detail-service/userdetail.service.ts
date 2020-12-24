import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpRequestModel, HttpRequestService } from '../../http-request-service/http-request-service';
@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
  user = {
    name: 'Nguyễn Văn Huy',
    avatar: 'https://scontent.fvca1-1.fna.fbcdn.net/v/t31.0-8/22770009_1985215661755218_3175239519521164119_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=7zrrFZTBSV4AX_v3Zqm&_nc_ht=scontent.fvca1-1.fna&oh=0d72ae90e13bd7fd9df542cefcaf1e69&oe=5FD83CD9',
    role: 'admin'
  }
  constructor(private http: HttpRequestService) { }

  baseUrl = environment.baseUrl;


  getUserAndPermission(data: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}/users`;
    const params = data.params;
    const body = data.body;
    const headers = data.headers;

    return this.http.get(apiUrl, params, body, headers);
  }
  updateUserAndPermission(data: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}/users`;
    const params = data.params;
    const body = data.body;
    const headers = data.headers;

    return this.http.put(apiUrl, body, params, headers);
  }
  deleteUser(data: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}/users`;
    const params = data.params;
    const body = data.body;
    const headers = data.headers;

    return this.http.delete(apiUrl, params, body, headers);
  }

  userPermission(data: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}/users/owner`;
    const params = data.params;
    const body = data.body;
    const headers = data.headers;

    return this.http.get(apiUrl, params, body, headers);
  }

}
