import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageLink'
})
export class PageLinkPipe implements PipeTransform {

  transform(value: string, format: 'display' | 'file'): any {
    if(format === 'display')
      while(value.indexOf('_') >= 0)
        value = value.replace('_', ' ');
    else
      while(value.indexOf(' ') >= 0)
        value = value.replace(' ', '_');

    return value;

  }

}
