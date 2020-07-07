import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {} 
    
    
    getWeather(location){
      var key ='5667ceead4e85446d7d7a071571ff301';
      return this.http.get(
        'http://api.weatherstack.com/current?access_key='+key+'&query='+location
      );

    }
 
  }

