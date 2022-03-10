import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public contact = {
    name:'Mahjoubi Redwane',
    email:'Radwan12mahjoubi@gmail.com',
    logo:'./../assets/images/Abdelmalek.png',
    location:'./../assets/images/pp.jpg',
    tel:"0651253400"
  };
  constructor() {}

}
