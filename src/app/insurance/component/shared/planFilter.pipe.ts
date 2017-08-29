import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'planFilter',
  pure: false
})
export class PlanFilterPipe implements PipeTransform {
  transform(items: any[], filter: string): any {
    // filter items array, items which match and return true will be kept, false will be filtered out
    if(filter === 'all'){
      return items;
    } else {
      return items.filter(item => item.type.indexOf(filter) !== -1);
    }
  }
}

export interface Plan {
    icon : string;
    type : string;
    title : string;
    para : string;
}
