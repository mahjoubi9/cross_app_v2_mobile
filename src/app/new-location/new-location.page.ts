import { Component, OnInit } from '@angular/core';
import {location} from "../models/location";
import {Geolocation} from "@ionic-native/geolocation/ngx";
import {LocationsService} from "../services/locations.service";
import {NavController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.page.html',
  styleUrls: ['./new-location.page.scss'],
})
export class NewLocationPage implements OnInit {
public location:location = new location();
  constructor(private router:Router,private navController:NavController,private geolocation:Geolocation,private locationService:LocationsService) { }

  ngOnInit() {
  }

  onAddLocation() {
    this.location.timestamp = new Date().getTime();
    this.location.photo=[];
    this.geolocation.getCurrentPosition().then((resp) => {
      this.location.coordinates={
        longitude: resp.coords.longitude,
          latitude: resp.coords.latitude
      }
      this.locationService.addLocation(this.location);
      console.log(this.location);
      this.router.navigateByUrl("/menu/locations");
     // this.navController.back();
    }).catch((error) => {
      console.log('Error getting location', error);
    });


console.log(this.location);
  }
}
