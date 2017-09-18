import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobileFilter'
  // pure: false
})
export class MobileFilterPipe implements PipeTransform {

  transform(value: string[], filter?: string): any {
    if (filter) {
      let filtered = [];
      value.forEach(mob => {
        if (mob.charAt(0) === filter) {
          filtered.push(mob);
        }
      });
      return filtered;
    }
    return value;
  }
}
