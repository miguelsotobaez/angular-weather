import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

export interface Weather {
  temp: String;
  time: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherService]
})

export class AppComponent {
  title = 'angular-weather';
  dataSource: any;
  temp: any;
  time: any;
  constructor(private weatherService: WeatherService){}

  ngOnInit() {
    this.updateWeather("santiago");
  }

  updateWeather(city) {
    this.weatherService.getWeather(city).subscribe((data)=>{
      this.dataSource = data;
      this.temp = this.dataSource.data.current_condition[0].temp_C;
      this.time = this.dataSource.data.time_zone[0].localtime;
    });
  } 
  

}
