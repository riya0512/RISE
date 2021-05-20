import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  @Input() item: any;

@Output() itemClicked=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
    this.itemClicked.emit(this.item.fname+ ' ' +this.item.lname);
  }
}
