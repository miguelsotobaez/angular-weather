import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  url = 'https://api.worldweatheronline.com/premium/v1/weather.ashx';

  public getWeather() {
    return this.http.get(`${this.url}`);
  }

}
