import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  today: number = Date.now();

  transform(value:string,lname:string)
  {
    return 'Name :' +value+ ' ' +lname;
  }

}
