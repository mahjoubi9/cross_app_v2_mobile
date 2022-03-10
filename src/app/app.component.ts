import { Component } from '@angular/core';
import {Platform} from "@ionic/angular";
import {StatusBar} from "@ionic-native/status-bar/ngx";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";
import {Router} from "@angular/router";
import {AuthenticationService} from "./services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private authentication:AuthenticationService,private router: Router, private platform: Platform,private splashScreen: SplashScreen,private statusBar: StatusBar) {
    this.initializeApp();
  }

  private initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.login();
    });
  }
  private login() {
    let authenticated=this.authentication.loadTocken();
    if (authenticated==true){
      this.router.navigateByUrl("/menu/home");
    }else
    this.router.navigateByUrl("/login");
  }
}
