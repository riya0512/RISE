import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-page';

  parentEvent(event:any)
  {
    alert("This Is Parent "+JSON.stringify(event));

    event.fullName = event.fname + ' ' + event.lname;
  }

}
