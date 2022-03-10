import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public menus=[
    {title: "Home",url:"/menu/home",icon:"share"},
    {title: "Meteo",url:"/menu/meteo",icon:"snow"},
    {title: "Gallery",url:"/menu/gallery",icon:"school"},
    {title: "Locations",url:"/menu/locations",icon:"sync"},
    {title: "logout",url:"/logout",icon:"log-out"},
  ]
  constructor(private router :Router,private authenticated:AuthenticationService,private menu: MenuController) { }

  ngOnInit() {

    }

  /*openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }*/
  onMenuItem(m) {
    if (m.url=="/logout"){
      this.authenticated.logout();
      this.router.navigateByUrl("login");
    }else{
      this.router.navigateByUrl(m.url);
    }

  }
}


