import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor( private http: HttpClient) { }

  getWeather(location){
    return this.http.get(
        'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '%2CUK?unitGroup=metric&key=R4KM5FQJXHNSMJG2NYYTQW3XJ'
    );
}
}
