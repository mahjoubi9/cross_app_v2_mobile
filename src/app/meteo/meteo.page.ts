import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MeteoService} from "../services/meteo.service";

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {

  public city;
  private dataMeteo;
  constructor(private meteosService:MeteoService) { }

  ngOnInit() {
  }

  onLoadMeteo() {
this.meteosService.getMeteoData(this.city)
  .subscribe(data => {
    this.dataMeteo=data;
    console.log(data);
  }),error=>{
  console.log(error);
}
  }
}
