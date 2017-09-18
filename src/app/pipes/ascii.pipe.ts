import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ascii'
})
export class AsciiPipe implements PipeTransform {

  transform(value: string, args?: number): any {
    return value.replace(value.charAt(args), `${value.charCodeAt(args)}`);
  }
}
