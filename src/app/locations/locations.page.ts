import { Component, OnInit } from '@angular/core';
import {LocationsService} from "../services/locations.service";
import {Place} from "../models/place.model";
import {StorageService} from "../services/storage.service";
import { Router } from '@angular/router';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})

export class LocationsPage implements OnInit {
  public locations: Array<Place>;
  go: any = "ddddddd";

  constructor(private alertCtrl: AlertController,private locationService: LocationsService,private storageService: StorageService,private router: Router) {
    this.locationService.getLocations().then(data => {
      this.locations=data;
      this.go="fffffff";
      console.log(data);
    });
  }

  ngOnInit() {

  }
  //onViewWillEnter is called every time the view is navigated
  //ngOninit is called after Angular has initialized all data-bound properties of a directive
  //comment ngOnInit mais il ai  infinement exect mais ngOninit
   ionViewWillEnter(){
     this.locationService.getLocations().then(data => {
       this.locations=data;
       console.log(data);
     });
   }

// Create and expose methods that users of this service can
// call, for example:


  async gofonction() {
    console.log(this.go);
    await this.storageService.set('go', this.go);
  }
  async getallStorage() {
    console.log(await this.storageService.getAll());
  }
  async getOneStorage() {
    console.log(await this.storageService.get("go"));
  }

  onNewLocation() {
this.router.navigateByUrl("/menu/new-location");
  }

  async onRemove(p) {
    let alert =await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'etes vous sure ??',
      buttons: [
        {
          text: 'OUI',
          handler: () => {
            this.removelocation(p);
          }
        },
        {
          text: 'NON',
          handler: () => {

          }
        }
      ]
    });
    await alert.present();  }


  private removelocation(p) {
    let index = this.locations.indexOf(p);
    this.locations.splice(index,1);
    this.locationService.updateLocation(this.locations);
  }

  onDetails(p:Place) {
    this.storageService.set("locationDetails", p);//JSON.stringify(p)
    console.log(p);
    this.router.navigateByUrl("/menu/location-details");
  }
}
