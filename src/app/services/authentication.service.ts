import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public authentication:boolean;
  public token:string;
  constructor() { }

  public login(username:string, password:string){
    if (username=='admin'&&password=='1234'){
      this.authentication=true;
      this.saveToken();
    }else {
      this.authentication=false;
    }
    return this.authentication;
  }

  private saveToken() {
   this.token ="azerty";
    localStorage.setItem("myToken",this.token);
  }
  public loadTocken(){
this.token=localStorage.getItem("myToken");
if (this.token=="azerty"){
this.authentication=true;
}else {
  this.authentication=false;
}
return this.authentication;
  }

  logout() {
    localStorage.removeItem("myToken");
  }
}
