import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  getMeteoData(city) {
   return  this.http.get("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=8690f7c511a1553026d1bd72cb190b4b")

  }
}
