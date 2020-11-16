import { Injectable } from '@angular/core';
import { HttpRequestModel, HttpRequestService } from '../../http-request-service/http-request-service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url = 'http://api.openweathermap.org/data/2.5/weather?id=1580578&appid=0947edb1644317ad79716d3abed2b74a'
  constructor(private http: HttpRequestService) { }

  getWeather(parram: HttpRequestModel) {
    const apiUrl = this.url;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
  }
}
