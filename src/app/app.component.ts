import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-page';

  items:any=[
          {
           'fname':"Riya",
           'lname':"Dighe",
          },
          {
           'fname':"Priyansh",
           'lname':"Dighe",
          }];
    fullname:string="";

  parentClicked(event:any)
  {
    this.fullname = event;
  }

}
