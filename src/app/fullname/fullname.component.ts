import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fullname',
  templateUrl: './fullname.component.html',
  styleUrls: ['./fullname.component.css']
})
export class FullnameComponent implements OnInit {

myDate=Date.now();

  fname:string="";
  lname:string="";
  datepipe:string="";



  constructor() { }

  ngOnInit(): void {
  }

  onClick(){



  }

}
