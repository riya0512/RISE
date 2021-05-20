import { Directive, ElementRef, Input ,HostListener} from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appError]'
})
export class ErrorDirective {

  @Input('appError') element:any;

  constructor(private el: ElementRef) {


  }

  @HostListener ('keyup') onKeyUp()
  {
    if(this.element.name==="username")
    {
      if(this.element.errors && (this.element.dirty || this.element.touched))
      {
        if(this.element.errors.required)
        {
          this.el.nativeElement.style.backgroundColor='red';
         }
         else if(this.element.errors.pattern)
         {
          this.el.nativeElement.style.backgroundColor='yellow';
         }
      }
      else
      {
        this.el.nativeElement.style.backgroundColor='green';
      }
    }


    else if(this.element.name==="password")
    {
      if(this.element.errors && (this.element.dirty || this.element.touched))
      {
        if(this.element.errors.required)
        {
          this.el.nativeElement.style.backgroundColor='red';
         }
         else if(this.element.errors.minlength)
         {
          this.el.nativeElement.style.backgroundColor='yellow';
         }
      }
      else
      {
        this.el.nativeElement.style.backgroundColor='green';
      }
    }



}
@HostListener ('paste') onPaste()
  {
    if(this.element.name==="username")
    {
      if(this.element.errors && (this.element.dirty || this.element.touched))
      {
        if(this.element.errors.required)
        {
          this.el.nativeElement.style.backgroundColor='red';
         }
         else if(this.element.errors.pattern)
         {
          this.el.nativeElement.style.backgroundColor='yellow';
         }
      }
      else
      {
        this.el.nativeElement.style.backgroundColor='green';
      }
    }

  }


}
