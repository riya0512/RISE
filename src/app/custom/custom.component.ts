import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

data:any={'fname':"",
          'lname':""};

@Output() parentEvent=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
    this.parentEvent.emit(this.data);

    alert("This is Child"+JSON.stringify(this.data));
  }
}
