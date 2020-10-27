import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

@Injectable()
export class SearchPipe implements PipeTransform{
  
  transform(items: any, term: any):any {
    if(term == undefined){
      return items;
    }
    return items.filter( (item) => {
      return item.p_name.toLowerCase().includes(term.toLowerCase());
    });
  }

}