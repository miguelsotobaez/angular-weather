import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  myDate = new Date();
  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  public getWeather(city) {
    
    let url = 'https://api.worldweatheronline.com/premium/v1/weather.ashx';
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams()
    .set("format","json")
    .set("key", "1b58b79fb43544bcbe4151206200805")
    .set("q", city)
    .set("showlocaltime", "yes")
    .set("date", this.datePipe.transform(this.myDate, 'yyyy-MM-dd'));

    return this.http.get(url, { headers: headers, params: params });
  }

}
