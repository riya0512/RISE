import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username:string="";
password:string="";

countries = ["India","U.K","U.S.A"];

  cities = {
    "India":["Hyderabad","Pune","Mumbai"],
    "UK":["London","Manchester","Liverpool"],
    "USA":["Los Angeles","New York","Chicago"]
  }

  countrySelected="India";
  citySelected="";

  constructor() {
    this.username="";

  }

  ngOnInit(): void {

  }

  LoginUser(f:any){
    if(this.username=="Riya" && this.password.length<8)
    {
      alert('LOGIN SUCCESSFULL.......');
    }
    else
    {
      alert('INVALID USERNAME AND PASSWORD.....');
    }
  }





}
