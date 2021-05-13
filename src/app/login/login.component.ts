import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username:string="";
password:string="";

  constructor() {

  }

  ngOnInit(): void {
  }

  LoginUser(){
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
