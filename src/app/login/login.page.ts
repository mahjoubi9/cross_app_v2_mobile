import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {logins} from "../models/logins";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Login:logins=new logins();
  constructor(private authentication:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }

  onLogin() {
let res =this.authentication.login(this.Login.username,this.Login.password);
    console.log(this.Login);
    if(res==true){
this.router.navigateByUrl("/menu/home");
    }else{
      this.router.navigateByUrl("login");
    }
  }

}
