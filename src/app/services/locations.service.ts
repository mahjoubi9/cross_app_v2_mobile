
import {Injectable} from '@angular/core';
import {Place} from "../models/place.model";
import {Storage} from "@ionic/storage";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private locations: Array<Place> = [];

  constructor(private storageService: StorageService) {

    this.locations.push({title: "A"});
    this.locations.push({title: "B"});
    this.locations.push({title: "C"});
  }
  async ngOnInit() {

  }

  getLocations() {

    return this.storageService.get("locations").then(data => {
      this.locations = data != null ? data : [];
      return this.locations.slice();
    });
  }

  public addLocation(place: Place) {
    this.locations.push(place);
    this.storageService.set("locations", this.locations);
  }
  public saveLocation() {
    this.storageService.set("locations", this.locations);
  }
  public updateLocation(places: Array<Place>) {
    this.locations=places;
    this.saveLocation();
  }
/*  public addImage(image: string,timestamp:number){
    for(let i=0;i<this.locations.length;i++){
      if (this.locations[i].timestamp===timestamp){
        this.locations[i].timestamp.photos.push(image);
      }
    }
  }*/
 public removelocation(p) {
   let index = this.locations.indexOf(p);
this.locations.splice(index,1);
this.saveLocation();
  }


  addPhoto(base64Image: string, timestamp) {
    for (let i = 0; i < this.locations.length; i++) {
      if (this.locations[i].timestamp===timestamp){
        this.locations[i].photo.push(base64Image);
        this.updateLocation(this.locations);
        break;
      }
    }
  }
}


