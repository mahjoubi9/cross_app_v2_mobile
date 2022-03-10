import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import {Router} from "@angular/router";
import { Camera} from '@ionic-native/camera/ngx';
import { CameraOptions} from '@ionic-native/camera/ngx';
import {AlertController} from "@ionic/angular";
import {LocationsService} from "../services/locations.service";
@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
})
export class LocationDetailsPage implements OnInit {
  title = 'My first AGM project';
  lat :number=0;
  lng :number=0;

  public currentlocation;
  constructor(private locationService: LocationsService,private storageService:StorageService,private router:Router,private camera: Camera,private alertCtrl: AlertController) { }

  ngOnInit() {
    this.currentlocation=this.storageService.get("locationDetails").then(
      resp => {
      //  JSON.parse(resp.value)
        this.currentlocation=resp;
        this.lng=resp.coordinates.longitude;
        this.lat=resp.coordinates.latitude;
        console.log(resp.coordinates.latitude);
        console.log(resp.coordinates.longitude);
        console.log(this.currentlocation);
      })
      .catch(err => {
        console.log(err)
        return null;
      });
  }

  onNewLocation() {
    this.router.navigateByUrl("/menu/new-location");
  }

  async onTikePicture() {
    const options1: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: true,
      /*      targetWidth:320,
            targetHeight:240*/
    };
    const options2: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      /*      targetWidth:320,
            targetHeight:240*/
    };

    let alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Source ??',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            this.camera.getPicture(options1).then((data) => {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64 (DATA_URL):
              let base64Image = 'data:image/jpeg;base64,' + data;
             // this.currentlocation.photos.push(base64Image);
              this.locationService.addPhoto(base64Image,this.currentlocation.timestamp);
            }, (err) => {
              // Handle error
            });
          }
        },
        {
          text: 'Library',
          handler: () => {
            this.camera.getPicture(options2).then((data) => {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64 (DATA_URL):
              let base64Image = 'data:image/jpeg;base64,' + data;
              //this.currentlocation.photos.push(base64Image);
              this.locationService.addPhoto(base64Image,this.currentlocation.timestamp);
            }, (err) => {
              // Handle error
            });
          }
        }
      ]
    });
    await alert.present();
  }
}
